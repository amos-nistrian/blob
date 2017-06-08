/* blob object cinstructor */
function Blob(x, y, r) {
    // places the blob-vector on the screen
    this.pos = createVector(x, y);

    // store radius of Blob
    this.r = r;

    this.vel = createVector(0,0);

    // move the blob towards your mouse
    this.update = function() {
        var newvel = createVector(mouseX-width/2, mouseY-height/2);
        newvel.setMag(3);
        this.vel.lerp(newvel, 0.2);
        this.pos.add(this.vel);
    }

    this.eats = function(otherBlob) {
        var d = p5.Vector.dist(this.pos, otherBlob.pos);
        if (d < this.r + otherBlob.r) {
            // sum of the two areas of the blobs
            var sum = PI * this.r * this.r + PI * otherBlob.r * otherBlob.r;
            // Update radius
            this.r = sqrt(sum / PI);
            return true;
        }   else {
            return false;
        }
    }

    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}
