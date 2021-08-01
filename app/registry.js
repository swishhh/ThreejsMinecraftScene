let storage = [];

define([], function () {
    return {
        /**
         * Get value by key.
         *
         * @param name
         * @returns {*}
         */
        get: function (name) {
            return storage[name];
        },

        /**
         * Set value by key.
         *
         * @param {String} name
         * @param {*} value
         */
        set: function (name, value) {
            storage[name] = value;

            return this;
        }
    }
})