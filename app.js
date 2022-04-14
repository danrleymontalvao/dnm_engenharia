class App{
    registro(){
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipo']").value
        let valor = document.querySelector("input[name='valor']").value
        let area = document.querySelector("input[name='area']").value
        let situacao = document.querySelector("input[name='alugado']").checked
        let propriedade = new imovel (tipo,valor,area,situacao)
        this.criarLista(propriedade)
        this.limparForm()
    }

    criarLista(propriedade){
        let lista = document.createElement("li")
        let info = " Tipo: "+propriedade.tipo+" (Área: "+propriedade.area+"m2)"+" Valor(R$): "+propriedade.valor
        if(propriedade.situacao){
            let marcarElemento = this.marcarPropriedade()
            lista.appendChild(marcarElemento)
        }
        lista.innerHTML += info
        let botaoRemover = this.BotaoRemover()
        lista.appendChild(botaoRemover)
        document.getElementById("lista").appendChild(lista)
    }

    marcarPropriedade(){
        let marca = document.createElement("span")
        marca.style.color = "white"
        marca.style.backgroundColor = "red"
        marca.innerText = "ALUGADO"
        return marca
    }

    BotaoRemover(){
        let botao = document.createElement("button")
        botao.setAttribute("onclick","app.remover()")
        botao.innerText = "Remover"
        return botao
    }

    limparForm(){
        document.querySelector("input[name='valor']").value=""
        document.querySelector("input[name='area']").value=""
        document.querySelector("input[name='alugado']").checked= false
    }

    remover(){
        let removerLi = event.target.parentNode
        document.getElementById("lista").removeChild(removerLi)
    }
}