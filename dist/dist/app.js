const memory = JSON.parse(localStorage.getItem("memory") || "[]");

function save() {
  localStorage.setItem("memory", JSON.stringify(memory));
}

function add(text) {
  memory.push({ text, date: new Date().toISOString() });
  save();
  render();
}

function render() {
  document.body.innerHTML += `
    <input id="i" placeholder="Digite algo" />
    <button onclick="add(document.getElementById('i').value)">Salvar</button>
    <ul>${memory.map(m => `<li>${m.text}</li>`).join("")}</ul>
  `;
}

render();
