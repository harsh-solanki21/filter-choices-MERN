import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = () => {
  const [data, setData] = useState([])
  const [date, setDate] = useState({
    start: '',
    end: '',
  })

  const [region, setRegion] = useState('')
  const [type, setType] = useState('')
  const [tag, setTag] = useState('')

  const handleRegion = (e) => {
    setRegion(e.target.value)
  }

  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleTag = (e) => {
    setTag(e.target.value)
  }

  const getData = async () => {
    const res = await axios.get('http://localhost:5000/')
    setData(res.data)
  }

  const handleFilter = async () => {
    const filters = {
      start: date.start,
      end: date.end,
      region: region,
      type: type,
      tags: tag,
    }
    console.log(filters)
    const res = await axios.get('http://localhost:5000/query', {
      params: filters,
    })
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className='column left'>
        <span className='title'>Filter by:</span>
        <br />
        <br />

        {/* Dates */}
        <span className='subject'>Event Date</span>
        <div>
          <label>Start Date: &nbsp;</label>
          <input
            type='date'
            onChange={(e) => setDate({ ...date, start: e.target.value })}
          />
        </div>

        <div>
          <label>End Date: &nbsp;&nbsp;</label>
          <input
            type='date'
            onChange={(e) => setDate({ ...date, end: e.target.value })}
          />
        </div>
        <br />

        {/* Event Region */}
        <div className='vertical'>
          <span className='subject'>Event Region</span>
          <label>
            <input
              type='radio'
              name='region'
              value='North Bangalore'
              onChange={handleRegion}
              checked={region === 'North Bangalore'}
            />
            <span>North Bangalore</span>
          </label>
          <label>
            <input
              type='radio'
              name='region'
              value='South Bangalore'
              onChange={handleRegion}
              checked={region === 'South Bangalore'}
            />
            <span>South Bangalore</span>
          </label>
          <label>
            <input
              type='radio'
              name='region'
              value='Central Bangalore'
              onChange={handleRegion}
              checked={region === 'Central Bangalore'}
            />
            <span>Central Bangalore</span>
          </label>
          <label>
            <input
              type='radio'
              name='region'
              value='East Bangalore'
              onChange={handleRegion}
              checked={region === 'East Bangalore'}
            />
            <span>East Bangalore</span>
          </label>
        </div>
        <br />

        {/* Event Type */}
        <div className='vertical'>
          <span className='subject'>Event Type</span>
          <label>
            <input
              type='radio'
              name='type'
              value='Entertainment'
              onChange={handleType}
              checked={type === 'Entertainment'}
            />
            <span>Entertainment</span>
          </label>
          <label>
            <input
              type='radio'
              name='type'
              value='Spiritual'
              onChange={handleType}
              checked={type === 'Spiritual'}
            />
            <span>Spiritual</span>
          </label>
          <label>
            <input
              type='radio'
              name='type'
              value='Professional'
              onChange={handleType}
              checked={type === 'Professional'}
            />
            <span>Professional</span>
          </label>
          <label>
            <input
              type='radio'
              name='type'
              value='Political'
              onChange={handleType}
              checked={type === 'Political'}
            />
            <span>Political</span>
          </label>
          <label>
            <input
              type='radio'
              name='type'
              value='Sports'
              onChange={handleType}
              checked={type === 'Sports'}
            />
            <span>Sports</span>
          </label>
        </div>
        <br />

        {/* Event Tags */}
        <span className='subject'>Event Tag</span>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='Weekend'
            onChange={handleTag}
            checked={tag === 'Weekend'}
          />
          <span>Weekend</span>
        </div>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='Fullday'
            onChange={handleTag}
            checked={tag === 'Fullday'}
          />
          <span>Fullday</span>
        </div>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='Nightlife'
            onChange={handleTag}
            checked={tag === 'Nightlife'}
          />
          <span>Nightlife</span>
        </div>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='Outdoors'
            onChange={handleTag}
            checked={tag === 'Outdoors'}
          />
          <span>Outdoors</span>
        </div>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='Indoors'
            onChange={handleTag}
            checked={tag === 'Indoors'}
          />
          <span>Indoors</span>
        </div>
        <div className='tag'>
          <input
            type='radio'
            name='tag'
            value='HasEntryFee'
            onChange={handleTag}
            checked={tag === 'HasEntryFee'}
          />
          <span>Has Entry Fee</span>
        </div>
        <br />

        <button className='filter-btn' onClick={handleFilter}>
          Filter
        </button>
      </div>

      {/* display */}
      <div className='column right'>
        <div className='table th'>
          <span>Event Name</span>
          <span>Start Date</span>
          <span>End Date</span>
          <span>Event Region</span>
          <span>Event Type</span>
          <span>Event Tag</span>
        </div>
        <hr />
        <div>
          {data ? (
            data.map((item) => (
              <div key={item._id} className='table'>
                <div>{item.name}</div>
                <div>{item.startDate.split('T')[0]}</div>
                <div>{item.endDate.split('T')[0]}</div>
                <div>{item.region}</div>
                <div>{item.type}</div>
                <div className='tags'>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <span>No Record matches filters</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Filter
