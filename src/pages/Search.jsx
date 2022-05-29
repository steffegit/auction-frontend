import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams] = useSearchParams()

  return <div>{searchParams}</div>
}

export default Search
