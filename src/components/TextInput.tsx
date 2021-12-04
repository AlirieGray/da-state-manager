import React from 'react'

interface Props {
    handleChange: (value: string) => void
    title: string
    value: string
}

class TextInput extends React.Component<Props> {
    render() {
        const {handleChange, title} = this.props
        return (
            <div>
                {title}
                <input type="text" onChange={(event) => handleChange(event.target.value)} />
            </div>
        )
    }
}

export default TextInput