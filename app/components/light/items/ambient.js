define([
    'app/registry',
    'app/loop'
], function (Registry) {
    'use strict';

    const color = 0x221D3D;
    //const color = 0x404040;
    const intensity = 1;

    return {
        init: function () {
            let light = this.create();
            let scene = Registry.get('scene');
            scene.add(light);
            Registry.set('ambientLight', light);
        },

        /**
         * Create light.
         *
         * @returns {AmbientLight}
         */
        create: function () {
            return new THREE.AmbientLight(color, intensity);
        }
    }
})