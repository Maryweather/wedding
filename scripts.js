$( "a.page-scroll" ).click(function( e ) {
  var hash = this.hash;

  e.preventDefault();

  $( "html, body" ).animate({
    scrollTop: $( hash ).offset().top,
  }, 300, function() {
    window.location.hash = hash;
  });
});

$( document ).scroll(function( e ) {
  var screenTop = window.pageYOffset;

  $( "section" ).each(function() {
    var sectionTop = $( this ).offset().top;
    var sectionBottom = sectionTop + $( this ).height();
    var hash = "#" + $( this ).prop( "id" );

    if ( sectionTop < screenTop && sectionBottom > screenTop && window.location.hash !== hash ) {
      history.replaceState && history.replaceState( null, null, hash );
      $( "a[href^='#']" ).removeClass( "active" );
      hash === '#' || $( "a[href^='" + hash + "']" ).addClass( "active" );
    }
  });
});

var weddingDate = new Date( "June 5, 2017 13:45:00" ).getTime();
var $weddingCountdown = $( "#wedding-countdown" );

var interval = setInterval( updateCountdown, 1000 );

function updateCountdown() {
  var now = new Date().getTime();
  var distance = weddingDate - now;
  var days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
  var hours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24) ) / ( 1000 * 60 * 60 ) );
  var minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  var seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

  $weddingCountdown.text(
    ( days > 0 ? days + " jours et " : "" ) +
    ( hours > 0 ? hours + " heures " : "" ) +
    ( minutes > 0 ? minutes + " minutes " : "" ) +
    ( seconds > 0 ? seconds + " secondes " : "" )
  );

  if ( distance < 0 ) {
    clearInterval( interval );
    $weddingCountdown.text( "..." );
  }
}

updateCountdown();
