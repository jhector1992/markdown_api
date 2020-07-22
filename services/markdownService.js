const Markdown = require('../models/markdown');

module.exports = {
    get: function(id){

    },
    
    getList: async () => {
        console.log('getlist')
        let list = await Markdown.find({});
        console.log('return list');
        return list;
    },

    create: async function(markdown){
        await markdown.save();
    },

    delete: function(id){
        
    }
}
