// import '../styles/protagonist.css'

function Protagonist(props) {
    const {name, romance, type} = props
 
  return (
    <div className="protagWrapper">
        {name}
        {romance}
    </div>
  );
}

export default Protagonist
