void setup() {
  size(500,500,P3D);
  smooth(5);
  strokeWeight(3);
  rectMode(CENTER);
  noFill();
  frameRate(60);
}
 
int N = 1080;
float R = 130, r = 55, rr;
float th, ph, l = PI*1.4;
float ll = .002;
int n = 4;
float t;
 
void draw() {
  t = (t + .002) % 1;
  background(250); 
  pushMatrix();
  translate(width/2, height/2);
  beginShape();
  for(int i=0; i<N; i++){
    th = TWO_PI*t + i*l/N;
    ph = n*th + 3*TWO_PI*t;
    rr = map(exp(-ll*(N-1-i)),1,exp(-ll*N),r,0);
    strokeWeight(map(exp(-.5*ll*(N-1-i)),1,exp(-.5*ll*N),5,.3));
    vertex(R*cos(th)+rr*cos(ph),R*sin(th)+rr*sin(ph));
  }
  endShape();
  popMatrix();
}

