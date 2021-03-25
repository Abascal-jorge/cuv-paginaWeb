import React, {useState} from 'react';
import styled from "@emotion/styled";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
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

const GaleriaItems = styled.div`
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

const GaleriaGrid = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [ima, setIma] = useState("");

    const handleOpen = (e) => {
        setOpen(true);
        setIma( e.target.src.split("3000")[1] )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <>
        <section className="secciones">
            <h2 className="title">Galerias</h2>
            <div className="contenedor">
                <GaleriaItems className="grid-gallery">
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/1.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/2.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen}  className="grid-gallery__image" src="./galeria/3.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen}  className="grid-gallery__image" src="./galeria/4.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen}  className="grid-gallery__image" src="./galeria/5.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/6.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/7.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/8.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/9.jpg"/>
                    </div>

                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/10.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/11.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/12.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/13.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/14.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/15.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/16.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/17.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/18.jpg"/>
                    </div>
                    <div className="grid-gallery__item">
                        <img onClick={handleOpen} className="grid-gallery__image" src="./galeria/19.jpg"/>
                    </div>
                </GaleriaItems>
            </div>
        </section>

        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img className={classes.imagen} src={`.${ima}`}/>
                    </div>
                </Fade>
            </Modal>
        </div>
        </>
    );
}
 
export default GaleriaGrid;