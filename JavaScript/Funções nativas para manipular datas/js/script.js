/*var data  = new Date()

document.write(data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear())*/

var data = new Date()

//adicionar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr>')
document.write(data.toString())

document.write('<br>')
document.write('<br>')

//adicionar / remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<hr>')
document.write(data.toString())

document.write('<br>')
document.write('<br>')

//adicionar / remover anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<hr>')
document.write(data.toString())

document.write('<br>')
document.write('<br>')
document.write('<br>')
document.write('<br>')

var data1 = new Date(2017, 0, 15)

var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())

document.write('<br><br><hr>')

document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())

document.write('<hr>')

var m_e_d = (Math.abs(data1.getTime() - data2.getTime()))
document.write(m_e_d)

document.write('<hr>')

var m_p_d = (1*24*60*60*1000)
document.write('1 dia tem: ' + m_p_d + ' milisegundos.')

document.write('<br><br><hr>')
document.write(Math.ceil(m_e_d / m_p_d))