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
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 208,
    'Group Name': 'The Third Tradition',
    'Meeting Rep Name': 'Joe',
    'Meeting Rep Initial': 'T',
    'Meeting Rep Phone': 4438507115,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 209,
    'Group Name': 'Empathy',
    'Meeting Rep Name': 'Jeff',
    'Meeting Rep Initial': 'T',
    'Meeting Rep Phone': 4102064520,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 209,
    'Group Name': "Baltimore City Men's",
    'Meeting Rep Name': 'OMAR ',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 8135032474,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 209,
    'Group Name': 'Helping Hand',
    'Meeting Rep Name': 'Joe',
    'Meeting Rep Initial': 'J',
    'Meeting Rep Phone': 4437692092,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 209,
    'Group Name': 'Day by Day',
    'Meeting Rep Name': 'Nick',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4109770578,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/7/2019',
    'Meeting ID': 210,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/14/2019',
    'Meeting ID': 210,
    'Group Name': 'Happy Destiny',
    'Meeting Rep Name': 'Jerry',
    'Meeting Rep Initial': 'D',
    'Meeting Rep Phone': 4104994914,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/21/2019',
    'Meeting ID': 210,
    'Group Name': 'Fullerton/Perry Hall',
    'Meeting Rep Name': 'Gary',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4102182736,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/28/2019',
    'Meeting ID': 210,
    'Group Name': 'Roland Park Steps & Traditions',
    'Meeting Rep Name': 'KAREN',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4105919066,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/1/2019',
    'Meeting ID': 301,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/8/2019',
    'Meeting ID': 301,
    'Group Name': 'Assissi Big Book',
    'Meeting Rep Name': 'SEAN ',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4434155117,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/15/2019',
    'Meeting ID': 301,
    'Group Name': 'Better Way of Life',
    'Meeting Rep Name': 'Bill',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4436106101,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/22/2019',
    'Meeting ID': 301,
    'Group Name': 'Serenity Big Book',
    'Meeting Rep Name': 'Dan',
    'Meeting Rep Initial': 'P',
    'Meeting Rep Phone': 4143054623,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/29/2019',
    'Meeting ID': 301,
    'Group Name': "New Beginning Women's",
    'Meeting Rep Name': 'Mary',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4109165022,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/1/2019',
    'Meeting ID': 303,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/8/2019',
    'Meeting ID': 303,
    'Group Name': 'Glyndon',
    'Meeting Rep Name': 'DEAN',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 4432578821,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/15/2019',
    'Meeting ID': 303,
    'Group Name': 'Great Fact',
    'Meeting Rep Name': 'Andrea',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 3013676022,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/22/2019',
    'Meeting ID': 303,
    'Group Name': 'Rumsey Island',
    'Meeting Rep Name': 'Dick',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4103352266,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/29/2019',
    'Meeting ID': 303,
    'Group Name': 'Pikesville North',
    'Meeting Rep Name': 'Lou',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4438543324,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/1/2019',
    'Meeting ID': 304,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/8/2019',
    'Meeting ID': 304,
    'Group Name': 'Friends of Bill W. Luncheon',
    'Meeting Rep Name': 'DAN',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4108300042,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/15/2019',
    'Meeting ID': 304,
    'Group Name': 'Brooklyn Big Book',
    'Meeting Rep Name': 'ELIZABETH',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 2532247262,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/22/2019',
    'Meeting ID': 304,
    'Group Name': 'Hope Is Found Here',
    'Meeting Rep Name': 'BEN',
    'Meeting Rep Initial': 'O',
    'Meeting Rep Phone': 4435044586,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/29/2019',
    'Meeting ID': 304,
    'Group Name': 'Canton Wednesday Night',
    'Meeting Rep Name': 'JASON',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4109379432,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/1/2019',
    'Meeting ID': 305,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/8/2019',
    'Meeting ID': 305,
    'Group Name': 'ABC',
    'Meeting Rep Name': 'ROMANA',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4434582962,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/15/2019',
    'Meeting ID': 305,
    'Group Name': 'New Hope',
    'Meeting Rep Name': 'MIKE ',
    'Meeting Rep Initial': 'P',
    'Meeting Rep Phone': 4438651357,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/22/2019',
    'Meeting ID': 305,
    'Group Name': 'Hunt Valley Sunday Morning',
    'Meeting Rep Name': 'Sean',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4438255925,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/29/2019',
    'Meeting ID': 305,
    'Group Name': 'Jacksonville Monday',
    'Meeting Rep Name': 'CATHERINE',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4106270728,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 401,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 401,
    'Group Name': 'Free At Last',
    'Meeting Rep Name': 'Bruce',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4104094548,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 401,
    'Group Name': 'Agape',
    'Meeting Rep Name': 'Greg',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4108189779,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 401,
    'Group Name': 'Chapters and Stories',
    'Meeting Rep Name': 'LAUREN',
    'Meeting Rep Initial': 'E',
    'Meeting Rep Phone': 4438124035,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 401,
    'Group Name': 'Pasadena',
    'Meeting Rep Name': 'Curtis',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4107467301,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 403,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 403,
    'Group Name': 'Claver',
    'Meeting Rep Name': 'Duane',
    'Meeting Rep Initial': 'N',
    'Meeting Rep Phone': 4103027368,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 403,
    'Group Name': 'As Bill Sees It',
    'Meeting Rep Name': 'Keith',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4434636760,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 403,
    'Group Name': 'Gratitude In Action',
    'Meeting Rep Name': 'Jeremy',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4439919464,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 403,
    'Group Name': 'HAMPDEN 12 and 12',
    'Meeting Rep Name': 'TYLER',
    'Meeting Rep Initial': 'J',
    'Meeting Rep Phone': 4435347457,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 404,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 404,
    'Group Name': 'Eastside Early Risers',
    'Meeting Rep Name': 'Jim',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4102962092,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 404,
    'Group Name': "Pennsylvania Ave. Speaker's",
    'Meeting Rep Name': 'JORDON',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 7175865144,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 404,
    'Group Name': 'Serenity Now',
    'Meeting Rep Name': 'ELIZABETH',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4102453009,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 404,
    'Group Name': 'FEARLESS AND THOROUGH',
    'Meeting Rep Name': 'KEVIN',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4109678828,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 406,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 406,
    'Group Name': 'Harford Road Thursday Night',
    'Meeting Rep Name': 'Josh',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4438764603,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 406,
    'Group Name': "A Vision for You Women's",
    'Meeting Rep Name': 'Lynn',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4439391270,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 406,
    'Group Name': 'Early Risers',
    'Meeting Rep Name': 'Amy',
    'Meeting Rep Initial': 'Z',
    'Meeting Rep Phone': 4104917212,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 406,
    'Group Name': 'Perry Hall Round Robin',
    'Meeting Rep Name': 'Bruce',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4108048935,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 407,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 407,
    'Group Name': 'NEW ATTITUDE',
    'Meeting Rep Name': 'MIKE',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4432232591,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 407,
    'Group Name': 'Sixth Sense',
    'Meeting Rep Name': 'FRANK',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4435312093,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 407,
    'Group Name': 'The Family Afterwards',
    'Meeting Rep Name': 'Bill',
    'Meeting Rep Initial': 'V',
    'Meeting Rep Phone': 4109175989,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 407,
    'Group Name': 'Chance To Grow',
    'Meeting Rep Name': 'Marian',
    'Meeting Rep Initial': 'D',
    'Meeting Rep Phone': 4104910226,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 409,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 409,
    'Group Name': 'Linthicum Heights Thursday Night',
    'Meeting Rep Name': 'MARY',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 8056228327,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 409,
    'Group Name': 'Canton Saturday Morning Beginners',
    'Meeting Rep Name': 'DANA',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4434212135,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 409,
    'Group Name': 'Westminster S.O.S.',
    'Meeting Rep Name': 'BERNARD ',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4439746771,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 409,
    'Group Name': 'CATONSVILLE HOW IT WORKS',
    'Meeting Rep Name': 'TERRI',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4434747173,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 410,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 410,
    'Group Name': 'Nu Women',
    'Meeting Rep Name': 'Fran',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4102271368,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 410,
    'Group Name': "Captain's Table",
    'Meeting Rep Name': 'TERRI',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 3233307294,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 410,
    'Group Name': 'Wrath Of Grapes',
    'Meeting Rep Name': 'ROB',
    'Meeting Rep Initial': 'V',
    'Meeting Rep Phone': 4109017204,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 410,
    'Group Name': 'OREMS RD',
    'Meeting Rep Name': 'MICHAEL',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4435796234,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 411,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 411,
    'Group Name': 'Regester Ave',
    'Meeting Rep Name': 'ANDREW',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4102365253,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 411,
    'Group Name': 'Eldersburg Into Action',
    'Meeting Rep Name': 'Heather',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4437424154,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 411,
    'Group Name': 'Fort McHenry',
    'Meeting Rep Name': 'BOB',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 6672180442,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 411,
    'Group Name': 'Westminster Monday Night',
    'Meeting Rep Name': 'Lou',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4438788806,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/2/2019',
    'Meeting ID': 412,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/9/2019',
    'Meeting ID': 412,
    'Group Name': 'Gamber',
    'Meeting Rep Name': 'ANDY',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4439743399,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/16/2019',
    'Meeting ID': 412,
    'Group Name': 'GALAA',
    'Meeting Rep Name': 'Sooz',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4104042260,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/23/2019',
    'Meeting ID': 412,
    'Group Name': 'Beltway Beginner Step',
    'Meeting Rep Name': 'Brendon',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4105988153,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/30/2019',
    'Meeting ID': 412,
    'Group Name': 'Reisterstown Sunday Night 12 Step',
    'Meeting Rep Name': 'Dwight',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4109797942,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 501,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 501,
    'Group Name': 'GUIDE TO RECOVERY',
    'Meeting Rep Name': 'DARIN',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 8138571411,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 501,
    'Group Name': 'The Avenue',
    'Meeting Rep Name': 'JEFF',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4109257874,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 501,
    'Group Name': 'Out Of The Woods',
    'Meeting Rep Name': 'BEN',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 3016619940,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 501,
    'Group Name': 'Hampden Big Book',
    'Meeting Rep Name': 'Billy',
    'Meeting Rep Initial': 'N',
    'Meeting Rep Phone': 4103696394,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 503,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 503,
    'Group Name': 'Westminster Wednesday Night',
    'Meeting Rep Name': 'Mike',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4103443516,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 503,
    'Group Name': 'Newcomers',
    'Meeting Rep Name': 'Dean',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4106271108,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 503,
    'Group Name': 'Living In The Solution',
    'Meeting Rep Name': 'ELIZABETH',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4106273030,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 503,
    'Group Name': 'Sherwood',
    'Meeting Rep Name': 'Joe',
    'Meeting Rep Initial': 'A',
    'Meeting Rep Phone': 4109639107,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 504,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 504,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 504,
    'Group Name': 'Arbutus Sobriety',
    'Meeting Rep Name': 'Jim',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4107688508,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 504,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 504,
    'Group Name': 'Glen Burnie Friday Night',
    'Meeting Rep Name': 'Bill',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4104285451,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 506,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 506,
    'Group Name': 'Agnostics',
    'Meeting Rep Name': 'Rick',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 4439000986,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 506,
    'Group Name': 'Glenelg',
    'Meeting Rep Name': 'RANDY',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4436513708,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 506,
    'Group Name': 'Monday Night Big Book Study',
    'Meeting Rep Name': 'John',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4103889481,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 506,
    'Group Name': 'Ruxton',
    'Meeting Rep Name': 'DAVID',
    'Meeting Rep Initial': 'D',
    'Meeting Rep Phone': 4107932406,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 508,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 508,
    'Group Name': "Towson Women's",
    'Meeting Rep Name': 'KRISTEN',
    'Meeting Rep Initial': 'K',
    'Meeting Rep Phone': 6178284401,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 508,
    'Group Name': 'Saturday Morning  Maintenance',
    'Meeting Rep Name': 'Neal',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4104568289,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 508,
    'Group Name': 'Texas',
    'Meeting Rep Name': 'JOHN',
    'Meeting Rep Initial': 'O',
    'Meeting Rep Phone': 4104581491,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 508,
    'Group Name': 'Omega',
    'Meeting Rep Name': 'AVON',
    'Meeting Rep Initial': 'T',
    'Meeting Rep Phone': 4436046753,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 509,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 509,
    'Group Name': 'Ashland Wednesday',
    'Meeting Rep Name': 'TREVOR ',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4439550066,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 509,
    'Group Name': 'Riverside Park',
    'Meeting Rep Name': 'Chris',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4106274598,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 509,
    'Group Name': 'Friday Night Village',
    'Meeting Rep Name': 'Art',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4102924572,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 509,
    'Group Name': 'Grow With Us',
    'Meeting Rep Name': 'Walter',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4436534677,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 510,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 510,
    'Group Name': 'What Do You Expect For A Buck',
    'Meeting Rep Name': 'Chuck',
    'Meeting Rep Initial': 'E',
    'Meeting Rep Phone': 4107468606,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 510,
    'Group Name': 'Overlea Monday Night',
    'Meeting Rep Name': 'John',
    'Meeting Rep Initial': 'F',
    'Meeting Rep Phone': 4437908008,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 510,
    'Group Name': 'Elkridge Monday Night',
    'Meeting Rep Name': 'JEFF',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4107076974,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 510,
    'Group Name': 'Early Bird',
    'Meeting Rep Name': 'Tyrone',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4102151386,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 511,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 511,
    'Group Name': 'Oella Tuesday 12&12',
    'Meeting Rep Name': 'JOHN',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4109822729,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 511,
    'Group Name': 'Welcome',
    'Meeting Rep Name': 'Rika',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 6783866455,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 511,
    'Group Name': 'Brooklyn Saturday Morning',
    'Meeting Rep Name': 'Buck',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4436044622,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 511,
    'Group Name': 'Hopkins',
    'Meeting Rep Name': 'Bryn',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4438109502,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/3/2019',
    'Meeting ID': 512,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/10/2019',
    'Meeting ID': 512,
    'Group Name': 'But For The Grace of God',
    'Meeting Rep Name': 'KEVIN',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4435098700,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/17/2019',
    'Meeting ID': 512,
    'Group Name': 'Jacksonville Saturday Morning',
    'Meeting Rep Name': 'Jamie',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4436107261,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/24/2019',
    'Meeting ID': 512,
    'Group Name': 'The Serenity Circle',
    'Meeting Rep Name': 'David',
    'Meeting Rep Initial': 'A',
    'Meeting Rep Phone': 4438349287,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/31/2019',
    'Meeting ID': 512,
    'Group Name': 'Common Solution',
    'Meeting Rep Name': 'Jerry',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4109923876,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/4/2019',
    'Meeting ID': 601,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/11/2019',
    'Meeting ID': 601,
    'Group Name': 'Dundalk',
    'Meeting Rep Name': 'Aaron',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4439777453,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/18/2019',
    'Meeting ID': 601,
    'Group Name': 'Cowenton',
    'Meeting Rep Name': 'TODD',
    'Meeting Rep Initial': 'K',
    'Meeting Rep Phone': 8609663349,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/25/2019',
    'Meeting ID': 601,
    'Group Name': 'LOCH RAVEN',
    'Meeting Rep Name': 'RAY',
    'Meeting Rep Initial': 'L',
    'Meeting Rep Phone': 4436216292,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/4/2019',
    'Meeting ID': 605,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/11/2019',
    'Meeting ID': 605,
    'Group Name': 'MORE ABOUT ALCOHOLISM',
    'Meeting Rep Name': 'LISA ',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4435221927,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/18/2019',
    'Meeting ID': 605,
    'Group Name': 'FREE TO BE ME WOMENS',
    'Meeting Rep Name': 'BETH',
    'Meeting Rep Initial': 'O',
    'Meeting Rep Phone': 6672289405,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/25/2019',
    'Meeting ID': 605,
    'Group Name': 'Bond & Green',
    'Meeting Rep Name': 'CHARLIE',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4439521177,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 701,
    'Group Name': 'Alcohol Recovery',
    'Meeting Rep Name': 'Carlos',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4433401103,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 701,
    'Group Name': 'Shalom',
    'Meeting Rep Name': 'Arnold',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 4104285642,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 701,
    'Group Name': 'Catonsville Courage To Change',
    'Meeting Rep Name': 'Jordan',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4109528986,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 701,
    'Group Name': 'CATONSVILLE YOUNG PEOPLE',
    'Meeting Rep Name': 'Melissa',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 7026770216,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 702,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 702,
    'Group Name': 'Catonsville Beginners',
    'Meeting Rep Name': 'TOM',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4432531309,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 702,
    'Group Name': 'Folly Quarter Tuesday Night',
    'Meeting Rep Name': 'CRAIG',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4439289372,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 702,
    'Group Name': 'Beware of the Four Horsemen',
    'Meeting Rep Name': 'NICK',
    'Meeting Rep Initial': 'H',
    'Meeting Rep Phone': 4438047603,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 703,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 703,
    'Group Name': 'Twenty Four Hours',
    'Meeting Rep Name': 'KENNY ',
    'Meeting Rep Initial': 'C',
    'Meeting Rep Phone': 4439035912,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 703,
    'Group Name': 'The Elevator is Broken',
    'Meeting Rep Name': 'Joyce',
    'Meeting Rep Initial': 'M',
    'Meeting Rep Phone': 4108121341,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 703,
    'Group Name': 'Red Rose',
    'Meeting Rep Name': 'Mary',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4435048201,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 704,
    'Group Name': 'Magothy 12 & 12',
    'Meeting Rep Name': 'WINSLOW ',
    'Meeting Rep Initial': 's',
    'Meeting Rep Phone': 4436045569,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 704,
    'Group Name': 'Daybreak',
    'Meeting Rep Name': 'Hugh',
    'Meeting Rep Initial': 'P',
    'Meeting Rep Phone': 4106270883,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 704,
    'Group Name': 'Southwestern Mid-Day',
    'Meeting Rep Name': 'Steve',
    'Meeting Rep Initial': 'K',
    'Meeting Rep Phone': 4102078389,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 704,
    'Group Name': 'Irvington',
    'Meeting Rep Name': 'Scott',
    'Meeting Rep Initial': 'W',
    'Meeting Rep Phone': 4109253741,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 705,
    'Group Name': '',
    'Meeting Rep Name': '',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': null,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 705,
    'Group Name': 'Fort Smallwood Friday Night Step',
    'Meeting Rep Name': 'Rick',
    'Meeting Rep Initial': 'G',
    'Meeting Rep Phone': 4103200599,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 705,
    'Group Name': 'Harbor City Speakers',
    'Meeting Rep Name': 'PATRICK',
    'Meeting Rep Initial': 'O',
    'Meeting Rep Phone': 4439795329,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 705,
    'Group Name': 'WORKING WITH OTHERS',
    'Meeting Rep Name': 'DANIEL',
    'Meeting Rep Initial': 'S',
    'Meeting Rep Phone': 4437669252,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/5/2019',
    'Meeting ID': 708,
    'Group Name': 'Glen Gardens',
    'Meeting Rep Name': 'RICHARD',
    'Meeting Rep Initial': 'B',
    'Meeting Rep Phone': 4108522602,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/12/2019',
    'Meeting ID': 708,
    'Group Name': 'Triple Twelve',
    'Meeting Rep Name': 'MEGAN',
    'Meeting Rep Initial': 'T',
    'Meeting Rep Phone': 4439864247,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/19/2019',
    'Meeting ID': 708,
    'Group Name': 'OVER THE RAINBOW',
    'Meeting Rep Name': 'EDNA',
    'Meeting Rep Initial': 'R',
    'Meeting Rep Phone': 4435796234,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      ''
  },
  {
    Date: '1/26/2019',
    'Meeting ID': 708,
    'Group Name': 'Waterloo',
    'Meeting Rep Name': 'AARON',
    'Meeting Rep Initial': '',
    'Meeting Rep Phone': 7143574056,
    "New HappinessBrianJ4105914692Phelps LuckPATTEEF4107074398HavenGREG F7177981431MagothySONYAD4438055715O.D.A.T.JENNIFERW4109849855We Ain't RightRayJ4435649670Happy, Joyous and FreeJOHNC4434746402":
      'TimoniumWaterlooLISAAARON'
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
