const recordsDataObj = require("../models/records");

async function getRecords() {
  try {
    let records = await recordsDataObj.model.find();

    return records;
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
}

async function createRecord(date, designation, qty, amount, payment, client) {
  try {
    let newRec = new recordsDataObj.model({
      date,
      designation,
      qty,
      amount,
      payment,
      client,
    });

    let savedRec = await newRec.save();
    return savedRec;
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
}

async function updateRecord(
  _id,
  date,
  designation,
  qty,
  amount,
  payment,
  client
) {
  try {
    let updatedRec = await recordsDataObj.model.findByIdAndUpdate(_id, {
      date,
      designation,
      qty,
      amount,
      payment,
      client,
    });

    return updatedRec
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
}

async function deleteRecord(
    _id
  ) {
    try {
      let deletedRecord = await recordsDataObj.model.deleteOne({_id: _id})

      return deletedRecord
    } catch (err) {
      return {
        error: true,
        message: err,
      };
    }
  }

module.exports = {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord
};
