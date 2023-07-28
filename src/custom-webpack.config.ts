import {EnvironmentPlugin} from 'webpack'
const Dotenv = require('dotenv-webpack')
// const dotenv = require('dotenv').config();
// const webpack = require('webpack');



module.exports = {
    // plugins: [
    //     new Dotenv(),
    // ],
    plugins: [
        new EnvironmentPlugin(['HAMADA_BEL_ZANGBEL', 'PRODUCT_PORT', 'ORDER_PORT'])
      ],
    
}

// new EnvironmentPlugin(['HAMADA_BEL_ZANGBEL', 'PRODUCT_PORT', 'ORDER_PORT'])


// new webpack.DefinePlugin({
// 'process.env': {
//   HAMADA_BEL_ZANGBEL: JSON.stringify(process.env['HAMADA_BEL_ZANGBEL']),
//   ORDER_PORT: JSON.stringify(process.env['ORDER_PORT']),
//   PRODUCT_PORT: JSON.stringify(process.env['PRODUCT_PORT']),

//   // Add more environment variables as needed
// },
// }),
// // Other plugins and configurations as needed