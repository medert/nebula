exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return (arr.indexOf(item))
  },

  sum : function(arr) {
    for (var sum = 0, count = 0; count < arr.length; count += 1) {
    sum += arr[count];
    }
    return sum
  },

  remove : function(arr, item) {
    return arr.filter(function(element){
        return element !== item;
    });
  },

  reverseString : function(str) {
    var x = '';
    for (i = str.length - 1; i >= 0; i -= 1)
    x += str[i];
    return x;
  },

  longestSubString : function(str) {
    return _.max(str.split(' '),
    function(subStr) {return subStr.length; });
  },

  letterMoveForward : function(str) {

    var caesar = str.replace(/[a-z]/gi, function(c) {
           switch (c) {
             case 'z': return 'a';
             case 'Z': return 'A';
             default:  return String.fromCharCode(1 + c.charCodeAt(0));
           }
       });
       return caesar.replace(/[aeiou]+/g, function(vowel) {
           return vowel.toLowerCase();
       });

  },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
};
