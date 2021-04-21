const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://new_user:Digesh@90@crud.j55nd.mongodb.net/react_crud?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
