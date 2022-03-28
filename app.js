/**
 * * 1st thing you want to do is tell JS the width of the grid.
 * * by using querySelector, we are picking out elements from the HTML
 * * so we may use it in our JS file. Do the same thing using getElementById 
 * * to get the score, and store it in scoreDisplay.
 */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 28 //* 28 X 28 = 784 squares

    // TODO layout of grid and what is in the squares
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    //* const squares array is empty, will be pushing items with the createBoard function
    const squares = []

    //~ Legend for the inside of the const layout array
    //~ 0 - pac-dot
    //~ 1 - wall
    //~ 2 - ghost-lair
    //~ 3 - power-pellet
    //~ 4 - empty

    //* draw the grid and render interface utilizing a for loop
    //* createElement JS method
    //* createElement will create a div for all 784 squares
    //* appendChild JS method
    //* appendChild will now places these new div squares into our grid
    //* push square into a new array called squares
    function createBoard() {
        for (let i=0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            //* add layout to the board 
            //* after the squares have been created, the styling is added
            //* whatever i deeply equals to, this if statement will add a class name to it for styling purposes
            if(layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
        }
    }
    createBoard()

    //* starting position of pac-man, this is a position based on the index array
    //* passing through pacmanCurrentIndex, we add the class "pac-man" to the squares array, literally just passing a number through
    let pacmanCurrentIndex = 490

    squares[pacmanCurrentIndex].classList.add('pac-man')

    //* move pac-man with key codes, using switch statements, we will assign a movement to each arrow key on the keyboard,
    //* start by removing the current pac-man from the square we are currently in,

    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man')

        switch(e.keyCode) {
        //* keycode 37: Arrow Left
        //* if you press a key, with the keycode 37, left arrow key, you are checking if pac-man is in a square where the number 
        //* is divisible by the width of 28 and does not leave a remainder of O, if this is true, move pac-man left
        //* "-=" is a Subtraction Assignment Operator: subtracts from its current value
        case 37:
            if(pacmanCurrentIndex % width !== 0 
                && !squares[pacmanCurrentIndex -1].classList.contains('wall') 
                && !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')) 
                pacmanCurrentIndex -=1
            break
            //* keycode 38: Arrow Up
            //* for case 38, if you press the up arrow on the keyboard, if pac-man is currently in a square where the index number,
            //* if you take away 28 and it is greater than zero, it means you are allowed to keep moving up, or technically one whole
            //* width down the array
            //* double and ("&&") is there to check if both statements are true
            //* if both statements are true, we can then execute our if statement
            //* therefor if pacman's width is divisible
            case 38:
                if(pacmanCurrentIndex - width >= 0 
                    && !squares[pacmanCurrentIndex -width].classList.contains('wall') 
                    && !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')) 
                    pacmanCurrentIndex -=width
                break
                //* keycode 39: Arrow Right
                //* "+=" is an Addition Assignment Operator: adds to its current value
                case 39:
                    if(pacmanCurrentIndex % width < width -1 
                        && !squares[pacmanCurrentIndex +1].classList.contains('wall') 
                        && !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')) 
                        pacmanCurrentIndex +=1
                    break
                    //* keycode 40: Arrow Down
                    case 40:
                        if(pacmanCurrentIndex + width < width * width 
                            && !squares[pacmanCurrentIndex +width].classList.contains('wall')
                            && !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')) 
                            pacmanCurrentIndex +=width
                        break
        }
        squares[pacmanCurrentIndex].classList.add('pac-man')

        //TODO pacDotEaten()
        //TODO powerPelletEaten()
        //TODO checkForGameOver()
        //TODO checkForWin()
    }

    //* adding an addEventListener to the file, passing through keyup and the function that we just written
    document.addEventListener('keyup', movePacman)

}

)