import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import { useState } from 'react'
import OrderDetails from './components/OrderDetails';

function App() {
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    addressOne:"",
    addressTwo:"",
    city:"",
    state:"",
    zipcode:"",
    phone:"",
    email:"",
    orderType:"",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value,type, checked } = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <div className="App">
      <Header />
      {!submitted && <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />}
      {submitted && <OrderDetails formData={formData} />}
    </div>
  );
}

export default App;
