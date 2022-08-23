import { products } from "./src/constants/data.js";
import Product from "./src/models/product.schema.js";
const DefaultData = async () => {
    try {
        // await Product.deleteMany({})
        await Product.insertMany(products)
        console.log("added data")
    }
    catch (err) {
        console.log(err)
    }
}

export default DefaultData