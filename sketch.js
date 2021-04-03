

function setup(){
  createCanvas(1200,600);
  input=createInput().attribute("placeholder", "Enter your name ")
  input.position(450,230)
  bP=createButton("Submit")
  bP.position(500,270)
  bP.mousePressed(logic)
  
  
  
  }
  function draw(){
  background("white");
  
    
  }
  function logic(){
  input.hide()
  bP.hide()
  H=createElement("h1")
  H.html("Welcome, "+input.value() )
  H.position(425,10)
  A=createElement("h1")
  A.html("Choose the correct option of the following")
  A.position(300,50)
  B=createElement("h1")
  B.html("Questions ")
  B.position(425,100)
  C=createElement("h2")
  C.html("Q1) What is 1+1")
  C.position(50,200)
  D=createElement("h2")
  D.html("a) 2")
  D.position(50,250)
  E=createElement("h2")
  E.html("b) Root2Square")
  E.position(50,300)
  G=createElement("h2")
  G.html("c) 8")
  G.position(50,350)
  I=createElement("h2")
  I.html("d) None of the above")
  I.position(50,400)
  bp=createButton("SUBMIT")
  bp.position(100,550)
  bp.mousePressed(logic2)
  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(400,550)
  }
  function logic2(){
  H.hide()
  A.hide()
  B.hide()
  C.hide()
  D.hide()
  E.hide()
  G.hide()
  I.hide()
  bp.hide()
  output.hide()
  W=createElement("h1")
  W.html("YOUR ANSWERS")
  W.position(100,100)
  Q=createElement("h2")
  Q.html("Q1) "+output.value())
  Q.position(100,150)
  S=createElement("h1")
  S.html("CORRECT ANSWERS")
  S.position(100,300)
  E=createElement("h2")
  E.html("Q1) A")
  E.position(100,400)
  D=createElement("h1")
  D.html("THANK YOU FOR ATTENDING OUR QUIZ")
  D.position(50,500)
  }
  
  
  