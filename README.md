# Border Radius Previewer

Desafio proposto pelo #soutinhoChallange que consiste em um layout de um gerador de border radius responsivo. Os critérios de aceite são:
- Criar o layout conforme o proposto no [Figma](https://devsoutinho.notion.site/Confira-o-Layout-Inicial-963290cfca7a4cc7b7e42d74e9a5a4b0)
- Adicionar um evento de `input` para cada um dos campos que mexem no border-radius
- Alterar o valor do border-radius do elemento quadrado no centro de acordo com qual input foi alterado
- Publique o projeto na Vercel e compartilhar no Twitter e LinkedIn com a hashtag #DevSoutinhoChallenges

<br />

## Tecnologias utilizadas
- [Vite](https://vitejs.dev/) - Para o HMR e configurações de PostCSS direto da caixa
- [postcss-preset-env](https://preset-env.cssdb.org/) - Para polyfills de features novas do CSS como nesting

<br />

## Melhorias implementadas

- Aplicação de light / dark mode usando o media feature (prefers-color-scheme)

| Light Mode | Dark Mode |
| --- | --- |
| ![Layout do border radius previewer modo claro](/public/app-layout.png) | ![Layout do border radius previewer modo escuro](/public/app-layout-dark.png)  |

- É possível copiar o valor do border-radius clicando num botão via mouse, ou enter
- Os inputs aceitam apenas valores com as unidades aceitas pela propriedade border-radius (%|px|ch|em|rem|ex|ic) e números inteiros são interpretados como pixel
- Ao inserir um valor incorreto, aparece uma mensagem de erro


