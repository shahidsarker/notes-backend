const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const noteSchema = new mongoose.Schema({
  content: { type: String, minlength: 5, required: true },
  date: { type: Date },
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

noteSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
