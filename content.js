function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const link = document.querySelector("a#key-val")
if (link) {
    const key = link.textContent
    const summary = document.querySelector("h1#summary-val").textContent
    const spacer = "&nbsp&nbsp"
    const description = key + " " + summary

    var span = document.createElement("span")
    span.innerHTML = spacer;
    link.parentElement.appendChild(span)

    var button = document.createElement("button")
    button.textContent = "Copy link"
    button.onclick = function () {
        const clipboardItem = new
            ClipboardItem({
                'text/html': new Blob(["<a href=\"" + window.location.href + "\">" + description + "</a>"],
                    { type: 'text/html' }),
                'text/plain': new Blob([description],
                    { type: 'text/plain' })
            });
        navigator.clipboard.write([clipboardItem])
    }
    link.parentElement.appendChild(button)

    var span = document.createElement("span")
    span.innerHTML = spacer;
    link.parentElement.appendChild(span)

    var button = document.createElement("button")
    button.textContent = "Copy Markdown"
    button.onclick = function () {
        navigator.clipboard.writeText("[" + description + "](" + window.location.href + ")")
    }
    link.parentElement.appendChild(button)

    var span = document.createElement("span")
    span.innerHTML = spacer;
    link.parentElement.appendChild(span)

    var button = document.createElement("button")
    button.textContent = "Copy commit message"
    button.onclick = function () {
        navigator.clipboard.writeText(key + ": " + capitalizeFirstLetter(summary))
    }
    link.parentElement.appendChild(button)
}