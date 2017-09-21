import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'toggle': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fbfbfb' }],
    'borderRadius': '50px'
  },
  'toggle:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'toggle:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'toggle input': {
    'display': 'none'
  },
  'toggle label': {
    'display': 'inline-block',
    'position': 'relative',
    'zIndex': '2',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'textAlign': 'center',
    'color': 'white'
  },
  'masklevel-0 toggleleft labelcb-left': {
    'color': '#e43a15'
  },
  'masklevel-0
toggleright labelcb-right': {
    'color': '#e43a15'
  },
  'masklevel-1 toggleleft labelcb-left': {
    'color': '#ff5e62'
  },
  'masklevel-1
toggleright labelcb-right': {
    'color': '#ff5e62'
  },
  'masklevel-2 toggleleft labelcb-left': {
    'color': '#f8b500'
  },
  'masklevel-2
toggleright labelcb-right': {
    'color': '#f8b500'
  },
  'masklevel-3 toggleleft labelcb-left': {
    'color': '#07cddd'
  },
  'masklevel-3
toggleright labelcb-right': {
    'color': '#07cddd'
  },
  'toggle toggle-selection': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '50px',
    'backgroundColor': 'rgba(249, 249, 249, 0.5)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(50, 50, 50, 0.2)' }],
    'transition': 'left 0.5s ease'
  },
  'toggleright toggle-selection': {
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  }
});
