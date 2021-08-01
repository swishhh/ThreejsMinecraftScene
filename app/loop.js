define([], function () {
   'use strict';

   let items = [];

   return {
       /**
        * Add callback item to loop.
        *
        * @param callback
        */
       add: function (callback) {
           items.push(callback);
       },

       /**
        * Get loop callback items.
        *
        * @returns {*[]}
        */
       get: function () {
           return items;
       }
   }
});