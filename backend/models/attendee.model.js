// Schema of the Attendee
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, 'Name is Required'],
        minLength: [2, "Name should be at least 2 characters long"],
        maxLength: [30, "Name should not exceed 30 characters"],
        validate: {
          validator: function(v) {
            return /^[a-zA-Z]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name!`
        }
      },
      gender: {
        type: String,
        trim: true,
        required: [true, 'Gender is Required'],
        maxLength: [10, "Max Length allowed is 10"],
        enum:["Male","Female","Other"]
      },
      college: {
        type: String,
        trim: true,
        required: [true, 'College Name is Required'],
        minLength: [2, "College Name should be at least 2 characters long"],
        maxLength: [30, "College Name should not exceed 30 characters"],
        validate: {
          validator: function(v) {
            return /^[a-zA-Z]+$/.test(v);
          },
          message: props => `${props.value} is not a valid college name!`
        }
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email is Required'],
        unique: [true],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      contact: {
        type: String,
        trim: true,
        required: [true, 'Contact Number is Required'],
        unique: [true],
        match:[/^\d{10}$/,"Please enter a valid contact number (10 digits only)"]
      },
      password:{
        type: String,
        required: [true, "Password is required"],
        // TODO: Validation of password
        trim:true,
        minLength:[8,"Length should 8 Characters"],
        maxLength: [8, "Password Length should not exceed 8 characters"],
        // Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
        validate: {
          validator: function (value) {
            return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
          },
          message: "Password must contain minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
        }
      },
      verified: Boolean
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
