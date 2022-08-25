const mongoose = require("mongoose")

mongoose
    .connect(
        "mongodb+srv://breezydev:<password>@cluster0.0bojka6.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err))
