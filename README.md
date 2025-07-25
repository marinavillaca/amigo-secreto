# 🎁 Projeto Amigo Secreto

Este projeto foi desenvolvido para praticar e consolidar conceitos fundamentais de JavaScript, HTML e CSS. 
Um projeto simples para sortear amigos secretos de forma aleatória!<br>

Link: https://amigo-secreto-nine-drab.vercel.app/

## 📌 Funcionalidades

- Adicionar amigos a uma lista
- Exibir a lista atual de amigos
- Sortear um amigo aleatório
- Exibir o resultado do sorteio na tela

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (puro)

## 💡 Como Funciona

1. O usuário digita um nome e clica em **Adicionar**.
2. O nome é inserido na lista e exibido na interface.
3. Ao clicar em **Sortear amigo**, o sistema escolhe aleatoriamente um nome da lista.
4. O nome sorteado é exibido em destaque.

## 📂 Estrutura dos Arquivos
```
/amigo-secreto
│
├── index.html # Estrutura da interface
├── style.css # Estilização visual
├── app.js # Lógica da aplicação
└── assets/ # Imagens e ícones
```


### 🌐 HTML (Estrutura Semântica e Acessibilidade)
✔ Tags semânticas: Utilizei 
```<section>, <header>, <main> e <ul> ```
  para melhor organização e SEO.

✔ Acessibilidade:
```aria-label e aria-live``` para melhorar a experiência de usuários com leitores de tela.
```role="list"``` para garantir que listas sejam interpretadas corretamente.

✔ Formulário interativo:
<input type="text"> para entrada de dados.
<button> com onclick para acionar funções JavaScript.


### 🎨 CSS (Design Responsivo e Flexbox)
✔ Variáveis CSS (Custom Properties):

```
css
:root {
  --color-primary: #984bfd;
  --color-secondary: #fff9eb;
}
```

Para reutilização de cores e facilidade de manutenção.

✔ Flexbox:
Alinhamento central com display: flex, justify-content: center e align-items: center.
Layout flexível entre o banner e a seção de entrada.

✔ Design Responsivo:
Uso de width: 100% e max-width para se adaptar a diferentes telas.
Bordas arredondadas (border-radius) e sombras (box-shadow) para melhor estética.

✔ Pseudo-classes:
:hover em botões para feedback visual.
Estilização de estados interativos.


### ⚡ JavaScript (Manipulação DOM e Lógica de Programação)
✔ Manipulação do DOM:
document.querySelector() e document.getElementById() para selecionar elementos.
element.innerHTML e element.textContent para modificar conteúdo dinamicamente.
document.createElement('li') para adicionar itens à lista.

✔ Eventos:
onclick em botões para chamar funções como adicionarAmigo() e sortearAmigo().

✔ Arrays e Métodos:
listaAmigos.push() para adicionar nomes.
Math.random() e Math.floor() para o sorteio aleatório.

✔ Validação de Entrada:
Verificação de campo vazio com if (nomeEscolhido === "").
Feedback visual com alert().

✔ Funções Puras e Modulares:
Separação de responsabilidades em funções (limparCampo(), atualizaListaAmigos()).


### 📱 Responsividade e Boas Práticas
✔ Mobile-First:
Design adaptável usando unidades relativas (%, vw, vh).

✔ Performance:
Uso de defer no <script> para carregamento não-bloqueante.

✔ Manutenibilidade:
Código organizado e comentado.
Estilos separados em arquivo CSS dedicado.


## 📜 Licença
Este projeto está licenciado sob a Licença MIT.


🔗 GitHub: [github.com/seu-usuario/amigo-secreto](https://github.com/marinavillaca/amigo-secreto/) <br>
🌐 Demo: https://amigo-secreto-nine-drab.vercel.app/

Feito com ❤️ por Marina Villaça 🚀
