"use strict";

window.onload=function(){
    document.getElementById("pokeplay.mp4").play();
}
class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}
//Article pokemon API stats.
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
//Aerodactyl pokemon API stats.
axios.get("https://pokeapi.co/api/v2/pokemon/142/")
.then(response => {
 let data = response.data;
 
 console.log(data);


    let aerodactyl = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name
        )
        let p1 = document.querySelector("#p9")
        let p2 = document.querySelector("#p10")
        let p3 = document.querySelector("#p11")
        let p4 = document.querySelector("#p12")
        p1.innerHTML += aerodactyl.hp;
        p2.innerHTML += aerodactyl.defense;
        p3.innerHTML += aerodactyl.attack;
        p4.innerHTML += aerodactyl.abilities; 
        
    
})
//Kabutops pokemon API stats.
axios.get("https://pokeapi.co/api/v2/pokemon/141/")
.then(response => {
 let data = response.data;
 
 console.log(data);


    let kabutops = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name
        )
        let p1 = document.querySelector("#p5")
        let p2 = document.querySelector("#p6")
        let p3 = document.querySelector("#p7")
        let p4 = document.querySelector("#p8")
        p1.innerHTML += kabutops.hp;
        p2.innerHTML += kabutops.defense;
        p3.innerHTML += kabutops.attack;
        p4.innerHTML += kabutops.abilities; 
        
    
})

