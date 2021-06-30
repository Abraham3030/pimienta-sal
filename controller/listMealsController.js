const meals = [
    {
        id: 1,
        name: "Carpaccio fresco",
        description: "Entrada Carpaccio de salmón con cítricos",
        currency: "U$S",
        price: 65.50,
        img: '/images/Carpaccio-de-salmon.jpg'
    },
    {
        id: 2,
        name: "Risotto de berenjena",
        description: "Risotto de berenjena y queso de cabra",
        currency: "U$S",
        price: 47.00,
        img: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id: 3,
        name: "Mousse de arroz",
        description: "Mousse de arroz con leche y aroma de azahar",
        currency: "U$S",
        price: 27.50,
        img: '/images/Mousse-de-arroz-con-leche.jpg'
    },
    {
        id: 4,
        name: "Espárragos blancos",
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        currency: "U$S",
        price: 37.50,
        img: '/images/esparragos.png'
    },
    {
        id: 5,
        name: "Enchiladas",
        description: "",
        currency: "U$S",
        price: 15.00,
        img: '/images/Enchiladas-mexicanas.jpg'
    }
]

const listMealsController = {
    index: (req,res) => {
        res.render('index',);
    },
    detalleMenu: (req,res) => {
        const mealId = parseInt(req.params.id);
        //if(isNaN(mealId)) throw Error('Product Not Found');
        const meal = meals.find(meal => meal.id === mealId);
        res.render('detalleMenu', {meal});
    },
    menu: (req,res) => {
        res.render('menu', {meals});
    },
    about: (req,res) => {
        res.render('about');
    }

}

module.exports = listMealsController;



