import { connect } from 'mongoose';

const connection = async () => {

    try {
        await connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME,
        });
        console.log("mongodb connectin is establieshed");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connection;