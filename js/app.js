const text_editor = document.querySelector(".text_editor")
const log_ = document.querySelector(".log")
const mode = document.querySelector(".mode")
const startlog = document.querySelector(".startlog")
const refresh = document.querySelector(".refresh")
const reset = document.querySelector(".reset")


let logmode = 0

// text_editor.addEventListener("input",async (e) => {
// })
if (localStorage.getItem("editor_cache")) {
    text_editor.value = localStorage.getItem("editor_cache")
}

function echo(text) {
    log_.append(`${new Date().toLocaleTimeString("en-US", { hour12: false })} : ${text}`, document.createElement("br"))
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function logLatest() {
    log_.scrollTo(0, log_.scrollHeight)
}

function beginMode() {
    logmode += 1
    switch (logmode) {
        case 1: {
            log_.style.height = "50dvh"
            log_.style.bottom = "0"
            mode.style.bottom = "50dvh"
            startlog.style.bottom = "50dvh"
            refresh.style.bottom = "50dvh"
            reset.style.bottom = "50dvh"
        }
            break
        case 2: {
            log_.style.height = "80dvh"
            log_.style.bottom = "0"
            mode.style.bottom = "80dvh"
            startlog.style.bottom = "80dvh"
            refresh.style.bottom = "80dvh"
            reset.style.bottom = "80dvh"
        }
            break
        default: {
            log_.style.bottom = "-80vh"
            mode.style.bottom = "0"
            startlog.style.bottom = "0"
            refresh.style.bottom = "0"
            reset.style.bottom = "0"
            logmode = 0
        }
    }
    logLatest()
}
mode.addEventListener("click", () => {
    beginMode()
})

let cslArray = []

let handler = {
  set: function(obj, prop, value) {
    if (prop === 'l') {
        cslArray.push(value)
      obj[prop] = value
    }
    return true
  }
}

let target = {}
let cs = new Proxy(target, handler)

function beginLog() {
    //execute code
    try {
        const awake = `(async function () {
            ${text_editor.value}
        })()`
        eval(awake)

        
        echo("<--------cs.l---start--------->")
        for (let i of cslArray) {
            echo(i)
        }
        cslArray = new Array()
        echo("<--------cs.l---end--------->")
    }
    catch {

    }
    logLatest()
}

startlog.addEventListener("click", async () => {
    beginLog()
})
refresh.addEventListener("click", () => {
    localStorage.setItem("editor_cache", text_editor.value)
})
reset.addEventListener("click", () => {
    text_editor.value = ``
})