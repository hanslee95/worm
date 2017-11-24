// *blonde Worms* I took visual inspiration from the album "blonde" by Frank Ocean. I wanted to generate some kind of 
// art animation (worms) when holding down your mouse. To make the worms "alive" I had to use Perlin noise which basically makes 
// the worms move seemingly random but in a smooth way. I tried to re-write the redundant code in an array but I couldn't figure 
// out why it wouldn't let me produce the same results? At the end of the day, I understand my style here is bad, but I wanted to 
// move on from this project. One day I'll come back and figure out a cleaner way of writing this algorithm
// (click and hold the mouse and move from one side to the other to see difference color themes.)


// ////////////////////////////Variables///////////////////////////////////////////////////////////////////////////
var t;
var count;
// ////////////////////////////Functions///////////////////////////////////////////////////////////////////////////

// every time you click and let go, and click again, add more worms!!!! put for loop and add different size arrays in it
function setup() {
	createCanvas(windowWidth, windowHeight);
	// added here so it doesnt keep reseting the perlin noise values in draw()
	t = 0;
	// determine the next color theme.
	count = 0;	
}

function draw() {
	var w1 = new Worms(mouseX, mouseY, t+1);
	var w2 = new Worms(mouseX, mouseY, t+100);
	var w3 = new Worms(mouseX, mouseY, t+200);
	var w4 = new Worms(mouseX, mouseY, t+300);
	var w5 = new Worms(mouseX, mouseY, t+400);
	var w6 = new Worms(mouseX, mouseY, t+500);
	var w7 = new Worms(mouseX, mouseY, t+600);
	var w8 = new Worms(mouseX, mouseY, t+700);
	var w9 = new Worms(mouseX, mouseY, t+800);
	var w10 = new Worms(mouseX, mouseY, t+900);
	var w11 = new Worms(mouseX, mouseY, t+1000);
	var w12 = new Worms(mouseX, mouseY, t+1100);
	var w13 = new Worms(mouseX, mouseY, t+1200);
	var w14 = new Worms(mouseX, mouseY, t+1300);
	var w15 = new Worms(mouseX, mouseY, t+1400);

	// If mouse is right side of screen (worms are crazy, does not behave relative to mouse,)
	if(mouseX >= windowWidth/2 && count % 2 != 0) {
		// orange/black worms
		background(254, 183, 25,20);
		if(mouseIsPressed) {
			w1.show3();
			w2.show3();
			w3.show3();
			w4.show3();
			w5.show3();
			w6.show3();
			w7.show3();
			w8.show3();
			w9.show3();
			w10.show3();
			w11.show3();
			w12.show3();
			w13.show3();
			w14.show3();
			w15.show3();
			t = t + .009;
		}
	}

	if(mouseX >= windowWidth/2 && count % 2 == 0) {
		// red/yellow worms
		background(229,0,4,35,20);
		if(mouseIsPressed) {
			w1.show2();
			w2.show2();
			w3.show2();
			w4.show2();
			w5.show2();
			w6.show2();
			w7.show2();
			w8.show2();
			w9.show2();
			w10.show2();
			w11.show2();
			w12.show2();
			w13.show2();
			w14.show2();
			w15.show2();
			t = t + .009;
		}
	}

	// if mouse is on left side of screen. listens to mouse, behaves to mouse
	if(mouseX < windowWidth/2 && count % 2 != 0) {
		// green/white worms
		background(0,173,123,20);
		if(mouseIsPressed) {
			w1.show4();
			w2.show4();
			w3.show4();
			w4.show4();
			w5.show4();
			w6.show4();
			w7.show4();
			w8.show4();
			w9.show4();
			w10.show4();
			w11.show4();
			w12.show4();
			w13.show4();
			w14.show4();
			w15.show4();
			t = t + .009;
		}
	}

	if(mouseX < windowWidth/2 && count % 2 == 0){
		// blue/red worms
		background(121, 247, 216, 20);
		if(mouseIsPressed) {
			w1.show1();
			w2.show1();
			w3.show1();
			w4.show1();
			w5.show1();
			w6.show1();
			w7.show1();
			w8.show1();
			w9.show1();
			w10.show1();
			w11.show1();
			w12.show1();
			w13.show1();
			w14.show1();
			w15.show1();
			// how much it should move
			t = t + .009;	
		}
	}

	textAlign(CENTER);
	textStyle(ITALIC);
	textSize(100);
	text("blonde", windowWidth/2, windowHeight/3);
	text("blonde", windowWidth/2, windowHeight/2);
	text("blonde", windowWidth/2, windowHeight/1.5);
}

// after releasing mouse, change color theme.
function mouseReleased() {
	count++;
}

// ////////////////////////////Worms Class ///////////////////////////////////////////////////////////////////////////
class Worms {

	constructor(mx, my, mt) {
		this.size = 20;
		this.t = mt;
		// multiply by width and height so worm is always in webpage. making it move.
		// the noise makes it so it's in random but organic motion. Values jump in smaller differences in perlin noise
		this.x = mx * 1.7 * noise(this.t);
		this.y = my * 1.7 * noise(this.t + 20);
	}
	// red
	show1() {
		noStroke();

		fill(229,0,4);
		ellipse(this.x, this.y, this.size, this.size);
		// strokeWeight(10);
		// stroke(this.r, this.g, this.b, 50 );
		// line(this.x, this.y, pmouseX, pmouseY);
	}
	// yellow
	show2() {
		noStroke();
		fill(254, 183, 25);
		ellipse(this.x, this.y, this.size, this.size);
	}

	// black
	show3() {
		noStroke();
		fill(0);
		ellipse(this.x, this.y, this.size, this.size);
	}
	// white
	show4() {
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.size, this.size);
	}	
}

// ////////////////////////////Resize window function //////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}