import './modal.css'

type DeleteWorldModalProps = {
    children: any
    setModalOpen: (open: boolean) => void
    deleteWorld: () => Promise<void>
}

// TODO error pop-ups/notifs (not modal...)
function DeleteWorldModal({ children, setModalOpen, deleteWorld }: DeleteWorldModalProps) {
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

export default DeleteWorldModal