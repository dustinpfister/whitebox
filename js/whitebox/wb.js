var wb = (function () {

    var api = {};

    // The Graphics Helper
    /*
    var gfx = new wb.GFX({
        width: 4,
        pSize: 4,
        frames: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]
    })
     */

    api.GFX = function (opt) {

        opt = opt || {};

        opt.game = opt.game || new Phaser.Game();
        opt.palette = opt.palette || [0xffffff, 0x000000];
        opt.pxSize = opt.pxSize || 1;
        opt.frames = opt.frames || [1, 1, 1, 1, 0, 1, 1, 1, 1];
        opt.width = opt.width || 3;

        var gfx = game.add.graphics(0, 0);

        // for each px in the data.f array
        opt.frames.forEach(function (cIndex, i) {

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

        return gfx;

    };

    return api;

}());
