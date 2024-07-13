const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

export const user = {
    name: faker.internet.username,
    job: 'leader'
    
};

export const userUpdate = {
        name: faker.internet.username,
        job: "zion resident"
};


export const userRegister = {
    email: "eve.holt@reqres.in",
    password: "pistol",
};

export const userLogin = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}