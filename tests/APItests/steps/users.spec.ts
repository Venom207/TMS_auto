const request = require('supertest');
import { expect } from 'chai';
import { getRequest, postRequest, putRequest, deleteRequest } from '../src/requestWrapers.ts';
import { user, userUpdate } from '../testData/userData.ts';
import {BASE_URL_API} from "../../../consts/consts.ts";


describe("Проверка эндпойнта users", () => {

    it("Получение LIST USERS со 2й страницы", async () => {
        const response = await getRequest(BASE_URL_API, `/users?page=2`);

        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body.data).to.be.an('array');  
   });

    it("Получение SINGLE USER", async () => {
        const response = await getRequest(BASE_URL_API, `/users/2`);
    
        expect(response.statusCode).to.be.equal(200);
        expect(response.body.data).to.be.an('object'); 
        expect(response.body.data).to.have.property('id').and.to.be.a('number');
        expect(response.body.data).haveOwnProperty('email').and.to.be.a('string');
        expect(response.body.data).to.have.property('avatar').and.to.contain('https://reqres.in/');
  });

    it("Проверка SINGLE USER NOT FOUND", async () => {
        const response = await getRequest(BASE_URL_API, `/users/23`);
        expect(response.statusCode).to.be.equal(404);
        expect(response.body).to.be.a('object').and.to.be.empty;
 });

    it("Создание нового USER", async () => {
        const response = await postRequest(BASE_URL_API, `/users`).send(user);
        expect(response.statusCode).to.be.equal(201); 
        expect(response.body).to.be.a('object').and.to.have.property('id').and.to.be.a('string')
        expect(response.body).to.be.a('object').and.to.have.property('createdAt').and.to.be.a('string');
        });

    it("Обновление (UPDATE) USER", async () => {
        const response = await putRequest(BASE_URL_API, `/users/2`).send(userUpdate);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.an('object').and.to.have.property('updatedAt').and.to.be.a('string');
 });

    it("Удаление USER", async () => {
        const response = await deleteRequest(BASE_URL_API, `/users/2`);
        expect(response.statusCode).to.be.equal(204);
        expect(response.body).to.be.a('object').and.to.be.empty;
 });

    it('DELAYED RESPONSE', async () => {
        const response = await getRequest(BASE_URL_API, `/users?delay=3`);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body.data).to.be.an('array').to.be.not.empty;
        expect(response.body.data).to.be.a('array').and.to.have.lengthOf(6);
        expect(response.body).to.be.a('object').to.be.property('support').to.be.a('object').to.have.all.keys('url', 'text');
    });

});