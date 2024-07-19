Array.from(document.querySelectorAll("li")).forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.firstChild.replaceWith(t);var l=e.querySelector("ul");l&&t.addEventListener("click",function(){"none"===l.style.display?l.style.display="block":l.style.display="none"})});
//# sourceMappingURL=index.80599ec2.js.map
