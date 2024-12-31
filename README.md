1 - Criação de um state para o armazenamento dos todos
  * Deve ser um array de objetos o state
  * Dentro do state colocaremos as propiedades de cada conjunto (objeto)

2 - Fazer um map no nosso JSX, com o state todos
  * Utilizar o atributo key={}
  * Deve conter uma div mae chamada todo-list
  * Uma div content para conter o text e a category
  * uma div para incluir os botões

3 - Ir Para o CSS (app.css)
  * Config no body
  * Adicionar img de fundo
  * Configurar a div app
  * Configurar os elemenots filhos na parte do todo


4 - Componentizar o TodoList 
  * Uma Div container
  * Um titulo de criação de tarefa
  * Um input para poder criar oq o usuario queira preencher
  * Um campo de Select
  * Um input de submit
  * Tudo isso englobamos dentro de um form


5 - Segundo breakpoint CSS (app.css)

6 - Gerenciando o estado do formulario
  * Criação do state value
  * Criação do state category
  * Definir o onchange passando o setValue no input
  * Definir o onchange passando o setCategory no Select
  * Criar uma função handleSubmit para cuidar do envio do formulario
    * Utilizar o preventDefault() para previnir o envio padrão e o reload na pagina
    * Chamar a função de handleSubmit dentro do form atraves do metodo onSubmit
    * Olhar com o console.log() o value e a category
    * fazer uma validação - Se não tiver value || se não tiver category, deve retornar null
    * Se tiver tudo ok
      * Limpar o campo do value
      * Limpar o campo do category
      * Atribuindo o value nos 2 elementos la no jsx
      * E utilizando o set deles na função handleSubmit com string vazia


7 - Criar função para adicionar uma nova tarefa
  * Deve ser declarada no componente pai, e passada como props
  * Precisa receber 2 parametros, o value e a category
  * Declar uma variavel com o nome de newTodos
  * Essa variavel vai ter o papel, atravez do spread Operator, de receber todos os todos ja existentes e criar um novo obj
  * Dentro desse novo obj, deve-se passar as propiedades que ele espera receber
    * id
    * text
    * category
    * isCompleted
  * Por fim precisa atualizar o estados, chama o setTodos() passando o newTodos como valor