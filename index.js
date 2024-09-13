const { select } = require('@inquirer/prompts')

const start = async () => {

    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    
                    name: "Cadastrar meta",
                    value: "cadastrar"
                    
                },

                {
                    name: "Listar Metas",
                    value: "listar"
                },

                {
                    name: "Sair",
                    value: "sair"
                }
            ]//Precisa ser uma Array
        })

        switch(opcao){
          case "cadastrar":
            console.log("Vamos cadastrar")
            break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return    
        }
    }
  }

  start()