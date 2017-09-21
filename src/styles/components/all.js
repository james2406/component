import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'mask': {
    'width': [{ 'unit': 'px', 'value': 710 }],
    'height': [{ 'unit': 'px', 'value': 365 }],
    'borderRadius': '8px',
    'backgroundImage': 'linear-gradient(to bottom, rgba(250, 145, 97, 0.7), rgba(247, 59, 28, 0.69))',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(167, 196, 220, 0.5)' }]
  },
  'the-answer-is-incorr': {
    'width': [{ 'unit': 'px', 'value': 728 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'fontFamily': 'Muli',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': 0.4 }],
    'textAlign': 'center',
    'color': '#ffffff'
  }
});
