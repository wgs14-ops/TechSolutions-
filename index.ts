import { Funcionario } from "./Funcionario";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { FuncionarioTerceirizado } from "./FuncionarioTerceirizado";

const funcionarios: Funcionario[] = [
    new FuncionarioCLT("Ana Silva", "52998224725", 1, 3000, 6000),
    new FuncionarioPJ("Bruno Santos", "52998224725", 2, 0, 50, 160),
    new FuncionarioTerceirizado("Carla Souza", "11144477735", 3, 4500, 20)
];

let folhaTotal = 0;

for (const funcionario of funcionarios) {
    const salario = funcionario.calcularSalario();
    folhaTotal += salario;

    console.log(
        `${funcionario.getNome()} - ID: ${funcionario.getId()} - ` +
        `Salário calculado: R$ ${salario.toFixed(2).replace(".", ",")}`
    );
}

console.log(`Folha mensal total: R$ ${folhaTotal.toFixed(2).replace(".", ",")}`);
