
//console.log('clamp:');
//console.log(Phaser.Math.clamp(120, 0, 100));

//wrapValue(value, amount, max)

//console.log('wrap value');
//console.log(Phaser.Math.wrap(-15, 0, 100));

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

        var sprite = this.game.add.sprite(0, 0, 'logo', 0);
        sprite.x = this.game.world.centerX - sprite.width / 2;
        sprite.y = this.game.world.centerY - sprite.height / 2;

        this.data = {

            sprite: sprite,
            a: 0

        };

        console.log(sprite);

    },

    update: function () {

        var data = this.data,
        sprite = data.sprite;

		data.a += 0.001;
		
        sprite.x += Math.cos(data.a) * 1;
        sprite.y += Math.sin(data.a) * 1;

        sprite.x = Phaser.Math.wrap(sprite.x, -sprite.width, this.game.world.width);
        sprite.y = Phaser.Math.wrap(sprite.y, -sprite.height, this.game.world.height);

    }

})
