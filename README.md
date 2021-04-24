## Podcastr Projetct

- start typing studies in [typescript](https://www.typescriptlang.org/) and my first project with [SASS](https://sass-lang.com/)

- Learning about better Analytics and SSG/SSR Pages

- Dependencies

  - react
  - next.js
  - date-fns
  - json-server
  - axios
  - rc-slider

- Algumas breves anotações pessoais para estudos posteriores (Apagar em breve):

SPA - Client Side Rendering
Carregando somento no momento que a pessoa acessa a tela da app. Essa estratégia não serve para ser indexidado no google pois roda no servidor. Um navegador com JS desabilitado não irá ler essa camada.

```
import { useEffect } from 'react';

   useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
```

SSR - Server Side Render (Render no servidor)
o next irá completar a requisição antes de exibir pro usuario
o primeiro carregamento será feito na camada do next (getServerSideProps()) a página irá ler mesmo com js desabilitado
Executa toda vez que alguém entra na pagina.

```
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
  };
}
```

SSG - Statis Site Generation (Geração de site estático)
Assim que a pessoa acessa, gera um HTML estático e é servido para todas as pessoas, acessando o mesmo conteúdo sem fazer requisisões toda hora deixando a página mais perfomatica

No caso aqui a cada 8h será feito uma requisição pro servidor. (props.revalidate)

```
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
      revalidate: 60 * 60 * 8,
    },
  };
}
```
