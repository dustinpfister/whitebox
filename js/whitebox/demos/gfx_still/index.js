

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

game.state.add('gfx', {

    create: function () {

        console.log('C	reate Static gfx');

        var gfx = wb.GFX({
                game: game,
                palette: [0x0000ff, 0x00ffff, 0x00ff00],
                width: 4,
                pxSize: 10,
                layers: [
                    [0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0],

                    function (x, y, i) {

                        if (x == 1) {

                            return 2;

                        }

                        if (y == 1) {

                            return 1;

                        }

                        return -1;

                    }
                ]
            });

    }

});

game.state.start('gfx');
