/**
 * Block Game - Configuration File
 * Customize game parameters here without modifying game.js
 */

const GAME_CONFIG = {
    // Board dimensions
    GRID: {
        WIDTH: 6,
        HEIGHT: 8,
        CELL_SIZE: 60
    },

    // Game progression
    LEVELS: {
        TOTAL: 10,
        CONFIGS: {
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
        }
    },

    // Scoring
    SCORING: {
        POINTS_PER_BLOCK: 10,
        MIN_BLOCKS_TO_REMOVE: 2
    },

    // Block colors (can be customized)
    COLORS: [
        '#FF6B6B',    // Red
        '#4ECDC4',    // Teal
        '#45B7D1',    // Light Blue
        '#FFA07A',    // Light Salmon
        '#98D8C8',    // Light Green
        '#F7DC6F',    // Golden
        '#BB8FCE',    // Purple
        '#85C1E2'     // Sky Blue
    ],

    // UI Styling
    UI: {
        CANVAS_BG: '#ffffff',
        GRID_COLOR: '#ddd',
        SELECTION_COLOR: '#FFD700',
        SELECTION_WIDTH: 3,
        BLOCK_BORDER: 'rgba(0, 0, 0, 0.2)',
        BLOCK_SHINE: 'rgba(255, 255, 255, 0.3)'
    },

    // Game mechanics
    MECHANICS: {
        ENABLE_GRAVITY: true,
        ENABLE_CASCADES: true,
        GRAVITY_DELAY: 0,  // milliseconds
        ANIMATION_ENABLED: true
    },

    // Debug mode
    DEBUG: {
        ENABLED: false,
        SHOW_COORDINATES: false,
        SHOW_BLOCK_COUNT: true,
        CONSOLE_LOGS: false
    }
};

/**
 * CUSTOMIZATION GUIDE
 * 
 * 1. GRID DIMENSIONS:
 *    - Increase WIDTH for more columns
 *    - Increase HEIGHT for more rows
 *    - CELL_SIZE controls block size (in pixels)
 *    Example: 8x10 grid with larger blocks:
 *    WIDTH: 8, HEIGHT: 10, CELL_SIZE: 50
 * 
 * 2. DIFFICULTY LEVELS:
 *    - Add more levels by incrementing TOTAL
 *    - Add configuration in CONFIGS object
 *    - Lower targetBlocks = easier, Higher = harder
 * 
 * 3. SCORING:
 *    - Increase POINTS_PER_BLOCK for more points
 *    - Change MIN_BLOCKS_TO_REMOVE (must be 2+)
 *    Example: 20 points per block: POINTS_PER_BLOCK: 20
 * 
 * 4. BLOCK COLORS:
 *    - Add/remove colors from COLORS array
 *    - Use hex codes (#RRGGBB or color names)
 *    - More colors = more variety
 * 
 * 5. UI CUSTOMIZATION:
 *    - Change SELECTION_COLOR for highlight
 *    - Adjust SELECTION_WIDTH for border thickness
 *    - Modify GRID_COLOR for grid lines
 * 
 * 6. GAME MECHANICS:
 *    - Set ENABLE_GRAVITY: false to disable falling blocks
 *    - GRAVITY_DELAY adds pause between blocks falling
 *    - ENABLE_CASCADES: true for combo chains
 * 
 * 7. DEBUG MODE:
 *    - Set ENABLED: true to show debug info
 *    - SHOW_COORDINATES: shows grid positions
 *    - SHOW_BLOCK_COUNT: displays block counts
 *    - CONSOLE_LOGS: enables console output
 */

/**
 * EXAMPLE CONFIGURATIONS
 */

// Easy Mode (for beginners)
const EASY_MODE = {
    GRID: { WIDTH: 5, HEIGHT: 6, CELL_SIZE: 70 },
    LEVELS: {
        TOTAL: 5,
        CONFIGS: {
            1: { targetBlocks: 15, description: 'Easy Start' },
            2: { targetBlocks: 20, description: 'Getting Comfortable' },
            3: { targetBlocks: 15, description: 'Speed Round' },
            4: { targetBlocks: 25, description: 'Challenge' },
            5: { targetBlocks: 20, description: 'Final Level' }
        }
    },
    SCORING: { POINTS_PER_BLOCK: 15, MIN_BLOCKS_TO_REMOVE: 2 }
};

// Hard Mode (for veterans)
const HARD_MODE = {
    GRID: { WIDTH: 7, HEIGHT: 9, CELL_SIZE: 50 },
    LEVELS: {
        TOTAL: 15,
        CONFIGS: {
            1: { targetBlocks: 40, description: 'Hard Start' },
            2: { targetBlocks: 45, description: 'Increasing Difficulty' },
            3: { targetBlocks: 50, description: 'Real Challenge' },
            4: { targetBlocks: 35, description: 'Speed Round' },
            5: { targetBlocks: 55, description: 'Expert Level' },
            // ... add more levels as needed
        }
    },
    SCORING: { POINTS_PER_BLOCK: 5, MIN_BLOCKS_TO_REMOVE: 2 }
};

// Minimal Colors (fewer options)
const MINIMAL_COLORS = [
    '#FF6B6B',    // Red
    '#4ECDC4',    // Teal
    '#45B7D1',    // Blue
];

// Rainbow Colors (many options)
const RAINBOW_COLORS = [
    '#FF0000',    // Red
    '#FF7F00',    // Orange
    '#FFFF00',    // Yellow
    '#00FF00',    // Green
    '#0000FF',    // Blue
    '#4B0082',    // Indigo
    '#9400D3',    // Violet
    '#FF1493',    // Deep Pink
    '#00CED1',    // Dark Turquoise
    '#32CD32'     // Lime Green
];

/**
 * HOW TO USE EXAMPLE CONFIGURATIONS:
 * 
 * In game.js, replace the GAME_CONFIG at the top with one of these:
 * 
 * Option 1 - Easy Mode:
 * const GAME_CONFIG = EASY_MODE;
 * 
 * Option 2 - Hard Mode:
 * const GAME_CONFIG = HARD_MODE;
 * 
 * Option 3 - Rainbow Colors:
 * GAME_CONFIG.COLORS = RAINBOW_COLORS;
 * 
 * Option 4 - Custom Merge:
 * const CUSTOM_CONFIG = { ...GAME_CONFIG, ...EASY_MODE };
 */

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_CONFIG;
}
