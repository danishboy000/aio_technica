import React from 'react'
import Slider from './Slider'
import Services from './Services'
import ExcessUsage from './ExcessUsage'
import Solutions from './Solutions'
import Counter from './Counter'
import Partners from './Partner'
import Work from './Work'
import Like from './Like'

export default function Home() {
    return (
        <div>
            <Slider />
            <Services />
            <ExcessUsage />
            <Solutions />
            <Counter />
            <Work />
            <Partners />
            <Like />
        </div>
    )
}
