import React from 'react';

const profiles =[
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '2',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
];

const users = [
  {},
   {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
   {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  ]

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  };


function App () {
   return (
       <ul>  
	<h2>Favorite Movies</h2>
          {/*
          For each object in the profiles array, make a list of JSX elements.
          The map function returns a new array, which will
          only have list elements in it. React will automatically know how to
          render an array of JSX objects.
          */}
         
           
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
