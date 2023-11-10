// Script

function changeName() {
    // Solicitar al usuario que escriba su nombre
    let newName = prompt("Ingrese su nombre:");
    
    let element = document.getElementById("element");
  
    // Verificar si se proporcionó un nombre válido
    if (newName !== null && newName.trim() !== "") {
     
      element.innerText = newName;
    }
  }
  