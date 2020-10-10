

function bounceOff(no1, no2){
    if (no1.x - no2.x <= no2.width/2 + no1.width/2
      && no2.x - no1.x <= no2.width/2 + no1.width/2) {
        no1.velocityX = no1.velocityX * (-1);
        no2.velocityX = no2.velocityX * (-1);
    }
    if (no1.y - no2.y < no2.height/2 + no1.height/2
      && no2.y - no1.y < no2.height/2 + no1.height/2){
        no1.velocityY = no1.velocityY * (-1);
        no2.velocityY = no2.velocityY * (-1);
    }
  }
  
  function isTouching(no1, no2){
    if (no1.x - no2.x <= no2.width/2 + no1.width/2
      && no2.x - no1.x <= no2.width/2 + no1.width/2 
      && no1.y - no2.y < no2.height/2 + no1.height/2
      && no2.y - no1.y < no2.height/2 + no1.height/2)
      {
        return true
      } else {
        return false
      }

     }