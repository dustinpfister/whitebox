
console.log('clamp:');
console.log(Phaser.Math.clamp(120, 0, 100));

wb.addGameMode({

    index: 0,
    desc: 'cursor',
    create: function () {

        var gfx = new wb.GFX({
                game: wb.game,
                palette: [0x000000, 0xffffff],
                width: 5,
                pxSize: 4,
                layers: [
                    [1, 0, 0, 0, 1,
                        0, 0, 1, 0, 0,
                        0, 1, 1, 1, 0,
                        0, 0, 1, 0, 0,
                        1, 0, 0, 0, 1
                    ]
                ]
            });

        // gen sheet
        gfx.generateSheet({
            key: 'logo'
        });

        console.log(this);

        var sprite = this.game.add.sprite(0, 0, 'logo', 0);
        sprite.x = this.game.world.centerX - sprite.width / 2;
        sprite.y = this.game.world.centerY - sprite.height / 2;

        this.data = {

            sprite: sprite

        };

    },

    update: function () {

        var sprite = this.data.sprite;

        sprite.x += 1;

        sprite.x = Phaser.Math.clamp(sprite.x, 0, this.game.world.width - sprite.width);

    }

})
