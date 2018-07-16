var wb = (function () {

    var api = {};

    // wb.GFX -
    // Make a phaser Graphics Display Object from one or more arrays of color index values
    // Or an
    api.GFX = (function () {

        var GFX = function (opt) {

            opt = opt || {};

            this.game = opt.game || new Phaser.Game();
            this.palette = opt.palette || [0xffffff, 0x000000];
            this.pxSize = opt.pxSize || 1;
            this.layers = opt.layers || [[1, 1, 1, 1, 0, 1, 1, 1, 1]];
            this.width = opt.width || 3;
            this.sheet = opt.sheet || false; // is this a sprite sheet?
            this.dispObj = game.add.graphics(0, 0);

            let gfx = this;

            // run any methods that are given in place of
            // literal arrays
            this.buildLayers();

            // for all layers/frames
            this.processDispObj();

        };

        // run over layers, and call any methods to make a pure array of color index values
        GFX.prototype.buildLayers = function () {

            var gfx = this;

            this.layers = this.layers.map(function (layer, li) {

                    // use a function to create an array, or just use a literal array
                    return layer.constructor.name === 'Function' ? (function () {

                        var i = 0,
                        len = gfx.width * gfx.width,
                        pxData = [];
                        while (i < len) {

                            var x = i % gfx.width,
                            y = Math.floor(i / gfx.width);

                            pxData.push(layer(x, y, i));

                            i += 1;

                        }

                        return pxData;

                    }
                        ()) : layer;

                });

        };

        // process the display object from the layers array
        GFX.prototype.processDispObj = function () {

            var gfx = this;

            // clear the display object
            this.dispObj.clear();

            this.layers.forEach(function (layer, li) {

                // for each pxData value in the layer / frame
                layer.forEach(function (cIndex, i) {

                    var x = i % gfx.width,
                    y = Math.floor(i / gfx.width),

                    // treat as frames rather than layers?
                    xOff = gfx.sheet ? li * gfx.width * gfx.pxSize : 0;

                    // if a cIndex value that is out of range, or if the color evaluates to false
                    // then this will result in the transparent color
                    if (cIndex >= 0 && cIndex <= gfx.palette.length) {

                        if (!!gfx.palette[cIndex]) {

                            // else it will be filled the color
                            gfx.dispObj.beginFill(gfx.palette[cIndex]);
                            gfx.dispObj.drawRect(x * gfx.pxSize + xOff, y * gfx.pxSize, gfx.pxSize, gfx.pxSize);
                            gfx.dispObj.endFill();

                        }

                    }

                });

            });

        };

        // create a sprite sheet, and add to cache
        GFX.prototype.generateSheet = function (options) {

            option = options || {};

            var texture = this.dispObj.generateTexture();

            this.sheet = true;

            // for all layers/frames
            this.processDispObj();

            // add to cache
            this.game.cache.addSpriteSheet('sheet', null, texture.baseTexture.source, this.width, this.width, this.layers.length, 0, 0);

            // return the sheet
            return this.game.cache._cache.image['sheet'];

        };

        return GFX;

    }
        ());

    return api;

}
    ());
