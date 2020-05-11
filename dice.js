var dice = {
    roll: function() {
      var randomNumber = Math.floor(Math.random()*6)+1;
     return randomNumber;
    }
  }
  
  function printNumber(number) {
    var cube = document.getElementById('cube');
    cube.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  


  

