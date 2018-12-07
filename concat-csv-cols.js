const fs = require('fs');

const data = [
  {
    Date: '1/6/2019',
    'Meeting ID': 102,
    'Group Name': 'Timonium',
    'Meeting Rep Name': 'LISA',
    'Meeting Rep Initial': 'K',
    'Meeting Rep Phone': 3017609793,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      'TimoniumWaterlooLISAAARON'
  },
  {
    Date: '1/13/2019',
    'Meeting ID': 102,
    'Group Name': 'Brooklyn Saturday',
    'Meeting Rep Name': 'Jay',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4438648557,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      'Brooklyn Saturday Jay H 4438648557'
  },
  {
    Date: '1/20/2019',
    'Meeting ID': 102,
    'Group Name': 'Rock Creek',
    'Meeting Rep Name': 'Glen',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4102551432,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      'Timonium LISA K 3017609793'
  },
  {
    Date: '1/27/2019',
    'Meeting ID': 102,
    'Group Name': 'Snydersburg Thursday Night',
    'Meeting Rep Name': 'JEFF',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4432445454,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/6/2019',
    'Meeting ID': 103,
    'Group Name': 'Living Sober',
    'Meeting Rep Name': 'Paul',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4439396315,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/13/2019',
    'Meeting ID': 103,
    'Group Name': 'New Happiness',
    'Meeting Rep Name': 'Brian',
    'Meeting Rep Initial': 'J',
    'Meeting Rep Phone': 4105914692,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/20/2019',
    'Meeting ID': 103,
    'Group Name': 'Phelps Luck',
    'Meeting Rep Name': 'PATTEE',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 4107074398,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/27/2019',
    'Meeting ID': 103,
    'Group Name': 'Haven',
    'Meeting Rep Name': 'GREG ',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 7177981431,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/6/2019',
    'Meeting ID': 104,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/13/2019',
    'Meeting ID': 104,
    'Group Name': 'Magothy',
    'Meeting Rep Name': 'SONYA',
    'Meeting Rep Initial': 'D',
    'Meeting Rep Phone': 4438055715,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/20/2019',
    'Meeting ID': 104,
    'Group Name': 'O.D.A.T.',
    'Meeting Rep Name': 'JENNIFER',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 4109849855,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/27/2019',
    'Meeting ID': 104,
    'Group Name': "We Ain't Right",
    'Meeting Rep Name': 'Ray',
    'Meeting Rep Initial': 'J',
    'Meeting Rep Phone': 4435649670,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 201,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 201,
    'Group Name': 'Happy, Joyous and Free',
    'Meeting Rep Name': 'JOHN',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4434746402,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 201,
    'Group Name': 'Evergreen',
    'Meeting Rep Name': 'Robin',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4103402053,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 201,
    'Group Name': 'Elkridge Sunday',
    'Meeting Rep Name': 'Charles',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4436908158,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 202,
    'Group Name': 'Sunday Morning Agape',
    'Meeting Rep Name': 'SHIRLEY',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4109638927,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 202,
    'Group Name': '164',
    'Meeting Rep Name': 'ROBIN',
    'Meeting Rep Initial': 'A',
    'Meeting Rep Phone': 4436024019,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 202,
    'Group Name': 'There Is A Solution Big Book',
    'Meeting Rep Name': 'Bill',
    'Meeting Rep Initial': 'K',
    'Meeting Rep Phone': 3018070092,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 202,
    'Group Name': 'Sixth Day',
    'Meeting Rep Name': 'JOSEPH',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 9195006106,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 204,
    'Group Name': 'Catonsville Step',
    'Meeting Rep Name': 'MARY ',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4432500372,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 204,
    'Group Name': 'Arbutus Step',
    'Meeting Rep Name': 'Larry',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4109351353,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 204,
    'Group Name': 'Harford Road Thursday Morning',
    'Meeting Rep Name': 'Brad',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4438298855,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 204,
    'Group Name': 'Open Door',
    'Meeting Rep Name': 'Chris',
    'Meeting Rep Initial': 'J',
    'Meeting Rep Phone': 5404098054,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 205,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 205,
    'Group Name': 'Lutherville',
    'Meeting Rep Name': 'BEN',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4102410525,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 205,
    'Group Name': 'Howard County Speakers',
    'Meeting Rep Name': 'Ziggy',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 2404186757,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 205,
    'Group Name': 'Practice These Principles',
    'Meeting Rep Name': 'Jeff',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4109161548,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 206,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 206,
    'Group Name': 'Daystarters',
    'Meeting Rep Name': 'KATE ',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 4103535429,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 206,
    'Group Name': 'PUTTY HILL',
    'Meeting Rep Name': 'KIM ',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4102948183,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 206,
    'Group Name': 'Seekers',
    'Meeting Rep Name': 'Doug',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4102746309,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 207,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 207,
    'Group Name': 'Charlestown',
    'Meeting Rep Name': 'Sean',
    'Meeting Rep Initial': 'T',
    'Meeting Rep Phone': 4102942873,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 207,
    'Group Name': 'Valley',
    'Meeting Rep Name': 'Bob',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 4432500917,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 207,
    'Group Name': 'Oakland Mills',
    'Meeting Rep Name': 'JEN',
    'Meeting Rep Initial': 'D',
    'Meeting Rep Phone': 2407535792,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 208,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 208,
    'Group Name': 'New Eastern',
    'Meeting Rep Name': 'Craig',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 5054804479,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 208,
    'Group Name': 'S.O.S. Liberty Road',
    'Meeting Rep Name': 'KENT',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4104407632,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  }
];

var output = data.reduce((acc, obj) => {
  const keys = ['Group Name', 'Meeting Rep Name', 'Meeting Rep Phone'];
  var concattedString = '';
  keys.forEach((key, index) => {
    index !== 2
      ? (concattedString = concattedString.concat(`${obj[key]} `))
      : (concattedString = concattedString.concat(obj[key]));
  });
  acc.push(concattedString);
  return acc;
}, []);

const output7 = output.join('\n');

console.log('7: ', output7);
fs.writeFile('output.csv', output7, err =>
  console.log(err ? 'Error :' + err : 'ok')
);
