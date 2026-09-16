export abstract class Funcionario {
    private nome: string;
    private cpf: string;
    private id: number;
    private salarioBase: number;

    constructor(nome: string, cpf: string, id: number, salarioBase: number) {
        this.setNome(nome);
        this.setCpf(cpf);
        this.setId(id);
        this.setSalarioBase(salarioBase);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        if (nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres.");
        }
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        if (!Funcionario.validarCpf(cpf)) {
            throw new Error("CPF inválido. Verifique o número digitado.");
        }
        this.cpf = cpf;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        if (id <= 0) {
            throw new Error("ID deve ser maior que zero.");
        }
        this.id = id;
    }

    public getSalarioBase(): number {
        return this.salarioBase;
    }

    public setSalarioBase(valor: number): void {
        if (valor < 0) {
            throw new Error("Salário não pode ser negativo.");
        }
        this.salarioBase = valor;
    }

    public abstract calcularSalario(): number;

    private static validarCpf(cpf: string): boolean {
        const numeros = cpf.replace(/\D/g, "");

        if (numeros.length !== 11 || /^([0-9])\1+$/.test(numeros)) {
            return false;
        }

        let soma = 0;

        for (let i = 0; i < 9; i++) {
            soma += Number(numeros[i]) * (10 - i);
        }

        let resto = (soma * 10) % 11;
        const digito1 = resto === 10 ? 0 : resto;

        if (digito1 !== Number(numeros[9])) {
            return false;
        }

        soma = 0;

        for (let i = 0; i < 10; i++) {
            soma += Number(numeros[i]) * (11 - i);
        }

        resto = (soma * 10) % 11;
        const digito2 = resto === 10 ? 0 : resto;

        return digito2 === Number(numeros[10]);
    }
}
