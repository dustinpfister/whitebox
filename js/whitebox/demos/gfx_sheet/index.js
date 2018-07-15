
// Demo of how to make an animation with api.GFX
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

game.state.add('gfx', {

    create: function () {

        console.log('C	reate Static gfx');

        var gfx = wb.GFX({
                game: game,
                palette: [null,0x0000ff,0x00ffff],
                width: 4,
                pxSize: 10,
                layers: [[0, 1, 1, 0,
                          1, 2, 2, 1,
                          1, 2, 2, 1,
                          0, 1, 1, 0]]
            })

    }

});

game.state.start('gfx');
