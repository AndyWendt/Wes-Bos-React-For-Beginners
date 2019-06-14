import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishFrom from './EditFishForm';

class Inventory extends React.Component {

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        { Object.keys(this.props.fishes).map(fish => <EditFishFrom />) }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
