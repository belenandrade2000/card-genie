const { Schema, model } = require('mongoose');


const creditCardsSchema = new Schema({
  ccName: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  ccType: {
    type: String,
    required: true,
    trim: true,
  },
  ccBenefits: {
    type: String,
    required: true,
    trim: true,
  },
  ccAnnualFee: {
    type: String,
    required: true,
    trim: true,
  },
  ccImage: {
    type: String,
    trim: true,
  },
  ccLink: {
    type: String,
    trim: true,
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
  }]
});

const CreditCard = model('CreditCard', creditCardsSchema);

module.exports = CreditCard;