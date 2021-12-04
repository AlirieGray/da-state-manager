import { render } from '@testing-library/react';
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
          {name}
          {romance}
      </div>
    )
  }
}

export default Protagonist
