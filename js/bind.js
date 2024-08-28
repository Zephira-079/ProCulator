window.addEventListener("keydown", (e) => {
    if (e.key == "F4") {
        beginLog()
        if (logmode == 0) beginMode()
    }
    if (e.key === 's' && (navigator.userAgent.includes('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
        localStorage.setItem("editor_cache", text_editor.value)
    }
})