let quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup' , () => {
    takePokemons(quantidade.value)
})

takePokemons(2)

function takePokemons(quantity){

fetch("https://pokeapi.co/api/v2/pokemon?limit=" + quantity)
  .then((response) => response.json())
  .then((allpokemon) => {
    let pokemons = [];

    allpokemon.results.map((val) => {
      fetch(val.url)
        .then((response) => response.json())
        .then((pokemonsingle) => {
          pokemons.push({
            nome: val.name,
            imagem: pokemonsingle.sprites.front_default,
          });

          if (pokemons.length == quantity) {
            //finalizando nossas ações
            // console.log(pokemons);

            let pokemonBoxes = document.querySelector(".pokemon-boxes");
            pokemonBoxes.innerHTML = "";

            pokemons.map((val) => {
              pokemonBoxes.innerHTML += `
                        <div class="pokemon-box">
                        <img src="${val.imagem}" alt="Foto do pokemon ${val.nome}">
                        <p>${val.nome}</p>
                    </div>
                        `;
            });
          }
        });
    });
    pokemons.map((val) => {
      console.log(val.nome);
    });
  })
};

