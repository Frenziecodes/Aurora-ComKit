function copyCode(id) {
    const el = document.querySelector(id);
    const codeBlock = el.querySelector("section").outerHTML;
    
    navigator.clipboard.writeText(codeBlock).then(function() {
      alert("Code copied to clipboard!");
    }, function() {
      alert("Error copying code to clipboard.");
    });
  }
  
  
