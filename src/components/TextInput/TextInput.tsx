import { useState } from 'react'
import './textInput.css'

interface TextInputProps {	
    handleChange: (value: string) => void
    suggestedValues?: string[]	
    multiLine?: boolean
    title: string	
    value: string	
}	

// todo: prop to change style (for long form input, ex summary)

function TextInput({handleChange, title, value, suggestedValues, multiLine}: TextInputProps) {	
    const [showDropdown, setShowDropdown] = useState(false)

    const dropdown = () => {
        if (suggestedValues && showDropdown) {
            return (
                <div className='dropdown'>
                    {suggestedValues.map((suggestion: string) => {
                        return (
                        <span 
                            key={suggestion}
                            className='suggestion'
                            onClick={() => {
                                setShowDropdown(false)
                                handleChange(suggestion)}}>
                            {suggestion}
                            </span>
                        )
                    })}
                </div>
            )
        }
    }

    if (multiLine) {
        return (	
            <div className="textInputWrapper">	
                <label> {title} </label>	
                <textarea 
                    className='textInput'
                    spellCheck='false'
                    value={value} 
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => {
                        setTimeout(() => {
                            setShowDropdown(false)
                        }, 200)   
                    }}
                    onChange={(event) => {
                        setShowDropdown(false)
                        handleChange(event.target.value)
                    }} autoComplete='new-password'
                />	
                {dropdown()}
            </div>	
        )	
    }

    return (	
        <div className="textInputWrapper">	
            <label> {title} </label>	
            <input 
                className='textInput'
                spellCheck='false'
                type='text' 
                value={value} 
                onFocus={() => setShowDropdown(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setShowDropdown(false)
                    }, 200)   
                }}
                onChange={(event) => {
                    setShowDropdown(false)
                    handleChange(event.target.value)
                }} autoComplete='new-password'
            />	
            {dropdown()}
        </div>	
    )	
}	

export default TextInput