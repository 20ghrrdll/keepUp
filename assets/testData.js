import moment from 'moment'

const testData = new Map([
  ['aJolie', {
    name: 'Angelina Jolie',
    lastContacted: moment("September 10, 2019"),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['bknowles', {
    name: 'Beyonce Knowles',
    lastContacted: moment('April 8, 2019'),
    contactFrequency: 1,
    contactFrequencyUnits: 'years',
  }],
  ['caguilera', {
    name: 'Christina Aguilera',
    lastContacted: moment('September 2, 2019'),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['ddlewis', {
    name: 'Daniel Day Lewis',
    lastContacted: moment(),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['eclarke', {
    name: 'Emilia Clarke',
    lastContacted: moment('September 15, 2019'),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['fOcean', {
    name: 'Frank Ocean',
    lastContacted: moment("July 10, 2019"),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['gUnion', {
    name: 'Gabrielle Union',
    lastContacted: moment("August 30, 2019"),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],
  ['hPotter', {
    name: 'Harry Potter',
    lastContacted: moment("August 29, 2019"),
    contactFrequency: 1,
    contactFrequencyUnits: 'months',
  }],

]);

export default testData;

