import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../common/components/SideBar'

function Category() {
  const params = useParams()
  return (
    <Box>
        <SideBar>
            {params.category}
        </SideBar>
    </Box>
  )
}

export default Category