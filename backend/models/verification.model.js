// Schema of the Attendee for verification
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      id: String,
      uniqueString: String,
      createdAt: Date,
      expiresAt: Date
    },

    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // exporting attendee schema model into the collection named attendee
  const Verification = mongoose.model("verification", schema);
  return Verification;
};