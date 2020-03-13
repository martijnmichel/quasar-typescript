import { WindowInterface } from 'src/interfaces/Window';
import store from 'src/store';
import _ from 'lodash';
export default class Window {
  public title?: string = `Window ${store.getters['wm/allWindows'].length + 1}`;
  protected id: number = store.getters['wm/allWindows'].length + 1;
  public width?: number = 800;
  public height?: number = 600;
  public x?: number = 10;
  public y?: number = 10;
  public theme?: string = 'light';
  public constructor(event: WindowInterface) {
    _.each(event, (e, k) => (this[k] = e));
    this.setPosition();
  }
  public setPosition() {
    _.each(store.getters['wm/allWindows'], w => {
      if (w.x === this.x) this.x += 20;
      if (w.y === this.y) this.y += 20;
    });
  }
}
