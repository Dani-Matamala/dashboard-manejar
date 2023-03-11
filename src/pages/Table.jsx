import { useState } from "react";
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from "@mui/material";

function DataTable() {
    const [items, setItems] = useState([
        { id: 1, curso: "Matemáticas", precio: 100 },
        { id: 2, curso: "Inglés", precio: 150 },
        { id: 3, curso: "Programación", precio: 200 },
    ]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedItem, setUpdatedItem] = useState({ curso: "", precio: "" });

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setUpdatedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setUpdatedItem({ curso: "", precio: "" });
        setOpenModal(false);
    };

    const handleUpdateItem = () => {
        const updatedItems = items.map((item) =>
            item.id === selectedItem.id ? updatedItem : item
        );
        setItems(updatedItems);
        handleCloseModal();
    };

    return (
        <>
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
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.curso}</TableCell>
                                <TableCell>{item.precio}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => handleOpenModal(item)}>
                                        Editar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal open={openModal} onClose={handleCloseModal}>
                <div style={{ backgroundColor: "#fff", padding: "2rem", width: "320px", height: "350px", margin: "0px auto" }}>
                    <Typography variant="h5" align="center">
                        Actualizar item
                    </Typography>
                    <TextField label="Curso" name="curso" value={updatedItem.curso} size="small" variant="outlined" onChange={(e) => setUpdatedItem({ ...updatedItem, curso: e.target.value })} />
                    <TextField label="Precio" name="precio" value={updatedItem.precio} size="small" variant="outlined" type="number" onChange={(e) => setUpdatedItem({ ...updatedItem, precio: e.target.value })} />

                    <Button variant="contained" onClick={handleUpdateItem} style={{ marginTop: "1rem" }}>
                        Actualizar
                    </Button>
                    <Button variant="contained" color="error" onClick={handleCloseModal} style={{ marginTop: "1rem" }}>
                        Cancelar
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default DataTable;
