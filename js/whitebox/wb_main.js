(function (w) {

    w.wb = w.wb || {};

    // phaser game instance
    var game = w.wb.game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

    // add game mode method
    w.wb.addMode = function (index, factory) {

        this.game.state.add('mode-' + index, factory());

    };

    w.wb.controlCursor = function () {

        var game = this.game;

        game.data.down = false;
        game.data.dx = 0;
        game.data.dy = 0;

        game.input.pointers.forEach(function (ptObj, i) {

            if (ptObj.active) {
                var a = Phaser.Point.angle(
                        new Phaser.Point(ptObj.x, ptObj.y),
                        new Phaser.Point(game.world.centerX, game.world.centerY));

                game.data.dx = Math.cos(a);
                game.data.dy = Math.sin(a);
                game.data.down = true;

            }

        });

    };

    // add boot state
    game.state.add('mode-select', {

        create: function (game, b) {

            game.data = {

                logo: game.add.graphics(16, 16)

            };

            var gfx = game.data.logo;

            gfx.beginFill(0xFF33ff);
            gfx.drawCircle(0, 0, 32);
            gfx.endFill();

            game.state.start('mode-boot');

        }

    });

    game.state.add('mode-boot', {

        create: function (game) {

            game.state.start('mode-0');

        }

    });

    // start boot state
    game.state.start('mode-select');

}
    (window));
