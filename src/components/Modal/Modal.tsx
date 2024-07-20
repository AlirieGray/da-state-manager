import './modal.css'

// TODO: type safety props
// TODO error pop-ups/notifs (not modal...)
function Modal({ children, setModalOpen, deleteWorld }: any) {
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
                    <button className="modalButton deleteButton" onClick={(e) => {
                        e.preventDefault()
                        setModalOpen(false)
                        deleteWorld()
                    }}>Delete</button>
                    <button className="modalButton" onClick={() => {
                        setModalOpen(false)
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal