import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon } from "../Pacientes/DeleteIcon";
import axios from "axios";
import ModalWindowTurnos from "../ModalTurnos/ModalWindowTurnos";
import ModalEditTurnos from "../ModalEditTurnos/ModalEditTurnos";
import Banner from "../Banner/Banner";

const columns = [
  { name: "ID", uid: "id" },
  { name: "Médico", uid: "medico" },
  { name: "Paciente", uid: "paciente" },
  { name: "Especialidad", uid: "especialidad" },
  { name: "Fecha del turno", uid: "fecha" },
  { name: "Hora", uid: "hora" },
  { name: "Obra Social", uid: "obraSocial" },
  { name: "Acciones", uid: "actions" },
];

export default function Turnos() {
  const [turnos, setTurnos] = useState([]);

  const cargarTurnos = () => {
    axios
      .get("https://apiclinicalop-dev-ccxz.2.us-1.fl0.io/turnos")
      .then((response) => {
        setTurnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de turnos: " + error);
      });
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  const renderCell = React.useCallback((turno, columnKey) => {
    const cellValue = turno[columnKey];

    const deleteTurno = (id) => {
      try {
        axios.delete(`https://apiclinicalop-dev-ccxz.2.us-1.fl0.io/turnos/${id}`);
        console.log(`El turno con el id ${id} fue eliminado exitosamente`);
        cargarTurnos();
      } catch (error) {
        console.log("Error al eliminar el turno", error);
      }
    };

    switch (columnKey) {
      case "id":
        return <span>{cellValue}</span>;
        case "medico":
          return <span>{`${turno.medico.nombre} ${turno.medico.apellido}`}</span>;
        case "paciente":
          return <span>{`${turno.paciente.nombre} ${turno.paciente.apellido}`}</span>;
      case "especialidad":
      case "fecha":
      case "hora":
      case "obraSocial":
        return <span>{cellValue}</span>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar turno">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ModalEditTurnos 
                listaDeTurnos = {turno}
                cargarTurnos = {cargarTurnos}
                />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar turno">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => deleteTurno(turno.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Table isStriped aria-label="Tabla de Turnos">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={turnos}>
          {(turno) => (
            <TableRow key={turno.id}>
              {(columnKey) => (
                <TableCell>{renderCell(turno, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalWindowTurnos cargarTurnos={cargarTurnos} />
      <Banner />
    </>
  );
}
