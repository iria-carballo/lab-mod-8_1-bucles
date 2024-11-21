type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1

//Obtener pacientes de pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesEspecialidad: Pacientes[] = [];
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesEspecialidad.push(pacientes[i]);
    }
  }
  return pacientesEspecialidad;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//Obtener pacientes de pediatría menores de 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesEspecialidad: Pacientes[] = [];
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesEspecialidad.push(pacientes[i]);
    }
  }
  return pacientesEspecialidad;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i: number = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].temperatura > 39 ||
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};

activarProtocoloUrgencia(pacientes) === true
  ? console.log(`ES NECESARIO activar el protocolo de urgencias`)
  : console.log(`No es necesario activar el protocolo de urgencias`);

//Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteReasignado: Pacientes = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
      pacientesReasignados.push(pacienteReasignado);
    }
  }
  return pacientesReasignados;
};

const pacientesReasignadosMedicoDeFamilia =
  reasignaPacientesAMedicoFamilia(pacientes);

console.log(pacientesReasignadosMedicoDeFamilia);
console.log(pacientes);

//Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes: boolean = true;
  for (let i: number = 0; i < pacientes.length; i++) {
    pacientes[i].especialidad === "Pediatra"
      ? (hayPacientes = true)
      : (hayPacientes = false);
  }
  return hayPacientes;
};

HayPacientesDePediatria(pacientes) === true
  ? console.log(`Todavía quedan pacientes de pediatria`)
  : console.log(`No hay más pacientes de pediatría`);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesMedicoDeFamilia: number = 0;
  let pacientesPediatria: number = 0;
  let pacientesCardiologia: number = 0;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      pacientesMedicoDeFamilia += 1;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria += 1;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      pacientesCardiologia += 1;
    }
  }

  return {
    medicoDeFamilia: pacientesMedicoDeFamilia,
    pediatria: pacientesPediatria,
    cardiologia: pacientesCardiologia,
  };
};

const pacientesPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);
console.log(pacientesPorEspecialidad);
