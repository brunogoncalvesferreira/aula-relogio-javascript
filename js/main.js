const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function getHours() {
  const date = new Date()

  const hh = date.getHours()
  const mm = date.getMinutes()
  const ss = date.getSeconds()

  hour.innerHTML = hh < 10 ? `0${hh}` : hh
  minute.innerHTML = mm < 10 ? `0${mm}` : mm
  second.innerHTML = ss < 10 ? `0${ss}` : ss
}

setInterval(getHours, 1000)
