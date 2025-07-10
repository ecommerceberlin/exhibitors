
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { yellow } from '@material-ui/core/colors';

/**
 * 
 * https://v4.mui.com/customization/color/#color-palette
 */



export const getTheme = () => responsiveFontSizes(createTheme({
  palette: {
      primary: {
        main: yellow[500]
      },
      secondary: {
        main:  yellow[500]
      },
  }
}));

 
//https://github.com/mui-org/@material-ui/core/blob/master/src/styles/getMuiTheme.js

const appTheme = `${process.env.REACT_APP_THEME}`;


// export const getTheme = () => createTheme(appTheme && appTheme in customThemes ? customThemes[appTheme] : customThemes.red)



