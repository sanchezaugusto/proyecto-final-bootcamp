import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
<<<<<<< Updated upstream
  subCategories: [
=======
  subCategories:[
>>>>>>> Stashed changes
    {
      type: Schema.Types.ObjectId, // referencia a SubCategory q esta abajo
      ref: "SubCategory",
    },
  ],
});


const Category = model("Category", CategorySchema);

export default Category;