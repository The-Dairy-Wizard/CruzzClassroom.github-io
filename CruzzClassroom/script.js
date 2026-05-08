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
        title: "CruzzSurvivor: Final Edition",
        url: "games/CruzzSurvivor.html",
        theme: "theme-survival",
        description: `
            <p>Step into the neon-drenched arena of the ultimate top-down roguelite. In <strong>Cruzz Survivor</strong>, you aren't just fighting for your life—you’re engineered for total domination. Battle through endless waves of shifting enemies, harvest their cores, and build a loadout so powerful it breaks the game.</p>
            
            <h3>The Core Loop</h3>
            <ul>
                <li><strong>SURVIVE:</strong> Drop into the grid and face off against a relentless AI swarm that grows smarter and faster with every wave.</li>
                <li><strong>EVOLVE:</strong> Collect XP Gems from fallen foes to trigger Evolution Events. Every 4 levels, choose from a draft of rare Augment cards.</li>
                <li><strong>STACK:</strong> Why have one when you can have five? Duplicate cards now stack infinitely, multiplying your stats into god-tier territory.</li>
                <li><strong>TRADE:</strong> Defeat massive Bosses to claim Red Cores, your currency for the high-stakes Black Market where game-changing Active Abilities are traded.</li>
            </ul>

            <h3>The Arsenal ("Build it. Stack it. Break it.")</h3>
            <ul>
                <li><strong>The 5-Slot Passive System:</strong> Manage your inventory of tactical augments. From the HP-draining power of Vampire to the bullet-hell chaos of Splitter, your passive slots define your survival strategy.</li>
                <li><strong>The 6th Slot (Active):</strong> Your Spacebar is your lifeline. Harness the Nova shockwave, the Shield invulnerability, or the high-speed Dash to manipulate the battlefield.</li>
                <li><strong>Reactor Tech:</strong> Don't wait for your cooldowns. Use Reactor cards to overclock your recharge rate and turn your 6th slot into a constant weapon.</li>
            </ul>

            <h3>The Threat</h3>
            <ul>
                <li><strong>Intelligent Swarms:</strong> No more clumping. Enemies utilize Anti-Stacking AI, spreading out to surround and overwhelm you from every angle.</li>
                <li><strong>Wraiths:</strong> Master teleporters that leave rifts in their wake. High risk, but drop 4x the XP.</li>
                <li><strong>Splitters:</strong> Dangerous orange monoliths that rupture into fast-moving swarmers upon death.</li>
                <li><strong>Boss Units:</strong> Screen-filling titans that guard the Red Cores you need to survive.</li>
            </ul>

            <h3>Choose Your Class</h3>
            <ul>
                <li><strong>SPEED:</strong> For the high-mobility glass cannon who lives on the edge.</li>
                <li><strong>TANK:</strong> For the survivor who wants to walk through fire and come out smiling.</li>
                <li><strong>POWER:</strong> For those who believe the best defense is a massive, screen-clearing offense.</li>
            </ul>
            
            <p style="color: #ef4444; font-weight: bold; text-align: center;">CRITICAL SYSTEM ERROR DETECTED... EVOLUTION IMMINENT. HOW LONG WILL YOU LAST?</p>

            <h3>Controls Summary</h3>
            <table>
                <tr><th>Key</th><th>Action</th></tr>
                <tr><td>W, A, S, D</td><td>Move Character</td></tr>
                <tr><td>Mouse</td><td>Aim Weapons</td></tr>
                <tr><td>Space Bar</td><td>Use Active Ability</td></tr>
            </table>
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
            <h3>Controls Summary</h3>
            <table>
                <tr><th>Key</th><th>Action</th></tr>
                <tr><td>W, A, S, D / Arrows</td><td>Change Direction</td></tr>
            </table>
        `
    },
    'pong': {
        title: "Cruzz Pong",
        url: "games/CruzzPong.html",
        theme: "theme-pong",
        description: `
            <p>The grandfather of competitive gaming returns to the archive in <strong>Cruzz Pong</strong>. Defend your sector and reflect the energy orb past your opponent's defenses.</p>
            <h3>Objective</h3>
            <p>Score 10 points before your opponent by volleying the ball back and forth at increasing speeds. Reflexes are your only weapon.</p>
            <h3>Controls Summary</h3>
            <table>
                <tr><th>Key</th><th>Action</th></tr>
                <tr><td>W / S  or  Up / Down</td><td>Move Paddle</td></tr>
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
    
    document.getElementById('library-view').style.display = 'none';
    document.getElementById('details-view').style.display = 'block';

    // Apply the specific background theme
    document.body.className = currentGame.theme;
}

function returnToLibrary() {
    document.getElementById('details-view').style.display = 'none';
    document.getElementById('library-view').style.display = 'block';
    
    // Return to default background
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
window.onload = function() {
    const savedAnnouncement = localStorage.getItem('cruzz_announcement');
    if (savedAnnouncement) {
        document.getElementById('announcement-text').innerText = "📢 " + savedAnnouncement;
        document.getElementById('announcement-banner').style.display = 'flex';
    }
};

function closeAnnouncement() { document.getElementById('announcement-banner').style.display = 'none'; }
function openAdmin() { document.getElementById('admin-modal').style.display = 'flex'; }
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
