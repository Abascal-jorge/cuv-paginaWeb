import React, {useState} from 'react';
import { useStyles, GaleriaItems} from "./estilosGaleria"; 
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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