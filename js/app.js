const text_editor = document.querySelector(".text_editor")
const log = document.querySelector(".log")
const mode = document.querySelector(".mode")
const startlog = document.querySelector(".startlog")
const refresh = document.querySelector(".refresh")
const reset = document.querySelector(".reset")


let logmode = 0

// text_editor.addEventListener("input",async (e) => {
// })
if(localStorage.getItem("editor_cache")) {
    text_editor.value = localStorage.getItem("editor_cache")
}

function echo(text) {
    log.append(`${new Date().toLocaleTimeString("en-US",{hour12:false})} : ${text}`,document.createElement("br"))
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

mode.addEventListener("click", () => {
    logmode += 1
    switch (logmode) {
        case 1 : {
            log.style.bottom = "-30vh"
            mode.style.bottom = "50vh"
            startlog.style.bottom = "50vh"
            refresh.style.bottom = "50vh"
            reset.style.bottom = "50vh"
        }
        break
        case 2 : {
            log.style.bottom = "0"
            mode.style.bottom = "80vh"
            startlog.style.bottom = "80vh"
            refresh.style.bottom = "80vh"
            reset.style.bottom = "80vh"
        }
        break
        default : {
            log.style.bottom = "-80vh"
            mode.style.bottom = "0"
            startlog.style.bottom = "0"
            refresh.style.bottom = "0"
            reset.style.bottom = "0"
            logmode = 0
        }
    }

})
startlog.addEventListener("click", () => {
    //execute code
    try {
        eval(text_editor.value)
    }
    catch {

    }
    log.scrollTo(0,log.scrollHeight)
})
refresh.addEventListener("click",() => {
    localStorage.setItem("editor_cache", text_editor.value)
    location.reload()
})
reset.addEventListener("click",() => {
    text_editor.value = ``
})