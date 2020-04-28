const data = require('@begin/data')

exports.handler = async function todos (req) {
  // if (!req.title) req.title = "wiki";
  let page = await data.get({
    table: 'wiki',
    key: req.title
  })
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      todos: page
    })
  }
}
