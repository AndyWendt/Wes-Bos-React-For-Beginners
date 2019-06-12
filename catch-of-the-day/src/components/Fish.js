import React from 'react';

class Fish extends React.Component {
  render() {
    const { image, name, price, description, status } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{price}</span>
        </h3>
      </li>
    );
  }
}

export default Fish;
