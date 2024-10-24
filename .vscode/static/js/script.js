// Função para mostar o spinner enquanto o formulário está sendo enviado
document.getElementById('decode-form').addEventListener('submit',
    function() {
        //mostra o spinner
        document.getElementById('loading-spinner').style.display = 'block';

        //Esconde o resultado
        document.getElementById('result').style.display = 'none';
    }
)