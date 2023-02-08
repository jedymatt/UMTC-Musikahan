setTimeout(() => {
    destroyMe()
}, 5000)
function destroyMe(){
    document.getElementById('splash').classList.add('fadeout')
    setTimeout(() => {
        document.getElementById('splash').remove()
    }, 1000)
}