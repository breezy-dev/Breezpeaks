const mongoose = require("mongoose")

mongoose
    .connect(
        "mongodb+srv://"+ process.env.DB_USER_PWD +"@cluster0.0bojka6.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err))
