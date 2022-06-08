$(function () {
  // auto-complete
  var availableTags = [
    'ActionScript',
    'AppleScript',
    'Asp',
    'BASIC',
    'C',
    'C++',
    'Clojure',
    'COBOL',
    'ColdFusion',
    'Erlang',
    'Fortran',
    'Groovy',
    'Haskell',
    'Java',
    'JavaScript',
    'Lisp',
    'Perl',
    'PHP',
    'Python',
    'Ruby',
    'Scala',
    'Scheme',
  ]
  $('#tags').autocomplete({
    source: availableTags,
  })




  //date
  let showDate=()=>{
      return new Date();
  }

//toggle show/hide
$("#date_hide").html(showDate())
$("#show_hide_toggler").click(function(){
    $("#date_hide").toggle(1000)
})


})
