function info(){
        let agora = new Date
        let saida = document.getElementById('saida')
        saida.innerHTML = `<p>A data atual é:<mark> ${agora}</mark></p>`
    }