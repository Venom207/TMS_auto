import { Calculator } from '../src/calculator.ts';

//    Feature: Tests for the Calculator class

describe('Calculator', () => {
    let calc: Calculator;


    beforeEach(() => {
        calc = new Calculator(10, 5);
    });

    /*Scenario: Adding two numbers
        Given I create a new instance of the Calculator class with numbers 10 and 5
        When I call the add() method
        Then I expect the result to be 15
    */

    it('Сложение двух чисел', () => {
        expect(calc.add()).toBe(15);
    });
    /*
    Scenario: Subtracting two numbers
        Given I create a new instance of the Calculator class with numbers 10 and 5
        When I call the subtract() method
        Then I expect the result to be 5
    */
    it('Вычитание двух чисел', () => {
        expect(calc.subtract()).toBe(5);
    });

    /*Scenario: Multiplying two numbers
        Given I create a new instance of the Calculator class with numbers 10 and 5
        When I call the multiply() method
        Then I expect the result to be 50
    */

    it('Умножение двух чисел', () => {
        expect(calc.multiply()).toBe(50);
    });
    /*Scenario: Dividing two numbers
        Given I create a new instance of the Calculator class with numbers 10 and 2
        When I call the divide() method
        Then I expect the result to be 5
    */

    it('Деление двух чисел', () => {
        expect(calc.divide()).toBe(2);
    });

    /*Scenario: Calculating the remainder of division
        Given I create a new instance of the Calculator class with numbers 10 and 5
        When I call the modulus() method
        Then I expect the result to be 0*/

    it('Вычисление остатка от деления', () => {
        expect(calc.modulus()).toBe(0);
    });

    /*Scenario: Calculating the square root
        Given I create a new instance of the Calculator class
        When I call the squareRoot() method with the number 25
        Then I expect the result to be 5
    */

    it('Вычесление квадратного корня', () => {
        expect(calc.squareRoot(25)).toBe(5);
    });

    /*Scenario: Error when dividing by zero
        Given I create a new instance of the Calculator class with numbers 10 and 0
        When I call the divide() method
        Then I expect an error to be thrown
    */

    it('Ошибка при делении на ноль', () => {
        const calcZero = new Calculator(10, 0);
        expect(() => calcZero.divide()).toThrow();
    });

    /*Scenario: Error when calculating the square root of a negative number
        Given I create a new instance of the Calculator class
        When I call the squareRoot() method with the number -1
        Then I expect an error to be thrown
   */

    it('Ошибка при вычислении квадратного корня отрицательного числа', () => {
        expect(() => calc.squareRoot(-1)).toThrow();
    });

    it('Сложение. Результат является целым числом', () => {
        expect(calc.add()).toEqual(15); 
    });
    
    it('Вычитание. Результат является целым числом', () => {
        expect(calc.subtract()).toEqual(5);
    });
    
    it('Умножение. Результат является целым числом', () => {
        expect(calc.multiply()).toEqual(50);
    });
    
    it('Деление. Результат является целым числом', () => {
        expect(calc.divide()).toEqual(2);
    });
    
    it('Остаток от деления. Результат является целым числом', () => {
        expect(calc.modulus()).toEqual(0);
    });
    
    it('Извлечение корня. Результат является целым числом', () => {
        expect(calc.squareRoot(25)).toEqual(5); 
    });
});