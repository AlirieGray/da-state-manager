import { useState } from 'react'
import './modal.css'

type TutorialModalProps = {
    setModalOpen: (open: string) => void
    tutorialTitle: string
}

function TutorialModal({ tutorialTitle, setModalOpen }: TutorialModalProps) {
    const tutorialMessages = [
        'Most game decisions have suggested values, however you do not need to use these, and can type in any answer for a given decision.',
        'You can switch between games at any time without losing your progress.',
        'You also do not need to fill in all decisions at once while creating a new world state, and you can edit your world state at any time after creating it.',
        `When you're done setting your decisions, hit the Submit button at the top right of the form.`
    ]
    const [currentTutorialMessage, setCurrentTutorialMessage] = useState(0)

    return (
        <div className="modalContainer">
            <div className="modal">
                <div className="modalHeader">
                    <span className="close" onClick={() => {
                        setModalOpen("false")
                    }}>&times;</span>
                </div>
                <div className="modalContent">
                    <h1>{tutorialTitle}</h1>
                    <p>{tutorialMessages[currentTutorialMessage]}</p>
                </div>
                {(currentTutorialMessage < tutorialMessages.length -1) && <div className="modalFooter">
                    <button className="modalButton" onClick={(e) => {
                        e.preventDefault()
                        setCurrentTutorialMessage(currentTutorialMessage + 1)
                    }}>Next</button>
                </div>}
                {(currentTutorialMessage >= tutorialMessages.length - 1) && <div className="modalFooter">
                    <button className="modalButton" onClick={(e) => {
                        e.preventDefault()
                        setModalOpen("false")
                    }}>Done</button>
                </div>}
            </div>
        </div>
    )
}

export default TutorialModal