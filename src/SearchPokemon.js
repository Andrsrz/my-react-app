import React from 'react';
import './search-pokemon.css';

class SearchPokemon extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            value: '',
            name: '',
            id: '',
            spriteDefault: '',
            spriteShiny: '',
            imgTitleDefault: '',
            imgTitleShiny: ''
        };

		this.handlerChange = this.handlerChange.bind(this);
	}

	async handlerChange(event){
		await this.setState({value: event.target.value});

        fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.value)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: '#' + data.id,
                    name: data.name,
                    spriteDefault: data.sprites.front_default,
                    spriteShiny: data.sprites.front_shiny,
                    imgTitleDefault: data.name,
                    imgTitleShiny: data.name + ' shiny'
                });
            }).catch(err => this.setState({
                id: '',
                name: '',
                spriteDefault: '',
                spriteShiny: ''
            }));
	}

	render(){
		return(
			<div id='search-pokemon'>
			  <h1 id='title'>Search your favorite Pok&eacute;mon!</h1>
			  <form>
				<label>
				  Number or Name:
                  <br/>
				  <input
					type='text'
					value={this.state.value}
					onChange={this.handlerChange} />
				</label>
			  </form>
              <h2 id='pokemon'>{this.state.id} {this.state.name}</h2>
              <div id='images-container'>
                <img src={this.state.spriteDefault} title={this.state.imgTitleDefault}></img>
                <img src={this.state.spriteShiny} title={this.state.imgTitleShiny}></img>
              </div>
			</div>
		);
	}
}

export default SearchPokemon;
