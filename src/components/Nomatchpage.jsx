import React, { useEffect } from 'react'

function Nomatchpage() {
  useEffect(() => {
    document.title='404'
  },[])

  return (
    <h1 className="text-danger">Page not found</h1>
  )
}

export default Nomatchpage
