define([
    'app/registry',
    'app/loop'
], function (Registry, Loop) {
    'use strict';

    return {
        init: function () {
            Registry.set('controls', this.create());
            Loop.add(() => this.update)
        },

        /**
         * Create controls.
         *
         * @returns {THREE.OrbitControls}
         */
        create: function () {
            let controls = new THREE.OrbitControls(Registry.get('camera'));
            controls.target = new THREE.Vector3(0,3,0);
            controls.update();

            return controls;
        },

        /**
         * Update controls callback.
         */
        update: function () {
            Registry.get('controls').update();
        }
    }
});