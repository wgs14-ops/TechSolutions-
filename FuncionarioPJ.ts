import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(
        nome: string,
        cpf: string,
        id: number,
        salarioBase: number,
        valorHora: number,
        horasTrabalhadas: number
    ) {
        super(nome, cpf, id, salarioBase);
        this.setValorHora(valorHora);
        this.setHorasTrabalhadas(horasTrabalhadas);
    }

    public getValorHora(): number {
        return this.valorHora;
    }

    public setValorHora(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor da hora deve ser positivo.");
        }
        this.valorHora = valor;
    }

    public getHorasTrabalhadas(): number {
        return this.horasTrabalhadas;
    }

    public setHorasTrabalhadas(horas: number): void {
        if (horas < 0 || horas > 220) {
            throw new Error("Horas trabalhadas não podem exceder 220 horas.");
        }
        this.horasTrabalhadas = horas;
    }

    public calcularSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}
