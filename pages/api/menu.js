const { getMenu } = require('./mongodb.modules');
export default function handler(req, res) {
    const {restaurant} = req.params;
    getMenu(restaurant,(menu)=>{
        let menus = menu.menus.map((item)=>(
            {"name":item.name,"price":item.price}
        ));
        res.status(200).json(menus)
    })
}
