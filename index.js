const prompt = require("prompt-sync")();

/* Indizindo o aluno com dificulade a assitir a 
 * aula do Youtube indicada pelo professor.
 */

    function analiseResposta(){
        
        var resposta = prompt("Você está com dificuldades na utilização do Git?(Sim/Não): ");
    
    
        if(resposta.toLowerCase() === "sim"){
            console.log("Assista e pratique a aula do Youtube indicada pelo professor! ");        
        }else if(resposta.toLowerCase() === "não"){
            console.log("Parabéns! Continue praticando pois Git é essencial na vida de um programador! Bons Estudos!");
        }else{
            console.log("Responda Apenas sim ou não!");
            return analiseResposta();       
        }
    }
    analiseResposta();