import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
const Forms = () => {
  return (
    <div>
      <h2>SDJD</h2>
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      <Button variant="contained" size="large">
          Inscrever
        </Button>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
};
export default Forms;
