const usuarios = ['Mateus', 'Marcos', 'Lucas', 'Joao'];

function retornarUsuarios() {
    // Retorna uma lista de nomes gravados na lista de nomes de usuário.
    return usuarios;
}

function adicionarNovoUsuario(nome){
    // Acrescenta um novo nome de usuário passado no momento da chamada da função ao final da lista de usuários.
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
};