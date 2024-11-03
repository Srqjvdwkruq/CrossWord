document.getElementById('startBtn').addEventListener('click', showCategoryContainer);
document.getElementById('backBtn').addEventListener('click', goBackToStart);

// ฟังก์ชันแสดงหมวดหมู่
function showCategoryContainer() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('categoryContainer').style.display = 'block';
}

// ฟังก์ชันกลับไปหน้าหลัก
function goBackToStart() {
    document.getElementById('container').style.display = 'block';
    document.getElementById('categoryContainer').style.display = 'none';
    document.querySelector('.game-board').style.display = 'none';
}

// ฟังก์ชันเริ่มเกมและสร้างตาราง
function startGame(category) {
    // ซ่อนหมวดหมู่และแสดงตาราง
    document.getElementById('categoryContainer').style.display = 'none';
    const gameBoard = document.querySelector('.game-board');
    gameBoard.style.display = 'block';

    const categoryTitle = gameBoard.querySelector('h1');
    categoryTitle.textContent = category;

    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; // ลบเนื้อหาที่มีอยู่ในตาราง

    // สร้างตาราง 10x10
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('input');
            cell.classList.add('cell');
            cell.maxLength = 1;
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener('keydown', handleKeyDown);
            grid.appendChild(cell);
            }
        }
        document.getElementById('menuBtn').addEventListener('click', toggleMenu);
        document.getElementById('resumeBtn').addEventListener('click', resumeGame);
        document.getElementById('quitBtn').addEventListener('click', quitGame);    
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            const currentCell = event.target;
            const nextCell = getNextCell(currentCell);

            if (nextCell) {
                nextCell.focus();
            }
        }
    }

    function getNextCell(currentCell) {
        const row = parseInt(currentCell.dataset.row);
        const col = parseInt(currentCell.dataset.col);

        if (col < 9) {
            return document.querySelector(`input[data-row="${row}"][data-col="${col + 1}"]`);
        } else if (row < 9) {
            return document.querySelector(`input[data-row="${row + 1}"][data-col="0"]`)
        }
        return null;
    }

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }

    function resumeGame() {
        const menu = document.getElementById('menu');
        menu.style.display = 'none';
    }

    function quitGame() {
        const menu = document.getElementById('menu');
        menu.style.display = 'none';
        document.querySelector('.game-board').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    }

