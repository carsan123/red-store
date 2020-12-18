// menu acordeon en dispositivos moviless
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
// menu acordeon en dispositivos moviless

// sudacordeon menu drop
$(function(){

  $('.accordionDrop').hide();
  $('.d-s-accordion').on('click', function(){
			$(this).next().slideToggle("slow");
	})
});
// sudacordeon menu drop

// search filtrador de elementos header right menu
function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("buscar-drop");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	  txtValue = a[i].textContent || a[i].innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
	  } else {
		a[i].style.display = "none";
	  }
	}
  };
  
  $(document).ready(function(){
	$(".navbar ul.menu > li > a").click(function(){
	  $(".navbar ul.menu li").removeClass("active")
	  $(this).parent().addClass("active");
	});
  });
  $(document).ready(function() {
	$("#options.dropdown").click(function() {
		$("ul.sub_menu").slideToggle(150);
	});
	$("#options.dropdown ul.sub_menu li").click(function() {
		$("div.title").text($(this).text());
	});
  });
  // search filtrador de elementos header right menu

// --------------------
// Cuenta Iniciar sesion  
	var LoginForm = document.getElementById("LoginForm");
	var RegForm = document.getElementById("RegForm");
	var Indicator = document.getElementById ("Indicator");
	
		function  login  () {
			RegForm.style.transform = "translateX(0px)";
			LoginForm.style.transform = "translateX(0px)";
			Indicator.style.transform = "translateX(0px)";
		};
	
		function register    () {
			RegForm.style.transform = "translateX(-300px)";
			LoginForm.style.transform = "translateX(-300px)";
			Indicator.style.transform = "translateX(100px)";
		};
// --------------------
// Cuenta Iniciar sesion  		


// ----------------
//  carousel options

$(document).ready(function(){
	$('#owl-news').owlCarousel({
		autoplay:false,
		loop:true,
		nav:true,
		dots:false,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			450:{
				items:2
			},
			600:{
				items:3
			},
			800:{
			items:4
			},
			1000:{
				items:6
			},
		}
	});
	
	$('#owl-destacados').owlCarousel({
		autoplay: false,
		// autoplayHoverPause: true,
		doots:true,
		loop:true,
		margin:20,
		nav:true,		
		responsive:{
			0:{
				items:1
			},
			450:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			},
		}
	});

	// owl categorias 
	$('#owl-categorias').owlCarousel({
		autoplay:false,
		loop:true,
		nav:true,
		dots:false,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			450:{
				items:2
			},
			600:{
				items:3
			},
			800:{
				items:4
			},
		}
	});
	
	$('#owl3').owlCarousel({
	autoplay: false,
	autoplayTimeout:5000,
	autoplayHoverPause: true,
	loop:false,
	dots:false,
	margin:10,
	nav:true,
	responsive:{
		0:{
			items:2
		},
		450:{
			items:3
		},
		600:{
			items:4
		},
		850:{
			items:5
		},
		1000:{
			items:7
		},
	}
	});

	$('#owl-banner').owlCarousel({
		autoplay: true,
		loop:true,
		autoplayTimeout:5000,
		dots:false,
		nav:true,
		responsive:{
			0:{
				items:1
			},
		}
		
	});

});

// ----------------
// ANIMACION AGREGAR ICONOS FAVORITO Y CARRO
// ----------------
$(document).ready(function(){
	$('.add-cart').on('click',function(){
	  
	  var button = $(this);
	  var cart = $('#ad-cart');
	  var cartTotal = cart.attr('data-totalitems');
	  var newCartTotal = parseInt(cartTotal) + 1;
	  
	  button.addClass('sendtocart');
	  setTimeout(function(){
		button.removeClass('sendtocart');
		cart.addClass('shake').attr('data-totalitems', newCartTotal);
		setTimeout(function(){
		  cart.removeClass('shake');
		},500)
	  },200)
	})
  });

  $(document).ready(function(){
	$('.ad-fav').on('click',function(){
	  
	  var button = $(this);
	  var fav = $('#ad-fav');
	  var favTotal = fav.attr('data-totalitems');
	  var newFavTotal = parseInt(favTotal) + 1;
	  
	  button.addClass('sendtofav');
	  setTimeout(function(){
		button.removeClass('sendtofav');
		fav.addClass('shake').attr('data-totalitems', newFavTotal);
		setTimeout(function(){
		  fav.removeClass('shake');
		},500)
	  },200)
	})
  });
// ----------------
// ANIMACION AGREGAR ICONOS FAVORITO Y CARRO
// ----------------  

/////////////////// product +/-
$(document).ready(function () {
	$(".num-in span").click(function () {
	  var $input = $(this).parents(".num-block").find("input.in-num");
	  if ($(this).hasClass("minus")) {
		var count = parseFloat($input.val()) - 1;
		count = count < 1 ? 1 : count;
		if (count < 2) {
		  $(this).addClass("dis");
		} else {
		  $(this).removeClass("dis");
		}
		$input.val(count);
	  } else {
		var count = parseFloat($input.val()) + 1;
		$input.val(count);
		if (count > 1) {
		  $(this).parents(".num-block").find(".minus").removeClass("dis");
		}
	  }
  
	  $input.change();
	  return false;
	});
  });
  // product +/-
 

  // galeria js funciones
function myFunction(smallImg) 
{
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}   



