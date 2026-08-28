# 📖 Block Game - Complete Guide

## 🎮 Game Overview

Block Game is an exciting match-3 style puzzle game where you clear blocks by selecting connected groups of the same color. Complete objectives across 10 progressively challenging levels to become a master player!

## 🕹️ Getting Started

### Starting the Game
1. Open `index.html` in your web browser
2. The game loads with Level 1
3. You'll see the game board with colorful blocks arranged in a grid
4. Your score, level, and move count display at the top

### First Level
- **Objective**: Clear blocks until only 25 or fewer remain
- **Difficulty**: Easiest level to get you familiar with mechanics
- **Time**: No time limit - play at your own pace

## 🎯 Core Game Mechanics

### Selecting Blocks
```
1. Click on any block
2. All connected blocks of the same color highlight with a golden border
3. The number shows how many blocks are connected
```

**Example:**
- You click on a red block
- All red blocks touching this block (and touching each other) get highlighted
- A "5" appears if 5 blocks are connected

### Removing Blocks
```
Desktop:
- Press SPACE or ENTER
- Double-click on the selected blocks

Mobile:
- Tap the ROTATE button
```

**Minimum Requirement**: You need at least 2 connected blocks to remove them

### Points System
```
Points = Number of Blocks × 10
Example: Remove 8 blocks = 80 points
```

## 🪜 Gravity System

After removing blocks:
1. Blocks fall down to fill empty spaces
2. Columns shift from edges toward center
3. New block clusters form
4. Creates opportunities for chain reactions

### Example:
```
Before:        After Removal:    After Gravity:
[R] [G]        [R] [ ]           [R]
[R] [R]  -->   [R] [ ]  -->      [R]
[G] [G]        [G] [G]           [G] [G]
```

## 📊 Level Progression

### Level 1-3: Tutorial Phase
- **Level 1**: 25 blocks target | Easy introduction
- **Level 2**: 30 blocks target | Getting comfortable
- **Level 3**: 35 blocks target | Building skills

### Level 4-6: Intermediate Phase
- **Level 4**: 20 blocks target | Speed round challenge
- **Level 5**: 40 blocks target | First real challenge
- **Level 6**: 30 blocks target | Mixed block patterns

### Level 7-10: Expert Phase
- **Level 7**: 45 blocks target | Hard challenge
- **Level 8**: 35 blocks target | Final stage preparation
- **Level 9**: 50 blocks target | Extreme difficulty
- **Level 10**: 48 blocks target | Ultimate challenge - Master the game!

## 🎮 Controls Guide

### Desktop Players

**Keyboard Controls:**
```
Movement:
- W or ↑ Arrow = Move Up
- S or ↓ Arrow = Move Down
- A or ← Arrow = Move Left
- D or → Arrow = Move Right

Actions:
- SPACE or ENTER = Remove Selected Blocks
- Double-Click = Remove Selected Blocks
```

**Mouse:**
```
- Click = Select Block
- Double-Click = Remove Blocks
```

### Mobile Players

**On-Screen Buttons:**
```
       [▲]
  [◄] [▼] [►]

Controls:
- Up Arrow (▲) = Move selector up
- Down Arrow (▼) = Move selector down
- Left Arrow (◄) = Move selector left
- Right Arrow (►) = Move selector right
- ROTATE Button = Remove selected blocks
- RESET Button = Restart current level
```

**Touch:**
```
- Tap any block = Select it
- Tap ROTATE = Remove selected blocks
```

## 💡 Strategy Tips

### Beginner Tips
1. **Look for clusters** - Click on large connected groups first
2. **Start with obvious matches** - Build confidence
3. **Don't rush** - No time limit, take your time
4. **Learn gravity** - Understand how blocks fall

### Intermediate Tips
1. **Plan ahead** - Think about gravity effects
2. **Create chains** - Removing blocks can reveal new patterns
3. **Maximize groups** - Larger groups = more points
4. **Watch patterns** - Same colors cluster together

### Advanced Tips
1. **Calculate drops** - Predict where blocks will fall
2. **Chain reactions** - Remove blocks to create new groups
3. **Efficient clearing** - Complete levels with fewer moves
4. **Scoring strategy** - Balance speed with high scores

### Pro Tactics
1. **Cascade potential** - Remove strategic blocks for cascades
2. **Block analysis** - Map out the entire board
3. **Move optimization** - Minimize moves while hitting targets
4. **Speed run** - Complete levels as quickly as possible

## 🏆 Level Completion

### What Happens When You Complete a Level
1. ✅ All active blocks show green highlight
2. 📊 Level complete modal appears
3. 🎉 Shows your score and moves used
4. ▶️ "Next Level" button appears

