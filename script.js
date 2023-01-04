
var allinp = document.querySelectorAll('input')

var inp_per = document.querySelectorAll('input.pericia')

var inp_pontoper = document.querySelectorAll('.ponto-per')
var str_pontoper = document.querySelectorAll('.str-pontoper')
var abbr_pontoper = document.querySelectorAll('.abbr-per')

var childs = document.querySelector('main').children

var inp_stt = [document.querySelector('#inp-cor'),document.querySelector('#inp-md') , document.querySelector('#inp-esp')]

var valBack = {loc: 0 , valor: ''}

function carregar(){


    allinp.forEach((valor,i) => valor.addEventListener('change',function(){testval(i)}))

    allinp.forEach((valor,i) => valor.addEventListener('focus',function(){limpa(i)}))

    allinp.forEach((valor) => valor.addEventListener('blur',focusout))

    inp_pontoper.forEach((valor,i) => valor.addEventListener('change',function(){altper(i)}))
    
    inp_per.forEach((set) => set.value = 0) 
    inp_per.forEach((set) => set.setAttribute('max' , 6))
    inp_per.forEach((set) => set.setAttribute('min' , 0))

    abbr_pontoper.forEach((set,i) => set.title = `O Valor max que você pode investir é: ${Math.abs(parseInt(inp_pontoper[i].value)-6)}`) 

    inp_stt.forEach((set,i) =>  set.addEventListener('change',function(){testsoma(i)}))

    
}


function testval(x = 0) {  // Teste se o Valor do Inpute é valido
    
    if(!allinp[x].checkValidity()) {
        
        window.alert('Valor invalido')
        allinp[x].value = 0
        allinp[x].focus()
    }
}

function limpa(x = 0) { // Limpa o input para digitar
    
    valBack.loc = x
    valBack.valor = allinp[x].value
    
    allinp[x].value = ''
}

function focusout() { // Repoe o valor anterior se nada for digitado

    if(allinp[valBack.loc].value == '')
    allinp[valBack.loc].value = valBack.valor
}

function testsoma (x = 0) { // Testa se a soma de COR MEN ESP deu 5


    if ((parseInt(inp_stt[0].value) + parseInt(inp_stt[1].value) + parseInt(inp_stt[2].value) ) > 5) {

        window.alert('Você só pode usar 5 pontos nos status')
        inp_stt[x].focus()
    }
}

function altper(x = 0){
    if(inp_pontoper[x].value == '')
        inp_pontoper[x].value = 0
    str_pontoper[x].innerHTML = `${parseInt(inp_pontoper[x].value)-2}`

    abbr_pontoper[x].title = `O Valor max que você pode investir é: ${Math.abs(parseInt(inp_pontoper[x].value)-6)}`


    document.querySelectorAll(`#${childs[x].id} .pericia`).forEach((set) => set.setAttribute('max' , Math.abs(parseInt(inp_pontoper[x].value)-6)))
}

function save(){
    localStorage.setItem("name", allinp(0).value);
    localStorage.setItem("inp-cor", allinp(1).value);
    localStorage.setItem("inp-md", allinp(2).value);
    localStorage.setItem("inp-dex", allinp(3).value);
}
function repor() {
    allinp(0).value = localStorage.getItem("name")
    allinp(1).value = localStorage.getItem("inp-cor")
    allinp(2).value = localStorage.getItem("ipn-md")
    allinp(3).value = localStorage.getItem("inp-dex")
}

function ShowLength()
{
alert("No of items in local storage is " + localStorage.length);
}
function ClearStorage()
{
localStorage.clear();
alert("No of items in local storage is " + localStorage.length);
}