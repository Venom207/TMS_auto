const request = require('supertest');
import { expect } from 'chai';
import { postRequest } from '../src/requestWrapers.ts';
import { userRegister,userRegisterFail } from '../testData/userData.ts';
import {BASE_URL_API, ENDPOINTS} from "../../../consts/consts.ts";
import {checkingAndValidate} from "../src/utils.ts";


describe("Проверка эндпойнта register", () => {

    it("Регистрация пользователя REGISTER - SUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/register`).send(userRegister);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object').and.to.have.property('id').and.to.be.a('number');
        expect(response.body).to.be.a('object').and.to.have.property('token').and.to.be.a('string');

    });

    it("Неудачная регистрация пользователя REGISTER - UNSUCCESSFUL", async () => {
        checkingAndValidate(BASE_URL_API,ENDPOINTS.register);
    });
});