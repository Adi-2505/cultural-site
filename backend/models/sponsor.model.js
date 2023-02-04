// Schema for Sponsor
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, "Name is Required"],
        maxLength: [30, "Max length allowed is 30"],
        minLength: [2, "Length should be greater than 2"],
        validate: {
          validator: function(v) {
            return /^[a-zA-Z]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name!`
        }
      },
      organizationName: {
        type: String,
        trim: true,
        required: [true, "Please Enter Organisation Name"],
        unique: true,
        maxLength: [30, "Max Length allowed is 30"],
        validate: {
          validator: function(v) {
            return /^[a-zA-Z]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name!`
        }
      },
      interest: {
        type: Array,
        required: [true, "Please Enter Intrest"],
      },
      website: {
        type: String,
        trim: true,
        match: [
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
          "Please Enter Correct URL",
        ],
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Email is Required"],
        unique: [true],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],
      },
      contact: {
        type: String,
        trim: true,
        required: [true, "Contact Number is Required"],
        unique: [true],
        match: [
          /^[0-9]+$/,
          "Please enter correct Contact Number",
        ],
      },
    },

    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Sponsor = new mongoose.model("sponsor", schema);
  return Sponsor;
};
