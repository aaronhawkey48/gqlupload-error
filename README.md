# Replication of Issue

Follows https://stephen-knutter.github.io/2020-02-07-nestjs-graphql-file-upload/

Click link to follow sample request reproduction.

Example Curl:

```
curl http://localhost:3000/graphql \
  -H 'accept: application/json' \
  -H 'accept-encoding: gzip, deflate, br' \
  -H 'connection: keep-alive' \
  -H 'dnt: 1' \
  -F 'operations={"query": "mutation UploadFile($file: Upload!) { uploadFile(file: $file)}", "variables": {"file": null}}' \
  -F 'map={ "nFile": ["variables.file"] }' \
  -F nFile=@./README.md
  ```