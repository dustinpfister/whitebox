
var xMax = 100,
xMin = 0,
x = -15;
console.log(Phaser.Math.wrap(x, xMin, xMax)); // 85

wb.addGameMode({

    index: 0,
    desc: 'cursor',

    data: {
        sprite: null,
        a: 0,
        delta: 0
    },

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

        var sprite = this.data.sprite = this.game.add.sprite(0, 0, 'logo', 0);
        sprite.x = this.game.world.centerX - sprite.width / 2;
        sprite.y = this.game.world.centerY - sprite.height / 2;

    },

    update: function () {

        var data = this.data,
        sprite = data.sprite;

        //data.a += 0.001;

        data.delta = 0;
        if (this.input.left) {

            data.a = Math.PI;
            data.delta = 1;

        }
        if (this.input.right) {

            data.a = 0;
            data.delta = 1;

        }

        if (this.input.up) {

            data.a = -Math.PI/2;
            data.delta = 1;

        }
        if (this.input.down) {

            data.a = Math.PI/2;
            data.delta = 1;

        }

        sprite.x += Math.cos(data.a) * data.delta;
        sprite.y += Math.sin(data.a) * data.delta;

        sprite.x = Phaser.Math.wrap(sprite.x, -sprite.width, this.game.world.width);
        sprite.y = Phaser.Math.wrap(sprite.y, -sprite.height, this.game.world.height);

    }

})
