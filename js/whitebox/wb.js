
// core white box module
var wb = (function () {

    var api = {

        // append a white box component
        appendComponent: function (component) {

            component.call(this);

        }

    };

    return api;

}
    ());

