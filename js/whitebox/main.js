(function () {

    // USER INPUT VALUES
    var user = {

        down: false,
        x: 0,
        y: 0

    };

    // CONTAINER
    // get container element
    var container = document.body;
    if (document.getElementById('whitebox')) {

        container = document.getElementById('whitebox');

    }

    // CANVAS
    // create, and inject the canvas
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    // default canvas settings
    canvas.width = 320;
    canvas.height = 240;

    // CANVAS EVENTS
    canvas.addEventListener('mousedown', function (e) {

        var bx = e.target.getBoundingClientRect(),
        x = e.clientX - bx.left,
        y = Math.floor(e.clientY - bx.top);

        user.down = true;
        user.x = x;
        user.y = y;

    });

    canvas.addEventListener('mousemove', function (e) {

        var bx = e.target.getBoundingClientRect(),
        x = e.clientX - bx.left,
        y = Math.floor(e.clientY - bx.top);

        if (user.down) {

            user.x = x;
            user.y = y;

        }

    });

    canvas.addEventListener('mouseup', function (e) {

        user.down = false;

    });

    canvas.addEventListener('mouseout', function (e) {

        user.down = false;

    });

    // canvas draw method
    var draw = function () {

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ffffff';
        wb.bx.forEach(function (bx) {

            ctx.fillRect(bx.x, bx.y, bx.w, bx.h);

        });

    };

    // MAIN LOOP
    var loop = function () {

        requestAnimationFrame(loop);
        wb.tick(user);
        draw();

    };

    loop();

}
    ());
