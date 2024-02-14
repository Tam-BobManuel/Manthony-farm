import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig={
    initialColorMode:"dark"
};

const theme = extendTheme({config, colors:{
  gray: {
    50: '#e9f3fd',
    100: '#ced9e5',
    200: '#b0c0ce',
    300: '#92a7b9',
    400: '#758ea5',
    500: '#5b758b',
    600: '#465b6d',
    700: '#31414f',
    800: '#1b2731',
    900: '#030e17',
}
}});

export default theme;