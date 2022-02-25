import { BrowserRouter } from 'react-router-dom';
import Header from './components/molecules/Header/header.molecule';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

// import './styles/global.scss';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
