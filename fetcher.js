const request = require('request');    // Install node'srequest library to make HTTP request
const fs = require('fs');              // Use Node's fs (file system) module to write the file
const args = process.argv.slice(2);     //Command line arguments: > node fetcher.js http://www.example.edu/ ./index.html
const url = args[0];
const path = args[1];
const log = console.log;


const fetcher = (url, path) => {         // Takes two command line arguments: URL and a local file path

  log(`Fetching URL..`);
  request(url, (error, responce, content) => {       // Async makes http request and wait for responce
    if (error) {
      throw error;
    };

    fs.writeFile(path, content, error => {    //Write downloaded data in your local file system
      if (error) {
        log(error);
        return;
      }
      log(`Downloaded and saved ${content.length} bytes to ${path}`) 
    });

  });
  //async - request complete? - take data => Dowload data
}

fetcher(url, path);






