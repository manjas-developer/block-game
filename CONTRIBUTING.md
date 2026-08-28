# 🤝 Contributing to Block Game

Thank you for your interest in contributing to Block Game! We welcome contributions from everyone, whether you're fixing bugs, adding features, improving documentation, or sharing ideas.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Support](#support)

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. We pledge to:

- Be respectful and inclusive
- Welcome people of all backgrounds and skill levels
- Provide a safe and supportive environment
- Focus on constructive feedback
- Report unacceptable behavior

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing opinions
- Provide and accept constructive criticism
- Focus on what is best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment, intimidation, or discrimination
- Offensive language or comments
- Disruptive behavior
- Violation of others' privacy
- Any form of trolling or spam

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account
- A code editor (VS Code recommended)
- A modern web browser for testing

### Fork and Clone

1. **Fork the repository** - Click the "Fork" button on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/block-game.git
   cd block-game
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/manjas-developer/block-game.git
   ```

### Local Setup

1. Open the project in your code editor
2. Start a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser
4. You're ready to contribute!

## 💡 How to Contribute

### Types of Contributions

#### 🐛 Bug Fixes
- Find and fix bugs in the code
- Report issues you discover
- Test fixes thoroughly

#### ✨ New Features
- Enhance existing features
- Add new game mechanics
- Improve user experience

#### 📚 Documentation
- Improve README files
- Add code comments
- Write tutorials or guides
- Fix typos and clarity issues

#### 🎨 Design Improvements
- Enhance visual design
- Improve UI/UX
- Create better animations
- Optimize responsive design

#### ⚡ Performance
- Optimize algorithms
- Reduce file sizes
- Improve rendering speed
- Enhance memory usage

#### 🧪 Testing
- Write test cases
- Test on different browsers
- Test on different devices
- Report edge cases

## 🛠️ Development Setup

### Project Structure

```
block-game/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── game.js             # Core game logic
├── config.js           # Game configuration
├── README.md           # Main documentation
├── GUIDE.md            # Gameplay guide
├── FEATURES.md         # Feature list
├── CONTRIBUTING.md     # This file
├── .gitignore          # Git ignore rules
└── .github/
    └── FUNDING.yml     # Sponsorship links
```

### File Descriptions

- **index.html** - Main game interface with canvas and modals
- **style.css** - All styling, animations, and responsive design
- **game.js** - Game logic, mechanics, and event handlers
- **config.js** - Easily customizable game parameters

### Important Functions in game.js

```javascript
// Core Functions
initGame()                  // Initialize a new game
generateBoard()            // Create random block arrangement
getConnectedBlocks(x, y)   // Find connected blocks of same color
removeBlocks(blocks)       // Remove and score blocks
applyGravity()            // Make blocks fall down
handleBlockClick(x, y)    // Handle player selection
draw()                    // Render game state
updateUI()                // Update score/level display
```

## 📝 Coding Standards

### JavaScript Standards

```javascript
// Use camelCase for variables and functions
const gameState = { score: 0, level: 1 };
function handleBlockClick() { }

// Use const by default, let for loop variables
const GRID_WIDTH = 6;
let currentScore = 0;

// Use descriptive names
const isBlockActive = true;  // Good
const x = true;              // Bad

// Add comments for complex logic
// Flood-fill algorithm to find connected blocks
const connected = getConnectedBlocks(x, y);

// Keep functions small and focused
// Good: Single responsibility
function removeBlocks(blocks) { }

// Bad: Multiple responsibilities
function removeBlocksAndUpdateScoreAndRefresh() { }
```

### CSS Standards

```css
/* Use semantic class names */
.game-area { }
.level-display { }

/* Use CSS variables when possible */
--primary-color: #667eea;
--danger-color: #f5576c;

