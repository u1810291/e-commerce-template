// global styles
import PropTypes from 'prop-types';

// third-party
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// styles
import 'scss/style.scss';
import 'styles/globals.css';

// calendar - styles
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

// project import
import NavigationScroll from 'layout/NavigationScroll';
import { persister, store } from 'store';
import ThemeCustomization from 'themes';
import RTLLayout from 'components/ui-component/RTLLayout';
import Locales from 'components/ui-component/Locales';
import Snackbar from 'components/ui-component/extended/Snackbar';

import { ConfigProvider } from 'contexts/ConfigContext';

import { FirebaseProvider as AuthProvider } from '../contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';

const Noop = ({ children }) => <> {children} </>;

Noop.propTypes = {
  children: PropTypes.node
};

// ==============================|| APP ||============================== //

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ConfigProvider>
          <ThemeCustomization>
            <RTLLayout>
              <Locales>
                <NavigationScroll>
                  <AuthProvider>
                    <>
                      {getLayout(<Component {...pageProps} />)}
                      <Snackbar />
                    </>
                  </AuthProvider>
                </NavigationScroll>
              </Locales>
            </RTLLayout>
          </ThemeCustomization>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;
