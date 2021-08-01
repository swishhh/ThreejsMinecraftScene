define([], function () {
    'use strict';

    return {
        position: {
            x: 5,
            y: 4,
            z: 8
        },
        fov: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,

        /**
         * Init camera.
         *
         * @returns {PerspectiveCamera}
         */
        init: function () {
            let camera =  new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
            camera.position.x = this.position.x;
            camera.position.y = this.position.y;
            camera.position.z = this.position.z;

            return camera;
        }
    }
});