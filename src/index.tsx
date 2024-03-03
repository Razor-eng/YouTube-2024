import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true
  },
  styles: {
    global: (props: String) => ({
      body: {
        bg: mode("gray.100", "#212125")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      }
    })
  }
})

root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </ChakraProvider>
);
