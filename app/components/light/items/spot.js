define([
    'app/registry'
], function (Registry) {
    'use strict';

    const color = 0x221D3D;
    const intensity = 1.35;
    const castShadow = true;
    const y = 30;
    const x = 15;
    const z = 15;

    return {
        init: function () {
            let scene = Registry.get('scene');
            let light = this.create();
            scene.add(light);
            light.shadow.mapSize.width = 2012;
            light.shadow.mapSize.height = 2012;
            light.shadow.camera.near = 2;
            light.shadow.camera.far = 100;

            Registry.set('spotLight', scene);
        },

        /**
         * Create light.
         *
         * @returns {SpotLight}
         */
        create: function () {
            let light = new THREE.SpotLight(color, intensity);
            light.castShadow = castShadow;
            light.position.y = y;
            light.position.x = x;
            light.position.z = z;

            return light;
        }
    }
})