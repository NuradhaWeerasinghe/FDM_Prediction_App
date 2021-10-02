const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({

    id: { type: String, required: true },
    Marital_Status: { type: String, required: true },
    Income: { type: String, required: true },
    Kidhome: { type: String, required: true },
    Teenhome: { type: String, required: true },
    Recency: { type: String, required: true },
    MntWines: { type: String, required: true },
    MntFruits: { type: String, required: true },
    MntMeatProducts: { type: String, required: true },
    MntFishProducts: { type: String, required: true },
    MntSweetProducts: { type: String, required: true },
    MntGoldProds: { type: String, required: true },
    NumDealsPurchases: { type: String, required: true },
    NumCatalogPurchases: { type: String, required: true },
    NumStorePurchases: { type: String, required: true },
    NumWebVisitsMonth: { type: String, required: true },
    AcceptedCmp3: { type: String, required: true },
    AcceptedCmp4: { type: String, required: true },
    AcceptedCmp5: { type: String, required: true },
    AcceptedCmp1: { type: String, required: true },
    AcceptedCmp2: { type: String, required: true },
    Age: { type: String, required: true },
    Education1: { type: String, required: true },

})

module.exports = mongoose.model('Customers',customerSchema);






