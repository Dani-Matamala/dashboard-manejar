import React, { useState } from 'react'
import { Typography, FormControl, styled, TextField, Button } from '@mui/material'

export const ModalUpdate = (props) => {

    const { row, handleUpdate } = props

    const [ updatedData, setUpdatedData ] = useState(row)

    const handleChange = e => {
        const { name, value } = e.target

        setUpdatedData(prevUpdatedData => ({ ...prevUpdatedData, [ name ]: value }))
        console.log(updatedData)
    }

    const DataTextField = styled(TextField)({
        marginBottom: '20px',
    })

    return (
        <div style={{ backgroundColor: '#fff', padding: '2rem', width: '320px', height: '350px', margin: '0px auto' }}>
            <Typography variant='h5' align='center' mb={4}>Actualizar datos</Typography>
            <FormControl style={{ display: 'flex', flexDirection: 'column' }}>
                <DataTextField disabled label="Curso" name="curso" defaultValue={updatedData?.curso} size="small" variant="outlined" />
                <DataTextField disabled label="Clases" name="clases" defaultValue={updatedData?.clases} size="small" variant="outlined" />
                <DataTextField required label="Precio" name="pecio" defaultValue={updatedData?.precio} size="small" variant="outlined" type="number" onChange={handleChange} />
                <DataTextField disabled label="Descripción" name="descripcion" defaultValue={updatedData?.descripcion} size="small" variant="outlined" />
                <Button variant="contained" type="submit" size="small" onClick={handleUpdate(updatedData)} style={{ marginTop: '1rem' }}>Actualizar</Button>
            </FormControl>
        </div>
    )
}
