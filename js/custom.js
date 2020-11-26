/* ===== JAVA SCRIPT START ==== */
		function myValidation(){
		var name = document.forms['contactform']['name'].value;
		var email = document.forms['contactform']['email'].value;
		var phone = document.forms['contactform']['phone'].value;
		var massage = document.forms['contactform']['massage'].value;
		
		
		var error =[];
		
		if(name =='' || name.length <3){
			error[0]="Name must be at least 3 letter!";
			document.getElementById('name-error').innerHTML = error[0];
		}else{
			document.getElementById('name-error').innerHTML = '';
		}		
		if(email =='' || email.length <10){
			error[1]=" PLEASE insert a valid Email!";
			document.getElementById('email-error').innerHTML = error[1];
		}else{
			document.getElementById('email-error').innerHTML = '';
		}		
		if(phone =='' || phone.length <11){
			error[2]="PLEASE insert a valid phone number!";
			document.getElementById('phone-error').innerHTML = error[2];
		}else{
			document.getElementById('phone-error').innerHTML = '';
		}		
		if(massage =='' || massage.length <30){
			error[3]="Massage must be at least 30 letter!";
			document.getElementById('massage-error').innerHTML = error[3];
		}else{
			document.getElementById('massage-error').innerHTML = '';
		}
		
		if(error.length >0){
			return false;
		}
			
		}
		function myFocus(x){
			x.style.background='#ffffffd9';
		}
/* ===== JAVA SCRIPT END ==== */


$(document).ready(function(){
	
	/* ===  MANU-BAR ACTIVE START === */
	$('#main-menu').on('click','li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
	/* === MANU-BAR START === */
	$('#mobile-icon').click(function(){
		
		$('#main-menu ul').slideToggle(1000);
	});
	
	$(window).resize(function(){
		if($(window).width() > 576){
			$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
	});
	
	
	
	/* === UPPER BUTTON SCROLL START === */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x >1000){
			$('#upper').fadeIn(1000);
			
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
	$('html').animate({scrollTop:0},2000);
		
	});
	
	
	
	
});