var lunr;

if (typeof(Npm) == "undefined") {
  lunr = __meteor_bootstrap__.require("lunr");
} else {
  lunr = Npm.require("lunr");
}

