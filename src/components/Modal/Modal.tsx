import './modal.css'

function Modal({ children, setModalOpen }: any) {
    return (
        <div className="modalContainer">
            <div className="modal">
                <div className="modalHeader">
                    <span className="close" onClick={() => {
                        setModalOpen(false)
                    }}>&times;</span>
                </div>
                <div className="modalContent">
                    {children}
                </div>
                <div className="modalFooter">
                    <button className="modalButton deleteButton">Delete</button>
                    <button className="modalButton" onClick={() => {
                        setModalOpen(false)
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal