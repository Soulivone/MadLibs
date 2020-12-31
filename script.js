document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);


function buildMadLib() {

    let pluralNoun = document.getElementById("plural-noun").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    let result = '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + verb + ' on the ' + noun + ' to solve this problem."';

    document.getElementById("result").innerHTML = result;
}

document.getElementById("reset-btn").addEventListener("click", Reload) 
   function Reload() {
        location.reload();
   }