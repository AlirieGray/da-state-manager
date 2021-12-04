import '../styles/protagonist.css'
import React from 'react';

type Props = {
  name: string,
  romance: string,
}

class Protagonist extends React.Component<Props> {
  render() {
    const {name, romance} = this.props
    return (
      <div className="protagWrapper">
          <div className="attribute">
            Name: {name}
          </div>
          <div className="attribute">
            Romance: {romance}
          </div>
      </div>
    )
  }
}

export default Protagonist
