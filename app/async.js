if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new $.Deferred().resolve(value);
    },

    manipulateRemoteData : function(url) {
      var ajaxer = new $.Deferred();
      $.getJSON(url, function(result){
        ajaxer.resolve(result.people.sort(function(a, b){
          if(a.name > b.name){
            return 1;
          }
          else if(a.name < b.name){
            return -1;
          }
          return 0;
        }).map(function(person){
          return person.name;
        }));
      });
      return ajaxer;
    }
  };
});
