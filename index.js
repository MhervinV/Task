function registrationForm(event) {
    var form = document.getElementById("registrationForm");
    var isEmailValid = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(document.getElementById("email").value.trim());
    var isPhoneNumberValid = /^\d{11}$/.test(document.getElementById("phone").value.trim());

    var areAllFieldsFilled = Array.from(form.elements).every(function (element) {
        if (element.tagName.toLowerCase() === 'select') {
            return element.value.trim() !== '';
        } else if (element.type !== 'text') {
            return true;
        }
        return element.value.trim() !== '';
    });

    if (areAllFieldsFilled && isEmailValid && isPhoneNumberValid) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            form.submit();
            showSuccessMessage();
        }
    } else {
        var errorMessage = 'Please correct the following errors before submitting: <br><br>';

        if (!areAllFieldsFilled) {
            errorMessage += '- All required fields must be filled out. <br>';
        }

        if (!isEmailValid) {
            errorMessage += '- Email address should ends with @gmail.com. <br>';
        }

        if (!isPhoneNumberValid) {
            errorMessage += '- Phone number should be a 11-digit number. <br>';
        }

        document.getElementById("error-message-container").innerHTML = errorMessage;
        openErrorModal();
    }
}

function openErrorModal() {
    var modal = document.getElementById("error-modal");
    modal.style.display = "block";
}

function closeErrorModal() {
    var modal = document.getElementById("error-modal");
    modal.style.display = "none";
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    registrationForm(event);
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    showSuccessMessage();
});

function showSuccessMessage() {
    alert("Well done! Form submitted successfully.");
}