define([
    'app/registry'
], function (Registry) {
   'use strict';

   return {
       size: {
           x: 30,
           y: 30,
           offset: 15
       },
       material: 'material/snow/snow.png',

       draw: function () {
           for (let x = 0; x < this.size.x; x++) {
               for (let z = 0; z < this.size.y; z++) {
                   Registry.get('scene').add(this.create(x - this.size.offset, z - this.size.offset));
               }
           }
       },

       create: function (x, z) {
           const geometry = new THREE.PlaneGeometry(1, 1);
           const plane = new THREE.Mesh(geometry, this.getMaterial());
           plane.receiveShadow = true;
           plane.rotation.x = Math.PI / 2;
           plane.position.y = 0.5;

           plane.position.x = x;
           plane.position.z = z;

           return plane;
       },

       /**
        * Retrieve material.
        *
        * @returns {MeshLambertMaterial}
        */
       getMaterial: function()  {
           return new THREE.MeshLambertMaterial(
               {map: new THREE.TextureLoader().load(this.material), side: THREE.DoubleSide}
           )
       }
   }
});