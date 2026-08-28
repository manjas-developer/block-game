// Game Configuration
const GRID_WIDTH = 6;
const GRID_HEIGHT = 8;
const CELL_SIZE = 60;
const TOTAL_LEVELS = 10;

// Game State
let gameState = {
    board: [],
    currentLevel: 1,
    score: 0,
    moves: 0,
    selectedBlock: null,
    gameOver: false
};

// Level Configurations
const levelConfigs = {
    1: { targetBlocks: 25, description: 'Clear 25 blocks' },
    2: { targetBlocks: 30, description: 'Clear 30 blocks' },
    3: { targetBlocks: 35, description: 'Clear 35 blocks' },
    4: { targetBlocks: 20, description: 'Speed Round - 20 blocks' },
    5: { targetBlocks: 40, description: 'Challenge - 40 blocks' },
    6: { targetBlocks: 30, description: 'Mixed Blocks - 30' },
    7: { targetBlocks: 45, description: 'Hard Challenge - 45 blocks' },
    8: { targetBlocks: 35, description: 'Final Stage - 35 blocks' },
    9: { targetBlocks: 50, description: 'Extreme - 50 blocks' },
    10: { targetBlocks: 48, description: 'Ultimate Challenge' }
};

// Colors for blocks
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

// DOM Elements
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const levelDisplay = document.getElementById('level');
const scoreDisplay = document.getElementById('score');
const movesDisplay = document.getElementById('moves');

// Control Buttons
const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const rotateBtn = document.getElementById('rotateBtn');
const resetBtn = document.getElementById('resetBtn');

// Modal Elements
const levelCompleteModal = document.getElementById('levelCompleteModal');
const gameOverModal = document.getElementById('gameOverModal');
const allLevelsCompleteModal = document.getElementById('allLevelsCompleteModal');

// Initialize Game
function initGame() {
    gameState.board = generateBoard();
    gameState.selectedBlock = null;
    gameState.gameOver = false;
    gameState.moves = 0;
    updateUI();
    draw();
}

// Generate game board with random blocks
function generateBoard() {
    const board = [];
    for (let y = 0; y < GRID_HEIGHT; y++) {
        const row = [];
        for (let x = 0; x < GRID_WIDTH; x++) {
            row.push({
                x: x,
                y: y,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                active: true
            });
        }
        board.push(row);
    }
    return board;
}

// Get number of active blocks
function getActiveBlockCount() {
    let count = 0;
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            if (gameState.board[y][x].active) count++;
        }
    }
    return count;
}

// Get all connected blocks of the same color
function getConnectedBlocks(x, y, visited = new Set()) {
    const key = `${x},${y}`;
    if (visited.has(key)) return [];
    if (x < 0 || x >= GRID_WIDTH || y < 0 || y >= GRID_HEIGHT) return [];
    if (!gameState.board[y][x].active) return [];

    const color = gameState.board[y][x].color;
    const connected = [];
    const queue = [[x, y]];
    visited.add(key);

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        
        if (cx < 0 || cx >= GRID_WIDTH || cy < 0 || cy >= GRID_HEIGHT) continue;
        if (!gameState.board[cy][cx].active) continue;
        if (gameState.board[cy][cx].color !== color) continue;

        connected.push({ x: cx, y: cy });

        // Check all 4 directions
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;
            const nKey = `${nx},${ny}`;
            
            if (!visited.has(nKey)) {
                visited.add(nKey);
                queue.push([nx, ny]);
            }
        }
    }

    return connected;
}

// Remove selected blocks
function removeBlocks(blocks) {
    if (blocks.length < 2) return false; // Need at least 2 blocks

    for (const block of blocks) {
        gameState.board[block.y][block.x].active = false;
    }

    gameState.score += blocks.length * 10;
    gameState.moves++;
    gameState.selectedBlock = null;

    // Apply gravity
    applyGravity();

    // Check for level completion
    const activeBlocks = getActiveBlockCount();
    const targetBlocks = levelConfigs[gameState.currentLevel].targetBlocks;

    if (activeBlocks <= targetBlocks) {
        completeLevel();
        return true;
    }

    return false;
}

