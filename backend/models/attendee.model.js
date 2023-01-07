// Schema of the Attendee
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      gender: String,
      college: String,
      email: String,
      contact: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // exporting attendee schema model into the collection named attendee
  const Attendee = mongoose.model("attendee", schema);
  return Attendee;
};
