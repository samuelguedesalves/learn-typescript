# TYPESCRIPT

`yarn add typescript` - adiciono typescript ao projeto.


## TYPES

os pacotes (mais populares) espoem seus "tipos", possibilitando assim a interpretação do pacote/modulo
`yarn add @types/express -D` - adiciono aqui a tipagem do pacote express.


## COMANDOS BASICOS

`yarn tsc --init` - gera um arquivo de configuração do typescript no projeto com o nome *tsconfig.json*. dentro deste adicione a seguinte configuração: `"outDir": "./dist"` isso serve para indicar em qual diretorio sera salvo os aquivos TS convertidos em JS.

`yarn tsc` - converte os arquivos TS em JS.

## DESENVOLVENDO COM TYPESCRIPT

`yarn add ts-node-dev` - o ts-node-dev é exelente e para o desenvolvimento com typescript, ele funciona como o nodemon em projetos javascript vanila (projetos que não usam nenhum tipo de conversor, como o babel ou sucrase).
