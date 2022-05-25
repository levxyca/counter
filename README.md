# Contador

Um contador feito com JavaScript.

1. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
    - [Display](#displaydisplay)
    - [Botões](#botõesbotoes)
2. [Glossário](#glossário)

## Processo de Desenvolvimento

1. Criar uma página HTML estática para o contador.
2. Estruturar a lógica do contador.
    - [Display](#displaydisplay): onde os números são mostrados.
    - [Botões](#botõesbotoes): onde vamos controlar o nosso contador.

### [Display](#display)

- Selecionando o elemento do display.

```javascript
document.getElementById();
```

- Manipulando os valores dentro do display.

Para conseguirmos efetuar as operações necessárias e mostrar os resultados dentro do nosso contador, precisamos pegar o valor atual que estará sendo mostrado dentro do nosso *display*.

```javascript
document.getElementById().textContent;
```

O valor  que pegamos pelo ``innerText`` vem como uma string, no caso dese projeto, queremos trabalhar com inteiros, por isso, precisamos transformar esse valor recebido de string para inteiro.

```javascript
parseInt(string, base);
```

### [Botões](#botoes)

Para conseguir realizar ações quando clicamos em qualquer um dos botões da nossa aplicação, precisaremos selecionar esses elementos.

```javascript
document.getElementById();
```

Após selecionar os elementos referente aos botões, iremos adicionar um evento de click em cada um deles. Ou seja, quando a pessoa usuária clicar em um dos botões, uma função será executada.

```javascript
element.addEventListener('click', () => {
    // Your script here
})
```

#### Increase / Decrease

Do que precisamos?

- Valor atual.

- Atualizar o valor mostrado no display.

    ```javascript
    document.getElementById().textContent = `${number}`;
    ```

##### Increase

- Aumentar o valor atual em +1.

    ```javascript
    number += 1;
    ```

##### Decrease

- Diminuir o valor atual em -1.

    ```javascript
    number -= 1;
    ```

#### Reset

- Atualizar o valor mostrado no display para 0.

    ```javascript
    number = 0;
    display.textContent = `${number}`;
    ```

## Glossário

- [Arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [document.getElementById()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)
- [Node.textContent](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
- [GlobalEventHandlers.onclick](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)
- [parseInt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
