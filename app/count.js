if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      console.log(start)
      var i = start + 1,
        counter = setInterval(function(){
          if(i <= end){
            console.log(i++);
          }
        }, 1000);

      return {
        cancel: function(){
          clearInterval(counter);
        }
      };
    }
  };
});