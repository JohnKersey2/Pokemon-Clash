# Pokemon Clash!

## Critical Development Notes

After switch to pokemon API, intended wikipedia functionalities for superheroes no longer works (most pokemon have no individual wiki entrys). Best functionality with wikipedia api would be to link what generation they are in. 

https://www.tcgdex.net/docs could be used to pull up an image of the trading card. https://docs.pokemontcg.io/getting-started/authentication as a backup. If so, find way to add alt text? Placeholder images could be back of pokemon trading cards. Would be cool if you hit confirm and the card turned around into that pokemon's card. If no image, can always pull up pokemon sprite.

Research into random image scrappers has said be careful as it quite often pulls up pornography or highly offensive material. Best avoid. Worst come to worst, we can put an unrelated API. 

## Active Development Notes

If unable to have user only submit, create .catch for confirm event listeners. If there's an error, it does not change local storage. Will only be an issue if user has confirmed sucessfully both times. 

Develop a new use for a second API. 

Develop function to populate a list of pokemon names for the autocomplete feature. If possible, find way to lock selections to only pokemon on that list. 

Find comfortable scaling for text, buttons, and input boxes. 

Check with team to decide if column 1 and 3 can be combined (depends heavily on second API) If not, find Bulma feature to move center tile to left when viewport switches to mobile size. If that doesn't work, see if we can make one 2x2 sized tile on left for fight and two 2x1 tiles on right for confirm buttons. If all else fails, move middle column left in html and deal with slightly less appealing design.

## Final Check Development Notes

Ensure title and header are updated to new names. 

Ensure code is refactored, images and text use accessable features. Remove excess console logs and .js file. 

Update readme, wireframe, screenshot, and ensure repo name gets changed to correct name when finalized

Create presentation and create script for presentation if needed. Make sure everyone knows when they speak. 

## Link to Deployed Project

TBA

## Project Description

Our project is a webpage users can use to compare two pokemon to find out which is stronger. We will be using two APIs. The first API is PokeAPI, which will allow us look up pokemon and some statistics about how strong they are. The second API is "Wikipedia API", which will allow us to take an image from a pokemon's wikipedia entry to display on our webpage, as well as provide a link to their page.

## User Story

AS A user who is discussing pokemon
I WANT to compare which one has is stronger
SO THAT I can use real data and statistics to quickly back up my claims

## Work Flow

GIVEN When I want to compare two pokemon's strengths 
WHEN I type into one of the two text input areas
THEN I will be able to start typing a pokemon's name
WHEN I type a pokemon's name
THEN I will be assisted by autocomplete to ensure I get the correct data
WHEN I have hit the two confirm buttons sucessfully
Then I will be able to click the fight button. 
WHEN I press the fight button
THEN I will be able to read a message telling me which pokemon is stronger

SECOND API WHEN/THENS

## Known Issues

TBA 

Possibly incorrect name error. 

## Development beyond MVP

Displaying of both pokemon's stats on the page for the user to see. 

Random Pokemon Button 

Dark Mode 

Give user small feedback that confirm was hit sucessfully

Messages detailing more than just "X would Win" or "They would Tie". Random messages, or messages with different text based on the magnitude of difference between power levels. 

SECOND API BEYOND MVP

## Future Development

Allowing of multiple pokemon to be grouped together in teams to compare all 6 possible pokemon a trainer can have

Add in pokemon types to adjust stat values to account for weaknesses and resistences 

Adding in pokemon move lists and accounting for turn order to increase accuracy of results

Adding in customizable levels, moves, and other attributes that would affects relative strength

More detailed results messages, such as including what move a pokemon used to "Win" the fight. 

SECOND API 

## Wireframe 

TBA

## Screenshot 

TBA

## Work Division 

Jeff - Utilizing Pokemon API to fetch pokemon data and determine fight results

John - Bulma framework design, pair programming, non-programming tasks 

Faiyaz - Utilizing Pokemon API to autocomplete pokemon names on input forms

Tanner - Utilizing SECOND API 

## Project Requirements 
### Just copying this down so we do not have to look in a different spot for this. 

You and your group will use everything you’ve learned over the past six modules to create a real-world front-end application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:

* Use a CSS framework other than Bootstrap.

* Be deployed to GitHub Pages.

* Be interactive (i.e., accept and respond to user input).

* Use at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources).

* Does not use alerts, confirms, or prompts (use modals).

* Use client-side storage to store persistent data.

* Be responsive.

* Have a polished UI.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository

## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

  * Application uses at least two [server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources)

  * Application uses client-side storage to store persistent data.

  * Application doesn't use JS alerts, prompts, or confirms (uses modals instead).

  * Application uses a CSS framework other than Bootstrap.

  * Application is interactive (accepts and responds to user input)

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using a slide deck.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.

## How to Submit Your Interactive Front-End Project

**Each member of your group** is required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

testing new commit