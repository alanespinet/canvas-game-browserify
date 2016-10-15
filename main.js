var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bg = document.getElementById('bg');

var player = {
  x: 50,
  y: 50,
  width: 80,
  height: 80,
  imagen: document.getElementById('madurin'),
  update: function(){

  },
  render: function(){
    ctx.drawImage(player.imagen, player.x, player.y, player.width, player.height);
  }
};

function gameLoop(){
  //update, render all entities
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  window.requestAnimationFrame(gameLoop);
}

gameLoop();

import useKeyboard from './keyboard.js';
useKeyboard(player);
