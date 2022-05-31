# Contador

Um contador feito com JavaScript.

1. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
    - [Display](#display)
    - [Botões](#botões)
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

```javascript
element.textContent;
```

### [Botões](#botoes)

Para conseguir realizar ações quando clicamos em qualquer um dos botões da nossa aplicação, precisaremos selecionar esses elementos.

```javascript
document.querySelectorAll();
```

Após selecionar os elementos referente aos botões, iremos adicionar um evento de click em cada um deles. Ou seja, quando a pessoa usuária clicar em um dos botões, uma função será executada. Para não precisarmos adicionar o evento um por vez manualmente, usaremos o forEach, que vai percorrer por todos os elementos da nossa nodeList.

```javascript
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Your script here
  });
});
```

#### Increase / Decrease

Do que precisamos?

- Criar uma estrutura condicional, como um if, para verificar qual botão foi acionado.

    ```javascript
    if (btnActive.contains("decrease")){}
    ```
    
 - No final, fora do if e dentro da função, atualizamos o valor mostrado no display.

    ```javascript
    element.textContent = `${count}`;
    ```

##### Increase

- Aumentar o valor atual em +1.

    ```javascript
    count++;
    ```

##### Decrease

- Diminuir o valor atual em -1.

    ```javascript
    count--;
    ```

#### Reset

- O contador tem seu valor mudado para 0.

    ```javascript
    count = 0;
    ```

## Glossário

- [Arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [document.getElementById()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)
- [Node.textContent](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
- [GlobalEventHandlers.onclick](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)
- [Array.prototype.forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [String.prototype.contains](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes#string.prototype.contains)
