enum Trabalho {
    Atriz,
    Pedreiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Roberto',
    idade: 19,
    profissao: Trabalho.Pedreiro
};


let pessoa3: Humano = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: 'Carlos',
    idade: 19,
    profissao: Trabalho.Pedreiro
}

console.log();
