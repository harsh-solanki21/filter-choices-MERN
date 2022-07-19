import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
  const [values, setvalues] = useState({
    name: '',
    startDate: '',
    endDate: '',
    region: '',
    type: '',
    tag: '',
  })

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/', values)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='inner-form'>
          <input
            type='text'
            placeholder='Event Name'
            name='name'
            onChange={handleChange}
          />

          <input type='date' name='startDate' onChange={handleChange} />
          <input type='date' name='endDate' onChange={handleChange} />

          <select
            defaultValue={'DEFAULT'}
            name='region'
            onChange={handleChange}
          >
            <option value='DEFAULT' disabled>
              Event Region
            </option>
            <option value='North Bangalore'>North Bangalore</option>
            <option value='South Bangalore'>South Bangalore</option>
            <option value='Central Bangalore'>Central Bangalore</option>
            <option value='East Bangalore'>East Bangalore</option>
          </select>

          <select defaultValue={'DEFAULT'} name='type' onChange={handleChange}>
            <option value='DEFAULT' disabled>
              Event Type
            </option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Spiritual'>Spiritual</option>
            <option value='Professional'>Professional</option>
            <option value='Political'>Political</option>
            <option value='Sports'>Sports</option>
          </select>

          <select defaultValue={'DEFAULT'} name='tag' onChange={handleChange}>
            <option value='DEFAULT' disabled>
              Event Tag
            </option>
            <option value='Weekend'>Weekend</option>
            <option value='Fullday'>Full Day</option>
            <option value='Nightlife'>Nightlife</option>
            <option value='Outdoors'>Outdoors</option>
            <option value='Indoors'>Indoors</option>
            <option value='HasEntryFee'>Has Entry Fee</option>
          </select>

          <input type='submit' value='Create' name='button' />
        </div>
      </form>
    </div>
  )
}

export default Form
