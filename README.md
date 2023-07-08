# Jammming Codecademy Project

This project was built with create-react-app as part of the Codecademy Full-Stack Development Course.

* I decided to go with the PKCE authorization flow instead of the recommended Implicit grant as the Spotify Documentation recommended this.
* I also added the album art and added a landing page that requires the user to provide permissions before gaining access to the main content.
    - I believe these additions should meet the standard for part two of this project outlined by Codecademy.

There are plenty of things I know I can improve with this project, so please feel free to provide any feedback/criticisms you have.

Currently working on actually becoming involved in the community (hence why I am finally making a project public) and genuinely want to learn/improve as much as I can.

## Project Purpose

The purpose of this project was to gain experience developing and deploying a React app that used APIs to share information

## Technologies Used

- React
- CSS
- Spotify API
    - [Spotify Documentation](https://developer.spotify.com/documentation/web-api)

## Features

- Users can search for songs by song title
- Users can see information about each song, such as title, artist, album, and album art
- Users can export their custom playlist (with custom playlist name) to their personal Spotify account

## Future Updates

- I plan to add a light & dark mode feature
    - Will load based on user settings
    - Button that allows user to change
- Improved General Styling & Design (this is something I am actively trying to work on and improve in all my work)

## Current Known Bugs

- Error with receiving access token upon user first providing permissions
    - Currently requires User to permit access twice
