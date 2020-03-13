import Window from 'src/classes/Window';
import { WindowInterface } from 'src/interfaces/Window';
export function addWindow(state: any, event: WindowInterface) {
  const w = new Window(event);
  state.windows.push(w);
}
