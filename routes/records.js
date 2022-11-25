const {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/records");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let records = await getRecords();
  res.send(records);
});

router.post("/newRecord", async (req, res) => {
  let { date, designation, qty, amount, payment, client } = req.body;
  let createdRec = await createRecord(
    date,
    designation,
    qty,
    amount,
    payment,
    client
  );

  res.send(createdRec);
});

router.put("/updateRecord/:id", async (req, res) => {
  let { date, designation, qty, amount, payment, client } = req.body;
  let { id } = req.params;
  let updatedRec = await updateRecord(
    id,
    date,
    designation,
    qty,
    amount,
    payment,
    client
  );

  res.send(updatedRec);
});


router.delete("/deleteRecord/:id", async (req, res) => {
    
    let { id } = req.params;
    let updatedRec = await deleteRecord(
      id
    );
  
    res.send(updatedRec);
  });
module.exports = router;
