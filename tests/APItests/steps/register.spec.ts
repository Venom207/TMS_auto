const request = require('supertest');
import { expect } from 'chai';
import { postRequest } from '../testData/param.ts';
import { userRegister } from '../testData/userData.ts';
import {BASE_URL_API} from "../../../consts/consts.ts";


describe("Проверка эндпойнта register", () => {

    it("Регистрация пользователя REGISTER - SUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/register`).send(userRegister);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object').and.to.have.property('id').and.to.be.a('number');
        expect(response.body).to.be.a('object').and.to.have.property('token').and.to.be.a('string');

    });

    it("Неудачная регистрация пользователя REGISTER - UNSUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/register`).
        send({ "email": "sydney@fife"});
        expect(response.statusCode).to.be.equal(400);
    });
});