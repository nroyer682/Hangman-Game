function activateButton() {
    const playBtn = document.getElementById("playBtn");
    const home = document.getElementById("home");
    const randomBtn = document.getElementById("randomBtn");
    const categories = document.getElementById("categories");
    const gameArea = document.getElementById("game-area");
    const wordLengthElement = document.getElementById("wordLength");
    const heartElements = document.querySelectorAll(".heart");
    const gameOverOverlay = document.getElementById("gameOverOverlay");
    const gameWord = document.getElementById("gameWord");
    const playAgainBtn = document.getElementById("playAgainBtn");
    const winOverlay = document.getElementById("winOverlay");
    const winWord = document.getElementById("winWord");
    const winPlayAgainBtn = document.getElementById("winPlayAgainBtn");

    const canvas = document.getElementById("hangmanCanvas");
    const context = canvas.getContext("2d");

    const activityBtn = document.getElementById("activityBtn");
    const foodBtn = document.getElementById("foodBtn");
    const verbBtn = document.getElementById("verbBtn");
    const nounBtn = document.getElementById("nounBtn");
    const animalBtn = document.getElementById("animalBtn");
    const nameBtn = document.getElementById("nameBtn");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   
    var randomWords = [
        'SUGAR', 'FLOOR', 'BREAKFAST', 'SHARK', 'STORE', 'LULLABY', 'CONTAINER', 'DOORBELL', 'SHOES', 'BASKET', 'SUBJECT', 
        'SCIENCE', 'BREAD', 'EASTER', 'BOWLING', 'DANCE', 'TRADE', 'GAME', 'FISH', 'BLAST', 'BAKE', 'COURSE', 'SCHOOL', 'BALLET',
        'BREAKFAST', 'BABY', 'CHRISTMAS', 'FUNNY', 'BOUNCE', 'READ', 'MATHEMATICS', 'BIOLOGY', 'CHEMISTRY', 'STARE', 'BREAK', 'PLATE',
        'DEER', 'ENVELOPE', 'CARD', 'TREE', 'LIGHT', 'SWITCH', 'STOVE', 'KITCHEN', 'PANTRY', 'FOOD', 'DOOR', 'CARPET', 'WOOD', 'FLOOR',
        'FLAKE', 'SKIN', 'CARE', 'DOUBLE', 'SINGLE', 'SPLASH', 'POOL', 'ROMANCE', 'BROTHER', 'SISTER', 'MOTHER', 'FATHER', 'DARE',
        'PLAY', 'FORT', 'FIRST', 'SECOND', 'THIRD', 'EIGHT', 'EATING', 'DOODLE', 'ZAPPED', 'GREAT', 'WHITE', 'BLUE', 'GREEN', 'PURPLE',
        'PINK', 'BLACK', 'BROWN', 'RED', 'RACE', 'RACECAR', 'ROTATE', 'TWIRL', 'TWIST', 'LEAP', 'LAST', 'LATE', 'BIRTH', 'BATH', 'SHOWER',
        'BRUSH', 'BRANCH', 'BRUNCH', 'BROUGHT', 'LOVER', 'LOVELY', 'COST', 'EXPENSIVE', 'SHOPPING', 'MONEY', 'PRICE', 'LAUNDRY', 'TRAIT', 
        'DICE', 'BLANKET', 'MATRESS', 'SHEET', 'ICICLE', 'SNOW', 'BLIZZARD', 'RAIN', 'DAMP', 'JACKET', 'SOCKS', 'MITTENS', 'KITTENS', 'KITE',
        'DOGS', 'LIKELY', 'GOOD', 'BRACE', 'FASHION', 'SHOW', 'PANTS', 'SHIRT', 'SKIING', 'CRATE', 'HEART', 'SQUARE', 'DIAMOND', 'RING',
        'NECKLACE', 'ANKLET', 'BRACELET', 'EARRING', 'CIRCLE', 'CUBE', 'CYLINDER', 'CALCULUS', 'DISCRETE', 'PROGRAMMING', 'COMPUTER',
        'SYNTAX', 'MORPHOLOGY', 'PSYCHOLOGY', 'PHONOLOGY', 'PHONEME', 'SENTENCE', 'LIST', 'PROBLEM', 'SOLVE', 'WORK', 'DIFFICULT',
        'PRESS', 'BLESS', 'HOSPITAL', 'SPACE'
    ];

    var activityWords = [
        'BOWLING', 'HOCKEY', 'SOCCER', 'BASKETBALL', 'HIKING', 'FISHING', 'RUNNING', 'DOGDEBALL', 'RACING', 'KARATE', 
        'BOXING', 'FIGHTING', 'VOLLEYBALL', 'BASEBALL', 'TENNIS', 'SWIMMING', 'PICKLEBALL', 'TABLE TENNIS', 'BADMINTON',
        'LACROSSE'
    ];

    var foodWords = [
        'PASTA', 'SUSHI', 'PIZZA', 'STEAK', 'FRIES', 'BURGER', 'CHICKEN WINGS', 'SCRAMBLED EGGS', 'HASHBROWNS', 'POTATOE WEDGES', 'PORK RIBS', 'MILK',
        'CHOCOLATE MILK', 'BUTTER', 'SALMON', 'CHEESE', 'KETCHUP', 'APPLE JUICE', 'ORANGE JUICE', 'CEREAL', 'ALMOND MILK', 'COCONUT MILK', 'SOY MILK',
        'CRANBERRY JUICE', 'JUICE BOX', 'BROCCOLI', 'SOFT DRINK', 'CAULIFLOWER', 'COOKIE', 'APPLE', 'CAKE', 'BUTTER TART', 'BAGEL', 
        'BREAD', 'BANANA BREAD', 'GARLIC BREAD', 'CORNBREAD', 'BREADSTICK', 'PRETZEL', 'FLATBREAD', 'CABBAGE', 'BURRITO', 'BAKED BEANS',
        'PANCAKE', 'WAFFLE', 'CARROT', 'DONUT', 'BANANA', 'APRICOT', 'DRAGONFRUIT', 'CHERRY', 'ORANGE', 'KIWI', 'AVOCADO', 'WATERMELON',
        'CANTALOUPE', 'PAPAYA', 'PEAR', 'PEACH', 'STRAWBERRY', 'MANGO', 'BLUEBERRY', 'RASPBERRY', 'BLACKBERRY', 'CRANBERRY', 'GRAVY',
        'POUTINE', 'MANDARINE', 'PINEAPPLE', 'CORN', 'FRIED RICE', 'ICE CREAM', 'CHOCOLATE', 'KEBAB', 'SOUP', 'TOMATO', 'POTATOE',
        'ONION RINGS', 'ONION', 'APPLE PIE', 'CREAM PIE', 'PUMPKIN PIE', 'PUDDING', 'RAMEN', 'SANDWICH', 'EGG ROLL', 'HOT DOG',
        'CHILI DOG', 'PEANUT BUTTER', 'SAUCE', 'TOMATO SAUCE', 'SPINACH', 'STEW', 'TACO', 'TORTILLA', 'NACHO', 'YOGURT'
    ];

    var verbWords = [
        'RUN', 'JUMP', 'EAT', 'DRINK', 'SLEEP', 'WAKE', 'READ', 'WRITE', 'DRAW', 'PAINT', 'SING', 'DANCE', 'SWIM', 'DRIVE', 'FLY', 
        'WALK', 'TALK', 'LISTEN', 'WATCH', 'THINK', 'CREATE', 'BUILD', 'BREAK', 'FIX', 'OPEN', 'CLOSE', 'PUSH', 'PULL', 'LIFT', 'DROP', 
        'THROW', 'CATCH', 'CLIMB', 'FALL', 'TURN', 'STOP', 'START', 'BEGIN', 'FINISH', 'PLAY', 'WORK', 'STUDY', 'LEARN', 'TEACH', 'HELP', 
        'MOVE', 'WAIT', 'TRY', 'WIN', 'LOSE', 'BUY', 'SELL', 'PAY', 'SAVE', 'SPEND', 'COOK', 'BAKE', 'CLEAN', 'WASH', 'DRY', 'CUT', 'HIT', 
        'KICK', 'JOG', 'CHASE', 'HIDE', 'SEEK', 'SEARCH', 'FIND', 'KEEP', 'HOLD', 'RELEASE', 'ENTER', 'EXIT', 'ARRIVE', 'LEAVE', 'FOLLOW', 
        'LEAD', 'SEND', 'RECEIVE', 'CALL', 'ANSWER', 'ASK', 'TELL', 'SHOW', 'CHANGE', 'CHOOSE', 'DECIDE', 'AGREE', 'REFUSE', 'ALLOW', 
        'DENY', 'PROMISE', 'FORGET', 'REMEMBER', 'IMAGINE', 'BELIEVE', 'DOUBT', 'WONDER', 'FEEL', 'SMILE'
    ];

    var nounWords = [
        'HOUSE', 'CAR', 'TREE', 'DOG', 'CAT', 'BIRD', 'PHONE', 'COMPUTER', 'TABLE', 'CHAIR', 'BOOK', 'PEN', 'PENCIL', 'BAG', 'SHOE', 
        'SHIRT', 'PANTS', 'HAT', 'COAT', 'CLOCK', 'WATCH', 'KEY', 'DOOR', 'WINDOW', 'FLOOR', 'WALL', 'CEILING', 'ROOM', 'KITCHEN', 
        'BATHROOM', 'BEDROOM', 'BED', 'PILLOW', 'BLANKET', 'LAMP', 'MIRROR', 'CUP', 'PLATE', 'FORK', 'SPOON', 'KNIFE', 'BOTTLE', 
        'FOOD', 'DRINK', 'WATER', 'COFFEE', 'TEA', 'MILK', 'BREAD', 'FRUIT', 'APPLE', 'BANANA', 'ORANGE', 'MEAT', 'CHEESE', 'EGG', 
        'CAKE', 'COOKIE', 'CANDY', 'SUGAR', 'SALT', 'PEPPER', 'MONEY', 'COIN', 'WALLET', 'CARD', 'BILL', 'STORE', 'MARKET', 'SHOP', 
        'CITY', 'TOWN', 'STREET', 'ROAD', 'BRIDGE', 'PARK', 'SCHOOL', 'CLASS', 'TEACHER', 'STUDENT', 'FRIEND', 'FAMILY', 'MOTHER', 
        'FATHER', 'SISTER', 'BROTHER', 'BABY', 'CHILD', 'PERSON', 'PEOPLE', 'NAME', 'FACE', 'HAND', 'ARM', 'LEG', 'FOOT', 'HEAD', 
        'EYE', 'EAR', 'NOSE', 'MOUTH', 'HEART', 'BRAIN', 'TIME', 'DAY', 'NIGHT', 'WEEK', 'YEAR', 'SUN', 'MOON', 'STAR', 'SKY', 'RAIN', 
        'SNOW', 'WIND', 'FIRE', 'WATER', 'EARTH', 'AIR', 'GAME', 'MUSIC', 'SONG', 'MOVIE', 'PICTURE', 'PHOTO', 'COLOR', 'SHAPE', 
        'CIRCLE', 'SQUARE', 'TRIANGLE'
    ];

    var animalWords = [
        'DOG', 'CAT', 'HORSE', 'COW', 'PIG', 'SHEEP', 'GOAT', 'CHICKEN', 'DUCK', 'GOOSE', 'TURKEY', 'BIRD', 'FISH', 'SHARK', 'WHALE', 
        'DOLPHIN', 'OCTOPUS', 'CRAB', 'LOBSTER', 'SEAL', 'OTTER', 'BEAR', 'WOLF', 'FOX', 'DEER', 'RABBIT', 'SQUIRREL', 'MOUSE', 'RAT', 
        'HAMSTER', 'GUINEA PIG', 'HORSEFLY', 'BAT', 'LION', 'TIGER', 'LEOPARD', 'CHEETAH', 'JAGUAR', 'PANTHER', 'ELEPHANT', 'RHINOCEROS', 
        'HIPPOPOTAMUS', 'GIRAFFE', 'ZEBRA', 'MONKEY', 'APE', 'GORILLA', 'CHIMPANZEE', 'BABOON', 'SNAKE', 'LIZARD', 'TURTLE', 'CROCODILE', 
        'ALLIGATOR', 'FROG', 'TOAD', 'SALAMANDER', 'NEWT', 'SPIDER', 'ANT', 'BEE', 'WASP', 'BUTTERFLY', 'MOTH', 'BEETLE', 'LADYBUG', 
        'DRAGONFLY', 'FLY', 'MOSQUITO', 'ROACH', 'SNAIL', 'SLUG', 'WORM', 'STARFISH', 'SEAHORSE', 'JELLYFISH', 'PENGUIN', 'OSTRICH', 
        'EAGLE', 'HAWK', 'OWL', 'FALCON', 'PARROT', 'CANARY', 'FINCH', 'ROBIN', 'SPARROW', 'PEACOCK', 'SWAN', 'FLAMINGO', 'CAMEL', 
        'LLAMA', 'ALPACA', 'KANGAROO', 'KOALA', 'WALLABY', 'PANDA', 'RED PANDA', 'RACCOON', 'SKUNK', 'BADGER', 'OTTER', 'WEASEL', 'MINK'
    ];

    var nameWords = [
        'ANNA', 'EMMA', 'OLIVIA', 'AVA', 'SOPHIA', 'ISABELLA', 'MIA', 'AMELIA', 'CHARLOTTE', 'GRACE', 'LILY', 'HANNAH', 'ELLA', 'ZOE', 
        'CHLOE', 'NORA', 'LUCY', 'SARAH', 'EMILY', 'ABIGAIL', 'MADISON', 'RACHEL', 'REBECCA', 'JESSICA', 'LAUREN', 'MEGAN', 'KATHERINE', 
        'VICTORIA', 'NATALIE', 'SAMANTHA', 'ALEXANDER', 'BENJAMIN', 'DANIEL', 'JAMES', 'MATTHEW', 'MICHAEL', 'DAVID', 'JOSEPH', 'ANDREW', 
        'JOHN', 'CHRISTOPHER', 'RYAN', 'NICHOLAS', 'JONATHAN', 'ETHAN', 'NOAH', 'LIAM', 'LOGAN', 'JACOB', 'WILLIAM', 'HENRY', 'SAMUEL', 
        'LUCAS', 'OLIVER', 'THEODORE', 'JACK', 'LEO', 'SEBASTIAN', 'ELIJAH', 'GABRIEL', 'ISAAC', 'CALEB', 'ADAM', 'AARON', 'NATHAN', 'DYLAN', 
        'KEVIN', 'BRIAN', 'JUSTIN', 'TYLER', 'JASON', 'ERIC', 'MARK', 'PAUL', 'LUKE', 'JORDAN', 'ALEX', 'CASEY', 'TAYLOR', 'MORGAN', 
        'RILEY', 'JAMIE', 'PARKER', 'SKYLER', 'QUINN', 'ROWAN', 'HARPER', 'AUSTIN', 'COOPER', 'HUNTER', 'MASON', 'CARTER', 'COLIN', 'OWEN', 
        'EVAN', 'IAN', 'BRAD', 'SCOTT', 'ADRIAN', 'MARTIN', 'SIMON', 'PETER', 'THOMAS', 'GEORGE', 'EDWARD', 'FELIX', 'LEON', 'VICTOR', 'MAX', 
        'NINA', 'IRIS', 'CLARA', 'JULIA', 'MARIA', 'SOFIA', 'ELENA', 'PAULA', 'MONICA', 'DIANA', 'VALERIA', 'ALINA', 'KATIA', 'TATIANA', 'OLGA', 
        'IVAN', 'SERGEI', 'MIKHAIL', 'ALEXEI', 'DMITRI', 'NIKITA', 'NATALIE', 'NICOLE', 'STEFAN'
    ];

    let wordChosen = "";
    let revealed = []; // array of characters 
    let wrongGuesses = 0;
    const MAX_WRONG = 6;

    function renderWord() {
        wordLengthElement.textContent = revealed.join(" ");
    }

    function resetAlphabet() {
        for (const letter of alphabet) {
            const btn = document.getElementById(letter);
            btn.classList.remove("letter-disabled");
        }
    }

    function disableAllLetters() {
        for (const letter of alphabet) {
            document.getElementById(letter).classList.add("letter-disabled");
        }
    }

    function showGameOver() {
        // delay overlay
        setTimeout(() => {
            gameWord.textContent = `Word: ${wordChosen}`;
            gameOverOverlay.classList.remove("hidden");
        }, 800);
        
    }

    function hideGameOver() {
        gameOverOverlay.classList.add("hidden");
    }

    function showWin() {
        setTimeout(() => {
            winWord.textContent = `Word: ${wordChosen}`;
            winOverlay.classList.remove("hidden");
        }, 800);
    }

    function hideWin() {
        winOverlay.classList.add("hidden");
    }

    function drawGallows() {
        context.lineWidth = 4;
        context.strokeStyle = "#000";

        // base
        context.beginPath();
        context.moveTo(20, 230);
        context.lineTo(180, 230);
        context.stroke();

        // pole
        context.beginPath();
        context.moveTo(60, 230);
        context.lineTo(60, 20);
        context.stroke();

        // top beam
        context.beginPath();
        context.moveTo(60, 20);
        context.lineTo(150, 20);
        context.stroke();

        // rope
        context.beginPath();
        context.moveTo(150, 20);
        context.lineTo(150, 55);
        context.stroke();
    }

    function drawHangman(step) {
        context.lineWidth = 4;
        context.strokeStyle = "#000";

        // draw head
        if (step >= 1) {
            context.beginPath();
            context.arc(150, 80, 25, 0, Math.PI * 2);
            context.stroke();
        }

        // draw body
        if (step >= 2) {
            context.beginPath();
            context.moveTo(150, 105);
            context.lineTo(150, 165);
            context.stroke();
        }

        // draw left arm
        if (step >= 3) {
            context.beginPath();
            context.moveTo(150, 125);
            context.lineTo(120, 145);
            context.stroke();
        }

        // draw right arm
        if (step >= 4) {
            context.beginPath();
            context.moveTo(150, 125);
            context.lineTo(180, 145);
            context.stroke();
        }

        // draw left leg
        if (step >= 5) {
            context.beginPath();
            context.moveTo(150, 165);
            context.lineTo(125, 200);
            context.stroke();
        }

        // draw right leg
        if (step >= 6) {
            context.beginPath();
            context.moveTo(150, 165);
            context.lineTo(175, 200);
            context.stroke();
        }
    }

    function drawFinalFrame() {
        drawHangman(MAX_WRONG);
        context.lineWidth = 2;

        // draw left eye
        context.beginPath();
        context.moveTo(140, 70);
        context.lineTo(146, 76);
        context.moveTo(146, 70);
        context.lineTo(140, 76);
        context.stroke();

        // draw right eye
        context.beginPath();
        context.moveTo(154, 70);
        context.lineTo(160, 76);
        context.moveTo(160, 70);
        context.lineTo(154, 76);
        context.stroke();
    }

    function updateLives() {
        heartElements.forEach((heart, index) => {
            if (index < wrongGuesses) {
                heart.classList.add("lost");
            }
            else {
                heart.classList.remove("lost");
            }
        });
    }

    function startGameWithWord(word) {
        wordChosen = word;
        revealed = Array(wordChosen.length).fill("_");

        // reset display each new game
        resetAlphabet();
        renderWord();

        wrongGuesses = 0;

        heartElements.forEach(heart => {
            heart.classList.remove("lost");
            heart.classList.remove("flash");
        });
        updateLives();
        hideGameOver();
        hideWin();

        context.clearRect(0, 0, canvas.width, canvas.height);
        drawGallows();

        // show game
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
    }

    function handleGuess(letter, btn) {
        btn.classList.add("letter-disabled");

        let found = false;

        for (let i = 0; i < wordChosen.length; i++) {
            if (wordChosen[i] === letter) {
                revealed[i] = letter;
                found = true;
            }
        }

        // wrong guess
        if (!found) {
            wrongGuesses++;
            const lostIndex = MAX_WRONG - wrongGuesses;

            // flash lost hearts
            if (lostIndex >= 0) {
                const heart = heartElements[lostIndex];

                heart.classList.add("flash");

                setTimeout(() => {
                    heart.classList.remove("flash");
                    heart.classList.add("lost");
                }, 400);
            }

            drawHangman(wrongGuesses);

            if (wrongGuesses >= MAX_WRONG) {
                // Gave over
                drawFinalFrame();
                disableAllLetters();
                showGameOver();
            }
        }
        
        renderWord();

        if (!revealed.includes("_")) {
            disableAllLetters();
            showWin();
        }
    }


    playBtn.addEventListener("click", function() {
        // hides the home page
        home.classList.remove("active");
        home.classList.add("hidden");

        // shows categories
        categories.classList.remove("hidden");
        categories.classList.add("active");

    });

    randomBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * randomWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(randomWords[number]);
    });

    activityBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * activityWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(activityWords[number]);
    });

    foodBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * foodWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(foodWords[number]);
    });

    verbBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * verbWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(verbWords[number]);
    });

    nounBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * nounWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(nounWords[number]);
    });

    animalBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * animalWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(animalWords[number]);
    });

    nameBtn.addEventListener("click", function() {
        // hides categories
        categories.classList.remove("active");
        categories.classList.add("hidden");

        const number = Math.floor(Math.random() * nameWords.length);
        
        // Shows the game area
        gameArea.classList.remove("hidden");
        gameArea.classList.add("active");
        startGameWithWord(nameWords[number]);
    });

    for (const letter of alphabet) {
        const btn = document.getElementById(letter);
        btn.addEventListener("click", () => handleGuess(letter, btn));
    }

    playAgainBtn.addEventListener("click", function () {
        const number = Math.floor(Math.random() * randomWords.length);
        startGameWithWord(randomWords[number]);
    });

    winPlayAgainBtn.addEventListener("click", function () {
        const number = Math.floor(Math.random() * randomWords.length);
        startGameWithWord(randomWords[number]);
    });
}