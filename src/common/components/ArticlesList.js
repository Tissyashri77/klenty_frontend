import { Box } from '@mui/system'
import React from 'react'
import ArticleCard from './ArticleCard'

function ArticlesList({articles}) {
  return (
    <Box sx={{display:"flex", flexDirection:{xs: "column", md:"row"}, flexWrap:"wrap", gap:3}}>
        {
            articles.map((article,index) => (
                <ArticleCard article={article} key={index}/>
            ))
        }
    </Box>
  )
}

export default ArticlesList