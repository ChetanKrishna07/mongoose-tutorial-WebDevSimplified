const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect(
    "mongodb+srv://Chetan:Shcsl1702@cluster0.ny6jf.mongodb.net/testdb?retryWrites=true&w=majority",
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to server");
        }
    }
)

const createUser = async () => {
    // const user = new User({
    //     name: 'Chetan',
    //     age: 20,
    //     hobbies: ["Codding", "Painting", "Watching Movies"],
    //     address: {
    //         street: "Main St",
    //         citiy: "Hyderabad"
    //     }
    // })
    // await user.save()

    try {
        const user1 = await User.create({
            name: 'Chetan',
            age: 20,
            email: "Chetanpalicherla@gmail.com",
            hobbies: ["Codding", "Painting", "Watching Movies"],
            address: {
                street: "Main St",
                citiy: "Hyderabad"
            }
        })
        const user2 = await User.create({
            name: 'Swathi',
            age: 26,
            email: "swathi.p888@gmail.com",
            hobbies: ["Dancing", "Irritating", "Watching Movies"],
            address: {
                street: "Main St",
                citiy: "Mysore"
            }
        })
        const user3 = await User.create({
            name: 'Harsha',
            age: 29,
            email: "harshavarshan012@gmail.com",
            hobbies: ["Cloud", "Watching Movies"],
            address: {
                street: "Main St",
                citiy: "Mysore"
            }
        })
        console.log(user1);
        console.log(user2);
        console.log(user3);
    } catch (e) {
        console.log(e.message);
    }
}

const findUser = async () => {
    try {
        const user = await User.find({ name: "Chetan" })
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}

const deleteUser = async () => {
    try {
        await User.deleteMany({})
    } catch (e) {
        console.log(e.message);
    }
}

const updateUser = async () => {
    try {
        const user1 = await User.findOne({ name: 'Chetan' })
        const id = user1._id;
        const user2 = await User.findOne({ name: 'Harsha' })
        user2.bestFriend = id
        user2.save()
        const user3 = await User
            .where('name')
            .equals('Harsha')
            .populate('bestFriend')
        console.log(user3);
    } catch (e) {
        console.log(e);
    }
}

// createUser()
// findUser()
// deleteUser()
// updateUser()







