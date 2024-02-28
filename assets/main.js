const textoParaCriptografarOuDescriptografar = document.querySelector ('#mensagemInicial');
const botaoCriptografar = document.getElementById ('cript');
const botaoDescriptografar = document.getElementById ('descript');
const mensagemFinal = document.querySelector ('#container-resultado');

botaoCriptografar.onclick = criptografar;

function criptografar (mensagem) {

    mensagem = textoParaCriptografarOuDescriptografar.value

        .replaceAll ('e', 'enter')
        .replaceAll ('i', 'imes')
        .replaceAll ('a', 'ai')
        .replaceAll ('o', 'ober')
        .replaceAll ('u', 'ufat')

    mensagemFinal.innerHTML = `<div id="container-resultado"><textarea id="mensagemParaCopiar" class="text-input">${mensagem}</textarea><button onclick="copiarTexto ()" class="descript-e-copy-btn copiar-btn">Copiar</button></div>`
        return mensagem;
}
    
botaoDescriptografar.onclick = descriptografar;

function descriptografar (mensagem) {

    mensagem = textoParaCriptografarOuDescriptografar.value

        .replaceAll ('enter', 'e')
        .replaceAll ('imes', 'i')
        .replaceAll ('ai', 'a')
        .replaceAll ('ober', 'o')
        .replaceAll ('ufat', 'u')
    
        mensagemFinal.innerHTML = `<div id="container-resultado"><textarea id="mensagemParaCopiar" class="text-input">${mensagem}</textarea><button onclick="copiarTexto ()" class="descript-e-copy-btn copiar-btn">Copiar</button></div>`
    
        return mensagem;

}

function copiarTexto () {
    // Seleciona o elemento que contém o texto a ser copiado
    const texto = document.querySelector ('#mensagemParaCopiar');
    // Seleciona o texto dentro do elemento
    texto.select ();
    // Copia o texto selecionado para a área de transferência
    document.execCommand ('copy');
    // Alerta ou exibe uma mensagem de sucesso
    return texto.value;
}