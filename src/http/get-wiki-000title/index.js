const data = require("@begin/data");
// let arc = require('@architect/functions');

exports.handler = async function http(req) {
  // let request = arc.http.helpers.bodyParser(req);
  let page = await data.get({ table: "wiki", key: req.pathParameters.title });
  if (!page) {
    page = { content: [] };
  }
  return {
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(page),
  };
};
