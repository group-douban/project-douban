const path = require('path')
module.exports = {
    chainWebpack:config =>{
        const alias = config.resolve.alias
        alias.set('components',path.resolve(__dirname,'./src/components'))
        .set('pages',path.resolve(__dirname,'./src/pages'))
        .set('assets',path.resolve(__dirname,'./src/assets'))
        .set('views',path.resolve(__dirname,'./src/views'))
        .set('untils',path.resolve(__dirname,'./src/untils'))
        .set('public',path.resolve(__dirname,'./public'))
    },
    
    devServer:{
        proxy:{
          '/ajax':{
            target:'https://search.damai.cn',
            changeOrigin:true,
            pathRewrite:{
                '^/ajax':''
            }
          },
          '/api':{
            target:'https://detail.damai.cn',
            changeOrigin:true,
            secure: false, 
            pathRewrite:{
                '^/api':''
            }
          }
        }
      
         
        
    
    }
    
  
  




}