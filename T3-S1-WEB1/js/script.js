function alterarEstado() {
    var salaId = document.getElementById("salaSelect").value;
    var estado = document.getElementById("estadoSelect").value;
    var salaDiv = document.getElementById(salaId);
    
    salaDiv.classList.remove("livre", "ocupado", "manutencao");
    salaDiv.style.backgroundColor = "";  
    salaDiv.classList.add(estado);

  
    if (estado === "livre") {
        salaDiv.style.backgroundColor = "lightgreen";
    } else if (estado === "ocupado") {
        salaDiv.style.backgroundColor = "#fd006d";
    } else if (estado === "manutencao") {
        salaDiv.style.backgroundColor = "lightgray";
    }

    var statusText;
    if (estado === "livre") {
        statusText = "LIVRE";
    } else if (estado === "ocupado") {
        statusText = "OCUPADO";
    } else if (estado === "manutencao") {
        statusText = "MANUTENÇÃO";
    }
    salaDiv.querySelector("h1").textContent = statusText;
}
