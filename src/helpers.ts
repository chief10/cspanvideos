export function formatPersonName(name: string, withSpace?: boolean): string|Error {
  let split, finalName;
  
  if ( !name || typeof name !== "string" ) {
    return new Error("Must have a name present or it must be a string!");
  }
  // debugger;
  if ( name && !/\s/.test(name)) {
    return name;
  }

  split = name.trim().split(" ");

  // Checking if there is a middle initial;
  if ( split.length === 3 ) {
    split.splice(1, 1);
  }

  // For when we need to handle malformed urls.
  finalName = !withSpace 
    ? split.join("").toLowerCase()
    : split.join(" ");

  return finalName;
}

export function formatEmbedURL(url: string): string {
  let furl:string|string[] = url.split("/");
  furl.pop();
  furl = furl.join("/");
  return furl;
}

