function formValidation()
{
	/*var name=document.forms.['registration']['uname'];
	or
	var name=document.getElementById('uname').value;
    or*/

var uid = document.registration.userid;
var passid = document.registration.passid;
var uzip = document.registration.zip;
var age=document.registration.age
var panid=document.registration.panid;
var phoneno=document.registration.phoneno;
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allnumeric(uzip))
{
if(allnumeric(uage))

{
if(panid_validation(panid)){
if(allnumeric(phoneno){

}
}
}

}
}
}
return false;
} 

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}


function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}


function allnumeric(uzip)
{ 
var numbers = /^[0-9]{6}$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function allnumeric(age)
{
	var numbers=age.value.length;
	if(age<0||age < 1 || age > 100 || isNaN(age))
	{
		return true;
	}
	else{
		return false;
	}
}

function panid_validation(panid,mx,my)
{
var panid =(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
if(panid.value.match(pan))
{
alert("Panid should not be empty / length be between "+mx+" to "+my);
panid.focus();
return false;
}
return true;
}

function allnumeric(phoneno)
{ 
var number = /^[8-9][0-9]{9}$/;;
if(phoneno.value.match(numbers))
{
return true;
}
else
{
alert('Phone no must have numeric characters only');
phoneno.focus();
return false;
}
window.location.reload()
}

