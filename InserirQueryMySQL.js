// Crie uma função com um argumento QUERY
// Utile o modulo nativo do mysql para realizar QUERYs. Na mesma linha prepare 3(três) callbacks.
// 1. Se houver um erro.
// 2. Armazene o Resultado obtido do banco.
// 3. Metadados da consulta, Detalhes da tabela.
// Se não houver conexão retorne um callback de erro.
// Então houve uma conexão, mostre o callback do resultado obtido.
// Crie uma instancia de QUERY
// Chame a função e passe a QUERY.

// Função Inserir QUERYs MySQL.

function executeQuery(query){
  conn.query(query, (err, results, fields) => {
    if(err)
    {
      console.error('Erro ao conectar ao banco: ' + err.stack);  // Erro ao realizar conexão.
      return;
    }

    console.log('Resultado: ', results);  // Resultado do Banco.
    console.log('Detalhes: ', fields);    // Detalhes da Tabela.
  });
}

let query = "SELECT * FROM user_summary";    // Minha query é?
executeQuery(query);  // Chame a função.
