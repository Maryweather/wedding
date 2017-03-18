$( "a.page-scroll" ).click(function( e ) {
  var hash = this.hash;

  e.preventDefault();

  $( "html, body" ).animate({
    scrollTop: $( hash ).offset().top,
  }, 300, function() {
    window.location.hash = hash;
  });
});
