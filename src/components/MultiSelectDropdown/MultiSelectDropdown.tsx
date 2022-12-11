import { Multiselect } from 'multiselect-react-dropdown'
import { MultiSelectOption } from '../../types'
import './multiSelectDropdown.css'

type MultiSelectProps = {
    options: MultiSelectOption[]
    selected: MultiSelectOption[]
    setOptions: (options: MultiSelectOption[]) => void
    setSelected: (selected: MultiSelectOption[]) => void
    title: string
}

function MultiSelectDropdown({ options, title, selected, setOptions, setSelected }: MultiSelectProps) {

    const onSelect = (selectedList: MultiSelectOption[], selectedItem: MultiSelectOption) => {
        setSelected(selectedList)
    }
    const onRemove = (selectedList: MultiSelectOption[], removedItem: MultiSelectOption) => {
        setSelected(selectedList)
    }
    return (
        <div style={{marginTop: '5px'}}>
            <label>{title}</label>
            <Multiselect 
                options={options}
                displayValue={'name'}
                onSelect={onSelect}
                onRemove={onRemove}
                style={{option: {color: 'black'}}}
            />
        </div>
    )
}

export default MultiSelectDropdown