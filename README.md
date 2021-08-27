# vibe
Playlists made simple

![image](https://user-images.githubusercontent.com/63977819/131040542-c9e43ae2-b16d-4b26-a418-b97756d76a7e.png)

# Background and Overview

vibe is a web application that allows users to take a quiz that determines their current mood and personality and uses the results to return a relevant Spotify playlist.  Users can then save their vibes in their profile for future reference.  Additionally, users can simply fetch a randomized playlist of any genre should the they not want to take a quiz.

![sign in](https://user-images.githubusercontent.com/63977819/131042366-333c9abf-85c0-4046-b866-472ad41fd358.gif)

# Technologies Stack
* MongoDB
* Express
* React/Redux
* Node.js
* Spotify API

# Technologies and Challenges

## MongoDB and Express

MongoDB and Express allows our users to save the playlists the receive as a result of the quiz should they want to listen to them again in the future.  These playlists are always available once the user is logged in, and should they want to reduce the amount of playlists they have saved, they have the option to delete playlists from their account as well. 

![image](https://user-images.githubusercontent.com/63977819/131043384-66efa3d8-462c-4f82-a515-027f2dd84345.png)

## React/Redux and Spotify API
  The Spotify API presented an interesting challenge. Users can use the spotify app via the OAuth process where they log in with their own spotify credentials, and are in return given an access token that does not expire. For us we wanted people to be able to interact with our application even if they did NOT have a spotify account. This means that every time we make a spotify request we have to request a new token to take with us, because Spotify tokens do not last more than 30 minutes. 

![image](https://user-images.githubusercontent.com/76980320/131161517-a287f301-3cca-4423-a24e-a24a4893c91e.png)


With the user's answers from the quiz about their current mood and hobbies, the responses are then sent to the Spotify API to find a playlist that will best match their current 'vibe'.  

![image](https://user-images.githubusercontent.com/63977819/131043294-2f9e85b1-33dd-4366-b69a-904e35ad2558.png)
![image](https://user-images.githubusercontent.com/63977819/131043329-ffd67888-4944-4aad-880c-e5f30cdaee45.png)
