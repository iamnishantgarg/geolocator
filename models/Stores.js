const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema(
  {
    storeId: {
      type: String,
      required: [true, "plz add a store id"],
      unique: true,
      trim: true,
      maxlength: [10, "length must be less than 10 characters"]
    },
    address: { type: String, required: [true, "plz add a address"] },
    location: {
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      }
    },
    formattedAddress: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeSchema);
