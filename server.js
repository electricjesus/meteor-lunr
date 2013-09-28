Meteor.lunr = null;

if (typeof(Npm) == "undefined") {
  Meteor.lunr = __meteor_bootstrap__.require("lunr");
} else {
  Meteor.lunr = Npm.require("lunr");
}
