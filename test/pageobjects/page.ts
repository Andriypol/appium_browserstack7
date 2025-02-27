import { browser, $, $$ } from '@wdio/globals'
import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class Page {

    public getElement(selector: string): ChainablePromiseElement {
          return $(selector);
      }
    
    public getElements(selector: string): ChainablePromiseArray {
          return $$(selector);
      }
  }
  