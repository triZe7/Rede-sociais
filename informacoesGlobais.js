const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function VizualizarinformacoesGlobais(){
    const res = await fetch(url)
    const dados = res.json()
    console.log(dados)
}