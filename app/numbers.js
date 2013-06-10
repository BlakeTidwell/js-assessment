if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num & Math.pow(2, bit - 1)) >> (bit - 1);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var bin = new Number(num).toString(2);
        return '00000000'.substr(0, 8 - bin.length) + bin;
    },

    multiply: function(a, b) {
        var aDecimals = String(a).split('.')[1] ? String(a).split('.')[1].length : 0,
            bDecimals = String(b).split('.')[1] ? String(b).split('.')[1].length : 0,
            decimals = (aDecimals > bDecimals) ? aDecimals : bDecimals;
        if(decimals){
            var parts = String(a*b).split('.');
            return parseFloat(parts[0] + '.' + parts[1].substr(0, decimals), 10);
        }
        else{
            return a*b;
        }
    }
  };
});

