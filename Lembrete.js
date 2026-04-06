const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
function cadastrarLembrete() {
  rl.question("Digite o título do lembrete: ", (titulo) => {
    rl.question("Digite a descrição do lembrete: ", (descricao) => {
      rl.question(
        "Digite a data do lembrete (formato: DD/MM/AAAA): ",
        (data) => {
          if (data == Number(data)) {
            ano = parseInt(data);
          } else {
            console.log(
              "Data inválida. A data deve estar no formato DD/MM/AAAA."
            );
            menu();
            return;
          }
          const id = lembretes.length + 1;
          const lembrete = { id, titulo, descricao, data, concluido: false };
          lembretes.push(lembrete);
          console.log("Lembrete cadastrado com sucesso!");
          menu();
        }
      );
    });
  });
}

function listarLembretes() {
    rl.question(
      `Você gostaria de listar os lembretes?
      (s/n).: `,
      (usuario) => {
        const resposta = usuario.toString(``);
        switch (resposta) {
          case `s`:
            listar();
            break;
          default:
            menu();
            break;
        }
        function listar() {
          for (let i = 0; i < lembretes.length; i++) {
            console.log(`
              id do Lembrete: #${lembretes[i].id}           
                  
              Título: ${lembretes[i].titulo}
              Descrição: ${lembretes[i].descricao}
              Data: ${lembretes[i].data}
              Conclusão: ${lembretes[i].concluido}
              
                  `);
          }
          menu();
        }
      }
    );
  }
  
  function editarLembrete() {
    rl.question(
      `Você gostaria de editar algum lembrete?(s/n)
      .: `,
      (usuario) => {
        const resposta = usuario.toString(``);
        switch (resposta) {
          case `s`:
            escolher();
            break;
          default:
            menu();
            break;
        }
        function escolher() {
          rl.question(
            `Qual o id do lembrete que você gostaria de editar?`,
            (usuario) => {
              const indice = lembretes.findIndex(
                (lembretes) => lembretes.id === usuario
              );
              lembretes.splice(indice, 1);
              rl.question("Digite o título do lembrete: ", (titulo) => {
                rl.question("Digite a descrição do lembrete: ", (descricao) => {
                  rl.question(
                    "Digite a data do lembrete (formato: DD/MM/AAAA): ",
                    (data) => {
                      const id = lembretes.length + 1;
                      const lembrete = {
                        id,
                        titulo,
                        descricao,
                        data,
                        concluido: false,
                      };
                      lembretes.push(lembrete);
                      console.log("Lembrete editado com sucesso!");
                      menu();
                    }
                  );
                });
              });
            }
          );
        }
      }
    );
  }
