import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./estilos/Forms.css";
const Forms = () => {
  return (
    <div >
      <Typography variant="h4" align="center" mb={8} mt={2} marginLeft="7em" marginRight="7em"> 
        Assinante do MaisVocê recebe receitas diariamente e promoçoes exclusivas.
      </Typography>
      <div class="formulario">
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" size="20px">
          Inscrever
        </Button>
      </div>

      <AppBar position="static" style={{marginTop: '80px'}}>
        <Toolbar className="rodape" variant="dense">
          <Typography
            className="rodape-esquerdo"
            variant="h6"
            color="inherit"
            component="div"
          >
            MaisVocê
          </Typography>
          <IconButton color="inherit" href="#">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="#">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="#">
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="#">
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Forms;
