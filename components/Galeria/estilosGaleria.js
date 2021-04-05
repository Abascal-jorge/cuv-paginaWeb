import styled from "@emotion/styled";
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 2),
    },
    imagen:{
        width: "100%"
    }
}));

export const GaleriaItems = styled.div`
    margin-top: 40px;
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: 1rem;
    grid-auto-flow: row dense;

    @media(min-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-gallery__item:nth-child(11n+4) {
          grid-column: span 2;
          grid-row: span 1;
    }

    .grid-gallery__item:nth-child(11n+6) {
          grid-column: span 3;
          grid-row: span 1;
    }

    .grid-gallery__item:nth-child(11n+7) {
          grid-column: span 1;
          grid-row: span 2;
    }

    .grid-gallery__item:nth-child(11n+8) {
          grid-column: span 2;
          grid-row: span 2;
    }

    .grid-gallery__item:nth-child(11n+9) {
          grid-row: span 3;
    }

    //Estilos imagen
    .grid-gallery__image {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          object-fit: cover;
    }
`;