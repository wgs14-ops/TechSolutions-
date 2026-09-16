import { Funcionario } from "./Funcionario";

export class FuncionarioTerceirizado extends Funcionario {
    private taxaAdicional: number;

    constructor(
        nome: string,
        cpf: string,
        id: number,
        salarioBase: number,
        taxaAdicional: number
    ) {
        super(nome, cpf, id, salarioBase);
        this.setTaxaAdicional(taxaAdicional);
    }

    public getTaxaAdicional(): number {
        return this.taxaAdicional;
    }

    public setTaxaAdicional(taxa: number): void {
        if (taxa < 0 || taxa > 100) {
            throw new Error("A taxa adicional deve estar entre 0% e 100%.");
        }
        this.taxaAdicional = taxa;
    }

    public calcularSalario(): number {
        return this.getSalarioBase() * (1 + this.taxaAdicional / 100);
    }
}
