

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

game.state.add('gfx', {

    create: function () {

        console.log('Create Static gfx');

        var gfx = wb.GFX({
                game: game,
                palette: [0xff0000, 0x00ff00, 0x0000ff],
                width: 4,
                pxSize: 10,
                frames: [0, 0, 0, 0,
                    0, 1, 1, 0,
                    0, 1, 1, 0,
                    0, 0, 0, 0]
            })

    }

});

game.state.start('gfx');
