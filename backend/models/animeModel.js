import mongoose from "mongoose"; //import mongoose to use function 


const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: 25,
  },

  synopsis: {
    type: String,
    required: true,
    unique: true,
  },

  kind: {
    type: Array,
    required: true,
    unique: true,
  },

  episodes: {
    type: Number,
    required: true,
    unique: true,
  },
  
  image: {
    type: String,
    required: true,
    unique: true,
  },
  

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});



export default mongoose.model("Anime", AnimeSchema);
