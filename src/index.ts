import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("Hello there");
});

app.get("/index", (request, response) => {
  response.sendFile("/Users/z1/Workspace/my-first-website/src/index.html");
});

app.get("/blog", (request, response) => {
  response.sendFile("/Users/z1/Workspace/my-first-website/src/blog.html");
});

app.get("/art", (request, response) => {
  response.sendFile("/Users/z1/Workspace/my-first-website/src/art.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
