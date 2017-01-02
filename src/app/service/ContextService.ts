import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";
/**
 * Created by ktm on 1/1/17.
 */
//import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";

export class ContextService {

  constructor(){}
  /**
   * Get the title of the current HTML document.
   * @returns {string}
   */
  getTitle(): string {
    return getDOM().getTitle();
  }

  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle: string) {
    getDOM().setTitle(newTitle);
  }
}
