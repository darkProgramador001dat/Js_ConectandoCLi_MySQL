// Importe as bibliotecas.
// Crie uma Instancia do modulo importado.
// Configure as credenciais do banco de dados.
// Faça a conexão, Se não houver a conexão retorne um Callback de erro.
// Retorne uma mensagem, houve uma conexão com sucesso.

// Codigo: conexão com MySQL.

const mysql = require('mysql2');  // Biblioteca

// Configurando as credenciais do DB.
const conn = mysq.createConnection({
  host: 'localhost',
  user: 'root',         
  password: '',          
  database: 'sys'        
});

// Fazendo a conexão.
conn.connect((err) => {
  if(err) // Callback, erro ao conectar, verifique as credencias corretamente.
  {
    console.log('Erro ao conectar ao MySql: ' + err.stack);  // erro retornado.
    return;
  }

  console.log('Conexão com sucesso ao MySql', conn.threadId);    // Conectado, retorne o ID da conexão.
});
