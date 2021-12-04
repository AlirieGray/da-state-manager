import React from 'react'
import SaveBar from './SaveBar'
import TextInput from './TextInput'
import {World} from '../types'

interface Props {
    setUpEditableForm: () => void
    addChange: (field: string, value: string) => void
    saveChanges: () => void
    discardChanges: () => void 
    formView: World
    formEdit: World
    
}

class WorldForm extends React.Component<Props> {
    componentWillMount() {
        this.props.setUpEditableForm()
    }

    
    render() {
        const {formEdit, formView, addChange, saveChanges, discardChanges} = this.props

        if (!formEdit || !formView) {
            return <span>LOADING...</span>
        }

        return (
            <div>
                <TextInput 
                    handleChange={(newValue) => addChange('warden', newValue)}
                    title="Warden"
                    value={formEdit.warden.name}
                />
                <SaveBar onSave={saveChanges} onDiscard={discardChanges} />
            </div>
        )
    }
}


export default WorldForm