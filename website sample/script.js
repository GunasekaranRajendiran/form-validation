
function validateInput(input) {
  if (input.checkValidity()) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.nextElementSibling.style.display = 'none';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    input.nextElementSibling.style.display = 'block';
  }
}

function validateForm() {
  var form = document.querySelector('.login_form');
  var inputs = form.querySelectorAll('input[required]');
  var valid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      valid = false;
      validateInput(inputs[i]);
    }
  }
  return valid;
}




function validateForm() {
  var password = document.getElementById("password").value;
  if (!validatePassword(password)) {
    alert("Password is not valid. It must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.");
    return false;
  }
  // Continue with form submission if password is valid
  else{
 
        document.write("login successfull");
        window.location.href="login.html";     
    return true;
  }
   
  
  
}

function validatePassword(password) {
    // var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  return pattern.test(password);
}



