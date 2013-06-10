if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(undefined, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(arg){
        return str + ', ' + arg;
      }
    },

    makeClosures : function(arr, fn) {
      var closures = [];
      for(var i = 0; i < arr.length; i++){
        closures.push((function(item){
          return function(){
            return fn.call(undefined, item);
          }
        })(arr[i]));
      }
      return closures;
    },

    partial : function(fn, str1, str2) {
      return (function(s1){
        return (function(s2){
          return function(str3){
            return fn.call(undefined, s1, s2, str3);
          }
        })(str2);
      })(str1);
    },

    useArguments : function() {
      var sum = 0;
      for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
      }
      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function(){
        return fn.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
      }
    },

    curryIt : function(fn) {
      var arity = fn.length;

      function curryFunction(last){
        return function(arg){
          var args = last.concat(arg);
          if(args.length < arity){
            return curryFunction(args);
          }
          else{
            return fn.apply(null, args);
          }
        }
      }
      return curryFunction([]);
    }
  };
});
