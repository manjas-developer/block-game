# 🎮 Block Game - Match & Clear

A fun and addictive block matching game built with vanilla JavaScript! Clear matching blocks, complete levels, and progress through 10 increasingly challenging stages.

## 🎯 Features

- **10 Unique Levels** - Each level with different target block counts and increasing difficulty
- **Score Tracking** - Earn points for every block you clear
- **Mobile-Friendly Controls** - On-screen directional buttons for touch devices
- **Desktop Keyboard Support** - Use WASD or Arrow Keys for seamless gameplay
- **Responsive Design** - Works perfectly on phones, tablets, and desktops
- **Gravity System** - Blocks fall naturally after clearing
- **Connected Block Detection** - Automatically finds all connected blocks of the same color
- **Level Progression** - Advance through levels by clearing target blocks
- **Game Over Detection** - Intelligent game over modal when no moves available

## 🎮 How to Play

### Objective
Clear blocks by selecting groups of connected same-colored blocks. The goal is to reduce the total blocks below the level target.

### Controls

#### Desktop
- **WASD Keys** or **Arrow Keys** - Move selector
- **Space/Enter** - Remove selected blocks
- **Right-Click** - Rotate view (feature ready for expansion)

#### Mobile
- **Arrow Buttons** - Navigate up/down/left/right
- **Rotate Button** - Remove selected blocks
- **Reset Button** - Start the level over

### Gameplay
1. Click on any block to select it
2. The game highlights all connected blocks of the same color
3. Double-click or press Space/Enter to remove them
4. Blocks fall down due to gravity
5. Clear blocks until you reach the target for that level
6. Complete all 10 levels to win!

## 📊 Level Details

| Level | Target | Difficulty |
|-------|--------|-----------|
| 1 | 25 blocks | Easy Start |
| 2 | 30 blocks | Introduction |
| 3 | 35 blocks | Building Momentum |
| 4 | 20 blocks | Speed Round |
| 5 | 40 blocks | Challenge |
| 6 | 30 blocks | Mixed Blocks |
| 7 | 45 blocks | Hard Challenge |
| 8 | 35 blocks | Final Stage |
| 9 | 50 blocks | Extreme |
| 10 | 48 blocks | Ultimate Challenge |

## 🎨 Color System

The game uses 8 vibrant colors for blocks:
- Red, Teal, Light Blue, Light Salmon, Light Green, Golden, Purple, Sky Blue

## 📱 Responsive Design

- **Desktop**: Full keyboard support with smooth animations
- **Tablet**: Touch-friendly controls with larger hit areas
- **Mobile**: Optimized UI with on-screen directional buttons

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/manjas-developer/block-game.git
cd block-game
```

2. Open `index.html` in your web browser:
```bash
# Using Python's built-in server (Python 3)
python -m http.server 8000

# Using Node's http-server
npx http-server

# Or simply open in browser
open index.html
```

3. Start playing and have fun!

## 📁 Project Structure

```
block-game/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── game.js         # Core game logic
└── README.md       # This file
```

## 🎯 Game Mechanics

### Block Clearing
- Select a block to highlight all connected blocks of the same color
- Minimum 2 blocks needed to clear
- Earn 10 points per block cleared

### Gravity
- After clearing blocks, remaining blocks fall down
- Empty spaces are filled automatically
- Blocks group together for chain reactions

### Level Completion
- Reduce total blocks below level target
- Success triggers level complete modal
- View stats and advance to next level

### Victory Condition
- Complete all 10 levels successfully
- Final modal shows total score and achievement
- Option to play again from level 1

## 🔧 Customization

You can easily modify the game by editing `game.js`:

- **Change grid size**: Modify `GRID_WIDTH` and `GRID_HEIGHT`
- **Adjust difficulty**: Edit `levelConfigs` object
- **Add more levels**: Increase `TOTAL_LEVELS` and add config
- **Change colors**: Modify `COLORS` array
- **Tune scoring**: Adjust points in `removeBlocks()` function

## 💡 Tips for Players

- Look for large connected groups to earn more points
- Plan ahead - clearing blocks affects gravity
- Each level gets progressively harder
- Use mobile buttons carefully on smaller screens
- Speed matters - try to complete levels efficiently

## 🐛 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android)

## 📝 License

This project is open source and available for personal and educational use.

## 🎓 Technologies Used

- **HTML5** - Structure and Canvas API
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Pure game logic without frameworks
- **Canvas API** - 2D graphics rendering

## 🚀 Future Enhancements

- [ ] Sound effects and background music
- [ ] Animated block removal with particles
- [ ] Power-ups and special blocks
- [ ] Leaderboard system
- [ ] Achievement badges
- [ ] Difficulty settings
- [ ] Touch swipe controls
- [ ] Game pause feature
- [ ] Hint system
- [ ] Multiplayer mode

## 👨‍💻 Developer

Created with ❤️ by **Manjas Developer**

Enjoy the game and happy clearing! 🎮✨

---

**Have fun playing Block Game! Challenge yourself to complete all 10 levels!**