// Apply gravity - blocks fall down
function applyGravity() {
    for (let x = 0; x < GRID_WIDTH; x++) {
        let writePos = GRID_HEIGHT - 1;
        for (let y = GRID_HEIGHT - 1; y >= 0; y--) {
            if (gameState.board[y][x].active) {
                gameState.board[writePos][x] = gameState.board[y][x];
                gameState.board[writePos][x].y = writePos;
                if (writePos !== y) {
                    gameState.board[y][x] = { x: x, y: y, color: '#FFF', active: false };
                }
                writePos--;
            }
        }
    }
}

// Handle block click/selection
function handleBlockClick(x, y) {
    if (x < 0 || x >= GRID_WIDTH || y < 0 || y >= GRID_HEIGHT) return;
    if (!gameState.board[y][x].active) return;

    const block = gameState.board[y][x];
    const connected = getConnectedBlocks(x, y);

    gameState.selectedBlock = {
        blocks: connected,
        x: x,
        y: y,
        color: block.color
    };
}

// Rotate view (for future feature)
function rotateView() {
    // Placeholder for rotation feature
    console.log('Rotate feature - to be implemented');
}

// Reset level
function resetLevel() {
    initGame();
}

// Complete level and show modal
function completeLevel() {
    gameState.gameOver = true;
    updateUI();

    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalMoves').textContent = gameState.moves;

    if (gameState.currentLevel >= TOTAL_LEVELS) {
        // All levels completed
        document.getElementById('winLevel').textContent = gameState.currentLevel;
        document.getElementById('winScore').textContent = gameState.score;
        allLevelsCompleteModal.classList.add('active');
    } else {
        // Next level available
        levelCompleteModal.classList.add('active');
    }
}

// Move to next level
function nextLevel() {
    levelCompleteModal.classList.remove('active');
    gameState.currentLevel++;
    initGame();
}

// Restart entire game
function restartGame() {
    gameOverModal.classList.remove('active');
    allLevelsCompleteModal.classList.remove('active');
    gameState.currentLevel = 1;
    gameState.score = 0;
    initGame();
}

// Update UI
function updateUI() {
    levelDisplay.textContent = gameState.currentLevel;
    scoreDisplay.textContent = gameState.score;
    movesDisplay.textContent = gameState.moves;
}

// Draw game
function draw() {
    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_WIDTH; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, GRID_HEIGHT * CELL_SIZE);
        ctx.stroke();
    }
    for (let i = 0; i <= GRID_HEIGHT; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(GRID_WIDTH * CELL_SIZE, i * CELL_SIZE);
        ctx.stroke();
    }

    // Draw blocks
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            const block = gameState.board[y][x];
            if (block.active) {
                drawBlock(block);
            }
        }
    }

    // Draw selected blocks
    if (gameState.selectedBlock) {
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        for (const block of gameState.selectedBlock.blocks) {
            ctx.strokeRect(
                block.x * CELL_SIZE + 2,
                block.y * CELL_SIZE + 2,
                CELL_SIZE - 4,
                CELL_SIZE - 4
            );
        }
        
        // Show block count
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(
            `${gameState.selectedBlock.blocks.length}`,
            gameState.selectedBlock.x * CELL_SIZE + CELL_SIZE - 25,
            gameState.selectedBlock.y * CELL_SIZE + 25
        );
    }

    // Draw target info
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    const activeBlocks = getActiveBlockCount();
    const targetBlocks = levelConfigs[gameState.currentLevel].targetBlocks;
    ctx.fillText(
        `Blocks left: ${activeBlocks} | Target: ${targetBlocks}`,
        10,
        canvas.height - 10
    );
}

