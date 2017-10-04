"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const dummydata_1 = require("./dummydata");
const chai = require("chai");
const request = require("request");
const expect = chai.expect;
describe("cspanvideos", () => {
    it("Should have the proper url.", () => {
        expect(src_1.cspanvids.CSPAN_BASE_URL).to.equal("https://www.c-span.org/person/?");
    });
    it("Should have the _makeRequest method available", () => {
        expect(src_1.cspanvids).to.have.property("_makeRequest");
    });
    describe("_parseRequestForData", () => {
        const mockDom = dummydata_1.dummyData().mockCSPANDom;
        const rp = src_1.cspanvids._parseRequestForData(mockDom);
        it("Should detect proper amount of li elements", () => {
            expect(rp.length).to.be.equal(6);
        });
        it("Should provide proper for each element", () => {
            expect(rp[0].thumbnail).to.be.a('string');
            expect(rp[3].date).to.be.a('string');
            expect(rp[4].title).to.be.a('string');
        });
    });
    describe("_isBadURL", () => {
        it("Should get the proper URL when a bad one is provided", () => {
            request(src_1.cspanvids.CSPAN_BAD_URL + "Ted Cruz", (err, response, body) => {
                const isBadURL = src_1.cspanvids._isBadURL(body);
                expect(isBadURL).to.be.true;
            });
        });
    });
    describe("fetchVideoData", () => {
        it("Should work as expected for a normal name format", (done) => {
            src_1.cspanvids.fetchVideoData("Marco Rubio")
                .then((data) => {
                expect(data.length).to.be.above(3);
                expect(data[0].embed_url).to.be.a("string");
            })
                .then(() => done(), done);
        });
        it("Should work with a weird name format", (done) => {
            src_1.cspanvids.fetchVideoData("marcorubio")
                .then((data) => {
                expect(data.length).to.be.above(3);
                expect(data[0].embed_url).to.be.a("string");
            }).then(() => done(), done);
        });
        /**
         * For example, Ted Cruz's name in the url
         * would be "rcruz". Need to handle that.
         */
        it("Should work with a name that diffs from url", (done) => {
            src_1.cspanvids.fetchVideoData("Ted Cruz")
                .then((data) => {
                expect(data.length).to.be.above(3);
            }).then(() => done(), done);
        });
        it("Should work with a nonsense name", (done) => {
            src_1.cspanvids.fetchVideoData("aragsseafe")
                .then((data) => {
                expect(typeof data).to.be.an(undefined);
            })
                .then(() => done(), done);
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZUFBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7aUJBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQztpQkFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvY3BhbnZpZGVvcy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuZGVjbGFyZSB2YXIgZG9uZTogYW55O1xuXG5pbXBvcnQgeyBjc3BhbnZpZHMgfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHsgZHVtbXlEYXRhIH0gZnJvbSAnLi9kdW1teWRhdGEnO1xuXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0ICogYXMgbW9jaGEgZnJvbSAnbW9jaGEnO1xuaW1wb3J0ICogYXMgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcbmltcG9ydCAqIGFzIGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cblxuZGVzY3JpYmUoXCJjc3BhbnZpZGVvc1wiLCAoKSA9PiB7XG5cbiAgaXQoXCJTaG91bGQgaGF2ZSB0aGUgcHJvcGVyIHVybC5cIiwgKCkgPT4ge1xuICAgIGV4cGVjdChjc3BhbnZpZHMuQ1NQQU5fQkFTRV9VUkwpLnRvLmVxdWFsKFwiaHR0cHM6Ly93d3cuYy1zcGFuLm9yZy9wZXJzb24vP1wiKTtcbiAgfSk7XG5cblxuICBpdChcIlNob3VsZCBoYXZlIHRoZSBfbWFrZVJlcXVlc3QgbWV0aG9kIGF2YWlsYWJsZVwiLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNzcGFudmlkcykudG8uaGF2ZS5wcm9wZXJ0eShcIl9tYWtlUmVxdWVzdFwiKVxuICB9KTtcblxuXG4gIGRlc2NyaWJlKFwiX3BhcnNlUmVxdWVzdEZvckRhdGFcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1vY2tEb20gPSBkdW1teURhdGEoKS5tb2NrQ1NQQU5Eb207XG4gICAgY29uc3QgcnAgPSBjc3BhbnZpZHMuX3BhcnNlUmVxdWVzdEZvckRhdGEobW9ja0RvbSk7XG5cbiAgICBpdChcIlNob3VsZCBkZXRlY3QgcHJvcGVyIGFtb3VudCBvZiBsaSBlbGVtZW50c1wiLCAoKSA9PiB7XG4gICAgICBleHBlY3QocnAubGVuZ3RoKS50by5iZS5lcXVhbCg2KTtcbiAgICB9KTtcblxuICAgIGl0KFwiU2hvdWxkIHByb3ZpZGUgcHJvcGVyIGZvciBlYWNoIGVsZW1lbnRcIiwgKCkgPT4ge1xuICAgICAgZXhwZWN0KHJwWzBdLnRodW1ibmFpbCkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgICBleHBlY3QocnBbM10uZGF0ZSkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgICBleHBlY3QocnBbNF0udGl0bGUpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIH0pXG4gIH0pO1xuXG4gIGRlc2NyaWJlKFwiX2lzQmFkVVJMXCIsICgpID0+IHtcbiAgICBpdChcIlNob3VsZCBnZXQgdGhlIHByb3BlciBVUkwgd2hlbiBhIGJhZCBvbmUgaXMgcHJvdmlkZWRcIiwgKCkgPT4ge1xuICAgICAgcmVxdWVzdChjc3BhbnZpZHMuQ1NQQU5fQkFEX1VSTCArIFwiVGVkIENydXpcIiwgKGVycjogRXJyb3IsIHJlc3BvbnNlOiByZXF1ZXN0LlJlcXVlc3RSZXNwb25zZSwgYm9keTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQmFkVVJMID0gY3NwYW52aWRzLl9pc0JhZFVSTChib2R5KTtcblxuICAgICAgICBleHBlY3QoaXNCYWRVUkwpLnRvLmJlLnRydWU7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xuXG4gIGRlc2NyaWJlKFwiZmV0Y2hWaWRlb0RhdGFcIiwgKCkgPT4ge1xuXG4gICAgaXQgKFwiU2hvdWxkIHdvcmsgYXMgZXhwZWN0ZWQgZm9yIGEgbm9ybWFsIG5hbWUgZm9ybWF0XCIsIChkb25lKSA9PiB7XG4gICAgICBjc3BhbnZpZHMuZmV0Y2hWaWRlb0RhdGEoXCJNYXJjbyBSdWJpb1wiKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZXhwZWN0KGRhdGEubGVuZ3RoKS50by5iZS5hYm92ZSgzKTtcbiAgICAgICAgZXhwZWN0KGRhdGFbMF0uZW1iZWRfdXJsKS50by5iZS5hKFwic3RyaW5nXCIpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGRvbmUoKSwgZG9uZSlcbiAgICB9KTtcbiAgICBcbiAgICBpdChcIlNob3VsZCB3b3JrIHdpdGggYSB3ZWlyZCBuYW1lIGZvcm1hdFwiLCAoZG9uZSkgPT4ge1xuICAgICAgY3NwYW52aWRzLmZldGNoVmlkZW9EYXRhKFwibWFyY29ydWJpb1wiKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZXhwZWN0KGRhdGEubGVuZ3RoKS50by5iZS5hYm92ZSgzKVxuICAgICAgICBleHBlY3QoZGF0YVswXS5lbWJlZF91cmwpLnRvLmJlLmEoXCJzdHJpbmdcIik7XG4gICAgICB9KS50aGVuKCgpID0+IGRvbmUoKSwgZG9uZSlcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBGb3IgZXhhbXBsZSwgVGVkIENydXoncyBuYW1lIGluIHRoZSB1cmxcbiAgICAgKiB3b3VsZCBiZSBcInJjcnV6XCIuIE5lZWQgdG8gaGFuZGxlIHRoYXQuXG4gICAgICovXG4gICAgaXQoXCJTaG91bGQgd29yayB3aXRoIGEgbmFtZSB0aGF0IGRpZmZzIGZyb20gdXJsXCIsIChkb25lKSA9PiB7XG4gICAgICBjc3BhbnZpZHMuZmV0Y2hWaWRlb0RhdGEoXCJUZWQgQ3J1elwiKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGV4cGVjdChkYXRhLmxlbmd0aCkudG8uYmUuYWJvdmUoMyk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4gZG9uZSgpLCBkb25lKVxuICAgIH0pO1xuXG4gICAgaXQoXCJTaG91bGQgd29yayB3aXRoIGEgbm9uc2Vuc2UgbmFtZVwiLCAoZG9uZSkgPT4ge1xuICAgICAgY3NwYW52aWRzLmZldGNoVmlkZW9EYXRhKFwiYXJhZ3NzZWFmZVwiKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGV4cGVjdCh0eXBlb2YgZGF0YSkudG8uYmUuYW4odW5kZWZpbmVkKTtcbiAgICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGRvbmUoKSwgZG9uZSk7XG4gICAgfSlcbiAgfSlcbn0pO1xuIl19
