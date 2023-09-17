const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        id: faker.database.mongodbObjectId()
    }
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        adress: {
            street:faker.location.street(),
            city:faker.location.city() ,
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country() ,
        }
    };
    return newCompany;
}

const fakeUser = createUser();
const fakeCompany = createCompany();
const fakeUserCompany = {
    user : fakeUser,
    company : fakeCompany
};


app.get("/api/users/new", (req, res) => {
    res.json( fakeUser );
});

app.get("/api/companies/new", (req, res) => {
    res.json( fakeCompany );
});

app.get("/api/user/company", (req, res) => {
    res.json( fakeUserCompany );
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