// Draw individual block
function drawBlock(block) {
    const x = block.x * CELL_SIZE;
    const y = block.y * CELL_SIZE;

    // Block background
    ctx.fillStyle = block.color;
    ctx.fillRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);

    // Block border
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);

    // Shine effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(x + 4, y + 4, CELL_SIZE - 8, 8);
}

// Canvas click handler
canvas.addEventListener('click', (e) => {
    if (gameState.gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) * scaleY / CELL_SIZE);

    handleBlockClick(x, y);
    draw();
});

// Double click to remove blocks
canvas.addEventListener('dblclick', (e) => {
    if (gameState.gameOver) return;
    if (!gameState.selectedBlock) return;

    e.preventDefault();
    removeBlocks(gameState.selectedBlock.blocks);
    draw();
});

// Keyboard controls - Desktop (WASD and Arrow Keys)
document.addEventListener('keydown', (e) => {
    if (gameState.gameOver) return;
    if (!gameState.selectedBlock) return;

    const key = e.key.toLowerCase();
    let newX = gameState.selectedBlock.x;
    let newY = gameState.selectedBlock.y;

    if (key === 'w' || e.key === 'ArrowUp') {
        newY = Math.max(0, newY - 1);
        e.preventDefault();
    } else if (key === 's' || e.key === 'ArrowDown') {
        newY = Math.min(GRID_HEIGHT - 1, newY + 1);
        e.preventDefault();
    } else if (key === 'a' || e.key === 'ArrowLeft') {
        newX = Math.max(0, newX - 1);
        e.preventDefault();
    } else if (key === 'd' || e.key === 'ArrowRight') {
        newX = Math.min(GRID_WIDTH - 1, newX + 1);
        e.preventDefault();
    } else if (key === ' ' || key === 'enter') {
        removeBlocks(gameState.selectedBlock.blocks);
        e.preventDefault();
    }

    if (newX !== gameState.selectedBlock.x || newY !== gameState.selectedBlock.y) {
        handleBlockClick(newX, newY);
        draw();
    }
});

// Mobile button controls
btnUp.addEventListener('click', () => {
    if (gameState.gameOver || !gameState.selectedBlock) return;
    const newY = Math.max(0, gameState.selectedBlock.y - 1);
    handleBlockClick(gameState.selectedBlock.x, newY);
    draw();
});

btnDown.addEventListener('click', () => {
    if (gameState.gameOver || !gameState.selectedBlock) return;
    const newY = Math.min(GRID_HEIGHT - 1, gameState.selectedBlock.y + 1);
    handleBlockClick(gameState.selectedBlock.x, newY);
    draw();
});

btnLeft.addEventListener('click', () => {
    if (gameState.gameOver || !gameState.selectedBlock) return;
    const newX = Math.max(0, gameState.selectedBlock.x - 1);
    handleBlockClick(newX, gameState.selectedBlock.y);
    draw();
});

btnRight.addEventListener('click', () => {
    if (gameState.gameOver || !gameState.selectedBlock) return;
    const newX = Math.min(GRID_WIDTH - 1, gameState.selectedBlock.x + 1);
    handleBlockClick(newX, gameState.selectedBlock.y);
    draw();
});

rotateBtn.addEventListener('click', () => {
    if (gameState.gameOver || !gameState.selectedBlock) return;
    removeBlocks(gameState.selectedBlock.blocks);
    draw();
});

resetBtn.addEventListener('click', () => {
    resetLevel();
    draw();
});

// Modal button handlers
document.getElementById('nextLevelBtn').addEventListener('click', nextLevel);
document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('playAgainBtn').addEventListener('click', restartGame);

// Start the game
initGame();

// Responsive canvas sizing
function resizeCanvas() {
    const container = document.querySelector('.game-area');
    const maxWidth = Math.min(400, window.innerWidth - 40);
    const scale = maxWidth / 400;
    
    canvas.style.width = maxWidth + 'px';
    canvas.style.height = (600 * scale) + 'px';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
