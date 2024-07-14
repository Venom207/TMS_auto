/**
 * Класс Calculator для выполнения арифметических операций.
 * 
 * @param num1 Первое число для операций.
 * @param num2 Второе число для операций.
 */
export class Calculator {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add(): number {
        return this.num1 + this.num2;
    }

    subtract(): number {
        return this.num1 - this.num2;
    }

    multiply(): number {
        return this.num1 * this.num2;
    }

    divide(): number {
        if (this.num2 === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return this.num1 / this.num2;
    }

    modulus(): number {
        return this.num1 % this.num2;
    }
    /**
     * Вычисляет квадратный корень числа.
     * 
     * @param num Число, из которого нужно извлечь квадратный корень.
     * @returns Квадратный корень числа.
     * @throws {Error} Если число меньше нуля.
     */

    squareRoot(num: number): number {
        if (num < 0) {
            throw new Error('Square root of a negative number is not real');
        }
        return Math.sqrt(num);
    }
};