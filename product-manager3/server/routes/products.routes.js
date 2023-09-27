const ProductController = require('../controllers/products.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/edit/:id', ProductController.updateExistingProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteAnExistingProduct);
}