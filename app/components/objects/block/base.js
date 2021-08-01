define([
    'app/registry'
], function (Registry) {
   'use strict';

    return {
        size: {
            x: 1,
            y: 1,
            z: 1
        },
        position: {
            x: 1,
            y: 1,
            z: 1
        },
        receiveShadow: true,
        castShadow: true,

        /**
         * Draw cube.
         */
        draw: function() {
            const geometry = new THREE.BoxGeometry(this.size.x, this.size.y, this.size.z);
            const cube = new THREE.Mesh(geometry, this.materials());
            cube.position.x = this.position.x;
            cube.position.y = this.position.y;
            cube.position.z = this.position.z;
            cube.receiveShadow = this.receiveShadow;
            cube.castShadow = this.castShadow;
            Registry.get('scene').add(cube);
        },

        /**
         * Set positions.
         *
         * @param x
         * @param y
         * @param z
         */
        setPosition: function (x, y, z) {
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
        },

        /**
         * Reset to defaults.
         */
        reset: function () {
            this.position.x = 1;
            this.position.y = 1;
            this.position.z = 1;
            this.size.x = 1;
            this.size.y = 1;
            this.size.z = 1;
            this.receiveShadow = true;
            this.castShadow = true;
        },

        /**
         * Extend object.
         *
         * @param obj
         * @returns {*}
         */
        extend: function (obj) {
            return {...this, ...obj}
        },

        /**
         * Create material.
         *
         * @param url
         * @param side
         *
         * @returns {{side: number, map: Texture}}
         */
        buildMat: function (url, side = null) {
            return {map: new THREE.TextureLoader().load(url), side: side ? side : THREE.FrontSide}
        },

        /**
         * Retrieve Mash materials.
         *
         * @returns {[]}
         */
        materials: function () {
            return [];
        }
    }
});