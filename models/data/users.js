import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users = [
{firstName: "sancocho",
lastName:"garcia",
email:"soyungato@notengoemail.com",
password: "12345",
photo: "https://i0.wp.com/mascooriente.co/wp-content/uploads/2021/08/ruzo-azul.jpeg?fit=520%2C355&ssl=1",
country:"colombia"}
]

User.insertMany(users)