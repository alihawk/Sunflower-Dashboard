import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./map'), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

export default Map