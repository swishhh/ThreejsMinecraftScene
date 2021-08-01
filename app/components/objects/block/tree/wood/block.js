define([
    'app/components/objects/block/base'
], function (Base) {
    'use strict';

    return Base.extend({
        matSide: 'app/components/objects/block/tree/wood/material/side.png',
        matTop: 'app/components/objects/block/tree/wood/material/top.png',
        materials: function () {
            return [
                new THREE.MeshLambertMaterial(this.buildMat(this.matSide)),
                new THREE.MeshLambertMaterial(this.buildMat(this.matSide)),
                new THREE.MeshLambertMaterial(this.buildMat(this.matTop)),
                new THREE.MeshLambertMaterial(this.buildMat(this.matTop)),
                new THREE.MeshLambertMaterial(this.buildMat(this.matSide)),
                new THREE.MeshLambertMaterial(this.buildMat(this.matSide))
            ]
        }
    });
})