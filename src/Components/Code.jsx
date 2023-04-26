import React, { useContext } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DataContext } from '../Context/DataProvide'
const Container = styled(Box)({
  display:'flex',
  backgroundColor:'#060606',
  height:'50vh',
  gap:'0.1rem'

})

const Code = () => {
  const {html, setHtml, css, setCss, javascript, setJavascript} = useContext(DataContext)

  return (
    <Container className='container'>
        <Editor heading = 'HTML' icon='/' color='#FF3C41' value={html} onChange= {setHtml} name='html' />
        <Editor heading = 'CSS' icon = '*' color = '#0EBEFF' value={css} onChange= {setCss} name='css'/>
        <Editor heading = 'JS' icon = '()' color = '#FCD000' value={javascript} onChange= {setJavascript} name='javascript' />
    </Container>
  )
}

export default Code