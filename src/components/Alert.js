import React from 'react'

export default function Alert(props) {
  return (

    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.msg}</strong>
    </div>

  )
}