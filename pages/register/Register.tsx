// import  React from "react"
// import {addAdmin, getAdmin, deleteAdmin, updateAdmin } from "../../api/admin/apiAdmin";
// import Header from "../../components/home/Header";
// import styles from "../../styles/form.module.css"

// interface TypeAdmin {
//   id:number,
//   name:string,
//   email:string,
// }

// function SignUp(): JSX.Element {
//   const [admin, setAdmin]=React.useState<TypeAdmin[]>([]);
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [nameAdd, setNameAdd] = React.useState("");
//   const [emailAdd, setEmailAdd] = React.useState("");
//   const [openEdit, setOpenEdit] = React.useState<number>(-1);
//   const [openAdd, setOpenAdd] = React.useState<boolean>(false);
//   React.useEffect(()=>{
//     getAdmin().then((data)=>setAdmin(data))
//   },[]);
//   return (
//     <>
//     <div className={styles.form}
//     > 
//         <div className={styles.content}>
//           <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
//               value={nameAdd}
//               onChange={(e)=>setNameAdd(e.target.value)}
//             />
//           <br />
//           <input
//               type="text"
//               placeholder="Enter your email"
//               className="w-full bg-gray-100 text-gray-900 rounded-md pl-6 py-2 my-1"
//               value={emailAdd}
//               onChange={(e)=>setEmailAdd(e.target.value)}
//             />
//           <br />
//           <button 
//             className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
//             // style={{display: openAdd? "block":"none"}}
//             onClick={()=>{
//               addAdmin(nameAdd, emailAdd).then((data:any)=>setAdmin([...admin,data]));
//               setEmailAdd("");
//               setNameAdd("");
//               setOpenAdd(false)
//             }}
//           >
//           Đăng Ký 
//           </button>
//         </div>
//     </div>
//     </>
//  )}

//  export default  SignUp;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addAdmin, getAdmin } from '../../api/admin/apiAdmin';

interface TypeAdmin {
  id:number,
  name:string,
  email:string,
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(): JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
    });
  };
    const [admin, setAdmin]=React.useState<TypeAdmin[]>([]);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [nameAdd, setNameAdd] = React.useState("");
    const [emailAdd, setEmailAdd] = React.useState("");
    const [openEdit, setOpenEdit] = React.useState<number>(-1);
    const [openAdd, setOpenAdd] = React.useState<boolean>(false);
    React.useEffect(()=>{
      getAdmin().then((data)=>setAdmin(data))
    },[]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="family-name"
                  value={nameAdd}
                  onChange={(e)=>setNameAdd(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={emailAdd}
                 onChange={(e)=>setEmailAdd(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
              addAdmin(nameAdd, emailAdd).then((data:any)=>setAdmin([...admin,data]));
              setEmailAdd("");
              setNameAdd("");
              setOpenAdd(false)
            }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}