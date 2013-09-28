Package.describe({
  summary: "Lunr.js Packaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files([
    'lunr/lunr.min.js'
  ], 'server');
});
