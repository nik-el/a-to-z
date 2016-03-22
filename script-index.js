  
  
    /*
  popup
*/

var linkmap = document.querySelector(".nav__link--join");
var linkmapindex = document.querySelector(".content__link--join");
  var popup = document.querySelector(".join-us");
  var close = document.querySelector(".join-us__close");
  var closearea = document.querySelector(".join-us__closearea");
  
  linkmap.addEventListener("click", function(event) {
    event.preventDefault();
      console.log("Клик по ссылке вход");
    popup.classList.add("join-us--show");
  });
      linkmapindex.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("join-us--show");
  });
 
  
   close.addEventListener("click", function(event) {
    event.preventDefault();
     console.log("Клик по ссылке выход");
    popup.classList.remove("join-us--show");
  });
  
    closearea.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("join-us--show");
  });
  
  
    /*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
    
			$body.className = ( $body.className == 'menu-active body--bg' )? 'body--bg' : 'menu-active body--bg';
		});
	}

}).call(this);
