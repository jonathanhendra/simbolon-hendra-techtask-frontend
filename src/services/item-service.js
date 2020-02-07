const axios = require('axios');

class ItemService {

    data = 'https://a61d556b-57ca-423f-8706-2e8dec75d714.mock.pstmn.io/'
    
    async getPostList() {
        return await axios.get(this.data + 'ingredients');
    }

    async getPostDetail(){
        let data=['Ham','Bread'];
        let reqjson=JSON.stringify(data);
        let post_data={json_data:reqjson}
        axios.post('/url',post_data)
        return await axios.get(this.data + 'recipes?', post_data);
    }
}

export default ItemService;
