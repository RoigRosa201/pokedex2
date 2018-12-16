"use strict";

class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

axios.get("https://pokeapi.co/api/v2/pokemon/144/")
.then(response => {
 let data = response.data;
 
 console.log(data);


    let articuno = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name
        )
        let p1 = document.querySelector("#p1")
        let p2 = document.querySelector("#p2")
        let p3 = document.querySelector("#p3")
        let p4 = document.querySelector("#p4")
        p1.innerHTML += articuno.hp;
        p2.innerHTML += articuno.defense;
        p3.innerHTML += articuno.attack;
        p4.innerHTML += articuno.abilities; 
        
    
})