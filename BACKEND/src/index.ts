import express from 'express';
import user from './controller/user.controller';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors"
import auth from './controller/auth.controller';
import 'dotenv/config'
import product from './controller/product.controller';
import category from './controller/category.controller';
import subCategory from './controller/subcategory.controller';

export const app = express();
app.use(cors("*"))
app.use(bodyParser.json())
const port = 5000;


app.use("/api/v1/auth", auth)
app.use("/api/v1/user", user)
app.use("/api/v1/product", product)
app.use("/api/v1/category", category)
app.use("/api/v1/subCategory", subCategory)



app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect("mongodb://127.0.0.1:27017/ijse-ecommerce").then(() => {
  console.log("database connect success")
  startServer();
}).catch((err) => {
  console.log("can not connect database");
  console.log(err);
});


function startServer() {
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}
