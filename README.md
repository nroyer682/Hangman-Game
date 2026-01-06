# Hangman Game

An interactive browser-based Hangman game built with vanilla JavaScript, HTML5 Canvas, and CSS. Challenge yourself with words from different categories and try to guess before running out of lives!

![Hangman Game](https://t4.ftcdn.net/jpg/05/17/38/33/360_F_517383341_8nWEFfM1KL3K5LNTjUDrne3x0kZiuxuj.jpg)

## Features

- **Multiple Word Categories**: Choose from 7 different categories:
  - Random - A diverse mix of words
  - Activities - Sports and recreational activities
  - Food - Delicious items from various cuisines
  - Verbs - Action words
  - Nouns - Common objects and concepts
  - Animals - Creatures from around the world
  - Names - Popular first names

- **Visual Hangman Drawing**: Canvas-based progressive drawing that builds with each wrong guess
- **Lives System**: 6 lives represented by hearts that fade as you make incorrect guesses
- **Interactive UI**: Click letter buttons to make guesses
- **Game Over & Win Screens**: Overlay displays showing results and play again option
- **Responsive Design**: Clean, centered layout with gradient background

## How to Play

1. Click the "Play" button on the home screen
2. Select a word category
3. Click on letter buttons to guess letters in the hidden word
4. Each incorrect guess:
   - Removes one heart/life
   - Adds a body part to the hangman drawing
5. Win by revealing all letters before running out of lives
6. Lose if the hangman is completely drawn (6 wrong guesses)

## Installation & Setup

This is a simple static web application that requires no build process or dependencies.

### Option 1: Direct File Opening
1. Clone or download this repository
2. Navigate to the `Hangman` folder
3. Open `index.html` in your web browser

### Option 2: Using a Local Server
```bash
# Clone the repository
git clone https://github.com/nroyer682/Hangman-Game.git

# Navigate to the Hangman directory
cd Hangman-Game/Hangman

# Start a simple HTTP server (Python 3)
python -m http.server 8000

# Or use Node.js http-server
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Technologies Used

- **HTML5**: Structure and Canvas element for drawing
- **CSS3**: Styling, animations, and gradient backgrounds
- **Vanilla JavaScript**: Game logic, DOM manipulation, and Canvas API

## Project Structure

```
Hangman-Game/
├── Hangman/
│   ├── index.html      # Main HTML structure
│   ├── main.js         # Game logic and event handlers
│   └── style.css       # Styling and animations
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Game Mechanics

- **Word Selection**: Random selection from arrays of 20-100+ words per category
- **Lives**: Start with 6 lives (hearts)
- **Drawing Progression**: 
  1. Head
  2. Body
  3. Left arm
  4. Right arm
  5. Left leg
  6. Right leg (game over)
- **Visual Feedback**: Hearts flash red before turning gray when lost

## Author

Created by Natalie Royer

## License

This project is open source and available for educational purposes.
