"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatPersonName(name, withSpace) {
    let split, finalName;
    if (!name || typeof name !== "string") {
        return new Error("Must have a name present or it must be a string!");
    }
    split = name.trim().split(" ");
    // Checking if there is a middle initial;
    if (split.length === 3) {
        split.splice(1, 1);
    }
    // For when we need to handle malformed urls.
    finalName = !withSpace
        ? split.join("").toLowerCase()
        : split.join(" ");
    return finalName;
}
exports.formatPersonName = formatPersonName;
function formatEmbedURL(url) {
    let furl = url.split("/");
    furl.pop();
    furl = furl.join("/");
    return furl;
}
exports.formatEmbedURL = formatEmbedURL;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEJBQWlDLElBQVksRUFBRSxTQUFtQjtJQUNoRSxJQUFJLEtBQUssRUFBRSxTQUFTLENBQUM7SUFFckIsRUFBRSxDQUFDLENBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL0IseUNBQXlDO0lBQ3pDLEVBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLFNBQVMsR0FBRyxDQUFDLFNBQVM7UUFDcEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBCLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQXBCRCw0Q0FvQkM7QUFFRCx3QkFBK0IsR0FBVztJQUN4QyxJQUFJLElBQUksR0FBbUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUxELHdDQUtDIiwiZmlsZSI6InNyYy9oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcnNvbk5hbWUobmFtZTogc3RyaW5nLCB3aXRoU3BhY2U/OiBib29sZWFuKTogc3RyaW5nfEVycm9yIHtcbiAgbGV0IHNwbGl0LCBmaW5hbE5hbWU7XG4gIFxuICBpZiAoICFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiICkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJNdXN0IGhhdmUgYSBuYW1lIHByZXNlbnQgb3IgaXQgbXVzdCBiZSBhIHN0cmluZyFcIik7XG4gIH1cblxuICBzcGxpdCA9IG5hbWUudHJpbSgpLnNwbGl0KFwiIFwiKTtcblxuICAvLyBDaGVja2luZyBpZiB0aGVyZSBpcyBhIG1pZGRsZSBpbml0aWFsO1xuICBpZiAoIHNwbGl0Lmxlbmd0aCA9PT0gMyApIHtcbiAgICBzcGxpdC5zcGxpY2UoMSwgMSk7XG4gIH1cblxuICAvLyBGb3Igd2hlbiB3ZSBuZWVkIHRvIGhhbmRsZSBtYWxmb3JtZWQgdXJscy5cbiAgZmluYWxOYW1lID0gIXdpdGhTcGFjZSBcbiAgICA/IHNwbGl0LmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKVxuICAgIDogc3BsaXQuam9pbihcIiBcIik7XG5cbiAgcmV0dXJuIGZpbmFsTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVtYmVkVVJMKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGZ1cmw6c3RyaW5nfHN0cmluZ1tdID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgZnVybC5wb3AoKTtcbiAgZnVybCA9IGZ1cmwuam9pbihcIi9cIik7XG4gIHJldHVybiBmdXJsO1xufVxuXG4iXX0=
