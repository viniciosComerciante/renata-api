import * as mongoose from 'mongoose';

class Database{
    private DB_URL = `mongodb+srv://vinicios:04051998Vini@renata.bgyek.mongodb.net/?retryWrites=true&w=majority`;

    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default Database;