### Advancing to Next Level
1. Click "Next Level" button
2. Board resets with new block arrangement
3. New target count displayed
4. Your score carries over

### Final Level Victory
1. Complete all 10 levels
2. Victory modal appears with:
   - 🏆 "You Won!" message
   - 📊 Final level number
   - 💰 Total score earned
3. Option to "Play Again" from Level 1

## ⚠️ Game Over Conditions

### When Game Ends
- Currently, the game will always allow you to complete levels
- Score accumulates across all levels
- Can restart anytime with "RESET" button

### Level Reset
- Clears all moves on current level
- Score stays the same
- Generates new block arrangement

## 📱 Responsive Features

### Auto-Adjusting Interface
```
Desktop (1024px+):
- Keyboard controls available
- Larger game board
- Desktop control hints shown

Tablet (600px-1023px):
- On-screen buttons visible
- Medium-sized board
- Touch-optimized

Mobile (<600px):
- Full-screen touch controls
- Smaller board (responsive)
- Large touch buttons
- Simplified UI
```

### Device Optimization
- **iPhone/iPad**: Full touch support with haptic feedback ready
- **Android**: Optimized for various screen sizes
- **Tablet**: Comfortable playing with both hands
- **Desktop**: Smooth keyboard and mouse controls

## 🎨 Visual Elements

### Block Colors
| Color | Hex Code | Effect |
|-------|----------|--------|
| Red | #FF6B6B | Bright, eye-catching |
| Teal | #4ECDC4 | Cool, distinct |
| Light Blue | #45B7D1 | Peaceful |
| Light Salmon | #FFA07A | Warm |
| Light Green | #98D8C8 | Fresh |
| Golden | #F7DC6F | Premium feel |
| Purple | #BB8FCE | Mysterious |
| Sky Blue | #85C1E2 | Calming |

### Selection Indicator
- **Golden Border**: Shows which blocks are selected
- **Block Counter**: Number in corner shows connected count
- **Gray Border**: Inactive blocks
- **Shine Effect**: Makes blocks pop visually

## 📈 Score Tracking

### How Scoring Works
```
Points Formula: Blocks Removed × 10

Examples:
- Remove 2 blocks = 20 points (minimum)
- Remove 5 blocks = 50 points
- Remove 12 blocks = 120 points (excellent!)
- Remove 25 blocks = 250 points (maximum single removal)
```

### Scoring Strategy
1. **Early levels**: Focus on completing target
2. **Mid levels**: Balance between target and score
3. **Late levels**: Try for large groups for bonus points
4. **Final level**: Aim for maximum score

### Cumulative Score
- Score carries over between levels
- Can't lose points
- Increases throughout entire game
- Final score shown on victory screen

## 🔄 Game Replay

### Playing Again
After completing all 10 levels:
1. Victory modal shows with "Play Again" button
2. Click to return to Level 1
3. Score and level reset
4. New block arrangement generated
5. Play infinitely!

### Personal Challenges
- Try to beat your previous score
- Complete levels with fewer moves
- Speed run all 10 levels
- Try different strategies

## 🐛 Troubleshooting

### Board Looks Frozen
- Click a block to ensure board is responsive
- Try pressing RESET button
- Refresh the page if needed

### Controls Not Working
**Desktop:**
- Check if focus is on the game window
- Click on game board first
- Try different keyboard keys

**Mobile:**
- Ensure buttons are fully visible
- Tap the center of buttons
- Check screen rotation

### Blocks Won't Remove
- You may need 2+ connected blocks
- Check if blocks are actually connected
- Try selecting a different group

## 🌟 Achievement Milestones

```
✓ Complete Level 1 - Getting Started!
✓ Complete Level 3 - Growing Skills
✓ Complete Level 5 - Intermediate Master
✓ Complete Level 7 - Expert Player
✓ Complete Level 10 - ULTIMATE CHAMPION!
```

## 🚀 Advanced Features

### Keyboard Shortcuts (Desktop)
```
W/A/S/D = Move
Arrow Keys = Move
Space/Enter = Remove blocks
Double-Click = Remove blocks
```

### Mobile Touch
```
Tap = Select
Tap Buttons = Control
Hold = (Reserved for future use)
```

## 📚 Additional Resources

- Check browser console (F12) for debug info
- Inspect element to see game variables
- Customize game by editing `game.js`
- Modify colors and levels as desired

---

**Enjoy Block Game! Master all 10 levels and become the ultimate champion! 🏆**

*For questions or improvements, visit the GitHub repository: https://github.com/manjas-developer/block-game*
