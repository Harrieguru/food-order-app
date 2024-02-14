import '../Form.css'

const Form = ({formData, handleChange, handleSubmit}) => {
  return (
    <div>
        <form className='form-container' onSubmit={handleSubmit}>
            <div className="form-input">
                <label htmlFor="firstname">Name</label>
                <br />
                <input 
                    type="text" 
                    id='firstname' 
                    placeholder='Firstname'
                    onChange={handleChange}
                    name="firstname"
                    value={formData.firstname}
                />
                <input 
                    type="text" 
                    id='lastname' 
                    placeholder='Lastname'
                    onChange={handleChange}
                    name="lastname"
                    value={formData.lastname}
                />
            </div>
            <div className="form-input">
                <label htmlFor="address"> Address</label>
                <br />
                <div className='address-grid'>
                    <input 
                        type="text"  
                        placeholder='Address Line 1'
                        onChange={handleChange}
                        name='addressOne'
                        value={formData.address1}
                    />
                    <input 
                        type="text" 
                        placeholder='Address Line 2'
                        onChange={handleChange}
                        name='addressTwo'
                        value={formData.address2}
                    />
                </div>
            </div>
            <div className="form-input">
                <input 
                    type="text" 
                    placeholder='City'
                    onChange={handleChange}
                    name="city"
                    value={formData.city}
                />
                <select 
                    name="state" 
                    id="state"
                    onChange={handleChange}
                    value={formData.state}
                >
                    <option value="">--Choose--</option>
                    <option value="ontario">Ontario</option>
                    <option value="quebec">Quebec</option>
                    <option value="vancouver">Vancouver</option>
                </select>
                <input 
                    type="text" 
                    placeholder='Zip Code'
                    onChange={handleChange}
                    name="zipcode"
                    value={formData.zipcode}
                />
            </div>
            <div className="form-input">
            <label htmlFor="phone">Phone</label>
                <input 
                    type="tel" 
                    id='phone'
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id='email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
            </div>
            <div className="form-input">
                        <input 
                            type="radio" 
                            name='orderType' 
                            id='delivery'
                            checked={formData.orderType === "delivery"}
                            onChange={handleChange}
                            value="delivery"
                        />
                        <label htmlFor="delivery">Delivery</label>
                        <input 
                            type="radio" 
                            name='orderType' 
                            id='pickup'
                            checked={formData.orderType === "pickup"}
                            onChange={handleChange}
                            value="pickup"
                        />
                <label htmlFor="delivery">Pick-Up</label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form