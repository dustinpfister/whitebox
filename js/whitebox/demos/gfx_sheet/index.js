
// Demo of how to make an animation with api.GFX
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

game.state.add('gfx', {

    create: function () {

        var gfx = new wb.GFX({
                game: game,
                palette: [null, 0x0000ff, 0x00ffff, 0x00ff00],
                width: 4,
                pxSize: 10,
                //sheet: true,
                layers: [
                    [3, 1, 1, 3,
                        1, 0, 0, 1,
                        1, 0, 0, 1,
                        3, 1, 1, 3],
                    [0, 0, 0, 0,
                        0, 2, 2, 0,
                        0, 2, 2, 0,
                        0, 0, 0, 0]
                ]
            });

        gfx.generateSheet({key:'foo'});
		
		var sprite = game.add.sprite(100,100,'foo',1);

    }

});

game.state.start('gfx');