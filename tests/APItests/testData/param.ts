import request from "supertest";

export function getRequest(baseurl: string, endpoint: string):request.Test {
  return request(baseurl).get(endpoint);
};
export function postRequest(baseurl: string, endpoint: string):request.Test {
  return request(baseurl).post(endpoint);
};
export function putRequest(baseurl: string, endpoint: string):request.Test {
  return request(baseurl).put(endpoint);
};
export function deleteRequest(baseurl: string, endpoint: string):request.Test {
  return request(baseurl).delete(endpoint);
};

