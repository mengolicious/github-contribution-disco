const days = document.querySelectorAll('.day')
const daysArray = Array.apply(null, days)

function changeColor() {
    daysArray.forEach(function (element) {
        element.style.fill = Math.floor(Math.random() * 16777215).toString(16)
    })
}
setInterval(changeColor, 200)




