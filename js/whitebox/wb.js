var wb = (function () {

    var api = {};

    // wb.GFX - Make a phaser Graphics Display Object from an array of color index values
    /*
    var gfx = wb.GFX({
    game: game,
    palette: [0x0000ff, 0x00ffff],
    width: 4,
    pxSize: 10,
    data: [-1, 0, 0, -1,
    0, 1, 1, 0,
    0, 1, 1, 0,
    -1, 0, 0, -1]
    })
     */

    api.GFX = function (opt) {

        opt = opt || {};

        opt.game = opt.game || new Phaser.Game();
        opt.palette = opt.palette || [0xffffff, 0x000000];
        opt.pxSize = opt.pxSize || 1;
        opt.layers = opt.layers || [[1, 1, 1, 1, 0, 1, 1, 1, 1]];
        opt.width = opt.width || 3;

        var gfx = game.add.graphics(0, 0);

        opt.layers.forEach(function (layer) {

            // for each px in the data.f array
            layer.forEach(function (cIndex, i) {

                var x = i % opt.width,
                y = Math.floor(i / opt.width);

                // and cIndex value that is out of range, will be transparent
                if (cIndex >= 0 && cIndex <= opt.palette.length) {

                    // else it will be filled the color
                    gfx.beginFill(opt.palette[cIndex]);
                    gfx.drawRect(x * opt.pxSize, y * opt.pxSize, opt.pxSize, opt.pxSize);
                    gfx.endFill();

                }

            });

        });

        return gfx;

    };

    return api;

}
    ());
