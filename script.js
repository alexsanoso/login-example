// Datos simulados (puedes cambiarlos según desees)
const validEmails = ["usuario1@example.com", "usuario2@example.com"];
const validPhones = ["1234567890", "0987654321"];

// Manejando el login con correo
document.getElementById("email-login-btn").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Verificar si el correo existe
  if (!validEmails.includes(email)) {
    document.getElementById("error-message").textContent = "El correo no existe.";
    document.getElementById("error-message").style.display = "block";
  } else if (password === "") {
    document.getElementById("error-message").textContent = "La contraseña no puede estar vacía.";
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    alert("Inicio de sesión exitoso con correo.");
  }
});

// Manejando el login con teléfono
document.getElementById("phone-login-btn").addEventListener("click", function() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password-phone").value;
  
  // Verificar si el número de teléfono existe
  if (!validPhones.includes(phone)) {
    document.getElementById("error-message").textContent = "El número de teléfono no existe.";
    document.getElementById("error-message").style.display = "block";
  } else if (password === "") {
    document.getElementById("error-message").textContent = "La contraseña no puede estar vacía.";
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    alert("Inicio de sesión exitoso con teléfono.");
  }
});

// Funcionalidad para cambiar entre login con correo y con teléfono
document.getElementById("switch-to-phone").addEventListener("click", function() {
  document.getElementById("email-login-form").style.display = "none";
  document.getElementById("phone-login-form").style.display = "block";
  document.getElementById("switch-to-phone").style.display = "none";
  document.getElementById("switch-to-email").style.display = "inline-block";
  document.getElementById("error-message").style.display = "none";  // Esconde el mensaje de error al cambiar de vista
});

document.getElementById("switch-to-email").addEventListener("click", function() {
  document.getElementById("email-login-form").style.display = "block";
  document.getElementById("phone-login-form").style.display = "none";
  document.getElementById("switch-to-phone").style.display = "inline-block";
  document.getElementById("switch-to-email").style.display = "none";
  document.getElementById("error-message").style.display = "none";  // Esconde el mensaje de error al cambiar de vista
});
