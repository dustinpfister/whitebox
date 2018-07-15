var wb = (function () {

    var api = {};

    // wb.GFX -
    // Make a phaser Graphics Display Object from one or more arrays of color index values
    // Or an
    api.GFX = function (opt) {

        opt = opt || {};

        opt.game = opt.game || new Phaser.Game();
        opt.palette = opt.palette || [0xffffff, 0x000000];
        opt.pxSize = opt.pxSize || 1;
        opt.layers = opt.layers || [[1, 1, 1, 1, 0, 1, 1, 1, 1]];
        opt.width = opt.width || 3;
        opt.sheet = opt.sheet || false; // is this a sprite sheet

        var gfx = game.add.graphics(0, 0);

        opt.layers.forEach(function (layer) {

            // use a function to create an array, or just use a literal array
            layer = layer.constructor.name === 'Function' ? (function () {

                    var i = 0,
                    len = opt.width * opt.width,
                    pxData = [];
                    while (i < len) {

                        var x = i % opt.width,
                        y = Math.floor(i / opt.width);

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

                xOff = opt.spriteSheet ? i * opt.w : 1;

                // if a cIndex value that is out of range, or if the color evaluates to false
                // then this will result in the transparent color
                if (cIndex >= 0 && cIndex <= opt.palette.length) {

                    if (!!opt.palette[cIndex]) {

                        // else it will be filled the color
                        gfx.beginFill(opt.palette[cIndex]);
                        gfx.drawRect(x * opt.pxSize * xOff, y * opt.pxSize, opt.pxSize, opt.pxSize);
                        gfx.endFill();

                    }

                }

            });

        });

        return gfx;

    };

    return api;

}
    ());
