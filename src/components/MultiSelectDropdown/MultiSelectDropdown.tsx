import { Multiselect } from 'multiselect-react-dropdown'
import { MultiSelectOption } from '../../types'
import './multiSelectDropdown.css'

type MultiSelectProps = {
    options: MultiSelectOption[]
    selected: MultiSelectOption[]
    // setOptions: (options: MultiSelectOption[]) => void
    setSelected: (selected: MultiSelectOption[]) => void
    title: string
}

function MultiSelectDropdown({ options, title, selected, setSelected }: MultiSelectProps) {

    const onSelect = (selectedList: MultiSelectOption[], selectedItem: MultiSelectOption) => {
        setSelected(selectedList)
    }
    const onRemove = (selectedList: MultiSelectOption[], removedItem: MultiSelectOption) => {
        if (typeof removedItem === 'string') {
            setSelected(selectedList)
        }
    }
    return (
        <div className="multiSelectWrapper">
            <label>{title}</label>
            <Multiselect 
                options={options}
                selectedValues={selected}
                displayValue={'name'}
                onSelect={onSelect}
                onRemove={onRemove}
                avoidHighlightFirstOption={true}
                style={{
                    option: {
                        color: '#0D1317',
                    },
                    chips: {
                        background: '#9809C3',
                    },
                    multiselectContainer: {
                        maxWidth: '360px', 
                        backgroundColor: 'white'
                    },
                }}
            />
        </div>
    )
}

export default MultiSelectDropdown