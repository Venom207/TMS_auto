const request = require('supertest');
import { expect } from 'chai';
import { postRequest } from '../testData/param.ts';
import { userLogin} from '../testData/userData.ts';
import {BASE_URL_API} from "../../../consts/consts.ts";


describe("Проверка эндпойнта login", () => {

    it("LOGIN - SUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/login`).send(userLogin);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.a('object').and.to.have.property('token').and.to.be.a('string');

    });

    it("LOGIN - UNSUCCESSFUL", async () => {
        const response = await postRequest(BASE_URL_API,`/login`).
        send({ "email": "peter@klaven"});
        expect(response.statusCode).to.be.equal(400);
        expect(response.body).to.be.a('object').and.to.have.property('error').and.to.be.contain("Missing password");
    });
});