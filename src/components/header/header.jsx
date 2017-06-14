import React from 'react'
import {Link,router} from 'react-router-dom'
import './header.css'
export default class Header extends React.Component {
    onChanges(){
        this.router.history.push('/MemberDetail');
    }
    render() {
        return (
            <div className='homePage'>
                {/*<Link to="/MemberDetail"> </Link>*/}
                <div  className='avatar'><img src='http://om10u3y7b.bkt.clouddn.com/WechatIMG830.jpeg'></img></div>
                <div className='name'>
                    <div className="memberName" onClick={this.onChanges}>李木子React</div>
                    <div className="memberDesc">主页或编辑界面</div>
                </div>

            </div>
        )
    }
}
