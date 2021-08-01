define([
    'app/components/objects/block/tree/red-white/model',
    'app/components/objects/block/grass/model'
], function (RedWhite, PlaneGrass){
    'use strict';

    const Geometries = Object.entries(arguments);

    return {
        init: function () {
            Geometries.some((geometry) => {
                geometry.pop().draw();
            })
        }
    }
})