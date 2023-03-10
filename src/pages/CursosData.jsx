import React, { useState, useCallback } from 'react'
import { Button, Modal, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, FormControl } from '@mui/material'

function DataTable() {
  const [ data, setData ] = useState([
    { id: 1, curso: 'Matemáticas', clases: 20, precio: 100, descripcion: 'Curso de matemáticas básicas' },
    { id: 2, curso: 'Inglés', clases: 15, precio: 150, descripcion: 'Curso de inglés para principiantes' },
    { id: 3, curso: 'Programación', clases: 30, precio: 200, descripcion: 'Curso de programación en JavaScript' },
  ])

  const [ selectedData, setSelectedData ] = useState(null)
  const [ open, setOpen ] = useState(false)
  const [ updatedData, setUpdatedData ] = useState({ id: '', curso: '', clases: '', precio: '', descripcion: '' })

  const handleOpen = (rowData) => {
    setSelectedData(rowData)
    setUpdatedData(rowData)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleUpdate = () => {
    const newData = data.map((item) => (item.id === selectedData.id ? updatedData : item))
    setData(newData)
    setOpen(false)
  }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
  
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  }, [updatedData]);

  


  const DataTextField = styled(TextField)({
    marginBottom: '20px',
  })

  const modalBody = (
    <div style={{ backgroundColor: '#fff', padding: '2rem', width: '320px', height: '350px', margin: '0px auto' }}>
          <Typography variant='h5' align='center'>Actualizar datos</Typography>
          <FormControl style={{ display: 'flex', flexDirection: 'column' }}>
            <DataTextField label="Curso" name="curso" value={updatedData.curso} size="small" variant="outlined" onChange={handleChange} />
            <DataTextField label="Clases" name="clases" value={updatedData.clases} size="small" variant="outlined" onChange={handleChange} />
            <DataTextField label="Precio" name="precio" value={updatedData.precio} size="small" variant="outlined" type="number" onChange={handleChange} />
            <DataTextField label="Descripción" name="descripcion" value={updatedData.descripcion} size="small" variant="outlined" onChange={handleChange} />
            <Button variant="contained" type="submit" size="small" onClick={handleUpdate} style={{ marginTop: '1rem' }}>Actualizar</Button>
          </FormControl>
        </div>
  )

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>Clases</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rowData) => (
              <TableRow key={rowData.id}>
                <TableCell>{rowData.id}</TableCell>
                <TableCell>{rowData.curso}</TableCell>
                <TableCell>{rowData.clases}</TableCell>
                <TableCell>{rowData.precio}</TableCell>
                <TableCell>{rowData.descripcion}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpen(rowData)}>
                    Actualizar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </>
  )
}
export default DataTable
