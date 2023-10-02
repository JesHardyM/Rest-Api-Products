import ProductModel from '../models/ProductModel.js';

// GET - REVIEW OF CRUD

export const getAllProducts = async (_req, res) => {
    try{
        const products = await ProductModel.findAll()
        res.json(products);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
}

//POST - CREATE OF CRUD

export const createProduct = async (req, res) => {
    try{
        await ProductModel.create(req.body)
        res.status(200).json({message: "This product has been added successfully!"})
    }catch (error){
        res.status(500).json({message: "Product could not be added, please be sure to complete all fields."})
    }
}


//PUT - UPDATE OF CRUD

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByPk(req.params.id);
        if (!product) {
            return res.status(500).json({ message: 'Product not found' });
        }
        await ProductModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The product has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//DELETE - DELETE OF CRUD

export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByPk(req.params.id);
        if (!product) {
            return res.status(500).json({ message: 'Product not found' });
        }
        await ProductModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The product has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};