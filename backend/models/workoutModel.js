const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    reps: {
      type: Number,
      required: [true, "Reps is required"],
    },
    load: {
      type: Number,
      required: [true, "Load is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
