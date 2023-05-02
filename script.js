//JAVASCRIPT PARA INICIANTE
//ACESSAR AS TAGS (DIV) PELO ID
const sidebar = document.getElementById('sidebar')
const search = document.getElementById('item-search')
const grid = document.getElementById('item-grid')
const pet = document.getElementById('item-pet')
const client = document.getElementById('item-client')
const vet = document.getElementById('item-vet')
const tools = document.getElementById('item-tools')

const menuBtn = document.getElementById('menuBtn')

//FUNCAO QUANDO CLICAR NO BOTAO (ARROW FUNCTION)
menuBtn.onclick = () => {
    //CONDICAO SE O NOME DA CLASSE ACESSADA NA DIV PRINCIPAL
    if(sidebar.className == 'closed') { // SE FECHADA
        // ACESSA O NOME DA CLASSE E SUBSTITUI O NOME (ABRE A SIDEBAR)
        sidebar.classList.replace('closed', 'open')         
    } else { //SE ABERTA
        // ACESSA O NOME DA CLASSE E SUBSTITUI O NOME (FECHA A SIDEBAR)
        sidebar.classList.replace('open', 'closed')

    }  
    
    //CONDICAO SE AS CLASSES DOS ITENS ESTIVEREM FECHADAS
    if(search.className == 'itens-closed' && grid.className == 'itens-closed' && pet.className == 'itens-closed' && client.className == 'itens-closed' && vet.className == 'itens-closed' && tools.className == 'itens-closed') {
        //SUBSTITUI O NOME DAS CLASSES PARA ITENS-OPEN (EXPANDE A SIDEBAR)
        search.classList.replace('itens-closed', 'itens-open')
        grid.classList.replace('itens-closed', 'itens-open')        
        pet.classList.replace('itens-closed', 'itens-open')        
        client.classList.replace('itens-closed', 'itens-open')        
        vet.classList.replace('itens-closed', 'itens-open')        
        tools.classList.replace('itens-closed', 'itens-open')        
    } else { // SE A CLASSE ESTIVER COM NOME ITENS-OPEN (ABERTO)
        //SUBSTITUI O NOME DAS CLASSES PARA ITENS-CLOSED (FECHA A SIDEBAR)
        search.classList.replace('itens-open', 'itens-closed')
        grid.classList.replace('itens-open', 'itens-closed')
        pet.classList.replace('itens-open', 'itens-closed')
        client.classList.replace('itens-open', 'itens-closed')
        vet.classList.replace('itens-open', 'itens-closed')
        tools.classList.replace('itens-open', 'itens-closed')
    }    
}
