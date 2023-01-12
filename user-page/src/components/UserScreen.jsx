import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export default function UserScreen(props) {
    
    async function getUser() {
        try {
          let res = await fetch("http://projects.codeandtrust.com/api/user/${props.id}", {
            method: "GET"
          });
          let resJson = res.json();
          if (res.status === 200) {
            console.log(resJson);
          } else {
            alert("Error retrieving user information.");
          }
        } catch (err) {
          console.log(err);
        }
      };

    
    return (
        <div>
            <Grid>
            <Button variant="outlined" startIcon={<AccountCircleIcon />}>
                Account Settings
            </Button>
            </Grid>
            <Button variant="outlined" startIcon={<DevicesIcon />}>
                Paired Devices
            </Button>
            <Grid>
            <Button variant="outlined" startIcon={<MailOutlineIcon />}>
                Invites
            </Button>
            </Grid>
            <Button variant="outlined" startIcon={<PlaylistAddCheckIcon />}>
                Triggers
            </Button>
            <Grid>
            <Button variant="outlined" startIcon={<PowerSettingsNewIcon />}>
                Logout
            </Button>
            </Grid> 
        </div>
    );
}

