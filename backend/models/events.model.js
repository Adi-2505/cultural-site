const { Schema } = require("mongoose");

// Schema for Events
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      date: {
        type: Date,
      },
      attendees: {
        type: Array,
      },
    },

    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Events = new mongoose.model("events", schema);
  return Events;
};
