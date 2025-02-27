import { browser, $, $$ } from '@wdio/globals'
import Page from './page.ts';
import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

class CalculatorPage extends Page {
  
  get numberButtons(): ChainablePromiseArray { 
      return this.getElements('~number'); 
  }
  
  get addPoint(): ChainablePromiseElement { 
    return this.getElement('~point'); 
 }
  get addButton(): ChainablePromiseElement { 
      return this.getElement('~plus'); 
  }
  get subtractButton(): ChainablePromiseElement { 
      return this.getElement('~minus'); 
  }
  get multiplyButton(): ChainablePromiseElement { 
      return this.getElement('~multiply'); 
  }
  get divideButton(): ChainablePromiseElement { 
      return this.getElement('~divide'); 
  }
  get equalsButton(): ChainablePromiseElement { 
      return this.getElement('~equals'); 
  }
  get resultDisplay(): ChainablePromiseElement { 
      return this.getElement('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]'); 
  }
  get zeroResultField(): ChainablePromiseElement {
      return this.getElement('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_preview"]');
  }

  async enterNumber(number: string): Promise<void> {
      for (const digit of number) {
          await this.getElement(`~${digit}`).click();
      }
  }

  async pressPoint(): Promise<void> {
    await this.addPoint.click();
}

  async pressAdd(): Promise<void> {
      await this.addButton.click();
  }

  async pressSubtract(): Promise<void> {
      await this.subtractButton.click();
  }

  async pressMultiply(): Promise<void> {
      await this.multiplyButton.click();
  }

  async pressDivide(): Promise<void> {
      await this.divideButton.click();
  }

  async pressEquals(): Promise<void> {
      await this.equalsButton.click();
  }

  async getResult(): Promise<string> {
      return this.resultDisplay.getText();
  }
  async getZeroResult(): Promise<string> {
    return this.zeroResultField.getText();
}

async inputBigLenght(digit: string): Promise<void> {
  for (let i = 0; i < 30; i++) {
    await this.getElement(`~${digit}`).click();
  }
}

async inputZeros(digit: number): Promise<void> {
  for (let i = 0; i < digit; i++) {
    await this.getElement('~0').click();
  }
}
}

export default new CalculatorPage();