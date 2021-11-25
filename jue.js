let fields =
    ["Ääää.. öööö.. ääh", "Fenster auf", "Atlanten", "Erwähnt seine Reisen", "Oh.. da war ich schonmal",
    '"verspricht" Bilder zu zeigen', "letzte Reihe", "Unterbricht andere", "Überprüft Anwesenheit", "in a minute",
    "kommt noch/erst in der Q2", "Mittelstufenstoff", "AHA!", "gesteht seine Fehler nicht ein", "diskutiert mit Tobias",
    "mittelmäßige Skizze", "Schreibt Vokabeln an", "Es sind immer die selben!", "WOTT?", "Fängt Deutsch an, endet Englisch",
    "YESSS!", "vielleicht schonmal gehört", "Anekdoten", "wie sagt man..", "teilt Blätter aus",
    "Klausurrelevant", "STOP! STOP! STOP!", "Auf Moodle", "Hausaufgaben last-minute", "öööhh, ähh so öäh",
    "ähh no!", "Did I say that already?", "Ich bin ja kein ...", "Meine Frau ist ja Biologin", "Erwähnt jmd der letzten Reihe",
    "Regt sich auf", "Zeigt aufgeregt mit dem Finger auf Leute", "Kurze Anekdote"]


let grid = [];
let size = 5;

let content = "";
generateGrid();

for(let ii = 0; ii < amount; ii++){
    
    content += grid[0];

    for(let i = 1; i < size*size; i++){
        if(i % size == 0)
            content += ";\n" + grid[i];
        else
            content += ";" + grid[i];
    }
    content += ";\n\n";
    grid.length = 0;
    generateGrid();
}

document.addEventListener('click', function(e){
    e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;

    if(target.className == "cellButton")
        target.style.color = target.style.color != "red" ? "red" : "black";
}, false)

function generateTable(){
    overrideGrid();
    var table = document.getElementById("bingo");
    if(table.rows.length > 0){
        while(table.rows.length != 0){
            table.deleteRow(0);
        }
    }
    let counter = 0;
    for(let i = 0; i < size; i++){
        var row = table.insertRow(i);
        for(let ii = 0; ii < size; ii++){
            row.insertCell(ii).innerHTML = `<a class="cellButton">${grid[counter]}</a>`;
            counter++;
        }
    }
}

function generateGrid(){
    if(grid.length < size*size){
        let toAdd = fields[getRandomInt(fields.length)];
        if(!grid.includes(toAdd))
            grid.push(toAdd);
        generateGrid();
    }
}

function overrideGrid(){
    let counter = 0;
    if(grid.length < size*size){
        let toAdd = fields[getRandomInt(fields.length)];
        if(!grid.includes(toAdd)){
            grid[counter] = toAdd;
            counter++;
        }
        overrideGrid();
        console.log(counter);
    }
}

function getRandomInt(max) {
    // Return number between 0 and (max-1)
    return Math.floor(Math.random() * max);
}
