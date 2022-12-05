import React from 'react'

interface Props {
    handleChange: (value: string) => void
    title: string
    value: string
}

function TextInput(props: Props) {
    const {handleChange, title, value} = props
    return (
        <div>
            {title}
            <input type='text' value={value} onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default TextInput