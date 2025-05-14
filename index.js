// 1️⃣ names & occupations
const names       = ["Alice","Bob","Carol","Dave","Eve","Frank"]
const occupations = ["writer","teacher","programmer","designer","gardener","driver"]

// 2️⃣ initial freelancers
const freelancers = [
  { name:"Alice", occupation:"writer",  price:30 },
  { name:"Bob",   occupation:"teacher", price:50 }
]

let tbody, avgEl

function init() {
  const root = document.querySelector("#root")

  // build table…
  const h1 = Object.assign(document.createElement("h1"), { innerText:"Freelancers" })
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  tbody = document.createElement("tbody")

  Object.keys(freelancers[0]).forEach(key => {
    const th = document.createElement("th"); th.innerText = key
    thead.appendChild(th)
  })

  table.append(thead, tbody)
  root.append(h1, table)

  // average display
  const p = document.createElement("p")
  p.innerHTML = `Average price: $<span id="avg-price">0.00</span>`
  root.appendChild(p)

  avgEl = document.querySelector("#avg-price")

  renderFreelancers()
  updateAverage()
}

function renderFreelancers() {
    const rows = freelancers.map(f => {
      const tr = document.createElement("tr")
  
      const tds = Object.values(f).map(val => {
        const td = document.createElement("td")
        td.innerText = val
        return td
      })
  
      tr.append(...tds)
      return tr
    })
  
    tbody.replaceChildren(...rows)
  }  

function calculateAverage() {
  const total = freelancers.reduce((sum, f) => sum + f.price, 0)
  return (total / freelancers.length).toFixed(2)
}

function updateAverage() {
  avgEl.textContent = calculateAverage()
}

function addRandomFreelancer() {
  const name = names[Math.floor(Math.random()*names.length)]
  const occupation = occupations[Math.floor(Math.random()*occupations.length)]
  const price = Math.floor(Math.random()*71) + 10

  freelancers.push({ name, occupation, price })
  renderFreelancers()
  updateAverage()
}

// kick it off
init()
setInterval(addRandomFreelancer, 3000)
