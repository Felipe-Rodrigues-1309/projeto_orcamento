// Recebe o nome do responsavel pela reserva 
function NomeResponsavel() {
let Nome = (prompt("Digite o Nome do Gerente Responsavel pela Reserva !!"));
document.querySelector(".Gerente").value = (`${Nome}`);
}


// Recebe a quantidade de pessoas da reserva
function QtdDePessoas() {
    let Nome = (prompt("Digite a quantidade de pessoas !!"));
    document.querySelector(".QuantidadeDePessoas").value = (`${Nome}`);
    }


    // Recebe a data da reserva
    function Cliente() {
        let Nome = (prompt("Nome Do Cliente !!"));
        document.querySelector(".Cliente").value = (`${Nome}`);
        }
        
    

// Define a data atual no campo com a classe "Data"
function definirDataAtual() {
    const dataInput = document.querySelector(".Data");
    if (dataInput) {
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = hoje.getFullYear();
        dataInput.value = `${ano}-${mes}-${dia}`; // Formato: YYYY-MM-DD
    }
}

window.onload = function(){   // usado para chamar a funcao ao carregar a pagina 
NomeResponsavel();
Cliente();
QtdDePessoas();
definirDataAtual(); //chamando mais de uma funcao por vez 
};






// Função para calcular o total de cada linha
function calcularTotal(input) {
   const inputGroup = input.closest(".input-group"); // Seleciona o grupo de inputs
   const qtd = parseFloat(inputGroup.querySelector(".Qtd").value) || 0;
   const preco = parseFloat(inputGroup.querySelector(".Preço").value) || 0;
   const total = inputGroup.querySelector(".Total");

   total.value = (qtd * preco).toFixed(2); // Calcula o total e atualiza o campo
   somar(); // Atualiza a soma total
}

// Função para somar todos os valores dos campos "Total2"
function somar() {
   const totais = document.querySelectorAll(".Total");
   let somaTotal = 0;

   totais.forEach(total => {
       const valor = parseFloat(total.value) || 0;
       somaTotal += valor;
   });

   const resultado = document.querySelector(".resultado");
   if (resultado) {
       resultado.value = somaTotal.toFixed(2); // Atualiza o campo de soma total
   }

   aplicarDesconto(); // Atualiza o total com desconto
   calcularValorPorPessoa(); // Atualiza o valor por pessoa
}

// Função para aplicar o desconto em porcentagem e adicionar 10%
function aplicarDesconto() {
   const DescontoInput = document.getElementById("descontoPorcentagem");
   const totalInput = document.querySelector(".resultado");
   const totalComDescontoInput = document.getElementById("totalComDesconto");

   const desconto = parseFloat(DescontoInput.value) || 0; // Valor do desconto em porcentagem
   const total = parseFloat(totalInput.value) || 0; // Total sem desconto

   // Calcula o total com desconto
   const totalComDesconto = total - (total * (desconto / 100));

   // Adiciona 10% ao total com desconto
   const totalComAcrescimo = totalComDesconto + (totalComDesconto * 0.10);

   // Atualiza o campo de total com desconto e acréscimo
   totalComDescontoInput.value = totalComAcrescimo.toFixed(2);

   calcularValorPorPessoa(); // Atualiza o valor por pessoa

   
}

// Função para adicionar uma nova linha de inputs
function adicionarLinha() {
   const entradasDiv = document.querySelector(".entradas");
   const inputGroup = document.querySelector(".input-group");
   if (inputGroup) {
       const clonedGroup = inputGroup.cloneNode(true);
       clonedGroup.querySelectorAll("input").forEach(input => {
           input.value = ""; // Limpa os valores dos inputs clonados
       });
       entradasDiv.appendChild(clonedGroup);
       somar(); // Atualiza a soma total
       calcularValorPorPessoa(); // Atualiza o valor por pessoa
   }
}


// Função para adicionar um novo grupo de inputs
function adicionarInputEntradas_novo() {
    const entradasDiv = document.getElementById('inputsimpressao');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>

    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}



// Função para adicionar um novo grupo de inputs
function adicionarInputEntradas() {
    const entradasDiv = document.getElementById('inputsimpressao');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <h2 class="sumirituloentradas">Entradas</h2>
        <div><h3 id="impressaotitulo" class="sumirsubtitulo">&nbsp;&nbsp;&nbsp;PRODUTO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  QT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  R$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOTAL</h3></div> <!-- usado para dar espaço entre as palavras-->
            <button type="button" onclick="adicionarInputEntradas_novo()" id="muda1" class="glow-on-hover2">Entradas</button><br>
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>


    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}


