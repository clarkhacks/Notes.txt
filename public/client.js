var comfyText = (function(){
  var tag = document.querySelectorAll('textarea')
  for (var i=0; i<tag.length; i++){
    tag[i].addEventListener('paste',autoExpand)
    tag[i].addEventListener('input',autoExpand)
    tag[i].addEventListener('keyup',autoExpand)
  }
  function autoExpand(e,el){
    var el = el || e.target
    el.style.height = 'inherit'
    el.style.height = el.scrollHeight+'px'
  }
  window.addEventListener('load',expandAll)
  window.addEventListener('resize',expandAll)
  function expandAll(){
    var tag = document.querySelectorAll('textarea')
    for (var i=0; i<tag.length; i++){
      var e;
      autoExpand(e,tag[i])
    }
  }
})()

$(function() {
  console.log('hello world :o');
  
  $.get('/notes', function(notes) {
    notes.forEach(function(note) {
      $('<li></li>').html('<a href\=\"' + note + '.txt">' + note + '.txt<\/a>').appendTo('ul#notes');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var note_text = $('textarea').val();
    var name_id = Math.floor(100000000 + Math.random() * 900000000);
    $.post('/notes?' + $.param({note: note_text, name: name_id}), function() {
      $('<li></li>').html('<a href\=\"/' + name_id + '.txt">/' + name_id + '.txt<\/a>').appendTo('ul#notes');
      $('textarea').val('');
      $('textarea').focus();
      window.location.href = window.location.href + "/" + name_id + ".txt"
    });
  });

});
