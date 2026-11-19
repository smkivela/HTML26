const uusiTehtava = document.getElementById("uusiTehtava");
const lisaaNappi = document.getElementById("lisaa");
const lista = document.getElementById("lista");
const kaikkiNappi = document.getElementById("kaikki");
const keskenNappi = document.getElementById("kesken");
const valmiitNappi = document.getElementById("valmiit");


let todos = JSON.parse(localStorage.getItem("todos")) || [];


let suodatin = localStorage.getItem("suodatin") || "kaikki";


function tallenna() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


function renderoi() {
  
    lista.innerHTML = "";


    for (const todo of todos) {
       
        if (suodatin === "kesken" && todo.valmis) continue;
        if (suodatin === "valmiit" && !todo.valmis) continue;

        const li = document.createElement("li");
        if (todo.valmis) {
            li.classList.add("valmis");
        }

   
        const ruutu = document.createElement("input");
        ruutu.type = "checkbox";
        ruutu.checked = todo.valmis;
        ruutu.addEventListener("change", function () {
            todo.valmis = ruutu.checked;
            tallenna();
            renderoi();
        });

        const teksti = document.createElement("span");
        teksti.textContent = todo.teksti;

      
        const poista = document.createElement("button");
        poista.textContent = "Poista";
        poista.classList.add("poista");
        poista.addEventListener("click", function () {
          
            todos = todos.filter(function (t) {
                return t.id !== todo.id;
            });
            tallenna();
            renderoi();
        });

        li.appendChild(ruutu);
        li.appendChild(teksti);
        li.appendChild(poista);
        lista.appendChild(li);
    }


    kaikkiNappi.classList.remove("aktiivinen");
    keskenNappi.classList.remove("aktiivinen");
    valmiitNappi.classList.remove("aktiivinen");
    document.getElementById(suodatin).classList.add("aktiivinen");
}


function lisaaTehtava() {
    const teksti = uusiTehtava.value.trim();
    if (teksti === "") return; 

    todos.push({
        id: Date.now(), 
        teksti: teksti,
        valmis: false
    });

    uusiTehtava.value = "";
    tallenna();
    renderoi();
}

lisaaNappi.addEventListener("click", lisaaTehtava);


uusiTehtava.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        lisaaTehtava();
    }
});


function vaihdaSuodatin(uusi) {
    suodatin = uusi;
    localStorage.setItem("suodatin", suodatin);
    renderoi();
}

kaikkiNappi.addEventListener("click", function () {
    vaihdaSuodatin("kaikki");
});
keskenNappi.addEventListener("click", function () {
    vaihdaSuodatin("kesken");
});
valmiitNappi.addEventListener("click", function () {
    vaihdaSuodatin("valmiit");
});


renderoi();
