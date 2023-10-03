import OrderModel from '../models/OrderModel.js';

// GET - REVIEW OF CRUD

export const getAllOrders = async (_req, res) => {
    try{
        const orders = await OrderModel.findAll()
        res.json(orders);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
}

//POST - CREATE OF CRUD

export const createOrder = async (req, res) => {
    try{
        await OrderModel.create(req.body)
        res.status(200).json({message: "This order has been submitted successfully!"})
    }catch (error){
        res.status(500).json({message: "Order could not be submitted, please be sure to complete all fields."})
    }
}


//PUT - UPDATE OF CRUD

export const updateOrder = async (req, res) => {
    try {
        const order = await OrderModel.findByPk(req.params.id);
        if (!order) {
            return res.status(500).json({ message: 'Order not found' });
        }
        await OrderModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The order has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//DELETE - DELETE OF CRUD

export const deleteOrder = async (req, res) => {
    try {
        const order = await OrderModel.findByPk(req.params.id);
        if (!order) {
            return res.status(500).json({ message: 'Order not found' });
        }
        await OrderModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'This order has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};