!function(t){"use strict";var n=!1,e=t.fn.val;function o(t,e){t.addEventListener("mousedown",function(t){t.preventDefault(),e(t)}),t.addEventListener("touchstart",function(t){t.cancelable&&t.preventDefault(),e(t)}),t.addEventListener("keydown",function(t){32!==t.keyCode||n||(n=!0,e(t))})}t.fn.val=function(t){return arguments.length>=1&&this[0]&&this[0]["bootstrap-input-spinner"]&&this[0].setValue&&this[0].setValue(t),e.apply(this,arguments)},
t.fn.InputSpinner=t.fn.inputSpinner=function(e){var a={decrementButton:"<strong>-</strong>",incrementButton:"<strong>+</strong>",groupClass:"",
buttonsClass:"btn-outline-primary",buttonsWidth:"auto",textAlign:"center",autoDelay:500,autoInterval:100,boostThreshold:10,boostMultiplier:"auto",locale:null};for(var r in e)a[r]=e[r];var i='<div class="input-group '+a.groupClass+'"><div class="input-group-prepend"><button style="min-width: '+a.buttonsWidth+'" class="btn btn-decrement '+a.buttonsClass+'" type="button">'+a.decrementButton+'</button></div><input type="text" style="text-align: '+a.textAlign+'" class="form-control"/><div class="input-group-append"><button style="min-width: '+a.buttonsWidth+'" class="btn btn-increment '+a.buttonsClass+'" type="button">'+a.incrementButton+"</button></div></div>",u=a.locale||navigator.language||"en-US";this.each(function(){var e=t(this);e[0]["bootstrap-input-spinner"]=!0,e.hide();var r=null,p=null,s="auto"===a.boostMultiplier,l=s?1:a.boostMultiplier,c=t(i),d=c.find(".btn-decrement"),m=c.find(".btn-increment"),f=c.find("input"),v=null,b=null,g=null,h=null,y=null;V();var x,E,w=new Intl.NumberFormat(u,{minimumFractionDigits:y,maximumFractionDigits:y}),F=parseFloat(e[0].value),M=0,I=e.attr("data-prefix")||"",N=e.attr("data-suffix")||"";if(I){var C=t('<span class="input-group-text">'+I+"</span>");c.find(".input-group-prepend").append(C)}if(N){var D=t('<span class="input-group-text">'+N+"</span>");c.find(".input-group-append").prepend(D)}function L(t,n){void 0===n&&(n=!0),isNaN(t)||""===t?(e[0].value="",n&&(f[0].value=""),F=0):(t=parseFloat(t),t=Math.min(Math.max(t,v),b),t=Math.round(t*Math.pow(10,y))/Math.pow(10,y),e[0].value=t,n&&(f[0].value=w.format(t)),F=t)}function T(t,n){n&&setTimeout(function(){var e;"function"==typeof Event?e=new Event(n,{bubbles:!0}):(e=document.createEvent("Event")).initEvent(n,!0,!0),t[0].dispatchEvent(e)})}function k(t){f[0].disabled||(B(t),S(),r=setTimeout(function(){p=setInterval(function(){M>a.boostThreshold?s?(B(t*parseInt(l,10)),l<1e8&&(l*=1.1),h&&(l=Math.min(h,l))):B(t*l):B(t),M++},a.autoInterval)},a.autoDelay))}function B(t){isNaN(F)&&(F=0),L(Math.round(F/t)*t+t),T(e,"input"),T(e,"change")}function S(){M=0,l=l=s?1:a.boostMultiplier,clearTimeout(r),clearTimeout(p)}function V(){f.prop("required",e.prop("required")),f.prop("placeholder",e.prop("placeholder"));var t=e.prop("disabled");f.prop("disabled",t),m.prop("disabled",t),d.prop("disabled",t),t&&S();var n=e.prop("class"),o="";/form-control-sm/g.test(n)?o="input-group-sm":/form-control-lg/g.test(n)&&(o="input-group-lg");var r=n.replace(/form-control(-(sm|lg))?/g,"");c.prop("class","input-group "+o+" "+a.groupClass),f.prop("class","form-control "+r),v=parseFloat(e.prop("min"))||0,b=isNaN(e.prop("max"))||""===e.prop("max")?1/0:parseFloat(e.prop("max")),g=parseFloat(e.prop("step"))||1,h=parseInt(e.attr("data-step-max"))||0;var i=parseInt(e.attr("data-decimals"))||0;y!==i&&(y=i,w=new Intl.NumberFormat(u,{minimumFractionDigits:y,maximumFractionDigits:y}))}e[0].setValue=function(t){L(t)},new MutationObserver(function(){V(),L(F,!0)}).observe(e[0],{attributes:!0}),e.after(c),L(F),f.on("paste input change focusout",function(t){var n,o,a,r,i=f[0].value,p="focusout"===t.type;n=i,o=new Intl.NumberFormat(u),a=o.format(1111).replace(/1/g,""),r=o.format(1.1).replace(/1/g,""),L(i=parseFloat(n.replace(new RegExp("\\"+a,"g"),"").replace(new RegExp("\\"+r),".")),p),T(e,t.type)}),o(d[0],function(){k(-g)}),o(m[0],function(){k(g)}),x=document.body,E=function(){S()},x.addEventListener("mouseup",function(t){E(t)}),x.addEventListener("touchend",function(t){E(t)}),x.addEventListener("keyup",function(t){32===t.keyCode&&(n=!1,E(t))})})}}(jQuery);

 $(".box-input  input[type='number']").inputSpinner()
//  input[type='number']
