define([
    'app/registry',
    'app/components/objects/block/tree/wood/block'
], function (Registry, WoodBlock) {
    'use strict';

    const WOOD_MAT_SIDE = 'material/wood/white/side.png';
    const WOOD_MAT_TOP = 'material/wood/white/top.png';

    return {
        position: {
            x: 1,
            y: 1,
            z: 1
        },

        draw: function () {
            this.drawWood();
        },

        /**
         * Draw woods.
         *
         * @return {void}
         */
        drawWood: function () {
            let wood = this.getWood();
            let xMap = this.woodMap();
            let offset = (xMap.length / 2) - this.position.x;
            let iter = this.position.y;
            for (let y = xMap.length - 1; y >= 0; y--) {
                for (let x = 0; x < xMap[y].length; x++) {
                    if (xMap[y][x] === 1) {
                        wood.position.x = x - offset;
                        wood.position.y = iter;
                        wood.draw();

                        // Draw mirror
                        wood.position.z = x - offset;
                        wood.position.x = this.position.x;
                        wood.position.y = iter;
                        wood.draw();
                        wood.position.z = this.position.z;
                    }
                }
                iter++;
            }
        },

        /**
         * Configure wood block.
         *
         * @returns {*}
         */
        getWood: function () {
            WoodBlock.matSide = WOOD_MAT_SIDE;
            WoodBlock.matTop = WOOD_MAT_TOP;

            return WoodBlock;
        },

        /**
         * Wood map.
         *
         * @returns {number[][]}
         */
        woodMap: function () {
            return [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            ]
        }
    }
})