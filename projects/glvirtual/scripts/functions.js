//PARALLAX FUNCTION https://codepen.io/ScottMarshall/pen/qHBLn/
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('top',-(scrolled*0.1)+'px');
};

function activarFormulario(){
	var nombreUsuario = $("#nombre").val();
	var emailUsuario = $("#email").val();
		if(nombreUsuario.length > 0 && emailUsuario.length > 0){
			$("fieldset:nth-of-type(2)").show();
			$("fieldset:nth-of-type(2)>legend>span").html(nombreUsuario);
		}
}
var oldScroll = 0;
$(document).ready(function(){
	$(window).scroll(function(e){
		parallax();
		console.log(oldScroll + " " + this.scrollY);
		if(oldScroll < this.scrollY){
			$("nav").css("max-height", ".5vw");
		}else{
			$("nav").css("max-height", "50%");
		}
		oldScroll = this.scrollY;
	});
	$("#email").on("change", function(){
		activarFormulario();
	});
	$("#nombre").on("change", function(){
		activarFormulario();
	});
	$("input[type=radio][name=modalidad]").change(function() {
		$("fieldset:nth-of-type(3)").show();
	});

	$("#aceptaCookies, #leerCookies").on("click", function(){
		$("#modalCookie").hide();
		// Aquí hay que actualizar las cookies.
	});
});