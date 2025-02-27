import CalculatorPage from '../pageobjects/calculator.page';
import { expect, browser, $, $$ } from '@wdio/globals'

describe('Calculator App Tests', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });

    it('should perform basic addition correctly', async () => {
        await CalculatorPage.enterNumber('2');
        await CalculatorPage.pressAdd();
        await CalculatorPage.enterNumber('3');
        await CalculatorPage.pressEquals();
        
        const result = await CalculatorPage.getResult();
        expect(result).toBe('5');
    });

    it('should handle a sequence of multiple operations correctly', async () => {
        await CalculatorPage.enterNumber('5');
        await CalculatorPage.pressAdd();
        await CalculatorPage.enterNumber('3');
        await CalculatorPage.pressMultiply();
        await CalculatorPage.enterNumber('2');
        await CalculatorPage.pressEquals();
        
        const result = await CalculatorPage.getResult();
        expect(result).toBe('11');
    });

    it('should handle decimal numbers correctly', async () => {
        await CalculatorPage.enterNumber('2');
        await CalculatorPage.pressPoint();
        await CalculatorPage.enterNumber('5');
        await CalculatorPage.pressAdd();
        await CalculatorPage.enterNumber('1');
        await CalculatorPage.pressPoint();
        await CalculatorPage.enterNumber('5');
        await CalculatorPage.pressEquals();
        
        const result = await CalculatorPage.getResult();
        expect(result).toBe('4');
    });

    it('should handle division by zero appropriately', async () => {
        await CalculatorPage.enterNumber('10');
        await CalculatorPage.pressDivide();
        await CalculatorPage.enterNumber('0');
        await CalculatorPage.pressEquals();
        
        const result = await CalculatorPage.getZeroResult();
        expect(result).toBe('Can\'t divide by 0'); // Or whatever the app returns
    });

    it('should handle big input length correctly', async () => {
        await CalculatorPage.inputBigLenght('9');
        await CalculatorPage.pressAdd();
        await CalculatorPage.enterNumber('1');
        await CalculatorPage.pressEquals();

        const result = await CalculatorPage.getResult();
        expect(result).toBe('1.E30');
        
    });

    it('should handle division by values approaching zero correctly', async () => {
        await CalculatorPage.enterNumber('10');
        await CalculatorPage.pressDivide();
        await CalculatorPage.enterNumber('0');
        await CalculatorPage.pressPoint();
        await CalculatorPage.inputZeros(6);
        await CalculatorPage.enterNumber('1');
        await CalculatorPage.pressEquals();

        const result = await CalculatorPage.getResult();
        expect(result).toBe('100000000');
        
    });
});

