import React from 'react';
import './FilterBtn.css';

class FilterBtn extends React.Component {
  render() {

    const { pokeTypes } = this.props;

    const filter = pokeTypes.map(pokemon => pokemon.type).sort();
    

    return (
      <div className="filter-btn-container">
        {
          filter
            .filter((elem, index, arr) => {
              return !index || elem !== arr[index - 1];
            })
            .map((type)=> {
              return <button 
                value={type} 
                key={type} 
                onClick={this.props.onClick}
                className="filter-btn"
                >{type}</button>
            })
        }
        <button 
          value="all" 
          key="all" 
          onClick={this.props.onClick}
          className="filter-btn"
          >All Types</button>
      </div>
    );
  }
}

export default FilterBtn;
