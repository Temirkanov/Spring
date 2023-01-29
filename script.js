const items = document.querySelectorAll(".countDown-item > h4")
const countDownElement = document.querySelector("countDown");
// Дата отсчета:
let countDownDate = new Date(2023, 03, 00, 00, 00, 00).getTime()
function getCountDownTime() {
    // получить текущее время:
    const now = new Date().getTime();

    // найти раздницу:
    const distence = countDownDate - now

    // 1-секунда это 1000-милисукунд
    // 1-мин это 60 сек
    // 1-час это 60-мин
    // 1-день это 24-часа

    // создаем переменые в мили-секундах
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinutes = 60 * 1000


    //  подсчет для дней, часов, минут, секунд
    let days = Math.floor(distence / oneDay)
    let hour = Math.floor((distence % oneDay) / oneHour)
    let minutes = Math.floor((distence % oneHour) / oneMinutes)
    let seconts = Math.floor((distence % oneMinutes) / 1000)

    // создаем массив с пременными:
    const values = [days, hour, minutes, seconts,]



    // добовляем значение на страницу:
    items.forEach(function (items, index) {
        items.textContent = values[index]
    })

    if (distence < 0) {
        clearInterval(countDown);
        countDownElement.innerHTML = '<h4 class="expired>Время вышло!</h4>'
    }
}
// обьявления счетчика каждую секунду:
let countDown = setInterval(getCountDownTime, 1000)
// иницифлизация текущего времени 
getCountDownTime()