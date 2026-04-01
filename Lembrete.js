const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lembretes = [];
function menu() {
    console.log("\n=== Menu de Lembretes ===");
    console.log("1. Cadastrar lembrete");
    console.log("2. Listar lembretes");
    console.log("3. Editar lembrete");
    console.log("4. Concluir lembrete");
    console.log("5. Sair");
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                cadastrarLembrete();
                break;
            case "2":
                listarLembretes();
                menu();
                break;
            case "3":
                editarLembrete();
                break;
            case "4":
                concluirLembrete();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                menu();
        }
    });
}