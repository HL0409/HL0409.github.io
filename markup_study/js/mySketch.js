let liq1,liq2,liq3;
function setup() {
	var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
	myCanvas.parent('content_1');
	liq1 = new Liq();
	liq2 = new Liq();
	liq3 = new Liq();
}

function draw() {
	blendMode(BLEND);
	background(255);
	blendMode(MULTIPLY);
	noStroke();
	translate(width/2,height/2);
	
	fill(0,150,240);
	liq1.drawLiq();
	fill(128,0,325);
	liq2.drawLiq();
	fill(0,255,128);
	liq3.drawLiq();
}

function mouseClicked() {
	liq1.updateLiq();
	liq2.updateLiq();
	liq3.updateLiq();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

class Liq {
	constructor() {
		this.vNnum = 0;
		this.nm = 0;
		this.sm = 0;
		this.fcm = 0;

		// init
		this.updateLiq();
		mouseX = windowWidth / 2;
		mouseY = windowHeight / 2;
	}

	drawLiq() {
		push();
		rotate(frameCount / this.fcm);
		let dr = TWO_PI / this.vNnum;
		beginShape();
		for (let i = 0; i < this.vNnum + 3; i++) {
			let ind = i % this.vNnum;
			let rad = dr * ind;
			let r = height * 0.3 + noise(frameCount / this.nm + ind) * height * 0.1 + sin(frameCount / this.sm + ind) * height * 0.05;
			curveVertex(cos(rad) * r * mouseX / windowWidth, sin(rad) * r * mouseY / windowHeight);
		}
		endShape();
		pop();
	}

	updateLiq() {
		this.vNnum = int(random(10, 40));
		this.nm = int(random(10, 90));
		this.sm = int(random(10, 30));
		this.fcm = int(random(50, 250));
	}
}