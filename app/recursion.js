if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      function traverseFiles(currentRootDir, files, searchExp){
        // If the current directory is a match for the searchExp,
        // pass down a matching regex for all further searches.
        var nextSearchExp = (searchExp.test(currentRootDir)) ? new RegExp('^' + files[0].dir + '$') : searchExp;
        // Are we at the end of file list?
        if(files.length == 1){
          if(typeof files[0] === 'string'){
            // Return files in directories matching the search,
            // otherwise return an empty array.
            return (searchExp.test(currentRootDir)) ? [files[0]] : [];
          }
          else if(typeof files[0] === 'object'){
            // Continue the search if this is a directory object.
            return traverseFiles(files[0].dir, files[0].files, nextSearchExp);
          }
        }
        else{
          if(typeof files[0] === 'string'){
            // Add the current file to the list if the current directory
            // matches the search, otherwise simply continue recursing.
            return (searchExp.test(currentRootDir)) ?
              [files[0]].concat(traverseFiles(currentRootDir, files.slice(1, files.length), searchExp))
                : traverseFiles(currentRootDir, files.slice(1, files.length), searchExp);
          }
          else if(typeof files[0] === 'object'){
            // Continue the search if this is a directory object.
            return (traverseFiles(files[0].dir, files[0].files, nextSearchExp))
              .concat(traverseFiles(currentRootDir, files.slice(1, files.length), searchExp));
          }
        }

      }

      var searchExp = typeof dirName !== 'undefined' ? new RegExp('^' + dirName + '$') : new RegExp('.*');
      var files = traverseFiles(data.dir, data.files, searchExp);
      return files;
    },

    permute: function(arr) {
      function makePermutations(currSubset, original){
        return [];
      }

      return makePermutations([], arr);
    }
  };
});
