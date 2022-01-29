import React from 'react';

const profiles =[
  {
    userID: 0,
    favoriteMovieID: 1,
  },
  {
    userID: 1,
    favoriteMovieID: 0,
  },
];

const users = [
   {
    name: 'Jane Cruz',
    userName: 'coder',
  },
   {
    name: 'Matthew Johnson',
    userName: 'mpage', 
  }
  ]

const movies = [
   {
    name: 'Planet Earth 1',
  },

   {
    name: 'Selma',
  },
]


function App () {
   return (
       <ul>  
	<h2>Favorite Movies</h2>
               
          { profiles.map( (e) => ( 
              <li >
            
               {users[e.userID].name}'s favorite movie is "{movies[e.favoriteMovieID].name}".
              </li>

                
            )
           ) 
          }
      </ul>
    );
  }




export default App;
