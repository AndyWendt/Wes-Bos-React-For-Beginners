import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    handleClick() {
        alert("heyyyy!!!");
    }
    render() {
        return (
          <form className="store-selector">
              <h2>Please Enter A Store</h2>
              <button onClick={this.handleClick}>Click me!</button>
              <input
                  type="text"
                  required
                  placeholder="Store Name"
                  defaultValue={getFunName()}
              />
              <button type="submit">Visit Store</button>
          </form>
        );
    }
}

export default StorePicker;
