let usuarios = []

function adicionarUsuario(nome, idade, email) {
    const usuario = {
        nome,
        idade,
        email
    }

    if(idade > 0){
        console.log("Sua idade é valida")
    } else{
        console.log("Sua idade é inválida. Deve ser um número maior que zero!")
        return
    }

    if(nome === undefined && email === undefined && email === undefined) {
        console.log("Todos os dados estão faltando.")
        return
    } else if(nome === undefined || email === undefined || email === undefined){
        console.log("Há dados faltando.")
        return
    } else{
        usuarios.push(usuario)
        console.log(`Usuário ${nome} adicionado com sucesso!`)
    }
    
    
    listarUsuarios(usuarios);
}

function listarUsuarios(usuarios) {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.")
        return
    } else {
        console.log(`Usuários cadastrados: ${usuarios.length}`)
        usuarios.forEach((usuario, index) => {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`)
        })
    }
}

adicionarUsuario('João', 17 , 'joaosla@gmail.com')
