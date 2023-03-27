function copyCode(selector) {
    const code = document.querySelector(selector).innerText.trim();
    navigator.clipboard.writeText(code);
    const button = document.querySelector('[onclick="copyCode(\'' + selector + '\')"]');
    const originalText = button.innerText;
    button.innerText = 'Copied!';
    setTimeout(function() {
        button.innerText = originalText;
    }, 2000);
}
