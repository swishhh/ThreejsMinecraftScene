define([
    'app/registry'
], function (Registry) {

    return {
        init: function () {
            const light = new THREE.PointLight(0xD47400, 1.9, 8);
            light.position.set(4, 2, -1.5);

            light.castShadow = true;
            light.shadow.mapSize.width = 2012;
            light.shadow.mapSize.height = 2012;
            light.shadow.camera.near = 2;
            light.shadow.camera.far = 100;

            Registry.get('scene').add(light);
        }
    }
})