let data = require("@begin/data");
let arc = require('@architect/functions');

exports.handler = async function http(req) {
  let message = arc.http.helpers.bodyParser(req);
  await data.set({
    table: "wiki",
    key: message.title,
    content: message.page,
  });
  return {
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: JSON.stringify(message)
  };
};
