$(document).ready(inicialitzarEvents);

function inicialitzarEvents() {
  if (document.getElementById("poblacio_id").getAttribute("value") != null) {
    setTimeout(demanaPoblacio, 100);
  }
  $("#comarca_id").change(demanaPoblacio);
}

function demanaPoblacio() {
  fetch(`../../api/poblacio/` + $("#comarca_id").val()).then(function (response) {
    if (response.ok) {
      response.json().then(mostraPoblacio);
    } else {
      console.log(`Status: ${response.status} ${response.statusText}`);
    }
  })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  return false;
}

function mostraPoblacio(dades) {
  $("#poblacio_id").html(function() {
    $("#poblacio_id").html("<option value='default'>Selecciona una poblacio...</option>");
    for (const element in dades) {
      if (element == document.getElementById("poblacio_id").getAttribute("value")) {
        $("#poblacio_id").append("<option value='" + element + "' selected>" + dades[element] + "</option>");
      } else {
        $("#poblacio_id").append("<option value='" + element + "'>" + dades[element] + "</option>");
      }
    };
  });
}