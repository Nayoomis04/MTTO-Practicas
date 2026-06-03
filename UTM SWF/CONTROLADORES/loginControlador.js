const USUARIOS = [
  { usuario: 'finanzas',     password: 'fin123',   pagina: '/VISTAS/finanzas.html' },
  { usuario: 'alumno',       password: 'alum123',  pagina: '/VISTAS/alumno.html'   },
  { usuario: 'coordinador',  password: 'coord123', pagina: '/VISTAS/coordinador.html' }
];

document.getElementById('formLogin').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario  = document.querySelector('input[name="usuario"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

  const encontrado = USUARIOS.find(u => u.usuario === usuario && u.password === password);

  const errorMsg = document.getElementById('error-msg');

  if (!encontrado) {
    errorMsg.style.visibility = 'visible';
    document.querySelector('input[name="password"]').value = '';
    return;
  }

  errorMsg.style.visibility = 'hidden';
  window.location.href = encontrado.pagina;
});