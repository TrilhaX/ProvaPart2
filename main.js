let usuario = []

function adicionarUsuario(nome, idade, email){
    nome = "João"
    idade = 17
    email = "joaosla@gmail.com"

    if (idade > 0 && nome && email){
        usuario.push(nome)
    }else{
        console.log("Não foi possivel fazer o seu cadastro!")
    }
}

function listarusuarios(){
    usuario.forEach(function(usuarios){
        console.log("Esses são os usuarios cadastrados no nosso site:\n" + usuarios)
    })
}

adicionarUsuario()
listarusuarios()