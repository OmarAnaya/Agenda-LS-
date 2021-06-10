let doc = document;
let arNombre = [];
let arCorreo = [];
let arTelefono = [];



window.addEventListener('load', function (e) {
  cargarContactos();
  verContactos();
});



window.addEventListener('click', function (e) {
  e.preventDefault();
});




function agregarContacto() {
  let getNombre = doc.querySelector('#nombre');
  let getCorreo = doc.querySelector('#correo');
  let getTelefono = doc.querySelector('#telefono');

  arNombre.push(getNombre.value);
  arCorreo.push(getCorreo.value);
  arTelefono.push(getTelefono.value);

  let conf = window.confirm('Deseas agregar otro contacto?');
  if (conf == true ) {
    getNombre.value = '';
    getCorreo.value = '';
    getTelefono.value = '';
    guardarContacto();
  } else {
    getNombre.value = '';
    getCorreo.value = '';
    getTelefono.value = '';
    cargarContactos();
    verContactos();
     
      location.reload();
  }
}







function guardarContacto() {
  localStorage.setItem('nombresLS', arNombre);
  localStorage.setItem('numerosLS', arCorreo);
  localStorage.setItem('correosLS', arTelefono);
}

function verContactos() {
  const containerContacto = doc.querySelector('#contacto');

  for (let i = 0; i < arNombre.length; i++) {
    const element = arNombre[i];
    containerContacto.innerHTML += `
     <div>
        <i class="far fa-edit editar" onclick="editarContacto()"></i>
      </div>
      <div class="datos--container">
        <p id="nome">Nombre: ${arNombre[i]}</p>
        <p id="nume">Número: ${arTelefono[i]}</p>
        <p id="core">Correo: ${arCorreo[i]}</p>
      </div>
     `;
  }
}

function cargarContactos() {
  if (localStorage.length > 0) {
    arNombre = localStorage.getItem('nombresLS');
    arCorreo = localStorage.getItem('numerosLS');
    arTelefono = localStorage.getItem('correosLS');

    arNombre = arNombre.split(',');
    arCorreo = arCorreo.split(',');
    arTelefono = arTelefono.split(',');
  } else {
    arNombre = [];
    arCorreo = [];
    arTelefono = [];
  }
}




function editarContacto() {
  let busqueda = prompt('Nombre del contacto que deseas editar?');
  let indiceBusqueda = arNombre.indexOf(busqueda);

  if (indiceBusqueda >= 0) {
    let nuevoNombre = prompt('Cual es el nombre?');
    let nuevoNumero = prompt('Cual es el numero?');
    let nuevoCorreo = prompt('Cual es correo?');

    arNombre[indiceBusqueda] = nuevoNombre;
    arTelefono[indiceBusqueda] = nuevoNumero;
    arCorreo[indiceBusqueda] = nuevoCorreo;
    guardarContacto();
    window.location.reload();
  } else {
    alert('No se encontraron resultados');
  }
}


function buscarContacto() {
  let busqueda = prompt('cual es el nombre del contactos?');
  let indiceBusqueda = arNombre.indexOf(busqueda);

  console.log(indiceBusqueda);
  if (indiceBusqueda >= 0) {
    alert(`
    Nombre: ${arNombre[indiceBusqueda]}
    Numero: ${arTelefono[indiceBusqueda]}
    Correo: ${arCorreo[indiceBusqueda]}  
    `);
  } else {
    alert('No se encontraron resultados');
  }
}
