const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	if(checkInputs()){
		displaySuccessMessage();
	}
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	let isFormValid=true;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		isFormValid=false;
    }
        else if (!/^[a-zA-Z]+$/.test(usernameValue)) {
            setErrorFor(username, 'Username must contain only letters');
			isFormValid=false;
        }
        else if (usernameValue.length !== 7) {
            setErrorFor(username, 'Username must be exactly 7 characters long');
			isFormValid=false;
        }
    else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		isFormValid=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		isFormValid=false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		isFormValid=false;
	}else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10}$/.test(passwordValue)) {
        setErrorFor(password, 'invalid password');
		isFormValid=false;
    } 
    else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		isFormValid=false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		isFormValid=false;
	} else{
		setSuccessFor(password2);
	}
	return isFormValid;
}  

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function displaySuccessMessage() {
    alert('Form successfully submitted!');
}