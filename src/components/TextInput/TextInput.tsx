import './textInput.css'

interface Props {	
    handleChange: (value: string) => void	
    title: string	
    value: string	
}	

// todo: prop to change style (for long form input, ex summary)
// todo: onfocus to prevent autocomplete?

function TextInput(props: Props) {	
    const {handleChange, title, value} = props	
    return (	
        <div className="textInputWrapper">	
            <label> {title} </label>	
            <input type='text' value={value} onChange={(event) => handleChange(event.target.value)} autoComplete='new-password'/>	
        </div>	
    )	
}	

export default TextInput