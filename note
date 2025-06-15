import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
const RangeOne = () =>{

    const [value, setValue] = useState(false)

    return (
        <div>
        <ScrollTrigger onEnter={() => setValue(true)} onExit={()=> setValue(false)}>
        {value && <CountUp start={0} end={13} duration={2} delay={0} />}
        </ScrollTrigger>
        </div>
    )
}

export default RangeOne