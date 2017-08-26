'use strict';

var colors = {
  'pink': 'FF0844',
  'peach': 'FFB199',
  'white': 'FCFCFC',
  'orange': 'FF7E08',
  'blue': '0DE1FF',
  'green': '69FF08',
  'black': '2F020D',
  'blackDark': '00050E',
  'greyDark': '73777E',
  'grey': 'AFB4BB',
  'greyLight': 'EFF4FC'
};

if (process.env.NODE_ENV == 'production') {
  // do something
}

module.exports = {
  'colors': colors
};