import React from 'react';

class AddFishForm extends React.Component {
    render() {
        return (
             <form className="fish-edit">
                 <p>It works</p>
               <input name="name" type="text" placeholder="name" />
               <input name="price" type="text" placeholder="price" />
               <select name="status">
                  <option value="available">Fresh!</option>
                  <option value="unavailable">Sold Out!</option>
               </select>
               <textarea name="desc" placeholder="desc" />
               <input name="image" type="text" placeholder="image" />
               <button type="submit">Submit</button>
             </form>
        );
    }
}

export default AddFishForm;
