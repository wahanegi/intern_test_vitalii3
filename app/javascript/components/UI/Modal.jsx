import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const Backdrop = props => {
    return (
        <div className = "backdrop" onClick={props.onClose}/>
          )

}

const ModalOverlay = props => {
    console.log(props.class);
    return(
        <>
        <div className="modal">
             <div className="content">
                 {props.children}
                 </div>
        </div>
        
            <button className="close" onClick={props.onClose}>X</button>
        </>
    )
}

const portalElement = document.getElementById('overlays')
const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;