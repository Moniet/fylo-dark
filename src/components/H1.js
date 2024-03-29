import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../utils/responsive'

const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.5em;
    color: white;
    @media (max-width: 800px) {
        font-size: 2em;
    }
    @media (max-width: 640px) {
        font-size: 1.5em;
    }
    ${mq[0]} {
        font-size: 1.25em;
    }
`

export default ({ children }) =>  
    <H1> 
        { children }
    </H1>
