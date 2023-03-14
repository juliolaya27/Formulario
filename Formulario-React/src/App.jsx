import { useState } from "react"

const App = () => {

  const [num, setNumber] = useState(0)

  const calculateLong = e => {
    setNumber(e.target.value.length)
    console.log(e.target.value.length)
  }

  return (
    <div>
      <form>
        <input type="email" defaultValue="Ejemplo@correo.com" />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={calculateLong}
          required
        />
        <p>Usted Ingreso {num} caracteres</p>

      </form>

    </div>
  )
}

export default App
