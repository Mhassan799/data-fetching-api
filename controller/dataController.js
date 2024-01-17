const axios = require('axios');
const dataModel = require('../model/dataModel')




async function fetchData(postID) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postID}`)
    console.log(response.data)
    
    const {userId,id,title} = response.data;
    const newData = await new dataModel({ userId, id, title }).save()

    fetchData(postID + 1)
}


const fetchPostData =async ()=>{
   
        try {            
            const lastData = await dataModel.findOne().sort({id: -1})
            
            if (lastData == null) {
                fetchData(1)
                
            } else {
                fetchData(lastData.id + 1)
                
            }
            
            
        } catch(error) {
        console.log(`Error in fetching ${postId}:`, error.message);  
        }
}

module.exports = fetchPostData;