// Función para registrar datos
function registrarUsuario(event, tipoUsuario) {
  event.preventDefault();
  
    const form = event.target;
    const nombre = form.querySelector('input[type="text"]').value || null;
    const correo = form.querySelector('input[type="email"]').value;
    const contraseña = form.querySelector('input[type="password"]').value;
  
    // Crear objeto usuario
    const usuario = {
      tipoUsuario, // Tipo: fundación, cliente o vendedor
      nombre,
      correo,
      contraseña
    };
  
    // Guardar en localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = '../templates/frame_18.html';

    form.reset();
  }
  
 
  
  // Asignar eventos a los formularios
  document.addEventListener('DOMContentLoaded', () => {
    // Formularios de registro
    document.querySelectorAll('.registro-fundacion form').forEach((form) => {
      form.addEventListener('submit', (event) => registrarUsuario(event, 'fundación'));
    });
  
    document.querySelectorAll('.registro-cliente form').forEach((form) => {
      form.addEventListener('submit', (event) => registrarUsuario(event, 'cliente'));
    });
  
    document.querySelectorAll('.registro-vendedor form').forEach((form) => {
      form.addEventListener('submit', (event) => registrarUsuario(event, 'vendedor'));
    });
  
  });
  