# CRUDAlunos

Uma aplicação simples para gerenciar alunos (Create, Read, Update, Delete) desenvolvida com HTML, CSS e JavaScript.

## Descrição
CRUDAlunos é um projeto frontend que demonstra operações básicas de gerenciamento de dados de estudantes. Ideal para estudo e prática de manipulação do DOM, formulários e armazenamento local (ou integração com uma API, se desejado).

## Funcionalidades
- Listar alunos cadastrados
- Adicionar novo aluno
- Editar dados de um aluno existente
- Remover aluno
- Validação básica de formulário

## Tecnologias
- JavaScript
- HTML5
- CSS3

(Composição do repositório: JavaScript, HTML e CSS)

## Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- (Opcional) Node.js e npm, caso queira servir localmente com um servidor de desenvolvimento

## Instalação e execução
1. Clone o repositório:
   git clone https://github.com/mariaclaraferr2007/CRUDAlunos.git

2. Abra a pasta do projeto:
   cd CRUDAlunos

3. Execução:
   - Método simples: abra o arquivo `index.html` diretamente no navegador.
   - Método com servidor local (recomendado para evitar restrições de CORS):
     - Usando VSCode: instale a extensão Live Server e clique em "Go Live".
     - Usando npm (se tiver instalado):
       npm install -g http-server
       http-server . -c-1
       e acesse http://localhost:8080 (ou a porta mostrada)

## Estrutura sugerida do projeto
- index.html — página principal
- css/ — estilos do projeto
- js/ — scripts JavaScript (CRUD, validações, armazenamento)
- assets/ — imagens e recursos estáticos

## Como usar
1. Preencha o formulário com os dados do aluno (nome, instiruição e curso).
2. Clique em "Enviar" para salvar.
3. Para buscar, digite o nome do aluno que deseja buscar e clique em "Buscar".
4. Para deletar, digite o nome do aluno que deseja deletar deletar e clique em "Deletar".
5. Para alterar, digite o nome do aluno que deseja alterar, digite os novos dados e clique em "Alterar".

## Boas práticas e melhorias possíveis
- Adicionar paginação e busca/filtragem
- Melhorar validação de formulários
- Usar um framework (React/Vue) para praticar componentes
- Implementar testes automatizados (unitários / E2E)
- Autenticação e autorização (se for multiusuário)

## Autor
Maria Clara Ferreira Lopes (mariaclaraferr2007)

## Contato
- GitHub: https://github.com/mariaclaraferr2007
- Email: (mariaclaraferreiralopes82@gmail.com)

