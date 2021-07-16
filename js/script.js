let pokemonRepository = (function () {

  let pokemonList = [

    {
      name: '  Bulbasaur  ', height: 0.7, type: ['(grass', 'poison)'],
    },

    {
      name: '  Snorlax  ', height: 2.1, type: ['(normal)'],

    },

    {
      name: '  Charizard  ', height: 1.7, type: ['(fire', 'flying)'],

    },

    {
      name: '  Mewtwo  ', height: 2.0, type: ['(psychic)'],
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");


    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', function (e) {
      showDetails(pokemon);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon)

  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function (pokemon) {


  pokemonRepository.addListItem(pokemon);

});


