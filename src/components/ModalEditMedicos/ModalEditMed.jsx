import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "../ModalMedicos/MailIcon.jsx";
import { UserIcon } from "../ModalMedicos/UserIcon.jsx";
import { WorldIcon } from "../ModalMedicos/WorldIcon.jsx";
import { TelephoneIcon } from "../ModalMedicos/TelephoneIcon.jsx";
import { CalendarIcon } from "../ModalMedicos/CalendarIcon.jsx";
import axios from "axios";
import { EditIcon } from "../Medicos/EditIcon.jsx";

export default function ModalEditMed( {listaDeMedicos, cargarMedicos} ) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    nombre: listaDeMedicos.nombre,
    apellido: listaDeMedicos.apellido,
    direccion: listaDeMedicos.direccion,
    localidad: listaDeMedicos.localidad,
    provincia: listaDeMedicos.provincia,
    telefono: listaDeMedicos.telefono,
    dni: listaDeMedicos.dni,
    fechaNacimiento: listaDeMedicos.fechaNacimiento,
    matricula: listaDeMedicos.matricula,
    especialidad: listaDeMedicos.especialidad,
    fechaIngreso: listaDeMedicos.fechaIngreso,
  });

const addMedico = (e) => {
  e.preventDefault();
  axios
  .put(`https://apiclinicalb-dev-zspj.4.us-1.fl0.io/medicos/${listaDeMedicos.id}`, formData)
  .then((response) => {
    console.log(response);
    cargarMedicos();
  })
  .catch((error) => {
    console.log("Error al cargar el médico: ", error);
  });
}
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData)=> ({
      ...prevData,
      [name]: value
    }))
  };
  return (
    <>
      <Button
        onPress={onOpen}
        color="foreground"
      >
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar médico
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Nombre"
                  placeholder="Inserte nombre"
                  variant="bordered"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Apellido"
                  placeholder="Inserte apellido"
                  variant="bordered"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Dirección"
                  placeholder="Inserte dirección"
                  variant="bordered"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <WorldIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Localidad"
                  placeholder="Inserte localidad"
                  variant="bordered"
                  name="localidad"
                  value={formData.localidad}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <WorldIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Provincia"
                  placeholder="Inserte provincia"
                  variant="bordered"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <TelephoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Teléfono"
                  placeholder="Inserte teléfono"
                  variant="bordered"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="DNI"
                  placeholder="Inserte DNI"
                  variant="bordered"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Fecha nacimiento"
                  placeholder="Inserte fecha nacimiento"
                  variant="bordered"
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Matrícula"
                  placeholder="Inserte matrícula"
                  variant="bordered"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Especialidad"
                  placeholder="Inserte especialidad"
                  variant="bordered"
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={handleChange}
                />
                <Input
                  endContent={
                    <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Fecha ingreso"
                  placeholder="Inserte fecha ingreso"
                  variant="bordered"
                  type="date"
                  name="fechaIngreso"
                  value={formData.fechaIngreso}
                  onChange={handleChange}
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose} onClick={addMedico}>
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
