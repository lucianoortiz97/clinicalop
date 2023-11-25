import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import {MailIcon} from '../ModalMedicos/MailIcon.jsx';
import { UserIcon } from "../ModalMedicos/UserIcon.jsx";
import { WorldIcon } from "../ModalMedicos/WorldIcon.jsx";
import { TelephoneIcon } from "../ModalMedicos/TelephoneIcon.jsx";
import axios from "axios";

export default function ModalWindowPac( {cargarPacientes} ) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [formData, setFormData] = useState(
    {
      nombre:'',
      apellido:'',
      direccion:'',
      localidad:'',
      provincia:'',
      telefono:'',
      dni:'',
    }
  );


  const addPatient = () => {
    axios
      .post("https://apiclinicalop-dev-ccxz.2.us-1.fl0.io/pacientes", formData )
      .then((response) => {
        console.log(response)
        cargarPacientes()
      })
      .catch((error) => {
        console.error("Error al cargar el paciente: " + error);
      });
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">Agregar +</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar paciente</ModalHeader>
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
                <div className="flex py-2 px-1 justify-between">
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose} >
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose} onClick={addPatient}>
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}