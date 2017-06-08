/**
 * Created by limuzi on 2017/6/8.
 */
import React, { PropTypes } from 'react'

export default function ParamsExample (props) {
    const params = props.params
    return (
        <div>
            The id is: {params.id}
        </div>
    )
}