$(function() {
	//  hide all errors, which will only show when called below
	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#email_error_message").hide();
	$("#phone_message").hide();

	var error_username = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
	var error_phone = false;
	
	//Excecute when the use click out of the box "focusout"
	$("#form_username").focusout(function() {

		check_username();
		
	});

	$("#form_password").focusout(function() {

		check_password();
		
	});

	$("#form_retype_password").focusout(function() {

		check_retype_password();
		
	});

	$("#form_email").focusout(function() {

		check_email();
		
	});
	$("#form_phone").focusout(function()
    {
        check_phone();
    });

	function check_username() {
	
		var username_length = $("#form_username").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_error_message").html("Your username must be between 5-20 characters");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
	
	}

	function check_password() {
	
		var password_length = $("#form_password").val().length;
		
		if(password_length < 8) {
			$("#password_error_message").html("Your password must be at least 8 characters");
			$("#password_error_message").show();
			error_password = true;
		} else {
			$("#password_error_message").hide();
		}
	
	}

	function check_retype_password() {
	
		var password = $("#form_password").val();
		var retype_password = $("#form_retype_password").val();
		
		if(password !=  retype_password) {
			$("#retype_password_error_message").html("Your passwords does not match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
		} else {
			$("#retype_password_error_message").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}
	function check_phone() {
        var phone_length = $("#form_phone").val().length;
        if(phone_length < 8) {
            $("#phone_error_message").html("Phone number must be 9-10 Numbers");
            $("#phone_error_message").show();
            error_phone = true;
        }
         else 
        {
            $("#phone_error_message").hide();
        }
    }


	$("#registration_form").submit(function() {
											
		error_username = false;
		error_password = false;
		error_retype_password = false;
		error_email = false;
		error_phone = false;
											
		check_username();
		check_password();
		check_retype_password();
		check_email();
		check_phone();
		
		if(error_username == false && error_password == false && error_retype_password == false && error_email == false && error_phone == false) {
			return true ;
		} else {
			return false;	
		}
	});

});