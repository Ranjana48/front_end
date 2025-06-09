console.log("let's start");
// create object
let rect = {
  l: 10,
  b: 20,

  draw: function () {
    console.log("draw the rect");
  },
};

//factory function
function createRect() {
  return (rect = {
    l: 10,
    b: 20,

    draw: function () {
      console.log("draw the rect");
    },
  });
}

let a = function createRect() {};
