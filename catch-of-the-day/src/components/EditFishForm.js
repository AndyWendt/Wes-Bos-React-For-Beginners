import React from 'react';

class EditFishForm extends React.Component {

  handleChange = event => {
    console.log(event);
  };

  render() {
    return <div className="fish-edit">
      <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
      <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
      <select name="status" value={this.props.fish.status} onChange={this.handleChange} >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange} />
      <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} />
    </div>
  }
}

export default EditFishForm;
