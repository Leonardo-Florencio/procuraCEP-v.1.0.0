async function consultaEndereco () {
    
    let cep = document.querySelector('#campoDePesquisa').value;
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    await fetch(url).then(async function(response){
        await response.json().then(mostrarEndereco) 
        })
    }

    function mostrarEndereco (dados) {

        console.log(dados)

        let resultado = document.querySelector('#formularioDeResposta');

        if (dados.erro) {
            resultado.innerHTML = "O CEP fornecido não foi encontrado"
        } else {
            resultado.innerHTML = `<p>Rua: ${dados.logradouro}</p>
                                    <p>Bairro: ${dados.bairro}</p>
                                    <p>Cidade: ${dados.localidade}</p>
                                    <p>Estado: ${dados.uf}</p>`
        }
    }





