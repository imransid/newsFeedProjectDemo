import React, { useEffect } from 'react';
import {
  MD3DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider as StoreProvider } from 'react-redux';
// import { Platform } from 'react-native';
// import { ApolloProvider } from '@apollo/client';
// import client from '@/utils/apolloClient';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';
// import * as Sentry from '@sentry/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {

  const queryClient = new QueryClient();

  const isDarkMode = false; // Replace with state management for theme toggle

  return (
    // <ApolloProvider client={client}>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={isDarkMode ? MD3DarkTheme : DefaultTheme}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
    // </ApolloProvider>
  );
};

export default App

//Sentry.wrap(App);

