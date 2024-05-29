//throw new Error('Houve um erro')

var video = []

video[1] = []
video[1]['nome'] = 'Naruto'
video[1]['categoria'] = 'Anime'

function getVideo(video) {
    //logica
    //http
    try {
        console.log(video[0]['nome'])
    } catch(erro) {
        tratarErro(erro)
        console.log('agora podemos tratar esse erro')
    } finally {
        console.log('sempre passa por aqui')
    }

    console.log('A aplicação não morreu')
}

function tratarErro(e) {
    //logica
    console.log(e)
}
getVideo(video)