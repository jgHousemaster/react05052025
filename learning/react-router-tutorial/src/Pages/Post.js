import React from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function Post() {
    const {id} = useParams()
    const query = new URLSearchParams(useLocation().search)
  return (
    <>
    <h2>ID is {id}</h2>
    <h2>{query.get("first")}</h2>
    <h2>{query.get("last")}</h2>
    </>
  )
}

export default Post