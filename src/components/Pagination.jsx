import { Box, Button } from '@chakra-ui/react'
import React from 'react'

function Pagination({page,totalPage,changePage}) {

    const handelNext=()=>{
        changePage(page+1);
      }
    
      const handelPrev=()=>{
        changePage(page-1);
      }

  return (
    <div>
        <button onClick={handelPrev} disabled={page===1}>prv</button>
        <span>{page}/{totalPage}</span>
        <button onClick={handelNext} disabled={page===totalPage}>next</button>
    </div>
  )
}

export default Pagination
