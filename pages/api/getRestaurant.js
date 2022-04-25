const { getRestaurant } = require('./mongodb.modules');
export default function handler(req, res) {
    getRestaurant((restaurant)=>{
        let result = restaurant.map((item)=> ({"id":item._id.toString() ,"name":item.restaurant}))
        res.status(200).json(result)
    })
}
