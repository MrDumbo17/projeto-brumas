
var allinp = document.querySelectorAll('input')

var inp_per = document.querySelectorAll('input.pericia')

function carregar(){


    allinp.forEach((valor,i) => valor.addEventListener('change',function(){testval(i)}))

    allinp.forEach((valor,i) => valor.addEventListener('focus',function(){limpa(i)}))


    inp_per.forEach((set) => set.value = 0) 
    
    
   /* for(let i  in inp_per) {
        inp_per[i].value = 0
    } */
}


function testval(x = 0) {

    if(!allinp[x].checkValidity()) {
        
        window.alert('Valor invalido')
        allinp[x].focus()
    }
}

function limpa(x = 0) {
    
    allinp[x].value = ' '
}
