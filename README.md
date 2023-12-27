# Gerenciamento de estacionamento

## 🚀 Começando

- Crie um .env como descrito no .env.example.
  - Neste projeto utilizei o mysql server local.
  - Necessário inserir as credenciais do seu banco local mysql.
  - Verifique as credenciais caso necessario.
  - Para a autenticação utilize esta secret no env JWT_SECRET_KEY=$2y$10$Q6pN/FzKJBkIjqfCSaOr5OZXrCRlOhBZi97QAjYHcfiyeYcBl4H3G

### 📋 Pré-requisitos

- Nao se esqueca de baixar os pacotes do node.
- Para acessar a documentação swagger esta no consumo /api do localhost. -> http://localhost:3000/api

## ⚙️ Executando

- Crie um usuário para poder fazer login na api.

  - A rotas de usuarios não são protegidas.
  - Depois pode utilizar a rota de login que retorna o token para autenticação.

- Para autenticação no swagger não precisa colocar o Bearer coloque apenas o token que retorna no login e estara liberado a utilizacao das outras rotas.
- A autenticação fica na parte superior do swagger no canto direito.
