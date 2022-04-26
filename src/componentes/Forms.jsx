import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

const Forms = () => {
  return (
    <div>
      <h2>SDJD</h2>
      <input placeholder="E-mail"></input>
      <button>Inscrever</button>
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
