# Clean Architecture

Este repositório tem como objetivo entender como funciona a arquitetura limpa (clean architecture). Este conceito surgiu na minha carreira profissional e, por isso, preciso compreender como ele funciona para poder transmitir o conhecimento aos outros membros da equipe e entregar meus cartões com o máximo de sintonia ao projeto.

A imagem que aparece em todos os lugares é:

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Estrutura de diretorios de um projeto com  Clean Architecture 

src/
├── domain/           (Camada de Domínio)
│   ├── entities/     (Entidades do Domínio)
│   ├── repositories/ (Interfaces de Repositório)
│   └── usecases/     (Casos de Uso)
├── interfaces/       (Camada de Interface)
│   ├── controllers/  (Controladores)
│   ├── presenters/   (Apresentadores)
│   ├── gateways/     (Interfaces de Gateway)
│   ├── devices/      (Dispositivos)
│   ├── uiweb/        (Interface de Usuário Web)
│   └── external/     (Interfaces Externas)
└── infrastructure/   (Camada de Infraestrutura)
    ├── repositories/ (Implementações de Repositório)
    └── gateways/     (Implementações de Gateway)

- `domain/entities/`: Contém as entidades centrais do domínio, representando conceitos e objetos relevantes para a aplicação.
- `domain/repositories/`: Define as interfaces para acesso e persistência de dados relacionados ao domínio.
- `domain/usecases/`: Implementa a lógica de negócios da aplicação, encapsulando casos de uso específicos.
- `interfaces/controllers/`: Responsável por receber requisições e interações do usuário, coordenando o fluxo de dados.
- `interfaces/presenters/`: Formata os dados dos casos de uso para serem exibidos nas interfaces de usuário.
- `interfaces/gateways/`: Define as interfaces para a comunicação com serviços externos, como bancos de dados ou APIs.
- `interfaces/devices/`: Contém adaptadores específicos para interagir com dispositivos físicos.
- `interfaces/uiweb/`: Armazena os recursos relacionados à interface de usuário web, como HTML, CSS e scripts.
- `interfaces/external/`: Implementa as interfaces para integração com sistemas ou serviços externos.
- `infrastructure/repositories/`: Fornece as implementações concretas dos repositórios, lidando com a persistência de dados.
- `infrastructure/gateways/`: Implementa as interfaces de gateway para a comunicação com serviços externos.    


## Entidades: a parte mais importante
- Modulam os dados.
- Modulam as regras de negócio (validações e modificações).
- Uma entidade NÃO deve conter atributos públicos.
- A primeira regra é o construtor.
- Não importa ONDE os dados DESSA entidade serão salvos.
- O acesso aos atributos de uma entidade pode ser público.
- Os atributos devem ter mutadores (setters) privados.
- As modificações das entidades são feitas através de métodos para deixar explícito o que eles fazem.
- Substantivos são entidades.
- As regras de negócio de atributos devem estar DENTRO da classe da entidade. Isso inclui validações e outras transformações dos dados de entrada.
- "Entidades" que possuem métodos setters públicos e permitem que seus atributos sejam alterados por fora são consideradas "anêmicas".

Repository:
- Camada responsável por armazenar os dados.
- Um repositório se relaciona apenas com uma única entidade.
- O repositório está focado apenas em operações de armazenamento.
- Caso seja necessário gerar um ID, é o repositório que faz isso.
- Devemos criar uma interface do repositório para essa entidade.
- Dessa forma, podemos ter várias implementações "concretas" para diferentes mecanismos de armazenamento.
- Se você cria uma interface, é possível passar qualquer outra classe que implemente o uso da interface para o caso de uso.

## Casos de uso: orquestrando as entidades
- São regras de negócio que orquestram as entidades.
- São regras mais complexas.
- A diferença principal é que a entidade não se importa literalmente com nada abaixo ou acima dela.
- Os casos de uso dependem das entidades.
- Os casos de uso coordenam as entidades.
- Determinam exatamente o que deve acontecer com as entidades.
- Verbos são usados para nomear os casos de uso.
- Ao querer entender o que o software com clean architecture faz, leia os casos de uso.
- Um controle remoto de TV e seus botões: os botões são os casos de uso.
- O armazenamento de dados fica dentro do caso de uso.
- Os casos de uso são a quebra de uma classe service (casos de uso > service).
- Não se recebe a biblioteca de armazenamento dentro do caso de uso, mas sim uma interface de repositório.

## Infraestrutura
- Contém as classes concretas que utilizam as interfaces de repositório.
- São arquivos que têm conexão com serviços externos (como conexão com banco de dados, Redis, etc.).
- Aqui estão as classes mais "sujas" que contêm coisas que não são do "domínio".
- Aqui estão os frameworks de qualquer tipo que interagem com os casos de uso.
- A infraestrutura importa as classes do domínio.
- O "Express" só quer saber dos casos de uso, nada mais!
- Express, banco de dados, envio de e-mails são "adaptadores".
- As interfaces que serão injetadas nos casos de uso são "portas".
- A infraestrutura se comunica apenas com os casos de uso.

Referência: [Vídeo sobre Clean Architecture](https://www.youtube.com/watch?v=yLPxkIxbNDg)

## Iniciando projeto

    npm i && npm run start