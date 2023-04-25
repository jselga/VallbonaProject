let poblacio_edit_control = {
    "name": [isAlphabet, "El nom no pot tenir numeros o simbols"],
    "comarca_id": [madeSelection, "Cal escollir una comarca"],
};


window.onload = function() {
    document.forms['editPoblacioForm'].addEventListener("submit", formValidator);

    for (let x in poblacio_edit_control) {
        document.forms['editPoblacioForm'][x].addEventListener("change", ErrorVisibility);
    }
};

function formValidator(e) {
    var result = true;
    var first_error = null;

    for (let x in poblacio_edit_control) {
        elem = document.forms['editPoblacioForm'][x];

        if (!poblacio_edit_control[x][0](elem, poblacio_edit_control[x][1], poblacio_edit_control[x][2])) {
            result = false;
            if (first_error == null) {
                first_error = document.forms['editPoblacioForm'][x];
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
    poblacio_edit_control[e.target.name][0](e.target, poblacio_edit_control[e.target.name][1]);
}

function tractarError(elem, noError, msgError){
    
    if (noError){
        elem.parentElement.classList = "col-md-10 col-sm-10"
        document.getElementById(elem.name + "-edit-poblacio-error").classList = "error"
        document.getElementById(elem.name + "-edit-poblacio-error").innerHTML = "";
    } else { 
        elem.parentElement.classList = "col-md-5 col-sm-5"
        document.getElementById(elem.name + "-edit-poblacio-error").classList = "error col-md-5 col-sm-5"
        document.getElementById(elem.name + "-edit-poblacio-error").innerHTML = msgError;
    }
}