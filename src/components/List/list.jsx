import React from 'react'
import {Link} from 'react-router-dom'

import './list.css'

export default class List extends React.Component {
    state = {
        list1: '我的创作',
        list2: '我的收藏',
        list3: '我的关注',
        list4: '已购内容',
        list5: '我的live',
        list6: '我的书架',
        list7: '我的值乎',
        list8: '我的余额',
        list9: '我的礼券'
    }

    render() {
        return (
            <div>
                <div className="top">
                    <div className="list">
                        {/*<Link to="/mall/type/123">*/}
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/chuang.png"></img>
                        <span>{this.state.list1}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                        {/*</Link>*/}
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/shoucang.png"></img>
                        <span>{this.state.list2}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/guanzhu.png"></img>
                        <span>{this.state.list3}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                </div>
                <div className="top">
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/yigoumai.png"></img>
                        <span>{this.state.list4}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/live.png"></img>
                        <span>{this.state.list5}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/shujia.png"></img>
                        <span>{this.state.list6}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/zhi.png"></img>
                        <span>{this.state.list7}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/yue.png"></img>
                        <span>{this.state.list8}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                    <div className="list">
                        <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/liquan.png"></img>
                        <span>{this.state.list9}</span>
                        <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </div>
                </div>
            </div>
        )

    }
}