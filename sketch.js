var blob
var zoom = 1;
var blobsArray = [];

function setup() {
    createCanvas(600, 600);
    blob = new Blob(0, 0, 64);
    for (var i = 0; i < 1500; i++) {
        var x = random(-width, width);
        var y = random(-height, height);
        blobsArray[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(0);

    translate(width/2, height/2);
    var newzoom = 64 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);


    blob.show();
    blob.update();

    for (var i = blobsArray.length-1; i >= 0; i--) {
        blobsArray[i].show();
        if (blob.eats(blobsArray[i])) {
            // splice out of the array one element starting at index i
            blobsArray.splice(i, 1);
        }
    }
}
