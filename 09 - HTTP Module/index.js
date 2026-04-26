import http from "http"; 
// STEP 1: We import Node.js built-in HTTP module
// This gives us tools to create a web server

// STEP 2: We create a server
const server = http.createServer((req, res) => {

  // 🚦 THIS FUNCTION RUNS EVERY TIME A REQUEST COMES IN

  // STEP 3: A request is received from browser/client
  // req = request object (contains URL, method, headers, etc.)
  // res = response object (used to send data back)

  // STEP 4: We prepare the response metadata first
  res.writeHead(202, "Good", {
    "content-type": "text/html"
  });

  // 👉 This tells the browser:
  // - Status: 202 (request accepted)
  // - Content type: HTML page will be sent

  // STEP 5: We send actual response body (what user sees)
  res.write("<h1>Hello from nodejs</h1>");

  // 👉 This is the content rendered in browser

  // STEP 6: We END the response
  // Without this, browser will keep waiting forever
  res.end();

  // 🚨 Important: Once res.end() runs, request cycle is complete
});

// STEP 7: Server starts listening on port 5000
server.listen(5000, () => {
  console.log("Server Up!");
});

// STEP 8 (REAL WORLD FLOW):
/*
Browser Request
      ↓
http.createServer() receives it
      ↓
req + res objects are created
      ↓
writeHead() sets response rules
      ↓
write() sends actual content
      ↓
end() finishes response
      ↓
Browser displays output 🎉
*/