import { useState, useEffect } from "react";
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from "@mui/material";
import axios from 'axios'
function DataTable() {
    const [items, setItems] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updatedItem, setUpdatedItem] = useState({ course: "", price: "" });

    useEffect(() => {
        axios.get('http://localhost:3003/prices')
            .then(response => setItems(response.data))
            .catch(error => console.error(error))
    }, [])

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setUpdatedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setUpdatedItem({ course: "", price: "" });
        setOpenModal(false);
    };

    const handleUpdateItem = () => {
        const updatedItems = items.map((item) =>
            item.idprice === selectedItem.idprice ? updatedItem : item
        );
        setItems(updatedItems);
        fetch(`http://localhost:3003/prices/${selectedItem.idprice}`, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log('UPDATED!', data))
            .catch(error => console.error(error));
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
                            <TableRow key={item.idprice}>
                                <TableCell>{item.course}</TableCell>
                                <TableCell>{item.price}</TableCell>
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
                    <TextField label="Curso" name="course" value={updatedItem.course} size="small" variant="outlined" onChange={(e) => setUpdatedItem({ ...updatedItem, course: e.target.value })} />
                    <TextField label="Precio" name="price" value={updatedItem.price} size="small" variant="outlined" type="number" onChange={(e) => setUpdatedItem({ ...updatedItem, price: e.target.value })} />

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
