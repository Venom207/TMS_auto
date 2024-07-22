const request = require('supertest');
import { expect } from 'chai';
import { postRequest } from '../src/requestWrapers.ts';
import { userLogin, userLoginFail} from '../testData/userData.ts';
import {BASE_URL_API, ENDPOINTS} from "../../../consts/consts.ts";
import { checkingAndValidate } from "../src/utils.ts";


describe("Проверка эндпойнта login", () => {

    it("LOGIN - SUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/login`).send(userLogin);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object').and.to.have.property('token').and.to.be.a('string');

    });

    it("LOGIN - UNSUCCESSFUL", async () => {
        checkingAndValidate(BASE_URL_API,ENDPOINTS.login);
    });
});