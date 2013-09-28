Package.describe({
  summary: "Lunr.js Packaged for Meteor"
});

Npm.depends({
  'lunr': '0.4.2'
});


Package.on_use(function (api) {
  api.add_files([
    'lunr/lunr.min.js'
  ], 'client');
});
