
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background(rgb(153, 204, 255));
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(rgb(255, 153, 204));
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(rgb(255, 204, 153));
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(rgb(204, 255, 204));
  }


  
  drawSprites();
}

