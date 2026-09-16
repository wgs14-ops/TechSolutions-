TECH SOLUTIONS - ATIVIDADE DE POO EM TYPESCRIPT

Arquivos:
- Funcionario.ts
- FuncionarioCLT.ts
- FuncionarioPJ.ts
- FuncionarioTerceirizado.ts
- index.ts

O diagrama UML deve mostrar:
Funcionario <<abstract>>
    ^
    |
FuncionarioCLT
FuncionarioPJ
FuncionarioTerceirizado

Pilares da POO:
- Abstração: Funcionario é uma classe abstrata.
- Encapsulamento: atributos privados e getters/setters.
- Herança: as três classes específicas herdam de Funcionario.
- Polimorfismo: cada classe implementa calcularSalario() de uma forma diferente.

Regras usadas:
- CLT: salário base + bônus anual rateado em 12 meses.
- PJ: valor da hora x horas trabalhadas.
- Terceirizado: salário base + taxa adicional.
- Nome com pelo menos 3 caracteres.
- CPF validado.
- Salário base não negativo.
- PJ: valor/hora positivo e até 220 horas.
- Terceirizado: taxa de 0% a 100%.
