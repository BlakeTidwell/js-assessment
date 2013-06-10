if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var x = 0;
      for(var i = 0; i < arr.length; i++){
        x += arr[i];
      }
      return x;
    },

    remove : function(arr, item) {
      while(arr.indexOf(item) >= 0){
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      while(arr.indexOf(item) >= 0){
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      for(var i = 0, n = 0; i < arr.length; i++){
        n += (arr[i] === item) ? 1 : 0;
      }
      return n;
    },

    duplicates : function(arr) {
      var dups = [];
      if(arr.length > 2){
        var head;
        head = arr.splice(0, 1);
        while(arr.length){
          if(head.indexOf(arr[0]) > -1){
            dups.push(arr[0]);
          }
          head.push(arr.splice(0, 1)[0]);
        }
      }
      return dups;
    },

    square : function(arr) {
      for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var ret = [];
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === target){
          ret.push(i);
        }
      }
      return ret;
    }
  };
});
