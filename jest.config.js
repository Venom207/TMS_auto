/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  timeout: 30000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMarch:["**/test.ts/*.spec.ts"],
};