import { useState, FunctionComponent, ChangeEvent, FormEvent } from 'react';
import Axios from 'axios';

const ListingForm: FunctionComponent = () => {
  const [formData, setFormData] = useState(
    {
      company: '',
      title: '',
      url: '',
      notes: ''
    }
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    Axios
      .post('http://localhost:5000/api/listings/', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formItem">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="formItem">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="formItem">
        <label htmlFor="url">Url</label>
        <input
          id="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>

      <div className="formItem">
        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ListingForm;