/* Group related properties */
.block {
    /* Layout */
    width: 60px;
    height: 60px;
    
    /* Appearance */
    background: #667eea;
    border: 2px solid #333;
    
    /* Effects */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```

### HTML Standards

```html
<!-- Use semantic HTML -->
<section class="game-area">
    <header class="game-header">
        <h1>Block Game</h1>
    </header>
    <main id="gameCanvas"></main>
</section>

<!-- Use meaningful IDs and classes -->
<button id="nextLevelBtn" class="btn btn-primary">Next Level</button>
```

## 📦 Commit Guidelines

### Commit Message Format

```
[TYPE]: Brief description (50 chars max)

Optional longer description explaining:
- What was changed
- Why it was changed
- Any related issues

Type can be:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting/styling
- refactor: Code refactoring
- perf: Performance improvement
- test: Adding tests
```

### Examples

```bash
git commit -m "feat: Add sound effects to block removal"
git commit -m "fix: Correct gravity calculation after block removal"
git commit -m "docs: Update README with new features"
git commit -m "refactor: Optimize gravity algorithm for performance"
git commit -m "style: Improve responsive design for mobile devices"
```

### Best Practices

- Commit logical units of work
- Write clear commit messages
- Don't include unrelated changes
- Reference issues when applicable
- Keep commits focused and atomic

## 🔄 Pull Request Process

### Before You Start

1. **Create an issue** - Discuss your idea first
2. **Get approval** - Wait for feedback before coding
3. **Create a branch** - Use descriptive branch names:
   ```bash
   git checkout -b feat/add-sound-effects
   git checkout -b fix/gravity-calculation
   git checkout -b docs/update-guide
   ```

### Making Changes

1. **Write clean code** - Follow coding standards
2. **Test thoroughly** - Check on desktop and mobile
3. **Update documentation** - Update relevant docs
4. **Don't change unrelated code** - Stay focused

### Submitting PR

1. **Push to your fork**:
   ```bash
   git push origin your-branch-name
   ```

2. **Create Pull Request** on GitHub with:
   - Clear title describing changes
   - Description of what was changed and why
   - Reference to related issues (#issue-number)
   - Screenshots if UI changes
   - Testing results

3. **PR Template**:
   ```
   ## Description
   Brief description of changes
   
   ## Related Issues
   Fixes #123
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   
   ## Testing
   - [ ] Tested on desktop
   - [ ] Tested on mobile
   - [ ] All browsers tested
   
   ## Screenshots (if applicable)
   ![alt text](image-url)
   ```

4. **Respond to reviews** - Make requested changes promptly

### PR Review Process

- Code will be reviewed for:
  - Functionality and correctness
  - Code quality and standards
  - Performance impact
  - Documentation completeness
  - Compatibility across devices

## 🐛 Reporting Issues

### Before Reporting

- Check existing issues to avoid duplicates
- Test on latest version
- Try to isolate the problem
- Gather relevant information

### Issue Report Template

```markdown
## Description
Clear description of the issue

## Environment
- Browser: Chrome 120
- Device: Desktop / Mobile
- OS: Windows 11 / iOS 17
- Screen Size: 1920x1080

## Steps to Reproduce
1. Start game
2. Click on red block
3. Double-click to remove
4. Issue occurs...

## Expected Behavior
What should happen

## Actual Behavior
What actually happened

## Screenshots/Logs
Attach screenshots or error logs if available

## Additional Context
Any other relevant information
```

## 💡 Suggesting Enhancements

### Feature Request Template

```markdown
## Feature Description
Clear description of the suggested feature

## Motivation
Why would this be useful?

## Examples
Real-world use cases or examples

## Implementation Ideas
Any suggestions on how to implement this (optional)

## Additional Context
Links, mockups, or additional information
```

### Feature Ideas

Some features we're considering:
- Sound effects and music
- Particle effects for block removal
- Power-ups and special blocks
- Leaderboard system
- Achievement badges
- Multiple difficulty levels
- Touch swipe controls
- Game pause feature
- Hint system
- Multiplayer mode

## 📚 Documentation

### Updating Documentation

When adding features, update:

1. **README.md** - Add feature overview
2. **GUIDE.md** - Add gameplay instructions
3. **FEATURES.md** - Add to feature list
4. **Code comments** - Document complex logic
5. **config.js** - Document new configuration options

### Writing Documentation

- Use clear, simple language
- Include examples when possible
- Use proper formatting (headers, lists, code blocks)
- Keep documentation updated with code
- Include emojis for visual appeal

## 🧪 Testing Checklist

Before submitting a PR:

- [ ] Game loads without errors
- [ ] All features work as intended
- [ ] No console errors
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Mobile responsiveness verified
- [ ] Touch controls work
- [ ] Keyboard controls work
- [ ] All levels playable
- [ ] Score tracking works
- [ ] No performance issues

## 📞 Support

### Getting Help

- **Questions?** Create a discussion or issue
- **Need guidance?** Comment on existing issues
- **Stuck?** Ask the community for help
- **Found a bug?** Report it with details

### Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 🎉 Recognition

Contributors will be:
- Added to contributor list
- Mentioned in release notes
- Given credit in documentation
- Celebrated in community

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 🙏 Thank You

Thank you for considering contributing to Block Game! Your help makes this project better for everyone.

---

**Happy Contributing! 🚀**

Have fun building and improving Block Game with us!
