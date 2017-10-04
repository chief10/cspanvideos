"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const expect = chai.expect;
const helpers_1 = require("../src/helpers");
describe("Helper methods", () => {
    describe("formatPersonName", () => {
        it("Should properly format name with middle initial", () => {
            let name = helpers_1.formatPersonName("Poop A. Squander");
            expect(name).to.be.equal("poopsquander");
        });
        it("Should properly format provided name", () => {
            let name = helpers_1.formatPersonName("Charlie Brown");
            expect(name).to.equal("charliebrown");
        });
    });
    describe("formatEmbedURL", () => {
        it("Should properly format the embed url", () => {
            const url = "www.c-span.org/video/standalone/?434408-1/something-great-about-ted-cruz";
            const furl = helpers_1.formatEmbedURL(url);
            expect(furl).to.be.equal("www.c-span.org/video/standalone/?434408-1");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvaGVscGVycy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBRTdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsNENBQWtFO0FBRWxFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtRQUVoQyxFQUFFLENBQUMsaURBQWlELEVBQUUsR0FBRyxFQUFFO1lBQ3pELElBQUksSUFBSSxHQUFHLDBCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFFLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtZQUMvQyxJQUFJLElBQUksR0FBRywwQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUM5QixFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1lBQzlDLE1BQU0sR0FBRyxHQUFHLDBFQUEwRSxDQUFDO1lBQ3ZGLE1BQU0sSUFBSSxHQUFHLHdCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUdKLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6InRlc3QvaGVscGVycy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCAqIGFzIG1vY2hhIGZyb20gJ21vY2hhJztcbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5pbXBvcnQgeyBmb3JtYXRQZXJzb25OYW1lLCBmb3JtYXRFbWJlZFVSTCB9IGZyb20gJy4uL3NyYy9oZWxwZXJzJztcblxuZGVzY3JpYmUoXCJIZWxwZXIgbWV0aG9kc1wiLCAoKSA9PiB7XG4gIGRlc2NyaWJlKFwiZm9ybWF0UGVyc29uTmFtZVwiLCAoKSA9PiB7XG5cbiAgICBpdChcIlNob3VsZCBwcm9wZXJseSBmb3JtYXQgbmFtZSB3aXRoIG1pZGRsZSBpbml0aWFsXCIsICgpID0+IHtcbiAgICAgIGxldCBuYW1lID0gZm9ybWF0UGVyc29uTmFtZShcIlBvb3AgQS4gU3F1YW5kZXJcIik7XG4gICAgICBleHBlY3QobmFtZSkudG8uYmUuZXF1YWwoXCJwb29wc3F1YW5kZXJcIik7XG4gICAgfSlcbiAgXG4gICAgaXQoIFwiU2hvdWxkIHByb3Blcmx5IGZvcm1hdCBwcm92aWRlZCBuYW1lXCIsICgpID0+IHtcbiAgICAgIGxldCBuYW1lID0gZm9ybWF0UGVyc29uTmFtZShcIkNoYXJsaWUgQnJvd25cIik7XG4gICAgICBleHBlY3QobmFtZSkudG8uZXF1YWwoXCJjaGFybGllYnJvd25cIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKFwiZm9ybWF0RW1iZWRVUkxcIiwgKCkgPT4ge1xuICAgIGl0KFwiU2hvdWxkIHByb3Blcmx5IGZvcm1hdCB0aGUgZW1iZWQgdXJsXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IFwid3d3LmMtc3Bhbi5vcmcvdmlkZW8vc3RhbmRhbG9uZS8/NDM0NDA4LTEvc29tZXRoaW5nLWdyZWF0LWFib3V0LXRlZC1jcnV6XCI7XG4gICAgICBjb25zdCBmdXJsID0gZm9ybWF0RW1iZWRVUkwodXJsKTtcblxuICAgICAgZXhwZWN0KGZ1cmwpLnRvLmJlLmVxdWFsKFwid3d3LmMtc3Bhbi5vcmcvdmlkZW8vc3RhbmRhbG9uZS8/NDM0NDA4LTFcIik7XG4gICAgfSlcbiAgfSlcblxuICBcbn0pIl19
