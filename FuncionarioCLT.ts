import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    private bonusAnual: number;

    constructor(
        nome: string,
        cpf: string,
        id: number,
        salarioBase: number,
        bonusAnual: number
    ) {
        super(nome, cpf, id, salarioBase);
        this.setBonusAnual(bonusAnual);
    }

    public getBonusAnual(): number {
        return this.bonusAnual;
    }

    public setBonusAnual(bonus: number): void {
        if (bonus < 0) {
            throw new Error("Bônus anual não pode ser negativo.");
        }
        this.bonusAnual = bonus;
    }

    public calcularSalario(): number {
        return this.getSalarioBase() + (this.bonusAnual / 12);
    }
}
