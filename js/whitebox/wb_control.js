(function (w) {

    w.wb = w.wb || {};

    // basic cursor control
    w.wb.controlCursor = function () {

        var game = this.game;

        game.data.down = false;
        game.data.dx = 0;
        game.data.dy = 0;

        game.input.pointers.forEach(function (ptObj, i) {

            if (ptObj.active) {
                var a = Phaser.Point.angle(
                        new Phaser.Point(ptObj.x, ptObj.y),
                        new Phaser.Point(game.world.centerX, game.world.centerY));

                game.data.dx = Math.cos(a);
                game.data.dy = Math.sin(a);
                game.data.down = true;

            }

        });

    };

}
    (window));
