/**
 * Created by limuzi on 2017/6/8.
 */

import React, { PropTypes } from 'react'

/* http://localhost:3000/query?test=hehehe */
export default function QueryExample (props) {
    const location = props.location
    return (
        <div>
            The query param test = {location.query.test}
        </div>
    )
}