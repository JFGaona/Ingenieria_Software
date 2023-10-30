document.addEventListener("DOMContentLoaded", function() {
  const tipoSelect = document.getElementById("tipo");
  const camposDocente = document.getElementById("camposDocente");
  const camposEstudiante = document.getElementById("camposEstudiante");

  tipoSelect.addEventListener("change", function() {
    const seleccionado = tipoSelect.value;

    if (seleccionado === "Docente") {
      camposDocente.style.display = "block";
      camposEstudiante.style.display = "none";
    } else if (seleccionado === "Estudiante") {
      camposDocente.style.display = "none";
      camposEstudiante.style.display = "block";
    } else {
      camposDocente.style.display = "none";
      camposEstudiante.style.display = "none";
    }
  });
  
  // Agregar un manejador de eventos al botón "Guardar Valor" si es necesario
  const guardarValorButton = document.getElementById("guardarValor");
  guardarValorButton.addEventListener("click", function() {
    // Aquí puedes realizar acciones adicionales según la elección del usuario
    const seleccionado = tipoSelect.value;
    if (seleccionado === "Docente") {
      // Acciones para un docente seleccionado
    } else if (seleccionado === "Estudiante") {
      // Acciones para un estudiante seleccionado
    } else {
      // Acciones para otros tipos o si no se selecciona nada
    }
  });
});


// Lo que creaste 
class User {
  constructor(dni, correo, nombre, tipo = ['Estudiante', 'Profesor']) {
    this.dni = dni;
    this.correo = correo;
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

class Estudiante extends User {
  constructor(dni, correo, nombre, codigo, programa = ['Ingenieria de sistemas', 'Ingenieria electronica', 'Ingenieria civil', 'Ingenieria industrial','Psicologia', 'Derecho','Economia', 'Arquitectura']) {
    super(dni, correo, nombre);
    this.codigo = codigo;
    this.programa = programa;
  }
}

class Profesor extends User {
  constructor(dni, correo, nombre, tarjetaProf, profesion = ['Ingenieria de sistemas', 'Ingenieria electronica', 'Ingenieria civil', 'Ingenieria industrial','Psicologia', 'Derecho','Economia', 'Arquitectura']) {
    super(dni, correo, nombre);
    this.tarjetaProf = tarjetaProf;
    this.profesion = profesion;
  }
}
var dniInput = document.getElementById("dni");
var correoInput = document.getElementById("correo");
var nombreInput = document.getElementById("nombre");
var profesionInput = document.getElementById("profesion");

var tarjetaProfInput = document.getElementById("tarjetaProf");
var codigoInput = document.getElementById("codigo");
var programaInput = document.getElementById("programa");
var boton = document.getElementById("guardarValor");
var tipoSelect = document.getElementById("tipo");
//const tipo = document.getElementById("tipo");
//const docente = document.getElementById("camposDocente");
//const estudiante = document.getElementById("camposEstudiante");
console.log("Hola");

if (boton) {
  boton.addEventListener("click", function () {
    var dni = parseInt(dniInput.value);
    var correo = correoInput.value;
    var nombre = nombreInput.value;
    var tipo = tipoSelect.value;
    var usuario;

    if (tipo === "Estudiante") {
      // Obtener los valores de los campos
      var codigo = codigoInput.value;
      var programa = programaInput.value;
      usuario = new Estudiante(dni, correo, nombre, codigo, programa);
    } else if (tipo === "Profesor") {
      // Obtener los valores de los campos
      var tarjetaProf = tarjetaProfInput.value;
      var profesion = profesionInput.value;
      usuario = new Profesor(dni, correo, nombre, tarjetaProf, profesion);
    } else {
      // Acciones para otros tipos o si no se selecciona nada
      usuario = new User(dni, correo, nombre, tipo);
    }
    camposDocente.style.display = "none";
    camposEstudiante.style.display = "none";
    // Agregar la fila a la tabla
    var userTable = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    var newRow = userTable.insertRow(userTable.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5); // Nueva celda para Profesión
    var cell7 = newRow.insertCell(6); // Nueva celda para Tarjeta profesional
    
    cell1.innerHTML = usuario.dni;
    cell2.innerHTML = usuario.correo;
    cell3.innerHTML = usuario.nombre;
    cell4.innerHTML = tipo;
    cell5.innerHTML = tipo === "Docente" ? usuario.profesion : ''; // Mostrar Profesión solo para Docente
    cell6.innerHTML = tipo === "Docente" ? usuario.tarjetaProf : ''; // Mostrar Tarjeta Profesional solo para Docente
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Eliminar';
    deleteButton.addEventListener('click', function() {
    var row = this.parentNode.parentNode; // Obtén la fila a eliminar
    row.parentNode.removeChild(row); // Elimina la fila
    });
    cell7.appendChild(deleteButton);

    // Restablecer el formulario completo
    document.getElementById("form-group").reset();


    // Restablecer campos condicionales
    camposDocente.style.display = "none";
    camposEstudiante.style.display = "none";
  });
}

