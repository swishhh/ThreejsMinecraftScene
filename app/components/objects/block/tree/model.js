define([
    'app/components/objects/block/base'
], function (Base) {
    'use strict';

    return Base.extend({
        materials: function () {
            return [
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_side.png' ), side: THREE.DoubleSide } ), // right
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_side.png' ), side: THREE.DoubleSide } ),  // left
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_top.png' ), side: THREE.DoubleSide } ),  // top
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_top.png' ), side: THREE.DoubleSide } ),  // bottom
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_side.png' ), side: THREE.DoubleSide } ),  // front
                new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'img/wood_side.png' ), side: THREE.DoubleSide } ),  // back
            ]
        }
    });
})