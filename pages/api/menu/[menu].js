const { getMenu, getRestaurant } = require('../mongodb.modules');
export default function handler(req, res) {
    const { menu } = req.query;
    getMenu(menu,(menuss)=>{
        let menus = menuss.menus.map((item)=>(
            {"name":item.name,"price":item.price}
        ));
        res.status(200).json(menus)
    })
}
