import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
/**
 * Created by ktm on 1/1/17.
 */

export class ContextService {

  constructor() {}
  /**
   * Get the title of the current HTML document.
   * @returns {string}
   */
  public getTitle(): string {
    return 'title';
  }

  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  public setTitle(newTitle: string) {
   }
}
