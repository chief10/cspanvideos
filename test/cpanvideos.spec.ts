declare var require: any;
declare var done: any;

import * as chai from 'chai';
import * as mocha from 'mocha';
import * as request from 'request';
import * as chalk from 'chalk';

import { cspanvideos } from '../src';
import { dummyData } from './dummydata';

const expect = chai.expect;


describe("cspanvideos", () => {

  it("Should have the proper url.", () => {
    expect(cspanvideos.CSPAN_BASE_URL).to.equal("https://www.c-span.org/person/?");
  });


  it("Should have the _makeRequest method available", () => {
    expect(cspanvideos).to.have.property("_makeRequest")
  });


  describe("_parseRequestForData", () => {
    const mockDom = dummyData().mockCSPANDom;
    const rp = cspanvideos._parseRequestForData(mockDom);

    it("Should detect proper amount of li elements", () => {
      expect(rp.length).to.be.equal(6);
    });

    it("Should provide proper for each element", () => {
      expect(rp[0].thumbnail).to.be.a('string');
      expect(rp[3].date).to.be.a('string');
      expect(rp[4].title).to.be.a('string');
    })
  });

  describe("_isBadURL", () => {
    it("Should get the proper URL when a bad one is provided", () => {
      request(cspanvideos.CSPAN_BAD_URL + "Ted Cruz", (err: Error, response: request.RequestResponse, body: string) => {
        const isBadURL = cspanvideos._isBadURL(body);

        expect(isBadURL).not.to.be.false;
      })
    })
  });

  describe("fetchVideoData", () => {

    it ("Should work as expected for a normal name format", (done) => {
      cspanvideos.fetchVideoData("Marco Rubio")
      .then((data) => {
        expect(data.length).to.be.above(3);
        expect(data[0].embed_url).to.be.a("string");
      })
      .then(() => done(), done)
    });
    
    it("Should work with a weird name format", (done) => {
      cspanvideos.fetchVideoData("marcorubio")
      .then((data) => {
        expect(data.length).to.be.above(3)
        expect(data[0].embed_url).to.be.a("string");
      }).then(() => done(), done)
    });
    
    /**
     * For example, Ted Cruz's name in the url
     * would be "rcruz". Need to handle that.
     */
    it("Should work with a name that diffs from url", (done) => {
      cspanvideos.fetchVideoData("Ted Cruz")
        .then((data) => {
          expect(data.length).to.be.above(3);
        }).then(() => done(), done)
    });
  

    it("Should work with a nonsense name", (done) => {
      cspanvideos.fetchVideoData("aragsseafe")
        .then((data) => {
          expect(data instanceof Error).to.be.true;
        })
      .then(() => done(), done);
    })
  })
});
