//script JQuery para hacer aparecer con efecto fade las descripciones en la sección ¿Por qué elegirme?
$(".title-fade").on( "click", function() {
  $(this).next("p").fadeToggle( "slow", "linear" );
} );

//script JQuery para hacer aparecer con efecto slide las descripciones en la sección ¿Qué puedo hacer por ti?
$(".title-slide").on( "click", function() {
  $(this).next("p").slideToggle( "slow", "linear" );
} );
