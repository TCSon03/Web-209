//khởi tạo server
const express = require("express"); //require module express
const mongoose = require("mongoose");
const cors = require("cors");

const ProductController = require("./controllers/ProductController");
const AuthController = require("./controllers/AuthControllor");
//từ express 4.16, ko cần require body-parser
// var bodyParser = require('body-parser'); //require body-parser
var multer = require("multer"); //multer để upload file ảnh
var fs = require("fs"); //để xóa file ảnh
const app = new express();
const port = 3000; //khai báo cổng sẽ chạy server
app.use(cors());

//khai báo sử dụng ejs
app.set("view engine", "ejs");
app.set("views", "./views");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //từ express 4.16 trở đi
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); //khai báo đường dẫn thư mục lưu trữ file ảnh
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); //lưu tên file kèm theo thời điểm upload
  },
});
const upload = multer({ storage: storage });
mongoose
  .connect("mongodb://localhost:27017/wd18411")
  .then((result) => {
    //router website
    app.get("/home", ProductController.getListClient);
    app.get("/productDetail/:id", ProductController.getProductDetail);

    //router admin website
    app.get("/admin", ProductController.getList);
    app.get("/create", ProductController.create);
    app.get("/edit/:id", ProductController.getDetail);
    app.post("/save", ProductController.save);
    app.post("/update/:id", ProductController.update);
    app.get("/delete/:id", ProductController.delete);

    // router register login
    app.get("/register", AuthController.getRegister);
    app.get("/login", AuthController.getLogin);

    //router API dang ki dang nhap
    app.post("/register", AuthController.register);
    app.post("/login", AuthController.login);

    //router api
    app.get("/products", ProductController.apiGetList);
    app.get("/products/:id", ProductController.apiGetDetail);
    app.delete("/products/:id", ProductController.apiDelete);
    app.post("/products", ProductController.apiSave);
    app.put(
      "/products/:id",
      upload.single("image"),
      ProductController.apiUpdate
    );

    app.listen(port, () => {
      console.log(`running in port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
