define([
    'app/components/light/component',
    'app/components/controls/orbit',
    'app/components/objects/pool'
], function (
    Light,
    OrbitControls,
    ObjectsPool
) {
    'use strict';

    /**
     * Components list.
     */
    const components = {
        'light': Light,
        'orbitControls': OrbitControls,
        'objects': ObjectsPool
    };

    /**
     * Components obj.
     */
    return {
        /**
         * Retrieve defined components.
         *
         * @returns {Object}
         */
        get: function () {
            return components;
        }
    }
})