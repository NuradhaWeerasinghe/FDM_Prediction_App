const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({

    id: { type: String, required: true },
    Marital_Status: { type: String, required: true },
    Income_C: { type: String, required: true },
    Total_child: { type: String, required: true },
    Recency_c: { type: String, required: true },
    AcceptedCmp3: { type: String, required: true },
    AcceptedCmp4: { type: String, required: true },
    AcceptedCmp5: { type: String, required: true },
    AcceptedCmp1: { type: String, required: true },
    AcceptedCmp2: { type: String, required: true },
    AgeGroup: { type: String, required: true },
    Education1: { type: String, required: true },
    Total_Spending_c: { type: String, required: true },
    Total_Purchases_c: { type: String, required: true },
    Clusters_1: { type: String, required: true },


})

module.exports = mongoose.model('Customers',customerSchema);






