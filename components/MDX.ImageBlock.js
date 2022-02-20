import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ImageBlock(props) {
  const { alt, src } = props
  const [imageURL] = useState(src)

  return (
    <Box>
      <img src={imageURL} alt={alt} className='max-h-[600px] mx-auto'></img>
      {alt && <span className='block mt-1 mb-4 text-sm text-center text-secondary'>{alt}</span>}
    </Box>
    // <span className='block mt-3'>
    // </span>
  )
}
