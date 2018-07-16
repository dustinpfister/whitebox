

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

game.state.add('gfx', {

    create: function () {

        console.log('Create Static gfx');

        var gfx = new wb.GFX({
                game: game,
                palette: [0xff0000, 0x00ff00],
                width: 4,
                pxSize: 10,
                layers: [
                    [0, 0, 0, 0,
                     0, 1, 1, 0,
                     0, 1, 1, 0,
                     0, 0, 0, 0]
                ]
            });

    }

});

game.state.start('gfx');
