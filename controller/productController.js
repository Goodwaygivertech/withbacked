const Product = require("../model/productSchema");
// console.log(Product);

//here i am creating the product and save into the database
exports.createProduct = async (req, res) => {
  try {
    let product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({ success: "ho gya success", savedProduct });
  } catch (error) {
    res.status(500).send("some internal error occured");
  }
};

// here getting all products from database.
exports.getAllProducts = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (error) {
     res.status(500).send("some internal error occured");

  }
};

//here getting the single product using id.
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.json(product);
  } catch (error) {
     res.status(500).send("some internal error occured");

  }
};

//here we are replacing the database product,by this all data of database will remove and req.body data will arive there.
exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const replacedProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json({ success: "ho gya", replacedProduct });
  } catch (error) {
     res.status(500).send("some internal error occured");

  }
};

//here we only updatting that thing witch is in req.body
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );

    res.status(201).json({ success: "ho gya", updatedProduct });
  } catch (error) {
     res.status(500).send("some internal error occured");

  }
};

// deleting the daa here using id
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(201).json({ delete: "productDeleted", product });
  } catch (error) {
     res.status(500).send("some internal error occured");

  }
};
