import React from 'react'
import './member.css'


import Header from '../../components/header/header'
import List from '../../components/List/list'
export default class Member extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <List/>
            </div>
        )
    }
}
