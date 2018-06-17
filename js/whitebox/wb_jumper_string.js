(function (w) {

    if (w.wb === undefined)
        w.wb = {};

    // pad string
    var pad = function (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };

    // Jumper String Class
    wb.JumperString = function (string) {

        // use given string, or default to all zeros
        this.string = string || '0000000000000000';

        // pad the string
        this.string = pad(string, 16, '0');

        // game mode is last three bits
        this.gameMode = parseInt(this.string.slice(13, 16), 2);

    };

}
    (window));
