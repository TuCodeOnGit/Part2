import { useState } from "react"
import { useAddNewUserMutation } from '../api/apiSlice';

// styles
import './Register.scss'

export default function Register() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState(true)

  const [ addNewUser ] = useAddNewUserMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (
      password === passwordConfirm &&
      email &&
      name &&
      phone
      ) {
        addNewUser({
          "email": email,
          "password": password,
          "name": name,
          "gender": gender,
          "phone": phone
        })
        setEmail('')
        setName('')
        setPassword('')
        setPasswordConfirm('')
        setPhone('')
        setGender(true)
      
    } else {
        console.log('err')
      }
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (value === 'male') {
      setGender(true)
    }
    if (value === 'female') {
      setGender(false)
    }
  }

  return (
    <section className='section-register'>
      <h1 className='section-register-title'>Register</h1>

      <form onSubmit={handleSubmit} className='register-form'>
        <div className="register-form-left">
          <span className='required'>
            <input className='input-fluid'
              type="text"
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>
          <span className='required'>
            <input className='input-fluid'
              type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>
          <span className='required'>
            <input className='input-fluid'
              type="password"
              placeholder='password confirm'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </span>
        </div>
        <div className="register-form-right">
          <span className='required'>
            <input className='input-fluid'
              type="text"
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </span>
          <span className='required'>
            <input className='input-fluid'
              type="phone"
              placeholder='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              />
          </span>
          <div className="radio-wrapper input-fluid">
            <span>Gender</span>
              <input
              id="radio1"
              className="radio"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={ gender }
            />
            <label htmlFor="radio1">Male</label>
              <input
                id="radio2"
                className="radio"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={ !gender }
              />
            <label htmlFor='radio2'>Female</label>
          </div>
          <button type="submit" className="btn-submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </section>
  )
}
