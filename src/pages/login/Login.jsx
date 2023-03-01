import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Typography, TextField, Container } from '@mui/material'

const FormContainer = styled('div')({
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
        />
        <LoginTextField
          label="Password"
          variant="outlined"
          size="small"
          type="password"
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </FormContainer>
    </Container>
  )
}
