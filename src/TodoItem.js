import React, {Fragment} from 'react';
import './style.css'

class TodoItem extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // 也可以直接在onClick事件中去写.bind(this) 为了节约性能
        // 一开始就会执行这个函数
    }
    render() {
        return (
            <Fragment>
                <div onClick={this.handleClick}>
                    {this.props.content}
                </div>
            </Fragment>
        )
    }
    handleClick(){
        this.props.handleItemDelete(this.props.index)
        // 如果仅仅这么去写会出现错误，这里的this是指向子组件的this如果我们要调用父组件的方法
        // 则this指向也应该指向父组件
    }
}

export default TodoItem;
