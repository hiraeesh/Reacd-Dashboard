import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';


export default function Form() {
 const handleSubmit=(e)=>{
     e.preventDefault();
     const data = new FormData(e.currentTarget);
     const actualData ={
         name:data.get('name'),
         email:data.get('email'),
         Address:data.get('Address'),
         class:data.get('Class'),
         Age:data.get('Age'),
         Pincode:data.get('Pincode'),

     }
     console.log(actualData)
 }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get('email'),
//       password: data.get('password'),
//     }
// console.log(actualData)
// }
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 18,fontWeight:'bold' }} color="text.secondary" gutterBottom>
     SIGNUP FORM
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
{/* 
      <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
     
    </Box>
   */}
  
      <Box component="form" noValidate onSubmit={handleSubmit} >
      <TextField  id='name' label="Name"  name='name' type='text'/>
      <TextField  id='name' label="Email" name='email' />           <br/>
      <TextField id="outlined-basic" label="Address" variant="outlined"  name='Address'/>
      <TextField id="outlined-basic" label="Class" variant="outlined" name='Class' />   <br/>
      <TextField id="outlined-basic" label="Age" variant="outlined"  name='Age'/>
      <TextField id="outlined-basic" label="Pincode" variant="outlined" name='Pincode'/><br/>
      
<Box textAlign='center'>
<Button type='submit' variant="contained" >Contained</Button>

</Box>
     
</Box>
   
      </Typography>

        {/* <Typography>
            
      <Stack spacing={2} style={{margin:'center'}}>
      <Button variant="contained" >Contained</Button>
    </Stack>  

        </Typography> */}

    </CardContent>
  
  </Card>
   )
};
