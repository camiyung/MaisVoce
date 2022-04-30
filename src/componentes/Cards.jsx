import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ReceitaCard = () => {
    return (
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 500 , marginBottom: '1em'}} >
                <CardHeader
                    title="Paella"
                />
                <CardMedia
                    component="img"
                    height="194"
                    imagem src="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish - prato de paella"
                />
                <CardActions >
                    <IconButton aria-label="tempo de preparo">
                        <AccessTimeIcon />
                    </IconButton>
                    <p> 1h</p>

                    <IconButton aria-label="custo médio">
                        <AttachMoneyIcon sx={{ pl: 2 }} />
                    </IconButton>
                    <p>R$48,75</p>

                </CardActions>

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Esta paella impressionante é um prato de festa perfeito e uma refeição divertida para cozinhar
                        junto com seus convidados. Adicione 1 xícara de ervilhas congeladas junto com os mexilhões,
                        se você gostar.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 , marginBottom: '1em'}} >
                <CardHeader
                    title="Massa farfalle ao pesto"
                />
                <CardMedia
                    component="img"
                    height="194"
                    imagem src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Massa farfalle ao pesto com tomatinhos cereja"
                />
                <CardActions >
                    <IconButton aria-label="tempo de preparo">
                        <AccessTimeIcon />
                    </IconButton>
                    <p> 30 minutos</p>

                    <IconButton aria-label="custo médio">
                        <AttachMoneyIcon sx={{ pl: 2 }} />
                    </IconButton>
            <p>R$25,00</p>

                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Facilidade e rapidez na preparação desse leve e delicioso prato. 
                        A massa farfalle ao pesto com tomatinho cereja requer poucos ingredientes e possui muito sabor.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 , marginBottom: '1em'}} >
                <CardHeader
                    title="Guacamole"

                />
                <CardMedia
                    component="img"
                    height="194"
                    imagem src="https://media.istockphoto.com/photos/homemade-guacamole-avocado-dip-with-nacho-chips-picture-id1305706774?b=1&k=20&m=1305706774&s=170667a&w=0&h=H1VevFAY9nsqQpH1T3kKquDEep9cPKF04tPwmHb3-r4="
                    alt="Guacamole"
                />
                <CardActions >
                    <IconButton aria-label="tempo de preparo">
                        <AccessTimeIcon />
                    </IconButton>
                    <p> 15 minutos</p>

                    <IconButton aria-label="custo médio">
                        <AttachMoneyIcon sx={{ pl: 2 }} />
                    </IconButton>
                    <p>R$20,00</p>

                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       Esta tradicional iguaria que conquista todos os paladares é rico em proteínas e gorduras saudáveis. Vale a pena dedicar tão pouco tempo para obter sabores e nutrientes tão ricos.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 , marginBottom: '1em'}} >
                <CardHeader
                    title="Torta de morango"

                />
                <CardMedia
                    component="img"
                    height="194"
                    imagem src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Torta de morango"
                />
                <CardActions >
                    <IconButton aria-label="tempo de preparo">
                        <AccessTimeIcon />
                    </IconButton>
                    <p> 2h</p>

                    <IconButton aria-label="custo médio">
                        <AttachMoneyIcon sx={{ pl: 2 }} />
                    </IconButton>
                    <p>R$30,00</p>

                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Esta sobremesa fácil e saborosa vai deixar seus convidados com água na boca.
                    </Typography>
                </CardContent>
            </Card>

        </Container>


    )
}

export default ReceitaCard;