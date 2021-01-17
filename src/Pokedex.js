import React from 'react';
import './Pokedex.css';

import Pokemon from './Pokemon';
import NextBtn from './NextBtn';
import FilterBtn from './FilterBtn';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: 'all',
            pokemonIndex: 0,
            pokemonsArr: props.pokemons,
        }
    }

    handleClick = () => {
        if(this.state.pokemonIndex >= this.state.pokemonsArr.length - 1) {
            this.setState(() => ({
                pokemonIndex: 0
            }))
        }
        else {
            this.setState((acState) => ({
                pokemonIndex: acState.pokemonIndex + 1
            }))
        }
    }

    handleFilter = (event) => {
        let newArray = this.props.pokemons;
        if(event.target.value !== 'all') {
            newArray = this.props.pokemons.filter(pokemon => pokemon.type === event.target.value);
        }

        this.setState(() => ({
            pokemonsArr: newArray,
            
        }));

    }

    render() {
        const { pokemons } = this.props;

        return (
            <section className="pokedex-container" >
                <NextBtn value={this.state.pokemonIndex} onClick={this.handleClick} />
                <FilterBtn pokeTypes={pokemons} onClick={this.handleFilter} />
                <div className="pokedex">
                    {this.state.pokemonsArr
                        .filter((_pokemon, index) => index === this.state.pokemonIndex)
                        .map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                </div>
            </section>
        );
    }
}

export default Pokedex;
