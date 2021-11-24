import faker from 'faker';

class BookController {

    static index = async (req, res) => {
        for (let index = 0; index < 10; index++) 
          console.log(faker.name.findName());
        res.json({ success: true, message: "you've hit book api" });
    }

    static create = async (req, res) => {
        res.json({ success: true, message: "creating books" });
    }
}


export default BookController;