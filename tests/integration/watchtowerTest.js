var fs         = require("fs");
var nock       = require("nock");
var path       = require("path");
var watchtower = require("../../lib/watchtower.js");

nock("http://bbc.co.uk").get("/news").reply(200, "OK");
nock("http://bbc.co.uk").get("/music").reply(404, "Not found.");
nock("http://theguardian.com").get("/uk/sport").reply(200, "OK");

var config_path = path.join(path.dirname(fs.realpathSync(__filename)), "../fixtures") + "/config.yaml";
new watchtower(config_path).start();
