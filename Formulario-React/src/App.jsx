import "./App.scss"
import Field from "./components/Filed"
import Submit from "./components/Submit"
import Form from "./components/Form"
import useForm from "./hooks/useForm"
import Textarea from "./components/Textarea"
import Select from "./components/Select"
import { useRef } from "react"


const App = () => {
    
  const form = useRef()

  const submit = e => {
    e.preventDefault()
    const f = form.current 

    const data = {
      fullname: f.fullname.value,
      mail: f.mail.value,
      age: f.age.value,
      ranking: f.ranking.value,
      obs: f.obs.value,
      country: f.country.value,
      active: f.active.checked
    }
    console.log(data)
  }

  return (

    <Form submit={submit} formRef={form}>
      <Field type="text" name="fullname" value="" label="Nombres" />
      <Field type="email" name="mail" value="" label="Correo Electronico" />
      <Field type="number" name="age" value="" label="Edad" />
      <Field type="range" name="ranking" value="" label="Calificacion" />
      <Textarea name="obs" value="" label="Observaciones"/>
      <Select name="country" label="Pais" options={
        [
          {val:"ve", content:"Venezuela"},
          {val:"eu", content:"United States"},
          {val:"pe", content:"Peru"}
        ]
      }  />
    
      <Field type="checkbox" name="active" checked={true} label="¿ Avtivo ?"/>
      <Submit value="Guardar" />
    </Form>

  )

}

export default App


  // se crea un useState con un objeto de dos atributos email y password
  // data y setData. data representa el valor actual del estado y setData es una función que se utiliza para actualizar el valor del estado.
  //se utiliza para cambiar estados
  //los dos atributos se inician vacios 
  // const data = ({ email: "", password: "" })
  // const loginForm = useRef()


  // recibe un evento y luego hace un setDta
  //lo primero que hace es respetar los objetos que no quiero modificar utilizando ...data
  //[e.target.name] sabemos que le name se le asignan valores (name="email" y  name="password" ) se hace para hacerlo de una manera generica 
  //e.target.value me devuelve el valor que hay en value(el campo)
  // const changeData= e => {
  //   setData({
  //   ...data,
  //   [e.target.name]: e.target.value})
  // }


  // se utiliza para enviar la informacion que hay en todo el formulario por eso el form agrupa todos lo input
  //en el loginForm se ecuentran los datos 
  // const submint = e => {
  //   e.preventDefault()
  //   console.log(loginForm.current)
  //   alert("Bienvenidos!!!")

  // }

  //el onSubmit 
  //en los imput donde se guarda la informacion de correo y contrasena hay un value que es el valor del campo
  //el onchage nos sirve para cambiar el valor que hay en ese value

