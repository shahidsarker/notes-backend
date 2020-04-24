require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to MongoDB"))
  .catch((err) => console.log("error connecting to MongoDB", err.message));

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);