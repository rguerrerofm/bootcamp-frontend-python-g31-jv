/* ===========================================================
   DRAGON BALL CRUD - JavaScript
   Proyecto FINAL de JS, DOM y Asincronia
   Elaborado por Ricardo Guerrero
   =========================================================== */

/* 1) URL de mi API en APIBox (mi proyecto de personajes) */
const API_URL = "https://apibox.vercel.app/FH3sru3fHVdy3nOx8uhtm76bc4eb2HiB/personajes";

/* 2) Referencias a los elementos del HTML (por su id) */
const form = document.getElementById("form-personaje");
const inputId = document.getElementById("personaje-id");
const inputNombre = document.getElementById("nombre");
const inputImagen = document.getElementById("imagen");
const inputRaza = document.getElementById("raza");

const formTitulo = document.getElementById("form-titulo");
const btnGuardar = document.getElementById("btn-guardar");
const btnCancelar = document.getElementById("btn-cancelar");

const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const cargando = document.getElementById("cargando");
const error = document.getElementById("error");
const vacio = document.getElementById("vacio");

/* 3) Cuando la pagina termina de cargar, traer los personajes */
document.addEventListener("DOMContentLoaded", obtenerPersonajes);


/* ===========================================================
   LEER (READ) - traer todos los personajes con GET
   =========================================================== */
async function obtenerPersonajes() {
  cargando.hidden = false;   // mostramos "Cargando..."
  error.hidden = true;
  lista.innerHTML = "";      // limpiamos la lista

  try {
    const respuesta = await fetch(API_URL);
    const personajes = await respuesta.json();

    cargando.hidden = true;
    contador.textContent = personajes.length;

    // Si no hay personajes, mostrar el mensaje vacio
    if (personajes.length === 0) {
      vacio.hidden = false;
      return;
    }
    vacio.hidden = true;

    // Recorro y pinto cada personaje
    personajes.forEach(function (personaje) {
      mostrarPersonaje(personaje);
    });

  } catch (e) {
    // Si algo falla,aviso en pantalla
    cargando.hidden = true;
    error.hidden = false;
    error.textContent = "No se pudieron cargar los personajes. Revisa tu conexion o tu URL de APIBox.";
  }
}


/* ===========================================================
   Pintar UNA tarjeta de personaje en pantalla (DOM)
   =========================================================== */
function mostrarPersonaje(personaje) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "personaje";

  tarjeta.innerHTML = `
    <img class="personaje-img" src="${personaje.image}" alt="${personaje.name}">
    <div class="personaje-info">
      <h3 class="personaje-nombre">${personaje.name}</h3>
      <span class="personaje-raza">${personaje.race}</span>
    </div>
    <div class="personaje-acciones">
      <button class="btn-editar">Editar</button>
      <button class="btn-eliminar">Eliminar</button>
    </div>
  `;

  // Botones de ESTA tarjeta
  const botonEditar = tarjeta.querySelector(".btn-editar");
  const botonEliminar = tarjeta.querySelector(".btn-eliminar");

  botonEditar.addEventListener("click", function () {
    prepararEdicion(personaje);
  });

  botonEliminar.addEventListener("click", function () {
    eliminarPersonaje(personaje.id);
  });

  lista.appendChild(tarjeta);
}


/* ===========================================================
   CREAR (POST) y EDITAR (PUT) - al enviar el formulario
   =========================================================== */
form.addEventListener("submit", async function (evento) {
  evento.preventDefault(); // evita que la pagina se recargue

  // Armamo el personaje con los 3 datos obligatorios
  const personaje = {
    name: inputNombre.value,
    image: inputImagen.value,
    race: inputRaza.value
  };

  const id = inputId.value; // vacio = crear, con id = editar

  try {
    if (id === "") {
      // CREAR: metodo POST
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaje)
      });
    } else {
      // EDITAR: metodo PUT a .../personajes/ID
      await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaje)
      });
    }

    limpiarFormulario();
    obtenerPersonajes(); // recargamos la lista actualizada

  } catch (e) {
    error.hidden = false;
    error.textContent = "No se pudo guardar el personaje.";
  }
});


/* ===========================================================
   Preparar EDICION - llenar el formulario con un personaje
   =========================================================== */
function prepararEdicion(personaje) {
  inputId.value = personaje.id;   // al guardar el id, el submit hara PUT
  inputNombre.value = personaje.name;
  inputImagen.value = personaje.image;
  inputRaza.value = personaje.race;

  formTitulo.textContent = "Editar personaje";
  btnGuardar.textContent = "Guardar cambios";
  btnCancelar.hidden = false;
}


/* Cancelar edicion / limpiar el formulario */
btnCancelar.addEventListener("click", limpiarFormulario);

function limpiarFormulario() {
  form.reset();
  inputId.value = "";
  formTitulo.textContent = "Nuevo personaje";
  btnGuardar.textContent = "Agregar personaje";
  btnCancelar.hidden = true;
}


/* ===========================================================
   ELIMINAR (DELETE)
   =========================================================== */
async function eliminarPersonaje(id) {
  const confirmar = confirm("Seguro que quieres eliminar este personaje?");
  if (!confirmar) return;

  try {
    await fetch(API_URL + "/" + id, { method: "DELETE" });
    obtenerPersonajes();
  } catch (e) {
    error.hidden = false;
    error.textContent = "No se pudo eliminar el personaje.";
  }
}
