Request Header Parser
=====================

### Basic API to return select GET header details, parsed as JSON.

[Homepage](https://request-header-parser.wrwebdev.repl.co/)
[See your details](https://request-header-parser.wrwebdev.repl.co/api/whoami)

Example output:
```
{"ipaddress":"::ffff:173.21.4.7","language":"en-US,en;q=0.9,fr;q=0.8,fy;q=0.7,it;q=0.6","software":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_19) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36"}
```

### Dependencies
 - For full list with versions, see `package.json`
 - express
 - cors
 - dotenv

### Install

 - `npm i` to install dependencies listed in package.json
 - `npm start` to open server. 
Default port 3000, or customise with PORT=XXXX in .env in main directory

### URL
 - Base URI returns simple homepage
 - `/api/whoami` returns JSON
