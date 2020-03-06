import React from 'react'

export default function Form(props) {
  console.log(props)
  return (
    <div>
      <form onSubmit={(e) => props.submit(e)} className="right_form">
        <input type="text" name="title" onChange={(e) => props.handleChange(e)} placeholder="Enter Product Name" />
        <input type="text" name="text" onChange={(e) => props.handleChange(e)} placeholder="Enter Description" />
        <input type="text" name="image" onChange={(e) => props.handleChange(e)} placeholder="Image URL" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
