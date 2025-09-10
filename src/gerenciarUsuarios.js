const usuarios = [
    {
        nome: 'Mateus',
        email: 'email@test.com'},    
    {
        nome: 'Marcos',
        email: 'email2@test.com'},
    {      
        nome: 'Lucas',
        email: 'email3@test.com'},
    {
        nome: 'Joao',
        email: 'email4@test.com'}
];

function retornarUsuarios() {
    // Retorna uma lista de nomes gravados na lista de nomes de usuário.
    return usuarios;
}

function adicionarNovoUsuario(usuario){
    // Acrescenta um novo usuário passado no momento da chamada da função ao final da lista de usuários.
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
};