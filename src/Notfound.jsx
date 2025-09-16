import React from 'react'

function Notfound() {
  return (
    <>
    <h1 className='text-center'>404-notfound</h1>
    <p className='text-center'>This page is not found</p>
    <div className="d-flex justify-content-center align-items-center vh-100">
    <img src="public/notfound.webp" height={500} width={800} />
    </div>
    </>
  )
}

export default Notfound