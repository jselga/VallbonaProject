let cicle_add_control = {
    "shortname": [isAlphabet, "El acronim no pot tenir numeros o simbols"],
    "name": [isAlphabet, "El nom no pot tenir numeros o simbols"],
};


window.onload = function() {
    document.forms['addCicleForm'].addEventListener("submit", formValidator);

    for (let x in cicle_add_control) {
        document.forms['addCicleForm'][x].addEventListener("change", ErrorVisibility);
    }
};

function formValidator(e) {
    var result = true;
    var first_error = null;

    for (let x in cicle_add_control) {
        elem = document.forms['addCicleForm'][x];

        if (!cicle_add_control[x][0](elem, cicle_add_control[x][1], cicle_add_control[x][2])) {
            result = false;
            if (first_error == null) {
                first_error = document.forms['addCicleForm'][x];
            }
        }
    }
    
    if (!result) {
        first_error.focus();
        e.preventDefault();
    }

    return result;
}

function ErrorVisibility(e){
    cicle_add_control[e.target.name][0](e.target, cicle_add_control[e.target.name][1]);
}

function tractarError(elem, noError, msgError){
    
    if (noError){
        elem.parentElement.classList = "col-md-10 col-sm-10"
        document.getElementById(elem.name + "-add-cicle-error").classList = "error"
        document.getElementById(elem.name + "-add-cicle-error").innerHTML = "";
    } else { 
        elem.parentElement.classList = "col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-cicle-error").classList = "error col-md-5 col-sm-5"
        document.getElementById(elem.name + "-add-cicle-error").innerHTML = msgError;
    }
}