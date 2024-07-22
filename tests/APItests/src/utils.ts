const request = require('supertest');
import { expect } from 'chai';
import { postRequest } from './requestWrapers.ts';
import {BASE_URL_API, ENDPOINTS} from "../../../consts/consts.ts";
import {userRegisterFail} from '../testData/userData.ts';

export interface IResponse {
        message: string;
        statusCode: number;
        body: object;
    }

export async function checkingAndValidate(str1:string, str2:string) {
    const response = await postRequest(BASE_URL_API, ENDPOINTS.register).send(userRegisterFail);
    expect(response.statusCode).to.be.equal(400);
    expect(response.body).to.be.a('object').and.to.have.property('error').and.to.be.contain("Missing password");
};
