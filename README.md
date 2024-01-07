# Meet

## Description
The goal of this project is to build a serverless, progressive web application (PWA) in React using the test-driven development (TDD) methodology. The app consumes the Google Calendar API to return upcoming events.

## Scenarios and user stories

### Feature: Show/hide event details
User Story: As a user, I should be able to call up or hide event details so that the info displayed is the most relevant and timely. 

 Scenario 1: An event element is collapsed by default.
  - Given the user could not see events displayed, when they interact with the element, then they have the option to open it or leave it as is.

Scenario 2: User can expand an event to see details. 
 - Given the user wanted to read more about an event, when they click on the event, then they can have the option to find more specific information concerning the event.

 Scenario 3: User can collapse an event to hide details. 
 - Given the user may already have perused the events interesting to them, when they collapse an event element, then they can unclutter their user interface.

 ### Feature: Specify number of events
 User Story: As a user, I should be able to specify how many events I want displayed so that I am afforded the ability to customize my user experience suited to my preferences. 

Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
- Given the user has not provided a number of events to display, when they open the app, then it is ideal that there is a default number of events to show what the app has to offer.

Scenario 2:  User can change the number of events displayed.
- Given the user wanted more or less events on display, when they update their preferences, then they can decide how much info they want displayed.

### Feature: Use the App When Offline
User Story: As a user, I should be able to enjoy seamless interaction with the app so that I am able to navigate through the city to my events with the most ease. 

Scenario 1: Show cached data when there’s no internet connection. 
- Given user did not have a stable internet or wifi connection, when they still have access to the cached data, then they can decide, even spontaneously, to attend an event in their vicinity. 

Scenario 2: Show error when user changes search settings (city, number of events).
- Given the user made changes to their search settings, when they discover events from a different city being displayed, then they can go back and edit settings to display search results specific to their current location.

### Feature: Display Charts Visualizing Event Details
User Story: As a user, I should be able to see a graphic representation of the number of upcoming events in each city, so that I am able to create my own wishlist and weigh my options accordingly. 

Scenario 1: Show a chart with the number of upcoming events in each city.
- Given the user planned an out of town trip for 10 days, when they are looking for entertainment, then it is possible to sign up for an event in advance that will conincide with their travels.

