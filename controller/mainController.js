const mainController = {
    index: (req,res) => {
        const meals = [
        {
            name: "Carpaccio fresco",
            description: "Entrada Carpaccio de salmón con cítricos",
            currency: "U$S",
            price: 65.50
        },
        {
            name: "Risotto de berenjena",
            description: "Risotto de berenjena y queso de cabra",
            currency: "U$S",
            price: 47.00
        },
        {
            name: "Mousse de arroz",
            description: "Mousse de arroz con leche y aroma de azahar",
            currency: "U$S",
            price: 27.50
        },
        {
            name: "Espárragos blancos",
            description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
            currency: "U$S",
            price: 37.50
        }


        ]
        res.render('index', {meals});
    },
    detalleMenu: (req,res) => {
        res.render('detalleMenu');
    }
}

module.exports = mainController;

