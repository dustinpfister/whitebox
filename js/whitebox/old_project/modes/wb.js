var wb = (function () {

    // the api to be returned to the wb global
    var api = {};

    // The GFX Class
    api.GFX = function (data) {

        // should be there
        var game = this.game,
        palette = [0x000000, 0xffffff],
        pxSize = 1,
        gfx = game.add.graphics(0, 0);

        pxSize = data.pSize || 1;

        // for each px in the data.f array
        data.f.forEach(function (cIndex, i) {

            var x = i % data.w,
            y = Math.floor(i / data.w);

            gfx.beginFill(palette[cIndex]);
            gfx.drawRect(x * pxSize, y * pxSize, pxSize, pxSize);
            gfx.endFill();

        });

        return gfx;

    };

    // return the api
    return api;

});
