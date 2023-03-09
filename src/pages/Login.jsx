import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, TextField, Container, Button, styled } from '@mui/material'

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
}

export default function LoginPage() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleUser = (e) => {
    const newUser = e.target.value
    setUser(newUser)
  }

  const handlePass = (e) => {
    const newPass = e.target.value
    setPass(newPass)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (user === 'daniel' && pass === '12345') {
      setIsLoggedIn(true)
      navigate('/dashboard')
    } else {
      setPass('')
      setUser('')
      alert("Usuario o contraseña incorrectos")
    }
  }

  return (
    <Container sx={styles.container}>
      <FormContainer onSubmit={handleLogin}>
        <Typography variant='h5' align='center' mb={4}>
          Academia Manejar
        </Typography>
        <LoginTextField
          required={true}
          label="Username"
          variant="outlined"
          size="small"
          onChange={handleUser}
        />
        <LoginTextField
          required={true}
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          onChange={handlePass}
        />
        <Button type='submit' variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </FormContainer>
    </Container>
  )
}
