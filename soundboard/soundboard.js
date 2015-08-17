soundManager.setup({
  url: '/swf',
  flashVersion: 9,
  onready: function() {}
});


window.onload = function() {

var clams = document.getElementById('clams')
var plump = document.getElementById('plump')
var tart = document.getElementById('tart')
var marinades = document.getElementById('marinades')
var tenderising = document.getElementById('tenderising')
var flan = document.getElementById('flan')

player(clams, 'clams');
player(plump, 'plump');
player(tart, 'tart');
player(marinades, 'marinades');
player(tenderising, 'tenderising');
player(flan, 'flan');

function player(location, title) {
  location.addEventListener('click', function(){
    var sound = soundManager.createSound({
      id: title,
      url: 'audio/audio-'+title+'.mp3',
    });
    sound.play()
  })
}

}
