class Conta {
    #numeroConta;
    #saldo;
    nomeUsuario;
    profissaoUsuario;

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
    }

    criarConta() {
        console.log("Conta criada com sucesso!");
        return {
            numeroConta: this.#numeroConta,
            saldo: this.#saldo,
            nomeUsuario: this.nomeUsuario,
            profissaoUsuario: this.profissaoUsuario
        };
    }

    checarExtrato() {
        console.log(`Extrato da conta:
        Número da conta: ${this.getNumeroConta()}
        Saldo atual: R$ ${this.getSaldo()}
        Nome do usuário: ${this.nomeUsuario}
        Profissão do usuário: ${this.profissaoUsuario}`);
    }

    solicitarEmprestimo(valor) {
        console.log(`Empréstimo no valor de R$ ${valor} solicitado com sucesso!`);
    }

    static imprimirInstrucoes() {
        console.log("Instruções gerais para o uso das contas.");
    }

    // Getters e setters
    getNumeroConta() {
        return this.#numeroConta;
    }

    getSaldo() {
        return this.#saldo;
    }

    setSaldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }
}

class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, limiteChequeEspecial, taxaManutencao) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#limiteChequeEspecial = limiteChequeEspecial;
        this.#taxaManutencao = taxaManutencao;
        ContaCorrente.contasCorrente.push(this);
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        this.#limiteChequeEspecial = novoLimite;
        console.log(`Limite do cheque especial alterado para R$ ${novoLimite}.`);
    }

    calcularTaxaManutencao() {
        console.log(`Taxa de manutenção da conta corrente: R$ ${this.#taxaManutencao}.`);
    }

    static listarTodasContasCorrente() {
        console.log("Contas corrente criadas:");
        ContaCorrente.contasCorrente.forEach((conta, index) => {
            console.log(`Conta ${index + 1}: Número ${conta.getNumeroConta()}, Saldo R$ ${conta.getSaldo()}`);
        });
    }
}

class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, taxaJuros, limiteSaques) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#taxaJuros = taxaJuros;
        this.#limiteSaques = limiteSaques;
    }

    calcularJuros() {
        const juros = this.getSaldo() * (this.#taxaJuros / 100);
        console.log(`Juros da conta poupança: R$ ${juros.toFixed(2)}.`);
    }

    gerenciarLimiteSaques(novoLimite) {
        this.#limiteSaques = novoLimite;
        console.log(`Limite de saques da conta poupança alterado para ${novoLimite}.`);
    }

    static verificarMelhorInvestimento() {
        console.log(`Melhores investimentos para contas poupança: ${ContaPoupanca.melhoresInvestimentos.join(", ")}.`);
    }
}

// Exemplo de uso
const contaCorrente = new ContaCorrente(1, 1000, "João", "Engenheiro", 500, 20);
const contaCorrenteInfo = contaCorrente.criarConta();
console.log(contaCorrenteInfo);

const contaPoupanca = new ContaPoupanca(2, 500, "Maria", "Professor", 1.5, 3);
const contaPoupancaInfo = contaPoupanca.criarConta();
console.log(contaPoupancaInfo);
