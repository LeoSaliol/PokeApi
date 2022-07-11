// fetch("https://pokeapi.co/api/v2/pokemon/ditto")

const form = document.querySelector('form');
const search = document.getElementById('search')

const main = document.getElementById('main')



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = search.value;    
    fechData(nombre);
    search.value = "";
    search.placeholder = "Buscar otro Pokemon"

})
 

const fechData = async (nombre) => {
    
    try {
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}` );
        const data = await res.json();
        // console.log(data);

        const pokemon = {
            id: data.id,
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
            type: data.types[0].type.name,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial:data.stats[3].base_stat,
        }
        
        pintarCard(pokemon);


    } catch (error) {
        console.log(error);
    }

}

    const pintarCard = (pokemon) => {
        let pokeContent = `
       
        <section class="card">
        <div class="cardBody">
            <div class="background">
                <!-- <img src="/images/bg-pattern-card.svg" alt="" class="headerCard"> -->
            </div>
            
            <img src="${pokemon.img}" alt="${pokemon.name}" class="img">
            
            <div class="title">
                <h2 class="titleName" >${pokemon.name}  </h2> 
                <p class="titleType">Type: ${pokemon.type} </p>     
            </div>
            
            <div class="footer">
                <article class="items">
                    <h3 class="numTitle">
                        ${pokemon.ataque}
                    </h3>
                    <p class="subtitle">
                        Ataque
                    </p>
                </article>
            
                <article class="items">
                    <h3 class="numTitle">
                        ${pokemon.especial}
                    </h3>
                    <p class="subtitle">
                        Especial
                    </p>
                </article>
            
                <article class="items">
                    <h3 class="numTitle">
                        ${pokemon.defensa}
                    </h3>
                    <p class="subtitle">
                        Defensa
                    </p>
                </article>
            </div>
            
        </div class="cardBody">
        
        <div class="btns" >
            <button class="btn" >Back</button>
            <button class="btn" >Random</button>
            <button class="btn">Next</button>
        </div >
    </section>
        `;
        main.innerHTML = pokeContent;

    
    }