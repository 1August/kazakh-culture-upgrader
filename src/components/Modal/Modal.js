import './Modal.css'

import closeIcon from '../../assets/img/close.png'

export const Modal = props => {
    const {
        modalCard,
        modalOpen,
        closeModal
    } = props


    if (modalOpen){
        return(
            <div id="modal" className="modal" onClick={closeModal}>
                <div className="container">
                    <div className="modal__close" onClick={closeModal}>
                        <img src={closeIcon} alt="Close modal"/>
                    </div>
                    <div className="modal__body">
                        <h1>{ modalCard.card.title }</h1>
                        <p>{ modalCard.card.content }</p>
                    </div>
                </div>
            </div>
        )
    }
}