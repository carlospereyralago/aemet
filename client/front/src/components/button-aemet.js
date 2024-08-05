class Aemet extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }

            section{
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .title{               
                align-items: center;
                display: flex;
                gap: 0.5rem;
            } 
            h1{
              color:#fff;
              font-size: 5em;
            }
            .data-req{               
                align-items: center;
                display: flex;
                gap: 0.5rem;
            }   
            .data-req button{
              color:#fff;
              font-family: ubuntu;
              font-size: 2em;
            }
            p{
              color: #fff;
            }
        </style>
        <section>
            <div class="title">
                <h1>Consulta AEMET</h1>
            </div>
            <div class="data-req">
                <button class="sent-data">Consulta AEMET</button>
            </div>
        </section>
        `

    const fetchButton = this.shadow.querySelector('.sent-data')

    fetchButton.addEventListener('click', async () => {
      let response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJsb3NwZXJleXJhbGFnb0BnbWFpbC5jb20iLCJqdGkiOiIzODZhYjg5ZS0wYzFmLTQ3NjMtYWRjMy0xMDVkODE2NGU0ODUiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcyMjg1NDg0NCwidXNlcklkIjoiMzg2YWI4OWUtMGMxZi00NzYzLWFkYzMtMTA1ZDgxNjRlNDg1Iiwicm9sZSI6IiJ9.SfgIiXe4qGIbBZZor8RBF2yCNjUoMIM6k8Uk1zyXLYs')
      let data = await response.json()

      const url = data.datos
      response = await fetch(url)
      data = await response.json()

      data = data.map(element => {
        const newElement = {}

        Object.entries(element).forEach(([key, value]) => {
          newElement[key] = value.replace(',', '.')
        })

        return newElement
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/weather`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      data = await response.json()
      console.log(data)
    })
  }
}

customElements.define('button-aemet-component', Aemet)
