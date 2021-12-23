let fieldsLaw = 
    ["Ist nichts wildes", "Rickroll", "Timer", "Mobbt Leute", "Mobbinator",
    "schlechte Witze", "Redet Englisch", "Erzählt Geschichte", "Geschichten aus vergangenen Zeiten", "Begriffe aus dem Englischen",
    "Honk", "Schätzchen", "Probleme mit dem Tauschordner", "StaSi-Modus", "Zeigt Memes",
    "Beamer-Freeze", "Präsentiert Ergebnisse von anderen", "Die Dominik-und-Max-Lösung", "Der Russe", "[JOKER]",
    "(ironischer) Spruch gegen Ausländer", "Verkackt Deutsch", "Ein wichtiger Hinweis", "Verkackt Englisch", "If-Schleife",
    "Und das macht ihr jetzt", "Läuft aus dem Raum", "Verschwindet Spurlos", "(ironischer) Rassistischer Witz", "Zeichnet an das Smartboard",
    "Benutzt das Whiteboard", "Selbstironische Sprüche", "Was auch immer", "Klausurrelevant", "Nicht Klausurrelevant"]

let fieldsJue =
    ["Ääää.. öööö.. ääh", "Fenster auf", "Atlanten", "Erwähnt seine Reisen", "Oh.. da war ich schonmal",
    '"verspricht" Bilder zu zeigen', "letzte Reihe", "Unterbricht andere", "Überprüft Anwesenheit", "in a minute",
    "kommt noch/erst in der Q2", "Mittelstufenstoff", "AHA!", "gesteht seine Fehler nicht ein", "diskutiert mit Tobias",
    "mittelmäßige Skizze", "Schreibt Vokabeln an", "Es sind immer die selben!", "WOTT?", "Fängt Deutsch an, endet Englisch",
    "YESSS!", "vielleicht schonmal gehört", "Anekdoten", "wie sagt man..", "teilt Blätter aus",
    "Klausurrelevant", "STOP! STOP! STOP!", "Auf Moodle", "Hausaufgaben last-minute", "öööhh, ähh so öäh",
    "ähh no!", "Did I say that already?", "Ich bin ja kein ...", "Meine Frau ist ja Biologin", "Erwähnt jmd der letzten Reihe",
    "Regt sich auf", "Zeigt aufgeregt mit dem Finger auf Leute", "Kurze Anekdote", "exactly", "thats it!",
    "Denglisch", "Geschichten aus vergangenen Zeiten", "I think thats clear", "everybody knows", "we talked about it",
    "verwechselt Namen", "nochmal bitte", "öhhh ja", "we already found out..", "what was it?",
    "do you remember..", "thats what .. said", "Jütten.exe has stopped working", "äääähm", "da möchte ich nichts zu sagen",
    "but first..", "good", "ok, any other..", "we're still looking at..", "can you explain..?",
    "ok", "say it again", "kurze Stille", "right", '[Nennt eine Sache] ".. and so on"', "Namen falsch"
    "so again", "beschwert sich", "can you think of ..", "äääh..", "Der Jütten'sche Finger",
    "Remember what we said about ..", "Are you still with us?", "Okeee", "Versteht nichts", "come again"]

let fieldsMol = 
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
    "Von anderen Mathelehrern ausgeschlossen", "Klausur noch nicht korrigiert", "Redet Fehler klein", "Halb so wild", "Das Moll'sche Nicken"];

let grid = [];
let size = 5;

let content = "";

document.addEventListener('click', function(e){
    e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;

    if(target.className == "cellButton")
        target.style.color = target.style.color != "red" ? "red" : "black";
}, false)

function generateMol(){
    var allList = document.getElementById("elemList")
    var slider = document.getElementById("size");
    document.getElementById("sizeText").text = slider.value;
    size = slider.value;
    grid = [];
    overrideGrid(fieldsMol, 0);
    generateTable();

    document.getElementById("counter").text = "Verschiedene Felder: " + fieldsMol.length;
    for(let i = 0; i < fieldsMol.length; i++){
        let toAdd = new Option(fieldsMol[i])
        allList.appendChild(toAdd)
    }
}

function generateJue(){
    var slider = document.getElementById("size");
    var allList = document.getElementById("elemList")
    document.getElementById("sizeText").text = slider.value;
    
    size = slider.value;
    grid = [];
    overrideGrid(fieldsJue, 0);
    generateTable();

    document.getElementById("counter").text = "Verschiedene Felder: " + fieldsJue.length;
    for(let i = 0; i < fieldsJue.length; i++){
        let toAdd = new Option(fieldsJue[i])
        allList.appendChild(toAdd)
    }
}

function generateLaw(){
    var allList = document.getElementById("elemList")
    size = 4;
    grid = [];
    overrideGrid(fieldsLaw, 0);
    generateTable();

    document.getElementById("counter").text = "Verschiedene Felder: " + fieldsLaw.length;
    for(let i = 0; i < fieldsLaw.length; i++){
        let toAdd = new Option(fieldsLaw[i])
        allList.appendChild(toAdd)
    }
}

function printView(){
    window.print();
}

function generateTable(){
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

function overrideGrid(pFields, counter){
    if(grid.length < size*size){
        let toAdd = pFields[getRandomInt(pFields.length)];
        if(!grid.includes(toAdd)){
            grid[counter] = toAdd;
            counter++;
        }
        overrideGrid(pFields, counter);
    }
}

function getRandomInt(max) {
    // Return number between 0 and (max-1)
    return Math.floor(Math.random() * max);
}
