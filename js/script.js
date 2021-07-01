let pokemonList = [
    {
        name: 'Bulbasaur',
        hight: 0.7,
        type: ['grass' , 'poison'],


    },
    {
        name: 'Snorlax',
        height: 2.1,
        type: ['normal'],
          
      },
      {
        name: 'Charizard',
        height: 1.7,
        type: ['fire','flying'],
       
      },
      {
        name: 'Mewtwo',
        height: 2.0,
        type: ['psychic'],
       
      },
   



];
document.write('<ul>');

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<li>' + pokemonList[i].name + ' ( ' + pokemonList[i].type + ')');

    document.write('</li>');
}