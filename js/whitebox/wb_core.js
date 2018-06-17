var wb = (function () {

    var api = {

        // current array of boxes to render
        bx: []

    };

    // set bx helper
    var set_bx = function () {

        // half width and height
        this.hw = this.w / 2;
        this.hh = this.h / 2;

        // center x, and y
        this.cx = this.x + this.hw;
        this.cy = this.y + this.hh;

    };

    // the Base Box Class
    var Box = function (obj) {

        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;
        this.r = obj.r;
        this.dx = obj.dx;
        this.dy = obj.dy;

        this.frame = 0;
        this.maxFrame = 100;
        this.per = 0;
        this.bias = 0;

        this.tick = obj.tick || function () {};

        // call set_bx helper
        // to set values like hh and cx
        set_bx.call(this);

    };

    // test box
    api.bx.push(new Box({

            x: 144,
            y: 104,
            w: 32,
            h: 32,
            r: 0,
            dx: 0,
            dy: 1,

            tick: function (user) {

                if (user.down) {

                    // user action
                    this.x = user.x;

                    if (this.x > 160 - this.hw + 100) {

                        this.x = 160 - this.hw + 100;

                    }

                    if (this.x < 160 - this.hw - 100) {

                        this.x = 160 - this.hw - 100;

                    }

                } else {

                    this.dx = 0;
                    this.dy = 0;
                    this.x = 160 - this.hw - 100 + 200 * this.bias;
                    this.y = 120 - this.hh;

                }

            }

        }));

    // What to do on a frame tick
    api.tick = function (user) {

        var i = 0,
        len = this.bx.length;

        user = user || {

            down: false,
            x: 0,
            y: 0

        };
        while (i < len) {

            var bx = this.bx[i];

            bx.per = bx.frame / bx.maxFrame;
            bx.bias = Math.abs(.5 - bx.per) / .5;

            // call it's tick method first
            bx.tick(user);

            // update pos
            bx.x += bx.dx;
            bx.y += bx.dy;

            bx.frame += 1;
            bx.frame %= bx.maxFrame;

            i += 1;
        }

    };

    return api;

}
    ());
