import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
<Section 
title="Model S"
description="Order Online for Touchless Delivery"
backgroundImg="model-s.jpg"
leftBtnText="custom order"
rightBtnText="Existing inventory"
/>
<Section 
title="Model X"
description="Order Online for Touchless Delivery"
backgroundImg="model-x.jpg"
leftBtnText="custom order"
rightBtnText="Existing inventory"
/>
<Section 
title="Model Y"
description="Order Online for Touchless Delivery"
backgroundImg="model-y.jpg"
leftBtnText="custom order"
rightBtnText="Existing inventory"
/>
<Section 
title="Model 3"
description="Order Online for Touchless Delivery"
backgroundImg="model-3.jpg"
leftBtnText="custom order"
rightBtnText="Existing inventory"
/>
<Section
title="Lowest Cost Solar Panels in India"
description="Money-back guarantee"
backgroundImg="solar-panel.jpg"
leftBtnText="order now"
rightBtnText="Learn More"
/>
<Section
title="Solar for new roofs"
description="Solar roof cost less than a New Roof Plus Solar Panels"
backgroundImg="solar-roof.jpg"
leftBtnText="order now"
rightBtnText="Learn More"
/>
<Section
title="Accessories"
description=""
backgroundImg="accessories.jpg"
leftBtnText="shop now"
/>
        </Container>
    )
}

export default Home
const Container=styled.div`
height: 100vh;
`