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