// Função para adicionar um novo grupo de inputs
function adicionarInputPrincipal_novo() {
    const entradasDiv = document.getElementById('inputsimpressao2');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>

    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}




// Função para adicionar um novo grupo de inputs
function adicionarInputPrincipal() {
    const entradasDiv = document.getElementById('inputsimpressao2');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <h2 class="sumirituloentradas">Prato Principal</h2>
            <button type="button" onclick="adicionarInputPrincipal_novo()" id="muda1" class="glow-on-hover2">Prato Principal</button><br>
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>


    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}







// Função para adicionar um novo grupo de inputs
function adicionarInputBebidas_novo() {
    const entradasDiv = document.getElementById('inputsimpressao3');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>

    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}






// Função para adicionar um novo grupo de inputs
function adicionarInputBebidas() {
    const entradasDiv = document.getElementById('inputsimpressao3');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <h2 class="sumirituloentradas">Bebidas</h2>
            <button type="button" onclick="adicionarInputBebidas_novo()" id="muda1" class="glow-on-hover2">Bebidas</button><br>
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>


    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}







// Função para adicionar um novo grupo de inputs
function adicionarInputSobremesas_novo() {
    const entradasDiv = document.getElementById('inputsimpressao4');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>

    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}




// Função para adicionar um novo grupo de inputs
function adicionarInputSobremesas() {
    const entradasDiv = document.getElementById('inputsimpressao4');
    
    // Cria um novo grupo de inputs
    const novoGrupo = document.createElement('div');
    novoGrupo.classList.add('input-group');
    novoGrupo.innerHTML = `
        <h2 class="sumirituloentradas">Sobremesas</h2>
            <button type="button" onclick="adicionarInputSobremesas_novo()" id="muda1" class="glow-on-hover2">Sobremesas</button><br>
        <input type="text" name="entrada" placeholder="Digite o nome do produto...."> 
        <input type="number" class="Qtd" placeholder="Qt" oninput="calcularTotal(this)">
        <input type="number" class="Preço" placeholder="Preço" oninput="calcularTotal(this)"> 
        <input type="text" placeholder="Total" class="Total" id="Total" readonly>
        <button type="button" class="remove-button" onclick="removerLinha(this)" id="muda1">Remover</button><br>


    `;

    // Adiciona o novo grupo à div de entradas
    entradasDiv.appendChild(novoGrupo);
}






















































// Função para remover uma linha de inputs
function removerLinha(button) {
    const inputGroup = button.closest(".input-group"); // Seleciona o grupo de inputs
    inputGroup.remove(); // Remove o grupo de inputs
    somar(); // Atualiza a soma total após remover uma linha
    calcularValorPorPessoa(); // Atualiza o valor por pessoa
}

// Função para resetar a página
function resetar() {
   window.location.reload();
}

// Função para imprimir a página
function imprimir() {
   window.print();
}

// Função para calcular o valor por pessoa
function calcularValorPorPessoa() {
    const quantidadeDePessoas = document.getElementById('quantidadedepessoas').value;
    const totalComDesconto = document.getElementById('totalComDesconto').value;
    const valorPorPessoaInput = document.getElementById('tt');

    // Certifique-se de que os valores são números válidos
    const quantidade = parseFloat(quantidadeDePessoas) || 0;
    const total = parseFloat(totalComDesconto) || 0;

    // Evitar divisão por zero
    if (quantidade > 0) {
        valorPorPessoaInput.value = (total / quantidade).toFixed(2);
    } else {
        valorPorPessoaInput.value = 0;
    }
}

// Adiciona eventos aos botões
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("sumButton").addEventListener("click", somar);
   document.getElementById("addInputButton").addEventListener("click", adicionarLinha);
   document.getElementById("resetButton").addEventListener("click", resetar);
   document.getElementById("printButton").addEventListener("click", imprimir);
   document.querySelector(".entradas").addEventListener("click", removerLinha);
});




/* usado para o botao adicionar o click apenas uma vez*/
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões com a classe 'glow-on-hover2'
    const buttons = document.querySelectorAll('.glow-on-hover2');

    // Adiciona o evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.style.display = "none"; // Oculta o botão após o clique
        });
    });
});












