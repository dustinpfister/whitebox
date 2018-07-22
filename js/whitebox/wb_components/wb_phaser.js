
// The wb phaser wrapper
wb.appendComponent(function () {

    var wb = this;

    // main wb phaser game instance
    this.game = new Phaser.Game(320, 240, Phaser.AUTO, 'whitebox');

    // default state
    this.game.state.add('default', {

        create: function () {

            var gfx = new wb.GFX({
                    game: wb.game,
                    palette: [0x000000, 0xffffff],
                    width: 16,
                    pxSize: 16,
                    layers: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                            0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
                            0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0,
                            0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
                            0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0,
                            0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
                            0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
                            0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
                            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

                        ]
                    ]
                });

            // gen sheet
            gfx.generateSheet({
                key: 'logo'
            });

            var sprite = this.game.add.sprite(0, 0, 'logo', 0);
            sprite.x = this.game.world.centerX - sprite.width / 2;
            sprite.y = this.game.world.centerY - sprite.height / 2;

        }

    });

    // set the given game mode
    this.addGameMode = function (mode) {

        this.game.state.add('mode' + mode.index, {

            create: mode.create,
            update: mode.update

        });

        // just start the mode for now
        this.game.state.start('mode' + mode.index);

    };

    // start the default state
    this.game.state.start('default');

});
