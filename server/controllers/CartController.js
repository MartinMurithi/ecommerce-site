const pool = require("../config/DB");
const queries = require("../queries/CartQueries");

const getProductsFromCart = (req, res)=>{
    pool.query(queries.getCartProducts, (error, results)=>{
        if(error){console.log(error.message);
            return res.status(500).json({Error: error.message});
        }
        
        console.log(results.rows);
        return res.status(200).json(results.rows);
    });
};

module.exports = { getProductsFromCart }