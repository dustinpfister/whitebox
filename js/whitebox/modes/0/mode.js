// white box game mode 0 'cursor'

wb.addMode('0', function () {

    var modulo = function (x, m) {

        return (x % m + m) % m;

    };

    // return the phaser state object to be used
    return {

        create: function (game) {

            // create cursor sprite
            var gfx = game.data.cursor = wb.mkgfx({
                    w: 4,
                    pSize: 8,
                    f: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]
                });

            // start centered
            gfx.x = game.world.width / 2 - gfx.width / 2;
            gfx.y = game.world.height / 2 - gfx.height / 2;

        },

        update: function (game) {

            var gfx = game.data.cursor;

            gfx.x += 5;
			gfx.y += 7;

            // bounds
            gfx.x = modulo(gfx.x,game.world.width-gfx.width);
            gfx.y = modulo(gfx.y,game.world.height-gfx.height);

        }

    }

});
