const tap = require('tap');
const lib = require('../lib');

const source1 = [
  { uuid: 'e761c1db-3414-4167-8588-a295e568b2de', name: 'Andrea' },
  { uuid: '206717cb-6430-4643-a579-9e0a9ad550c0', name: 'Marlen' },
  { uuid: '3057be39-dbfd-4b81-826d-b5e4015efdc8', name: 'Mare' },
  { uuid: 'f049075f-2768-47d9-b51c-d6acd804e151', name: 'Elyn' },
];

const source2 = [
  { uuid: 'e761c1db-3414-4167-8588-a295e568b2de', age: 15 },
  { uuid: '206717cb-6430-4643-a579-9e0a9ad550c0', age: 23 },
  { uuid: '3057be39-dbfd-4b81-826d-b5e4015efdc8', age: 17 },
  { uuid: 'f049075f-2768-47d9-b51c-d6acd804e151', age: 19 },
];

const source3 = [
  {
    uuid: 'e761c1db-3414-4167-8588-a295e568b2de',
    hobbies: ['dancing', 'movies', 'write', 'yoga'],
  },
  {
    uuid: '206717cb-6430-4643-a579-9e0a9ad550c0',
    hobbies: ['ballet', 'dancing', 'athletics', 'running'],
  },
  {
    uuid: '3057be39-dbfd-4b81-826d-b5e4015efdc8',
    hobbies: ['soccer', 'volleyball'],
  },
  {
    uuid: 'f049075f-2768-47d9-b51c-d6acd804e151',
    hobbies: ['running', 'swimming', 'study'],
  },
];

const expected = [
  {
    uuid: 'e761c1db-3414-4167-8588-a295e568b2de',
    name: 'Andrea',
    age: 15,
    hobbies: ['dancing', 'movies', 'write', 'yoga'],
  },
  {
    uuid: '206717cb-6430-4643-a579-9e0a9ad550c0',
    name: 'Marlen',
    age: 23,
    hobbies: ['ballet', 'dancing', 'athletics', 'running'],
  },
  {
    uuid: '3057be39-dbfd-4b81-826d-b5e4015efdc8',
    name: 'Mare',
    age: 17,
    hobbies: ['soccer', 'volleyball'],
  },
  {
    uuid: 'f049075f-2768-47d9-b51c-d6acd804e151',
    name: 'Elyn',
    age: 19,
    hobbies: ['running', 'swimming', 'study'],
  },
];

tap.test('simple merge by uuid property (no default key)', (childTest) => {
  childTest.plan(1);

  const merge = lib({ key: 'uuid' }, source1, source2, source3);

  childTest.deepEqual(merge, expected);
});
