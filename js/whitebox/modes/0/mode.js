wb.addMode('0', function () {

    console.log('factory called');

    return {

        create: function (game) {

            console.log('game mode 0 added!');

        }

    }

});
