import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache/cache';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);
