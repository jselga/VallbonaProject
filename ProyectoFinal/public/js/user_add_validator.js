let user_add_control = {
    "name": [isAlphabet, "El nom no pot tenir numeros o simbols"],
    "email": [emailValidator, "Aquest correu electrònic no és valid"],
    "cicle_id": [madeSelection, "Cal escollir un cicle"],
    "rol_id": [madeSelection, "Cal escollir un rol"],
};


window.onload = function() {
    document.forms['addUserForm'].addEventListener("submit", formValidator);

    for (let x in user_add_control) {
        document.forms['addUserForm'][x].addEventListener("change", ErrorVisibility);
    }
};

function formValidator(e) {
    var result = true;
    var first_error = null;

    for (let x in user_add_control) {
        elem = document.forms['addUserForm'][x];

        if (!user_add_control[x][0](elem, user_add_control[x][1], user_add_control[x][2])) {
            result = false;
            if (first_error == null) {
                first_error = document.forms['addUserForm'][x];
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
    user_add_control[e.target.name][0](e.target, user_add_control[e.target.name][1]);
}

function tractarError(elem, noError, msgError){
    
    if (noError){
        elem.parentElement.classList = "col-md-10 col-sm-10"
        document.getElementById(elem.name + "-add-user-error").classList = "error"
        document.getElementById(elem.name + "-add-user-error").innerHTML = "";
    } else { 
        elem.parentElement.classList = "col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-user-error").classList = "error col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-user-error").innerHTML = msgError;
    }
}