let contacte_add_control = {
    "name": [isAlphabet, "El nom no pot tenir números o símbols"],
    "empresa_id": [madeSelection, "Cal escollir una comarca"],
    "email": [emailValidatorOrNull, "Aquest correu electrònic no és valid"],
    "phonenumber": [isPhonenumberOrNull, "Aquest telèfon no es valid"]
};

window.onload = function() {
    document.forms['addContacteForm'].addEventListener("submit", formValidator);

    for (let x in contacte_add_control) {
        document.forms['addContacteForm'][x].addEventListener("change", ErrorVisibility);
    }
};

function formValidator(e) {
    var result = true;
    var first_error = null;

    for (let x in contacte_add_control) {
        elem = document.forms['addContacteForm'][x];

        if (!contacte_add_control[x][0](elem, contacte_add_control[x][1], contacte_add_control[x][2])) {
            result = false;
            if (first_error == null) {
                first_error = document.forms['addContacteForm'][x];
            }
        }
    }
    
    if (!result) {
        if (first_error != null) {
            first_error.focus();
        }
        e.preventDefault();
    }

    return result;
}

function ErrorVisibility(e){
    contacte_add_control[e.target.name][0](e.target, contacte_add_control[e.target.name][1]);
}

function tractarError(elem, noError, msgError){
    
    if (noError){
        elem.parentElement.classList = "col-md-10 col-sm-10"
        document.getElementById(elem.name + "-add-contacte-error").classList = "error"
        document.getElementById(elem.name + "-add-contacte-error").innerHTML = "";
    } else { 
        elem.parentElement.classList = "col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-contacte-error").classList = "error col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-contacte-error").innerHTML = msgError;
    }
}