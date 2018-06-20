wb.addMode('0', function () {

    console.log('factory called');

    return {

        create: function (game) {

            console.log('game mode 0 added!');

            var gfx = wb.mkgfx({
                    w: 4,
                    pSize: 4,
                    f: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]
                });

            console.log(gfx);

        }

    }

});
