define([
    'app/components/light/items/point',
    'app/components/light/items/ambient'
], function (Point, Ambient){
    'use strict';

    const Lights = Object.entries(arguments);

    return {
        init: function () {
            Lights.some((light) => {
                light.pop().init();
            })
        }
    }
})