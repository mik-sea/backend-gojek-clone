const express = require('express');
const app = express();

// set database
const { insertAkun, getAkun, getRestaurant, getMenu } = require('./module/mongodb.modules');

app.use(express.json());
const PORT = process.env.PORT || 3000;

let akun = [{"username":"admin","password":"admin"}];

app.get('/', (req, res) => {
    res.send({"status": "OK"});
})
app.post('/register', (req, res) => {
    insertAkun(req.body.username, req.body.password);
    res.send("akun berhasil ditambahkan");
})
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    getAkun(username, password,(user)=>{
        // user = user.username
        // password = user.password
        if(user) {
            res.send({"status": "berhasil","username":user.username});
        } else {
            res.send({"status": "gagal"});
        }
    });
    // const user = akun.find(item => (item.username == username && item.password == password));
    // if (user) {
    //     res.send({"username":username});
    // } else {
    //     res.send("login gagal");
    // }
})

app.get('/menu/:restaurant', (req, res) => {
    const {restaurant} = req.params;
    getMenu(restaurant,(menu)=>{
        let menus = menu.menus.map((item)=>(
            {"name":item.name,"price":item.price}
        ));
        res.send(menus)
    })
})
app.get('/restaurant', async(req, res) => {
    getRestaurant((restaurant)=>{
        let result = restaurant.map((item)=> ({"id":item._id.toString() ,"name":item.restaurant}))
        res.send(result)
    })
})
// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
    // Starting the Server at the port 3000
})