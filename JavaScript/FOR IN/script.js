//var lista_convidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']
var lista_convidados = []
lista_convidados['a'] = 'Jorge'
lista_convidados[10] = 'Jamilton'
lista_convidados['masqueico'] = 'José'
lista_convidados[-1] = 'Ana'
lista_convidados[true] = 'Maria'

console.log(lista_convidados)

for(var x in lista_convidados) {
    console.log('Índice ' + x + ' valor ' + lista_convidados[x])
}