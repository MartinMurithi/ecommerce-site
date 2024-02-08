const pool = require("../config/DB");
const queries = require("../queries/CartQueries");

const getProductsFromCart = (req, res)=>{
    pool.query(queries.getCartProductsQuery, (error, results)=>{
        if(error){console.log(error.message);
            return res.status(500).json({Error: error.message});
        }
        
        console.log(results.rows);
        return res.status(200).json({count : results.rows.length, products : results.rows});
    });
};

const addToCart = (req, res)=>{
    const { pid, qty } = req.body;
    console.log(pid, qty);
    pool.query(queries.addToCartQuery, [pid, qty], (error, results)=>{
        if(error){
            return res.status(500).json({Error: error.message});
        }

        return res.status(201).json({
            Message: "Product added to cart",
            Product: results.rows[0]
        });
    })
}

module.exports = { getProductsFromCart, addToCart };