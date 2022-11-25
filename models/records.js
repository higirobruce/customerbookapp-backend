const mongoose = require("mongoose");
const RecordSchema = mongoose.Schema({
  date: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  payment: {
    type: Number,
    default: 0,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  createdOn: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now(),
  },
});

module.exports = {
  model: mongoose.model("activities", RecordSchema),
  schema: RecordSchema,
};
