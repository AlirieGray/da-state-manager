import React from 'react'

interface Props {
    onSave: () => void
    onDiscard: () => void
}

class SaveBar extends React.Component<Props> {
    render() {
        const {onSave, onDiscard} = this.props
        return (
            <div>
               <button onClick={onSave}>SAVE</button>
               <button onClick={onDiscard}>DISCARD CHANGES</button>
            </div>
        )
    }
}

export default SaveBar