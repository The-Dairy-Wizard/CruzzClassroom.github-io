// Database of games with descriptions and specific theme classes
const games = {
    'balloon': {
        title: "Balloon Defender: Altitude Survival",
        url: "games/Balloondefender.html",
        theme: "theme-balloon",
        description: `
            <p>Balloon Defender is a fast-paced, physics-based arcade survival game where you protect a fragile balloon from an onslaught of atmospheric threats. As you ascend through various "Altitudes," the environment changes, and the enemies become more diverse and aggressive.</p>
            
            <h3>The Goal</h3>
            <p>Keep your balloon from popping. You control a high-velocity Shield that orbits the balloon. You must use this shield to deflect, bash, and destroy incoming projectiles and enemies. Every enemy you destroy adds to your score and contributes to your "Combo Streak."</p>
            
            <h3>How to Play</h3>
            <p><strong>Movement:</strong> Your Shield follows your mouse cursor (or finger on touch devices) with high precision. Move it rapidly to strike enemies or hold it steady to block a path.</p>
            <p><strong>The Balloon:</strong> The balloon is tethered to the center of the screen. It has physics, meaning it will bob and weave when hit by your shield or when enemies get close.</p>
            
            <h3>Controls Summary</h3>
            <table>
                <tr><th>Key</th><th>Action</th></tr>
                <tr><td>Mouse</td><td>Move Shield</td></tr>
                <tr><td>1, 2, 3, 4</td><td>Activate Abilities</td></tr>
                <tr><td>P</td><td>Pause / Unpause</td></tr>
                <tr><td>TAB</td><td>View Leaderboard & Toggle Economy</td></tr>
            </table>
        `
    },
    'survival': {
        title: "CruzzSurvival",
        url: "games/CruzzSurvival.html",
        theme: "theme-survival",
        description: `
            <p>Welcome to CruzzSurvival. Scavenge for resources, build your defenses, and outlast the elements. How many days can you survive?</p>
            <h3>Objective</h3>
            <p>Maintain your vital stats while exploring the environment and crafting essential tools.</p>
        `
    },
    'blast': {
        title: "CruzzBlast",
        url: "games/CruzzBlast.html",
        theme: "theme-blast",
        description: `
            <p>A high-octane explosive arcade experience! Aim fast, shoot faster, and don't let the targets escape.</p>
            <h3>Objective</h3>
            <p>Clear out the sectors before the timer runs out. Chain together explosions for maximum points!</p>
        `
    },
    'snake': {
        title: "Cruzz Snake",
        url: "games/CruzzSnake.html",
        theme: "theme-snake",
        description: `
            <p>The classic arcade experience reimagined. Navigate the digital grid, consume data packets, and grow your serpent to record-breaking lengths.</p>
            <h3>Objective</h3>
            <p>Eat the glowing blocks to grow larger without crashing into the walls or your own tail. The longer you survive, the faster you move.</p>
            <h3>Controls Summary</h3>
            <table>
                <tr><th>Key</th><th>Action</th></tr>
                <tr><td>W, A, S, D / Arrows</td><td>Change Direction</td></tr>
                <tr><td>P / ESC</td><td>Pause</td></tr>
            </table>
        `
    }
};

let currentGame = null;

// ==========================================
// VIEWS & GAME LAUNCHING
// ==========================================
function openDetails(gameKey) {
    currentGame = games[gameKey];
    document.getElementById('detail-title').innerText = currentGame.title;
    document.getElementById('detail-description').innerHTML = currentGame.description;
    
    // Switch Views
    document.getElementById('library-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'block';

    // Apply the specific background theme for this game
    document.body.className = currentGame.theme;
}

function returnToLibrary() {
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('library-view').style.display = 'block';
    
    // Remove specific themes, return to default background
    document.body.className = '';
}

function launchFullscreen() {
    const engine = document.getElementById('game-engine');
    const playerView = document.getElementById('player-view');
    const wrapper = document.getElementById('fullscreen-wrapper');

    engine.src = currentGame.url;
    document.getElementById('details-view').style.display = 'none';
    playerView.style.display = 'block';
    document.getElementById('pause-guard').style.display = 'none';

    if (wrapper.requestFullscreen) { wrapper.requestFullscreen(); }
}

function resumeFullscreen() {
    const wrapper = document.getElementById('fullscreen-wrapper');
    if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen().then(() => {
            document.getElementById('pause-guard').style.display = 'none';
        });
    }
}

function closeGame() {
    const engine = document.getElementById('game-engine');
    const playerView = document.getElementById('player-view');

    engine.src = ""; 
    playerView.style.display = 'none';
    
    if (document.fullscreenElement) { document.exitFullscreen(); }
    returnToLibrary();
}

document.addEventListener('fullscreenchange', () => {
    const playerView = document.getElementById('player-view');
    if (playerView.style.display === 'block' && !document.fullscreenElement) {
        document.getElementById('pause-guard').style.display = 'flex';
        const iframe = document.getElementById('game-engine');
        if(iframe.contentWindow) { iframe.contentWindow.postMessage("FORCE_PAUSE", "*"); }
    }
});

// ==========================================
// ANNOUNCEMENTS & ADMIN LOGIN
// ==========================================

// Check for existing announcements on page load
window.onload = function() {
    const savedAnnouncement = localStorage.getItem('cruzz_announcement');
    if (savedAnnouncement) {
        document.getElementById('announcement-text').innerText = "📢 " + savedAnnouncement;
        document.getElementById('announcement-banner').style.display = 'flex';
    }
};

function closeAnnouncement() {
    document.getElementById('announcement-banner').style.display = 'none';
}

function openAdmin() {
    document.getElementById('admin-modal').style.display = 'flex';
}

function closeAdmin() {
    document.getElementById('admin-modal').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('admin-pass').value = '';
}

function verifyAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === 'cruzz123') { 
        document.getElementById('admin-pass').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Incorrect Headmaster Password.');
    }
}

function postAnnouncement() {
    const text = document.getElementById('announcement-input').value;
    if (text) {
        localStorage.setItem('cruzz_announcement', text);
        document.getElementById('announcement-text').innerText = "📢 " + text;
        document.getElementById('announcement-banner').style.display = 'flex';
        closeAdmin();
    }
}

function clearAnnouncement() {
    localStorage.removeItem('cruzz_announcement');
    document.getElementById('announcement-banner').style.display = 'none';
    closeAdmin();
}