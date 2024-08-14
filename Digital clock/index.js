const btn = document.querySelector('.btn')
const clock = document.querySelector('.clock')

setInterval(function(){
    let t = new Date()
    clock.innerHTML = t.toLocaleTimeString()
},1000)
