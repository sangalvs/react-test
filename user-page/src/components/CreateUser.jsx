import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { Switch, FormControl, FormGroup, FormControlLabel, FormLabel} from '@material-ui/core';
import { autocompleteClasses } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  whiteText: {
    color: 'white'
  },
  root: {
      width: '50%', 
      padding: 5,
      alignItems: 'center',
      justifyContent:'center'
  },
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CreateUser() {
  
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pairing, setPairing] = useState(false);
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePairingChange = (event) => {
    setPairing(event.target.checked);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = async (event) => {

    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    event.preventDefault();

    // 

    let formData = new FormData();
    formData.append('user_name', name);
    formData.append('user_email', email);
    formData.append('user_phone', phoneNumber);
    formData.append('pairing', pairing);

    try {
      let res = await fetch("http://projects.codeandtrust.com/api/user/create", {
        method: "POST",
        headers: {
          "Accept": "application/json"
      },
        body: formData,
      });
      let resJson = res.json();
      if (res.status === 200) {
        console.log(resJson);
      } else {
        setMessage("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
      <Grid>
      <Button component={Link} to="/user" variant="contained" color="primary"startIcon={<MenuIcon />}>
      </Button>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField className={classes.whiteText} 
          label="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        </Grid>
        <Grid item xs={12}>
        <TextField className={classes.whiteText} 
          label="999-999-9999"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        </Grid>
        <Grid item xs={12}>
        <TextField className={classes.whiteText} 
          label="user@example.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        </Grid>
        <Grid item xs={12}>
        <TextField className={classes.whiteText} 
          label="----------"
          value={password}
          onChange={handlePasswordChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField className={classes.whiteText} 
          label="1234"
          value={pin}
          onChange={handlePinChange}
        />
        </Grid>
      <Grid item xs={12} className={classes.toggleContainer}>
      <FormControl>
      <FormLabel></FormLabel>
        <FormGroup>
        <FormControlLabel
          control={<Switch checked={pairing} onChange={handlePairingChange} />}
          label="Enable Pairing"
        />
         </FormGroup>
        </FormControl>
        </Grid>
      </Grid>
      </div>
      <Button variant="text">Cancel</Button>
      <Button variant="contained" type="submit">Save</Button>
    </form>
  );
}