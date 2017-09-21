import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'mask': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'space-around',
    'width': [{ 'unit': 'px', 'value': 710 }],
    'height': [{ 'unit': 'px', 'value': 365 }],
    'borderRadius': '8px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(167, 196, 220, 0.5)' }]
  },
  'masklevel-0': {
    'backgroundImage': 'linear-gradient(to bottom, #e65245, #e43a15)'
  },
  'masklevel-1': {
    'backgroundImage': 'linear-gradient(to bottom, #ff9966, #ff5e62)'
  },
  'masklevel-2': {
    'backgroundImage': 'linear-gradient(to bottom, #fceabb, #f8b500)'
  },
  'masklevel-3': {
    'backgroundImage': 'linear-gradient(to bottom, #47e4c1, #07cddd)'
  },
  'mask h2': {
    'color': '#ffffff'
  },
  'mask ultoggles': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center'
  },
  'mask feedback-text': {
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
