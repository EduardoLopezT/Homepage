import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#F1E4FF', '#1B1223')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('orange', 'cyan')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'Concert One'"
};

const colors = {
  glassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const Theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default Theme;
