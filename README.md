meteor-lunr
===========

[Lunr.js](http://www.lunrjs.com) packaged for meteor
----------------------------------------------------

Support this! [![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/electricjesus/)


### Installation

The preferred method is to add this package directly into your Meteorite's `smart.json` package file:

```javascript
{
  "packages": {
    "meteor-lunr" : { 
	"branch" : "master",
	"git" : "https://github.com/electricjesus/meteor-lunr.git"
    }
  }
}
```

Then run `mrt install`.

Or you could install via [Atmosphere](http://atmosphere.meteor.com/): `mrt add lunr`

### Don't have Meteorite, yet?

It's easy! Just run `sudo -H npm install -g meteorite` (provided you already have the latest Node/NPM). For more info visit this page:

https://github.com/oortcloud/meteorite#installing-meteorite

### Getting Started / Recommended Usage

To begin adding text search capabilities to your app, this is a good way to start:

Let's say we're trying to find/match items in `Venues`.

On the server:

    Meteor.startup(function(e) {

        Venues.index = Meteor.lunr(function() {
            this.field('name', {boost: 10});
            this.field('description');
            this.ref('_id');
        });

        Venues.find({},{fields : {name: 1, description: 1}}).forEach(function(v,i$
            Venues.index.add(v);
        });

    });


    Meteor.methods({
        searchVenues: function( matchText ) {
            check(matchText, String);
            return Venues.index.search(matchText);
        }
    });


Then, on the client:

    Meteor.call('searchVenues','search term here', function(e,result) {
        if(typeof e === 'undefined') {
            Session.set('searchResultsReferences', result);
        } else {
            //handle error here.
        }
    }

You can now use `Session.get('searchResultsReferences')` to assemble an array of _id's to filter a `Venues.find()` call:


    // uses underscorejs
    Venues.find({_id: {
	    $in : _.map(Session.get('searchResultsReferences'), function(e) { return e.ref})
	}
    });


Enjoy!


### Support this project!

If you liked this project, please consider supporting my cause:

[Good software should be readily accessible to anyone that needs it.](https://www.gittip.com/electricjesus/)

Thank you!
