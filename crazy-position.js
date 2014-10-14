jQuery( document ).ready( function( $ ) {
  var nua = navigator.userAgent;
  var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
  var matches = nua.match( 'Android ([0-9])\.([0-9])' );
  if( is_android && matches && matches.length > 0 && parseInt( matches[ 1 ] ) <= 4 && parseInt( matches[ 2 ] ) <= 3 ) {
        $( 'body' ).addClass( 'crazy-position' );
    }
} );
