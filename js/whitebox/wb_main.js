(function (w) {

    w.wb = w.wb || {};

    // phaser game instance
    var game = w.wb.game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

    // add game mode method
    w.wb.addMode = function (index, factory) {

        this.game.state.add('mode-' + index, factory());

    };

    // add boot state
    game.state.add('mode-select', {

        create: function (game, b) {

            console.log('mode-select');
            console.log(game.data);

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
