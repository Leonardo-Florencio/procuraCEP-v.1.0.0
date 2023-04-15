async function consultaEndereco () {
    
    let cep = document.querySelector('#campoDePesquisa').value;
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    await fetch(url).then(async function(response){
        await response.json().then(mostrarEndereco) 
        })
    }

    function mostrarEndereco (dados) {

        let resultado = document.querySelector('#formularioDeResposta');
        const caracteresCEP = document.getElementById('campoDePesquisa').value;


        
        console.log(dados)

        if (dados.erro) {
            resultado.innerHTML = "O CEP fornecido não foi encontrado";
        } else {
            resultado.innerHTML = `<p><strong>Rua:</strong> ${dados.logradouro}</p>
                                    <p><strong>Bairro:</strong> ${dados.bairro}</p>
                                    <p><strong>Cidade:</strong> ${dados.localidade}</p>
                                    <p><strong>Estado:</strong> ${dados.uf}</p>`
        }
    }

   






