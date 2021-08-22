import React from 'react'
import OutputItem from './OutputItem'

export default function OutputList (props) {
    console.log("OutputList"+props);
    return (
        <div className="bg-grey pl-3 pr-3 pb-10">
            <OutputItem />
        </div>
    )
}
