@app
begin-app

@http
get  /todos
post /todos
post /todos/delete
get  /wiki/:title
post /wiki

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
