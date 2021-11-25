let fields = 
    ["Holzweiler", "Wie ist die Stimmung?", "Buch auf Seite X", "Stoff aus der EF", "Habt ihr noch nicht gelernt",
    "Kommt erst in der Q2", "Das ist eigentlich Unterstufenstoff", "Das ist eigentlich Mittelstufenstoff", "Frage oder Anwort?", "Kommt erkältet in den Unterricht",
    "Macht mal bitte Aufgabe X auf Seite Y als Hausaufgabe", "Die Hausaufgaben macht ihr für euch, nicht für mich", "Vergisst Hausaufgaben aufgegeben zu haben", "Das ist Klausurrelevant", "Das ist nicht Klausurrelevant",
    "Buch aufschlagen", "Ihr macht jetzt bitte Aufgabe X für mich", "Fenster auf", "Redet über Fallzahlen", "Verstanden?",
    "Mittelmäßige Skizze", "Wer hat hier Physik?", "Benutzt Abituraufgaben", "Erscheint zu spaet", "Da hätte ich mehr erwartet",
    "Redet über Geogebra", "Ich habe ja einen anderen Taschenrechner", "Das geht auch schneller", "Von Dennis weiss ich schon dass er das kann", "Ich hab euch was auf Moodle hochgeladen",
    "Das ist freiwillig", "Leuteee, das solltet ihr eigentlich koennen", "Da muss ich gleich mal in die Physiksammlung", "Wir liegen hinter dem Zeitplan", "Eigentlich habe ich ja was anderes geplant",
    "Regt sich auf", "1-Hand Clap", "Kurzes Handzeichen", "Jungs & Mädels", "Mädels",
    "Jungs", "habe ich schonmal gesagt", "nächste Woche", "wer schon fertig ist...", "wer hat einen funktionsfähigen Tachenrechner?",
    "das müsste man pruefen", "Sekunde", "auch ohne GTR", "Funktion definieren", "wer weiß wie das geht?",
    "mach ich mit meiner 8/9/EF/Q2", "so eine Geschichte", "Mathematiker sind faul", "nimmt jmd ohne Ahnung dran", "[Zahl ohne Einheit] was?",
    "Von anderen Mathelehrern ausgeschlossen", "Klausur noch nicht korrigiert", "Redet Fehler klein"];

let middle = "Das Moll'sche Nicken"


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

    // If current element == center

    if(grid.length == 12){
        grid.push(middle);
        generateGrid();
        return;
    }
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
