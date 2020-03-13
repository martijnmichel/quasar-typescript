import Window from 'src/classes/Window';
import _ from 'lodash';
export function addWindow(state) {
  let w = new Window({ title: 'JO' });
  state.windows.push(w);
}

export function updateWindow(state, data) {
  let i = _.findIndex(state.windows, w => w.id === data.window.id);
  state.windows[i].x = 100;
  state.windows[i].y = 100;
}
