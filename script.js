function carregar(){

    var inp_per = document.querySelectorAll('input.pericia')

    for(let i  in inp_per) {
        inp_per[i].value = 0
    }
}