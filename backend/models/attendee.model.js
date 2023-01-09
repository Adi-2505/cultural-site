// Schema of the Attendee
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type:String,
        trim:true,
        required:[true,'Name is Required'],
        maxLength:[30,"Max length allowed is 30"]
      },
      gender: {
        type:String,
        trim:true,
        required:[true,'Gender is Required'],
        maxLength:[10,"Max Length allowed is 10"],
      },
      college:{
        type:String,
        trim:true,
        required:[true,'college Name is Required'],
        maxLength:[30,"Max length allowed is 30"],
      },
      email: {
        type:String,
        trim:true,
        lowercase:true,
        required:[true,'Email is Required'],
        unique:[true],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      contact: {
        type:String,
        trim:true,
        required:[true,'Contact Number is Required'],
        unique:[true],
        match:[/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,'Please enter correct Contact Number']
      },
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
