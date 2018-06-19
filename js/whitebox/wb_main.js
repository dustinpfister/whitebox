(function (w) {

    w.wb = w.wb || {};

    // phaser game instance
    var game = w.wb.game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

    // add boot state
    game.state.add('firmware', {

        create: function (game, b) {

            console.log('firmware');
            console.log(game.data);

            game.data = {

                logo: game.add.graphics(16, 16),

            };

            var gfx = game.data.logo;

            gfx.beginFill(0xFF33ff);
            gfx.drawCircle(0, 0, 32);
            gfx.endFill();

        }

    });

    // start boot state
    game.state.start('firmware');

}
    (window));
