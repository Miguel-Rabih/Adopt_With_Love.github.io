 // Función para verificar inicio de sesión
 function iniciarSesion(IniciarSesion) {
    IniciarSesion.preventDefault();
  
    const form = IniciarSesion.target;
    const correo = form.querySelector('input[type="email"]').value;
    const contraseña = form.querySelector('input[type="password"]').value;
  
    // Obtener usuarios desde localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Buscar coincidencia
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === correo && usuario.contraseña === contraseña
    );
  
    if (usuarioEncontrado) {
      window.location.href = '/templates/frame_18.html';
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  
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
  
    // Formularios de inicio de sesión
    document.querySelectorAll('.registro-fundacion form, .registro-cliente form, .registro-vendedor form').forEach((form) => {
      form.addEventListener('submit', iniciarSesion);
    });
  });