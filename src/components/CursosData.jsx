import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const url = process.env.REACT_APP_URL_DATA;

function DataTable() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    idprices: "",
    course: "",
    clases: "",
    price: "",
    descripcion: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleOpen = (rowData) => {
    setSelectedData(rowData);
    setUpdatedData(rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    const updatedItems = data.map((item) =>
      item.idprice === selectedData.idprice ? updatedData : item
    );
    setData(updatedItems);
    fetch(`http://localhost:3000/prices/${selectedData.idprice}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("UPDATED!", data))
      .catch((error) => console.error(error));
    handleClose();
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const modalBody = (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        width: "300px",
        height: "250px",
        margin: "auto",
      }}
    >
      <Typography variant="h5" align="center">
        Actualizar datos
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          style={{ marginBottom: "20px" }}
          align="center"
          label="Curso"
          name="course"
          value={updatedData.course}
          size="small"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          style={{ marginBottom: "20px" }}
          align="center"
          label="Precio"
          name="price"
          value={updatedData.price}
          size="small"
          variant="outlined"
          type="number"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          size="small"
          onClick={handleUpdate}
          style={{ marginTop: "1rem" }}
        >
          Actualizar
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {data ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Curso</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.idprice}>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleOpen(item)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h3>Loading</h3>
      )}

      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </>
  );
}
export default DataTable;
