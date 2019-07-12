import React, {Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            inputValue:"",
            list:[]
        } // 叫做组件的状态，并且用来存值
    }
    render(){
        return (
            <Fragment>
                <div className="App">
                    {/*如果你在label这里直接写for react会默认为循环  */}
                    <label htmlFor="insertArea">输入内容</label>
                    <input className='input'
                           id="insertArea"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange.bind(this)
                            }
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {/*this.handleItemDelete.bind(this,index)指的是给每一个这样的函数
                     添加一个单击响应函数
                     */}
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div>
                                <TodoItem content={item}
                                          index={index}
                                          handleItemDelete={this.handleItemDelete.bind(this)}
                                />
                            {/*
                            handleItemDelete={this.handleItemDelete()}
                            是将这个方法传递给子组件
                            <li key={index}
                            onClick={this.handleItemDelete.bind(this,index)}
                            >{item}</li>*/}
                            {/*如果不转义添加一个这个 dangerouslySetInnerHTML={{__html:item}}*/}
                                </div>
                            );


                     })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        console.log(this);
        this.setState({
            inputValue:e.target.value
        });
        // 如果想要改变state的值则必须通过this.setState这个方法来实现，在每一个方法中都有
        //console.log(e.target)// 这里打印出来的target 就是获取的节点
    }
    handleButtonClick(e){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            // ... 扩展运算符的作用将以前的数组展开并生成一个新的数组,然后复制给list进行变化
            inputValue:''
        });
    }
    handleItemDelete(index){
    // 通过在bind(this,index)多写一个index来传入 经过测试this和index 无法一起传入
        // 有一种东西叫immutable
        // state 不允许我们做任何的改变
        console.log(index);
        const list=[...this.state.list]; // 这句话只是将list拷贝出来
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}
export default TodoList;
