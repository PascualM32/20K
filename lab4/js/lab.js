// This is the javascript file for Lab 4 which focused on Pseudocoding and Problem-solving.
// This lab serves as an introdcution to Pseudocoding. We chose to create pseudocode the instructions for making guacamole. My partner and I created the pseudocode to then, convert it into Javascript comments. This lab also served as practice for problem solving when coding.
// @link   https://pascualm32.github.io/art101/lab4/
// @file   This is the javascript file for Lab 4: Pseudocoding and Problem-solving.
// @author Pascual Martinez & Will Whitty.
// @since  10.13.21

// Outline/Pseudocode for everyday task:
// Making guacamole:
  // Buy the necessary ingredients
      // Buy avocados
      // Buy limes
      // Buy cilantro
      // Buy tomatoes
      // Buy jalapeños
      // Buy salt
  // Prepare ingredients
      // Dice tomatoes and jalapeños and put in a	bowl to the side
      // Cut limes in half for easy squeezing
      // Separate cilantro  leaves from stems
  // Mash avocados in bowl
  // Add the salt, lime, diced tomatoes, diced jalapeños, and cilantro to the bowl
  // Mix ingredients together until you have reach your desired consistency for guacamole
      // We recommend smooth with slight chunkiness but go wild!
  // Serve and enjoy as you like!

// Outline/Pseudocode for a computer task:
// Connect-Four
  // Create dynamically created 2D array of a grid with 6 equal rows 7 equal columns with continuous memory allocation
  // Print the 42-block grid to screen
  // Create a method for determining if blocks are full or empty
  // Create player pieces circle and cross and initialise both as free for all blocks
  // Initialise all blocks as empty
  // Mark all blocks with highest vertical postioning as 1,2,3,4,5,6,7 from left to right
  // Ask P1 to choose his block
  // Get only column number from P1 since the row will always correspond to a particular column
  // Make a cross appear at the vertically lowest empty block in the collumn and set that block to full
  // Check if P1 won or if game ended:
      // if yes: clear screen and print to screen P1 wins
      // if not: continue
  // Set block occupied by P1 to full and the one above it to empty
  // Ask P2 to choose his collumn number
  // Make a circle appear at at the vertically lowest empty block in the collumn and set that block to full
  // Check if P2 won or if game ended:
      // if yes: clear screen and print to screen P2 wins
      // if not: continue
  // Repeat this procedure in loops
  // Check if a player wins: Create an independent method bool check(bool) and initialise it to false. It performs the following actions:
      // For the whole 2D array, starting with bottom left corner, select all blocks filled with crosses one-by-one and see if it has 3 continuous crosses above or below or to its left or right or diagonally upward left or right or diagonally below left or right, if yes then announce P1 as Winner
      // Repeat the same procedure for the circles, if yes then announce P2 as Winner
      // If all blocks are set to full and no player has won, then clear screen and print to screen that the match is drawn
  // When the game ends, ask user if he wants to play again as a y/n question: start again if y and terminate game if n
  // Outline/Pseudocode for a computer task:
    // Connect-Four
      // Create a 2D array of a grid with 6 equal rows 7 equal columns with continuous memory allocation
          // Print the 42-block grid to screen
      // Create a method for determining if blocks are full or empty
          // Start with all grid blocks as empty
      // Create player pieces, circle and cross, and start both pieces as free to fill any blocks
      // Mark all blocks with highest vertical positioning as 1,2,3,4,5,6,7 from left to right
      // Ask P1 to choose his column number
          // Get only column number from P1 since the row will always correspond to a particular column
      // Make a cross appear at the vertically lowest empty block in the column chosen and set that block to full
      // Check if P1 won or if game ended:
          // if yes, clear screen and print to screen, P1 wins
          // if not, continue
      // Set the block filled by P1 to full and the one above it to empty
      // Ask P2 to choose his column number
      // Make a circle appear at at the vertically lowest empty block in the column chosen and set that block to full and the one above it to empty
      // Check if P2 won or if game ended:
          // if yes, clear screen and print to screen, P2 wins
          // if not, continue
      // Repeat this procedure in loops
      // Create a method to check if a player wins:
          // For the whole 2D array, starting with bottom left corner, select all blocks filled with crosses one-by-one and see if it has 3 continuous crosses above or below or to its left or right or diagonally upward left or right or diagonally below left or right, if yes, then announce P1 as Winner
          // Repeat the same procedure for the circles, if yes, then announce P2 as Winner
          // If all blocks are set to full and no player has won, then clear screen, and print to screen that the match has ended in a draw
      // When the game ends, ask user if he wants to play again as a yes or no question: start again if yes and terminate game if no
