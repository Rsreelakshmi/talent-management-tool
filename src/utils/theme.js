import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from '@material-ui/core/colors/deepOrange';
export default createMuiTheme({
  palette: {
    background: '#fafafa',
    secondary: deepOrange
  },
  typography: {
    htmlFontSize: 16,
    headline:{
      fontFamily: 'UniversLTPro-65Bold',
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: 'UniversLTPro-45Light',
      fontSize: '0.875rem',
      lineHeight: '1rem'
    },
    body2: {
      fontFamily: 'UniversLTPro-65Bold',
      fontSize: '0.97875rem',
      lineHeight: '1.25rem'
    },
    caption:{
      fontFamily: 'UniversLTPro-45Light',
      fontSize: '0.75rem',
    }
  },
  overrides: {
    MuiButton:{
      root:{
        fontFamily: 'UniversLTPro-55Roman',
      }
    },
    MuiTab:{
      label: {
        fontFamily: 'UniversLTPro-65Bold',
        fontSize: '0.97875rem !important'
      }
    }
  }
});
