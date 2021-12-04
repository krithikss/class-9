var b1,b2,b3,b4

var i1,i2

var n1,n2

function setup() {
  createCanvas(400, 400);
  b1 = createButton("Add")
  b1.position(10,200)
  b1.mousePressed(add)

  b2 = createButton("subtract")
  b2.position(100,200)
  b2.mousePressed(sub)

  b3 = createButton("multiply")
  b3.position(200,200)
  b3.mousePressed(mul)

  b4 = createButton("divide")
  b4.position(300,200)
  b4.mousePressed(div)

  i1 = createInput()
  i1.position(5,60)

  i2 = createInput()
  i2.position(200,60)
}

function draw() {
  background("grey");

  n1 = parseInt(i1.value())
  n2 = parseInt(i2.value())
}

function add(){
  console.log(n1+n2)
}

function sub(){
  console.log(n1-n2)
}

function mul(){
  console.log(n1*n2)
}

function div(){
  console.log(n1/n2)
}