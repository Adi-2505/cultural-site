const { Schema } = require("mongoose");

// Schema for Events
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Event name is required"],
        minLength: [3, "Event Name must be greater than 3"],
        maxLength: [100, "Event Name can't be longer than 100"]
      },
      date: {
        type: Date,
        required: [true, "Event date is required"],
        validate: {
          validator: function (value) {
            return value > Date.now();
          },
          message: "Please Choose correct Date",
        },
      },
      attendees: {
        type: Array,
        default: [],
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
