var wb = (function () {

    var api = {};

    // wb.GFX -
    // Make a phaser Graphics Display Object from one or more arrays of color index values
    // Or an
    api.GFX = function (opt) {

        opt = opt || {};

        this.game = opt.game || new Phaser.Game();
        this.palette = opt.palette || [0xffffff, 0x000000];
        this.pxSize = opt.pxSize || 1;
        this.layers = opt.layers || [[1, 1, 1, 1, 0, 1, 1, 1, 1]];
        this.width = opt.width || 3;
        this.sheet = opt.sheet || false; // is this a sprite sheet

        var dispObj = game.add.graphics(0, 0);

		let gfx = this;
        this.layers.forEach(function (layer,li) {

            // use a function to create an array, or just use a literal array
            layer = layer.constructor.name === 'Function' ? (function () {

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

            // for each pxData value in the layer / frame
            layer.forEach(function (cIndex, i) {

                var x = i % opt.width,
                y = Math.floor(i / opt.width),

                // treat as frames rather than layers?
                xOff = opt.sheet ? li * opt.width * opt.pxSize : 0;

                // if a cIndex value that is out of range, or if the color evaluates to false
                // then this will result in the transparent color
                if (cIndex >= 0 && cIndex <= opt.palette.length) {

                    if (!!opt.palette[cIndex]) {

                        // else it will be filled the color
                        dispObj.beginFill(gfx.palette[cIndex]);
                        dispObj.drawRect(x * gfx.pxSize + xOff, y * gfx.pxSize, gfx.pxSize, gfx.pxSize);
                        dispObj.endFill();

                    }

                }

            });

        });

        //return dispObj;

    };

    return api;

}
    ());
