# WANDERER. 
Travel-themed quiz designed to test players' knowledge of countries, famous personalities, landmarks, and traditional dishes from around the world. The core objectives are:

#### Educational Experience: Players learn about different countries, their iconic landmarks, famous individuals, and culinary traditions.
#### Engagement & Fun: The game combines quiz elements with images, fun facts, and interactive gameplay to keep the user engaged.
#### Score-Based Progression: Players advance by answering clues correctly, with the goal of accumulating points and completing rounds.

## Theme: The game’s theme revolves around travel and global exploration, offering players a virtual journey across various countries by connecting them with local dishes, notable personalities, and famous landmarks. The theme emphasizes both cultural discovery and geography.



# Main Page Visualization

![screenshot](screenshot-main.png)

# General Design and Logic 

### 1. User Interface (UI) Design:
* Responsive Design: The game should be responsive to different screen sizes, providing a good user experience on both desktop and mobile devices.
* Visual Appeal: Images of dishes, people, and landmarks are important for user engagement. The design must maintain consistency and clarity in displaying these visuals.
* Feedback System: Visual and audio feedback after each guess (correct or incorrect) is necessary to keep users motivated and informed.
### 2. Gameplay Functionality:
* Clue Display: The game should randomly display clues (dish, person, or place) with corresponding images and titles.
* Progress Tracking: The game should track the user’s score and the round they’re on, providing progression indicators.
* Answer Checking: The game should check the user’s input against the correct answer (country) and give feedback accordingly.
Sound Effects: Correct and incorrect sounds enhance the experience, providing audio feedback for the player’s actions.
### 3. Content Management:
* Diverse Content: A collection of clues (countries, dishes, landmarks, people, and fun facts) should be sufficiently diverse and informative, ensuring players learn while playing.
* Flag Images: Flag images for each country should be available to display after correct answers



## Event Handlers and logical descriptions

![screenshot](images/submit.png)
Purpose: This event handler is triggered when the user clicks the "Submit Answer" button.
Functionality: It checks the user's input (the country they think is associated with the clue) against the correct answer (the actual country). If the answer is correct, it updates the score, provides feedback, plays a "correct" sound, and moves to the next clue. If the answer is incorrect, it plays a "wrong" sound and displays incorrect feedback, prompting the user to try again.
Flow:
* Grabs the user's input.
* Compares it with the correct answer.
* Displays feedback based on the result.
* Updates the score and proceeds to the next clue after a delay.

![screenshot](images/pass.png)
Purpose: This event handler is activated when the user clicks the "Pass Question" button.
Functionality: When the user chooses to skip the current clue, this event handler handles the skip logic by displaying a message indicating the question was skipped and moves to the next clue.
Flow:
* Displays feedback saying "Question skipped!".
* Moves to the next clue after a short delay, ensuring the game continues without interruption.

![screenshot](images/next.png)
Purpose: This event handler is triggered when the user clicks the "Next Clue" button.
Functionality: It allows the user to proceed to the next stage of the current clue (from dish to person or from person to place). If the current stage is not the last one (place), it advances the clue by incrementing the currentStage variable and updates the display to show the next piece of the clue.
Flow:
* Checks if the user is not on the last clue stage.
* Increases the currentStage to move to the next clue type.
* Updates the display (image and title) to reflect the new clue information.
These event handlers are key in controlling the user interaction with the game, allowing them to check answers, skip questions, and navigate through the stages of each clue.









