import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Typography, TextField, Container } from '@mui/material'

const FormContainer = styled('form')({
  display: 'flex',
  width: '330px',
  height: '334px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'

})

const LoginTextField = styled(TextField)({
  marginBottom: '20px',
})

const styles = {
  container: {
    height: '100vh',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function LoginPage() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleUser = (e) => {
    const newUser = e.target.value
    setUser(newUser)
  }

  const handlePass = (e) => {
    const newPass  = e.target.value
    setPass(newPass)
  }

  const handleSubmit = (e) => {
    console.log(user, pass)
  }

  return (
    <Container sx={styles.container}>
      <FormContainer>
        <Typography variant='h5' align='center' mb={ 4 }>
          Academia Manejar
        </Typography>
        <LoginTextField
          label="Username"
          variant="outlined"
          size="small"
          onChange={handleUser}
        />
        <LoginTextField
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          onChange={handlePass}
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          Sign In
        </Button>
      </FormContainer>
    </Container>
  )
}
