import * as request from 'request';
import * as cheerio from 'cheerio';
import * as chalk from 'chalk';
import * as _ from 'lodash';

const validUrl = require('valid-url');

import { formatPersonName, formatEmbedURL } from './helpers';

class CSPANVideos {
  CSPAN_BASE_URL: string = "https://www.c-span.org/person/?";
  CSPAN_BAD_URL: string = "https://www.c-span.org/search/?searchtype=People&query=";
  

  fetchVideoData(personName: string) {
    const name = personName;

    // if "name" is an error;
    if (typeof name !== "string") {
      console.error(chalk.bgRed("rejecting because name isn't a string"), name)
      return;
    }

    return this._makeRequest(name)
      .then(this._isBadURL)
      .then((data) => {
        return data
          ? this._makeSearchRequest(personName)
          : this._makeRequest(name)
      })
      .then((data) => {

        if ( data instanceof Error) {
          return Promise.reject(data);
        }
        /**
         * If this string is present, then we are on
         * the intended page.
         */
        return data.indexOf('Recent Appearances') !== -1
          ? this._parseRequestForData(data)
          : this._parseSearchPageForData(data)
      })
      .then((data) => {
        return typeof data === "string"
          ? this._makeRequest(name, null, data)
          : Promise.resolve(data);
      })
      .catch((err) => {
        console.warn(chalk.magenta("There was an error, catch", err))
        return err;
      })
      
  }

  _isBadURL(dom: string): Promise<boolean> {
    const $ = cheerio.load(dom);
    return Promise.resolve($('body').html().indexOf("Page Not Found") > -1)
  }

  /**
   * For when the url differs from the person's name
   * like Ted Cruz being "rcruz."
   */
  _makeSearchRequest(personName: string): any {
    if ( !personName ) {
      return Promise.reject("Name not provided");
    }

    return this._makeRequest(personName, true);
  }

  _makeRequest(personName: string, badURL?: boolean, newUrl?) {
    
    // Add try/catch?
    if ( !personName ) {
      return Promise.reject(new Error("No person name provided"));
    } 

    const name = !badURL
    ? formatPersonName(personName)
    : formatPersonName(personName, true)
    
    const base_url = newUrl 
    ? newUrl 
    : !badURL
      ? this.CSPAN_BASE_URL + name
      : this.CSPAN_BAD_URL + personName.replace(/\s/,"+");

    if (!name) {
      return Promise.reject(name)
    }

    return new Promise((resolve, reject) => {
      request(base_url , (err: Error, response: request.RequestResponse, body: string) => {
        if (err) {
          handleError(err);
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  }
  
  _parseSearchPageForData(dom: string) {
    const $ = cheerio.load(dom);
    let properURL = $('section.bios > ul > li.indiv_bio > a.thumb')
      .first()
      .attr('href');

    if ( !properURL ) {
      return new Error("Bad name format provided")
    }

    if ( _.startsWith(properURL, "//")) {
      properURL = "https:" + properURL;
    }

    return properURL;
  }

  _parseRequestForData(dom: string) {
    const $ = cheerio.load(dom);
    const recentPrograms: ISingleVideo[] = [];
    const recentProgramsHolder = $('ul.recent-programs > li');

    for (var i = 0; i < recentProgramsHolder.length; i++) {
      const singleVideo: ISingleVideo = {};

      const container = recentProgramsHolder
        .eq(i);

      singleVideo.thumbnail = container
        .find('a.thumb > img')
        .attr("src");

      singleVideo.title = container
        .find('div.text > a.title > h3')
        .text();

      singleVideo.date = container
        .find("div.text > span.time > time")
        .text();

      singleVideo.video_url = container
        .find("a.thumb")
        .attr("href");

      singleVideo.embed_url = formatEmbedURL(singleVideo.video_url);

      recentPrograms.push(singleVideo);
    }

    return recentPrograms;
  }
}

function handleError(err: Error) {
  console.error("There was an error: ", err);
}

const cspanvids = new CSPANVideos();
export { cspanvids }

interface ISingleVideo {
  thumbnail?: string,
  title?: string,
  date?: string,
  embed_url?: string,
  video_url?: string
}

/**
 * TODO: Cache request info from search page to cut down
 * on number of requests.
 */