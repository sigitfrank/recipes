import mongoose from 'mongoose'
const connectToDB = (env) => {
    mongoose.connect(env.MONGO_DB_HOST, {
        dbName: env.MONGO_DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log(`Connected to database`)
    }).catch(error => console.log(`Error ${error}`))
}

export default connectToDB