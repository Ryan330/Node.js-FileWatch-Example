const file = require("file");

const print = function (what) {
    return "Hello: " + what;
}


file.watch("readme.md", function () {
    console.log(print("This is a message..."));
});