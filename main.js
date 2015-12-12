//Author: James Adams

// var screenEnum = {
// 		initial:0,
// 		login:1,
// 		profile:2,
// 		calculator:3,
// }

//init stuff - enters here when page has been loaded/every time page is refreshed.
document.addEventListener("DOMContentLoaded", function() {		
      	  if (!sessionStorage['done']) {
       		sessionStorage['done'] = 'yes';
       		generate_initial_divs();
       		generate_form();
  		  }
});

//listeners.



//transfer functions

function login_to_profile() {
	//this can also be done by just deleted the form as in profile_to_login.
	x=document.getElementById("login");
	y=document.getElementById("login_form");
	x.removeChild(y);
	//do something here to add the profile page.
	txt="<p> potato <\p>";
	txt=txt+"<button onclick='return profile_to_login()'>Logout</button>"
	txt=txt+"<button onclick='return profile_to_calculator()'>Calculator</button>"
	$("#profile").append(txt);
}

function profile_to_calculator() {
	document.getElementById("profile").innerHTML="";
	var heading = document.createElement("h1");  // Create with DOM
    heading.innerHTML = "Calculator page!";
    button="<button onclick='return generate_calc()'>New Calculator</button>";
    $("#calc").append(heading,button);
    var calculators[];
    generate_calc();
}

function profile_to_login() {
	document.getElementById("profile").innerHTML="";
	generate_form();
}


//render functions

function generate_form() {
	//add stuff to form.
	txt="<form name='loginForm' id='login_form' onsubmit='return validateForm()' method='post'>\
	Username: <input type='text' name='uname'>\
	Password: <input type='password' name='pword'>\
	<input type='submit' value='login'>\
	</form>";
	$("#login").append(txt);

}

function generate_initial_divs() {
	login_div="<div id='login'> </div>";
	profile_div="<div id='profile'> </div>";
	calc_div="<div id='calc'> </div>"
	$("body").append(login_div,profile_div,calc_div);
}

//form validation
function validateForm() {
    var username = document.forms["loginForm"]["uname"].value;
    var password = document.forms["loginForm"]["pword"].value;
    if (username=="admin" && password == "admin") {
    	login_to_profile();
    	return false;
    }
    else {
    	//unsuccesful login, print error message
    	alert("Unsuccesful login. Please check your credentials, and try again.");
    	return false;
    }
}

//Calc functions/class/object

//use math library from mathjs.org
function Calc () {
	this.value=0;
}
 
Calc.prototype.parse = function(string) {
	this.value=math.eval(string);
};

function c(val)
{ 
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
  c(eval(document.getElementById("d").value)) 
}


function generate_calc() {
	var calc_num = calculators.length;
	//specialise the text.
	var text='';
$("#calc").append(text);
calculators[calc_num]=new Calc();
return false;
}



