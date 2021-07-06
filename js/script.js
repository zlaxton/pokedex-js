let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison'],


  },
  {
    name: 'Snorlax',
    height: 2.1,
    type: ['normal'],

  },
  {
    name: 'Charizard',
    height: 1.7,
    type: ['fire', 'flying'],

  },
  {
    name: 'Mewtwo',
    height: 2.0,
    type: ['psychic'],

  },




];


document.write('<ul>');

let result 

//The initialization, The condition, The action

for (let i = 0; i < pokemonList.length; i++) {

  let pokemon = `${pokemonList[i].name}  ( height : ${pokemonList[i].height} )`

  if (pokemonList[i].height > 2)

    result = `${ pokemon } - Wow, that's big!)`;

  else if (pokemonList[i].height > 1 && pokemonList[i].height < 2)

    result = `${pokemon} - This is an avarage height)`;

  else {
    result = pokemon
  }

  document.write('<li>' + result + '</li>')


}

document.write('</ul>')