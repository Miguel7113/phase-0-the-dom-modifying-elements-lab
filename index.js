// Write your code here!
const node = document.getElementById("main")
if (node.parentNode) {
    node.parentNode.removeChild(main);
}

const newHeader = document.createElement('h1');
newHeader.textContent = "is the champion";
newHeader.id = 'victory';
document.body.appendChild(newHeader);
console.log(newHeader.tagName);