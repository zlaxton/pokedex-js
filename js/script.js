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

//Unordered (buleted) list
document.write('<ul>');
//The initialization, The condition, The action
for (let i = 0; i < pokemonList.length; i++) {
  //Writes Pokemon name to the DOM, list items (Definition list)
  document.write('<li>' + pokemonList[i].name + ' ( height :  ' + pokemonList[i].height + ') </li>');
  //Checks if pokemon height is greater than 2 
  if (pokemonList[i].height > 2)
    //if pokemon height is greater than 1.6 m, writes "Wow that's big!"
    document.write(" - Wow, that's big!");
  //if pokemon is greater than 1 and lower than 2 writes "This is an average height"
  else if (pokemonList[i].height > 1 && pokemonList[i].height < 2) 
    document.write(" - This is an average height");


  }