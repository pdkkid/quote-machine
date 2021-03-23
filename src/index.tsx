import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import styles from './app.module.scss'

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
        <App />
        <Source />
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

function Source() {
  return (
    <div className={styles.source}>
      <a href="https://github.com/pdkkid/quote-machine">Source</a>
    </div>
  );
}