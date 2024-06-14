const router = require("express").Router()

const Booking = require("../models/Booking")

/* CREATE BOOKING */
router.post("/create", async (req, res) => {
  try {
    const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body
    const existingBooking = await Booking.findOne({
      listingId,
      $or: [
        {
          startDate: { $lt: endDate, $gt: startDate },
        },
        {
          endDate: { $gt: startDate, $lt: endDate },
        },
      ],
    })

    if (existingBooking) {
      return res.status(400).json({ message: "Listing is already booked in the given date range." })
    }

    const newBooking = new Booking({ customerId, hostId, listingId, startDate, endDate, totalPrice })
    await newBooking.save()
    console.log(newBooking)
    res.status(200).json(newBooking)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Fail to create a new Booking!", error: err.message })
  }
})

module.exports = router