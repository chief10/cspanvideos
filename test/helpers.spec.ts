import * as chai from 'chai';
import * as mocha from 'mocha';
const expect = chai.expect;

import { formatPersonName, formatEmbedURL } from '../src/helpers';

describe("Helper methods", () => {
  describe("formatPersonName", () => {

    it("Should properly format name with middle initial", () => {
      let name = formatPersonName("Poop A. Squander");
      expect(name).to.be.equal("poopsquander");
    })
  
    it( "Should properly format provided name", () => {
      let name = formatPersonName("Charlie Brown");
      expect(name).to.equal("charliebrown");
    });
  });

  describe("formatEmbedURL", () => {
    it("Should properly format the embed url", () => {
      const url = "www.c-span.org/video/standalone/?434408-1/something-great-about-ted-cruz";
      const furl = formatEmbedURL(url);

      expect(furl).to.be.equal("www.c-span.org/video/standalone/?434408-1");
    })
  })

  
})