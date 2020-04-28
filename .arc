@app
begin-app

@http
get  /wiki/:title
post /wiki

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
