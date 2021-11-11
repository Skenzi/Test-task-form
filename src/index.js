import { render } from 'react-dom';
import init from './init.jsx';

const rendering = () => {
  render(init(), document.getElementById('app'));
};

rendering();
