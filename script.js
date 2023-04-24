//Máscara do campo de CEP
const input = document.querySelector('#campoDePesquisa')

input.addEventListener("keyup", formatarCep);

function formatarCep(evento){

    let CEPComMascara= evento.target.value.replace(/\D/g,"")                
    
    CEPComMascara=CEPComMascara.replace(/^(\d{5})(\d)/,"$1-$2") 
    
    evento.target.value = CEPComMascara;
    
    }

//Submit do formulário através da tecla Enter
document.addEventListener('keyup', function(event) {
    if (event.code === 'Enter'){
        event.preventDefault();
        consultaCEP();
    }
})

//Função de procura e validação
function consultaCEP () {
        let CEPDigitado = document.querySelector('#campoDePesquisa').value;

        let resultado = document.querySelector('#formularioDeResposta');

        if (CEPDigitado.length < 8) {
            resultado.innerHTML = "O CEP deve conter 8 dígitos"
        } else {
            consultaEndereco()
        }

        async function consultaEndereco () {
    
            const cep = document.querySelector('#campoDePesquisa').value;
            
            const url = `https://viacep.com.br/ws/${cep}/json/`;
        
            await fetch(url).then(async function(response){
                await response.json().then(mostrarEndereco) 
                })
            }
        
            function mostrarEndereco (dados) {
        
                let resultado = document.querySelector('#formularioDeResposta');
        
                if (dados.erro) {
                    resultado.innerHTML = "O CEP fornecido não foi encontrado";
                } else {
                    resultado.innerHTML = `<p><strong>Rua:</strong> ${dados.logradouro}</p>
                                            <p><strong>Bairro:</strong> ${dados.bairro}</p>
                                            <p><strong>Cidade:</strong> ${dados.localidade}</p>
                                            <p><strong>Estado:</strong> ${dados.uf}</p>`
                }
            }
    }