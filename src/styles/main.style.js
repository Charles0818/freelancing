import { StyleSheet } from 'react-native';

export const colors = {
  dark: '#000',
  dark_opacity: 'rgba(0, 0, 0, 0.248)',
  gray_color2: 'rgba(210, 210, 210, 0.75)',
  opacity_white: '#d8cfcf',
  white: '#fff',
  danger: '#df0202',
  color1: '#ff680a',
  color1_opacity: '#ff680a49',
  color2: '#0337c5',
  color3: '#f09001',
  color2_opacity: 'rgba(214, 57, 9, 0.801)',
  gray_color: '#a0a0a0',
};

const font = {
  font_xlg: {
    fontSize: 32,
  },

  font_lg: {
    fontSize: 20,
  },

  font_md: {
    fontSize: 16,
  },

  font_sm: {
    fontSize: 13.6,
  },

  font_xsm: {
    fontSize: 12,
  },

  fontWeight_700: {
    fontWeight: '700',
  },
  fontWeight_bold: {
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
};

const margin = {
  margin_sm: {
    marginHorizontal: 5,
    marginVertical: 4,
  },
  margin_md: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  margin_xsm: {
    margin: 4,
  },
  margin_lg: {
    marginHorizontal: 40,
    marginVertical: 50,
  },
  marginBottom_sm: {
    marginBottom: 10,
  },
  marginBottom_xsm: {
    marginBottom: 5,
  },
  marginBottom_md: {
    marginBottom: 30,
  },
  marginBottom_lg: {
    marginBottom: 50,
  },
  marginTop_xsm: {
    marginTop: 5,
  },
  marginTop_sm: {
    marginTop: 10,
  },
  marginTop_lg: {
    marginTop: 50,
  },
  marginTop_md: {
    marginTop: 30,
  },
  marginLeft_xsm: {
    marginLeft: 5,
  },
  marginLeft_sm: {
    marginLeft: 10,
  },
  marginLeft_md: {
    marginLeft: 30,
  },
  marginLeft_lg: {
    marginLeft: 50,
  },
  marginRight_xsm: {
    marginRight: 5,
  },
  marginRight_sm: {
    marginRight: 10,
  },
  marginRight_md: {
    marginRight: 30,
  },
  marginRight_lg: {
    marginRight: 50,
  },
};

const padding = {
  padding_sm: {
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  padding_md: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  padding_xsm: {
    padding: 4,
  },
  padding_lg: {
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  paddingBottom_sm: {
    paddingBottom: 10,
  },
  paddingBottom_xsm: {
    paddingBottom: 5,
  },
  paddingBottom_md: {
    paddingBottom: 30,
  },
  paddingBottom_lg: {
    paddingBottom: 50,
  },
  paddingTop_xsm: {
    paddingTop: 5,
  },
  paddingTop_sm: {
    paddingTop: 10,
  },
  paddingTop_lg: {
    paddingTop: 50,
  },
  paddingTop_md: {
    paddingTop: 30,
  },
  paddingLeft_xsm: {
    paddingLeft: 5,
  },
  paddingLeft_sm: {
    paddingLeft: 10,
  },
  paddingLeft_md: {
    paddingLeft: 30,
  },
  paddingLeft_lg: {
    paddingLeft: 50,
  },
  paddingRight_xsm: {
    paddingRight: 5,
  },
  paddingRight_sm: {
    paddingRight: 10,
  },
  paddingRight_md: {
    paddingRight: 30,
  },
  paddingRight_lg: {
    paddingRight: 50,
  },
  paddingHorizontal_sm: {
    paddingHorizontal: 10
  },
  paddingHorizontal_md: {
    paddingHorizontal: 30
  }
};

const flex = {
  row: {
    flexDirection: 'row',
  },
  alignItems_center: {
    alignItems: 'center',
  },
  justifyContent_center: {
    justifyContent: 'center',
  },
  justifyContent_between: {
    justifyContent: 'space-between',
  },
  justifyContent_end: {
    justifyContent: 'flex-end',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: colors.white,
  },
  color_white: {
    color: colors.white,
  },
  color1: {
    color: colors.color1,
  },
  color2: {
    color: colors.color2,
  },
  color3: {
    color: colors.color3,
  },
  color_gray: {
    color: colors.gray_color,
  },
  color_gray2: {
    color: colors.gray_color2,
  },
  color_dark: {
    color: colors.dark,
  },
  color_danger: {
    color: colors.danger,
  },
  bg_white: {
    backgroundColor: colors.white,
  },
  bg_whiteOpacity: {
    backgroundColor: colors.opacity_white,
  },
  bg_darkOpacity: {
    backgroundColor: colors.dark_opacity,
  },
  bg_color1: {
    backgroundColor: colors.color1,
  },
  bg_color1Opacity: {
    backgroundColor: colors.color1_opacity,
  },
  bg_color2: {
    backgroundColor: colors.color2,
  },
  bg_gray: {
    backgroundColor: colors.gray_color,
  },
  bg_danger: {
    backgroundColor: colors.danger
  },
  trans_btn_danger: {
    borderColor: colors.danger,
    borderWidth: 1,
    backgroundColor: 'transparent',
    color: colors.danger,
  },
  overflow_h: {
    overflow: 'hidden',
  },
  ...padding,
  ...margin,
  ...flex,
  ...font,
  position_relative: {
    position: 'relative',
  },
  position_absolute: {
    position: 'absolute',
  },
  border_r_5: {
    borderRadius: 5,
  },
  border_r_10: {
    borderRadius: 10,
  },
  border_r_circle: {
    borderRadius: 50,
  },
  slimBorder: {
    borderWidth: 1,
    borderColor: colors.opacity_white,
  },
  slimBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.opacity_white,
  },
  slimBorderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.opacity_white,
  },
  boxShadow_sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3,
  },
});

export default styles;
