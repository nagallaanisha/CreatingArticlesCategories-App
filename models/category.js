var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name:{
        type: String,
        index: true,
        required: true
    },
    description:{
        type: String
    }

});

// get all Categories
var Category = module.exports = mongoose.model('Category',categorySchema);

module.exports.getCategories =function(callback){
    Category.find(callback);
}

// Get Category by Id
module.exports.getCategoryById = function(id,callback){
    Category.findById(id,callback);
}


// Create Category
module.exports.createCategory= function(newCategory,callback){
    newCategory.save(callback);
}
