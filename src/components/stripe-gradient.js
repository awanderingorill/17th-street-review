import React from "react"
import styled from "styled-components"
import { device } from "./device"

const StripeGradientWrapper = styled.canvas`
    height: 100vh;
    width: 100vh;
    --gradient-color-1: #ef008f; 
    --gradient-color-2: #6ec3f4; 
    --gradient-color-3: #7038ff;  
    --gradient-color-4: #ffba27;
`

const StripeGradient = props => (
  <StripeGradientWrapper/>
)

export default StripeGradient