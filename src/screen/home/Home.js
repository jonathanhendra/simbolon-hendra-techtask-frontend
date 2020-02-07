import React, { Component } from 'react'
import ItemService from '../../services/item-service';
import { Checkbox } from "antd";
import "antd/dist/antd.css";

export default class Home extends Component {

    // eslint-disable-next-line
    
    constructor(props){
        super(props);
        this.state = {
            postData: [],
            isLoading: true
        }
        
        this.itemService = new ItemService();
    }

    componentDidUpdate() {
        console.log(this.state.postData.length);
        console.log(this.state.postData.filter(item => item.checked))
        // if (this.state.postData.length >= 2) {
        //     this.props.history.push('about');
        // }
        // this.setState({ checked: alert('qoq') });
    }

    onToggle(index, e){
        let newPostData = this.state.postData.slice();
        newPostData[index].checked = !newPostData[index].checked
        this.setState({
            postData: newPostData
        })
        if(this.state.postData.filter(item => item.checked).length === 2){
            this.props.history.push('about');
        }
    }

    componentDidMount(){
        document.title = 'home page';
        this.listItems();
        // this.itemDetail();
    }

    render() {
        const { postData, isLoading } = this.state;
        return (
            <div class="container">
                <h3 class="text-center">Select the ingredients you want to serve in the menu</h3>
                {this.state.postData.map(
                    (item, index) => (
                        <div class="form-check form-check-inline" key={index}>
                            <input type="checkbox"
                                   id={item.title}
                                   name="checking"
                                   value={index}
                                   onChange={this.onToggle.bind(this, index)}
                                   />
                                   <label for={item.title}>{item.title}</label>
                        </div>
                        
                        // <Checkbox.Group key={ index }>
                        //     <Checkbox
                        //         id={item.title}
                        //         name={item.title}
                        //         value={ index }
                        //         >
                        //         {item.title} { this.state.postData.filter(item => item.checked)}
                        //     </Checkbox>
                        // </Checkbox.Group>
                    ))
                }
            </div>
        )
    }

    listItems() {
        this.itemService.getPostList()
            .then( items => {
                let data = items;
                this.setState({ postData: data.data });
                console.log(data);
            })
            .catch(console.log)
    };
}
