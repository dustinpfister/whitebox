(function (w) {

    w.wb = w.wb || {};

    // phaser game instance
    var game = w.wb.game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

    // add game mode method
    w.wb.addMode = function (index, factory) {

        this.game.state.add(

            // a game mode just adds a single state,
            // eveything else should be part of a standard
            // framework inside whitebox
            'mode-' + index,

            // call the factory function of the mode,
            // and give a standard api to work with
            // when makeing a mode via the this keyword
            factory.call({

                game: game, // a reference to the Phaser game instance
                gfx: w.wb.gfx, // the whitebox graphics api

            }));

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
