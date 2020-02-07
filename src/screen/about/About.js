import React, { Component } from 'react'
import ItemService from '../../services/item-service'

export default class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            postData: [],
            isLoading: true
        }
        
        this.itemService = new ItemService();
    }

    componentDidMount(){
        document.title = 'About page';
        this.itemDetail();
    }

    render() {
        const { postData, isLoading } = this.state;
        return (
            <div class="container">
                <h3 class="text-center">Today's main menu that can be served is</h3>
                {postData.map(
                    (c, index) => (
                        <div class="card" key={ index }>
                            <div class="card-body">
                                <h5 class="card-title">{c.title}</h5>
                                <p class="card-text">{c.ingredients}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    itemDetail() {
        this.itemService.getPostDetail()
            .then( items => {
                let data2 = items;
                this.setState({ postData: data2.data });
                console.log(data2);
            })
            .catch(console.log)
    };
}
