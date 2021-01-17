import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div className="pokemon-text">
                    <p className="info-label">Name:</p>
                    <p>{name}</p>
                    <p className="info-label">Type:</p>
                    <p>{type}</p>
                    <p className="info-label">Average weight:</p>
                    <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <div className="pokemon-img">
                    <img src={image} alt={`${name} sprite`} />
                </div>
            </div>
        );
    }
}

export default Pokemon;