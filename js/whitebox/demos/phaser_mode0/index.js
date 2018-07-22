
wb.addGameMode({

    index: 0,
    desc: 'cursor',
    create: function () {

        var gfx = new wb.GFX({
                game: wb.game,
                palette: [0x000000, 0xffffff],
                width: 5,
                pxSize: 1,
                layers: [
                    [   1, 0,0, 0, 1,
                        0, 0,1, 0, 0,
                        0, 1,1, 1, 0,
                        0, 0,1, 0, 0,
                        1, 0,0, 0, 1
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

})
