'use strict';

const pesquisarCep = async () => {
    const $CEP = document.getElementById('nmrCepBusca').value
    const URL = `http://viacep.com.br/ws/${$CEP}/json/`


    if (!isNaN(parseFloat($CEP)) && isFinite($CEP) && $CEP.length == 8) {
        const DADOS = await fetch(URL)
        const ENDERECO = await DADOS.json()

        if(ENDERECO.hasOwnProperty('erro')){
            alert('CEP não encontrado!')
            document.getElementById('nmrCepBusca').value = ''
            document.getElementById('nmrCepResultado').innerHTML = ''
            document.getElementById('endereco').innerHTML = ''
        } else {
            document.getElementById('nmrCepBusca').value = ''
            document.getElementById('nmrCepResultado').innerHTML = `CEP ${ENDERECO.cep}`
            document.getElementById('endereco').innerHTML = `${ENDERECO.logradouro}, ${ENDERECO.bairro}, ${ENDERECO.localidade}, ${ENDERECO.uf}`
        }
    } else {
        alert('Preencha o CEP corretamente!')
        document.getElementById('nmrCepBusca').value = ''
        document.getElementById('nmrCepResultado').innerHTML = ''
        document.getElementById('endereco').innerHTML = ''
        
    }
}

document.getElementById('btnBuscar')
        .addEventListener('click', pesquisarCep)

