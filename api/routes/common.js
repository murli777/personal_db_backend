const express = require("express");
const router = express.Router();
const {fetchData, createRecord} = require("../model/mongoDB")

router.get("/", async (req, res, next) => {
    try {
        const data = await fetchData();

        const result = {
          count: data.length,
          tickets: data.map((record) => {
            return {
              id: record._id,
              ticketNumber: record.ticket_number,
              title: record.title,
              priority: record.priority,
              referenceData: {
                type: "GET",
                referenceURL: `localhost:5000/api/personal_database/${record._id}`
              }
            }
          })
        }

        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: error
        })
      }
})

router.post("/", async (req, res, next) => {
    const document = req.body.data;

    try {
        const result = await createRecord(document);
        console.log(result);
        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({
          message: error,
          errorCode: "500"
        })
      }
})



module.exports = router;