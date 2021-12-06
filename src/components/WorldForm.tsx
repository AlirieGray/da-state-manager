import React from 'react'
import SaveBar from './SaveBar'
import TextInput from './TextInput'
import {World} from '../types'

interface Props {
    world: World
    setNewEditableForm: (world: World) => void
    onAddChange: (world: World) => void
    // saveChanges: () => void
    // discardChanges: () => void 
    formView: World | null
    formEdit: World | null
}

class WorldForm extends React.Component<Props> {
    componentWillMount() {
        this.props.setNewEditableForm(this.props.world)
    }

    
    render() {
        const {formEdit, formView} = this.props

        if (!formEdit || !formView) {
            return <span>LOADING...</span>
        }

        return (
            <div>
                <TextInput 
                    handleChange={(newValue) => this.updateWardenName(newValue)}
                    title="Warden"
                    value={formEdit.warden.name}
                />
                 <TextInput 
                    handleChange={(newValue) => this.updateHawkeName(newValue)}
                    title="Hawke"
                    value={formEdit.hawke.name}
                />
                <TextInput 
                    handleChange={(newValue) => this.updateInkyName(newValue)}
                    title="Inquisitor"
                    value={formEdit.inky.name}
                />
                {/* <SaveBar onSave={saveChanges} onDiscard={discardChanges} /> */}
            </div>
        )
    }

    private updateWardenName = (newValue: string) => {
        const {onAddChange, world} = this.props
        var newWorld = world
        newWorld.warden.name = newValue
        onAddChange(newWorld)
    }

    private updateHawkeName = (newValue: string) => {
        const {onAddChange, world} = this.props
        var newWorld = world
        newWorld.hawke.name = newValue
        onAddChange(newWorld)
    }

    private updateInkyName = (newValue: string) => {
        const {onAddChange, world} = this.props
        var newWorld = world
        newWorld.inky.name = newValue
        onAddChange(newWorld)
    }
}


export default WorldForm