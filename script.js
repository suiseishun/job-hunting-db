// --- 1. HTML要素の取得 ---
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const viewListBtn = document.getElementById('viewListBtn');
const viewGroupBtn = document.getElementById('viewGroupBtn');
const filterButtonsContainer = document.getElementById('filterButtons');

const STATUS_OPTIONS = ["未エントリー", "インターンエントリー", "本選考エントリー", "面接中", "内定", "お見送り"];

// --- 2. データの初期化 (LocalStorage優先) ---
// 最初だけ data.js から読み込み、以降はブラウザ内のデータを使う
let masterData = JSON.parse(localStorage.getItem('masterCompanyData')) || [...companyData];
let currentData = [...masterData];
let userSettings = JSON.parse(localStorage.getItem('userSettings')) || {};

/**
 * データの全保存 (LocalStorage)
 */
function saveMasterData() {
    localStorage.setItem('masterCompanyData', JSON.stringify(masterData));
}

function saveUserData() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

// --- 3. ヘルパー関数 ---

/**
 * 業界・業種を分割して取得
 */
function getTerms(company, type) {
    const text = company[type] || (type === 'industry' ? "未分類" : "その他");
    return text.split(/[\n,、]/).map(s => s.trim()).filter(s => s !== "");
}

/**
 * 年収抽出
 */
function parseSalary(salaryStr, mode) {
    if (!salaryStr || typeof salaryStr !== 'string') return 0;
    const matches = salaryStr.match(/(\d+)\((\d+)\)/);
    if (matches) {
        return mode === 'avg' ? parseInt(matches[1]) : parseInt(matches[2]);
    }
    return parseInt(salaryStr) || 0;
}

// --- 4. CRUD & 要約ロジック ---

/**
 * 企業追加機能 (C: Create)
 */
window.addCompany = function() {
    const name = document.getElementById('new_name').value;
    if (!name) return alert("企業名を入力してください");

    const newEntry = {
        name: name,
        industry: document.getElementById('new_industry').value || "未分類",
        category: document.getElementById('new_category').value || "その他",
        salary: document.getElementById('new_salary').value || "-",
        employees: parseInt(document.getElementById('new_employees').value) || 0,
        url: document.getElementById('new_url').value || "#",
        memo: document.getElementById('new_memo').value || ""
    };

    masterData.push(newEntry);
    saveMasterData();
    
    // 全体を更新
    currentData = [...masterData];
    renderTable(currentData);
    createFilterButtons(); 
    updateSummary();
    
    // フォームクリア
    document.querySelectorAll('.admin-form input, .admin-form textarea').forEach(el => el.value = "");
    alert("企業を追加しました！");
};

/**
 * 企業削除機能 (D: Delete)
 */
window.deleteCompany = function(name) {
    if (!confirm(`${name} を削除しますか？`)) return;

    masterData = masterData.filter(c => c.name !== name);
    saveMasterData();
    
    // 設定も削除
    delete userSettings[name];
    saveUserData();

    // 画面更新
    currentData = [...masterData];
    renderTable(currentData);
    createFilterButtons();
    updateSummary();
};

/**
 * データを初期状態（data.js）に戻す
 */
window.resetToDefault = function() {
    if (!confirm("データを初期状態に戻しますか？追加した企業は全て消去されます。")) return;
    localStorage.removeItem('masterCompanyData');
    location.reload();
};

/**
 * 戦況サマリーを更新 (masterDataを参照)
 */
function updateSummary() {
    const container = document.getElementById('summaryContainer');
    if (!container) return;
    
    let fav = 0, intern = 0, selection = 0, interview = 0, naitei = 0;
    
    masterData.forEach(company => {
        const settings = userSettings[company.name];
        if (settings) {
            if (settings.favorite) fav++;
            if (settings.status === "インターンエントリー") intern++;
            if (settings.status === "本選考エントリー") selection++;
            if (settings.status === "面接中") interview++;
            if (settings.status === "内定") naitei++;
        }
    });

    container.innerHTML = `
        <div class="summary-card fav"><span class="label">お気に入り</span><span class="count">${fav}</span></div>
        <div class="summary-card intern"><span class="label">インターン</span><span class="count">${intern}</span></div>
        <div class="summary-card selection"><span class="label">本選考</span><span class="count">${selection}</span></div>
        <div class="summary-card interview"><span class="label">面接中</span><span class="count">${interview}</span></div>
        <div class="summary-card naitei"><span class="label">内定</span><span class="count">${naitei}</span></div>
    `;
}

// --- 5. UIコンポーネント作成 ---

/**
 * 行（tr）作成 (削除ボタンを含む全11列)
 */
function createRow(company) {
    const settings = userSettings[company.name] || { favorite: false, status: "未エントリー", personalMemo: "" };
    
    const row = document.createElement('tr');
    row.className = `status-${settings.status}`;
    
    row.innerHTML = `
        <td style="text-align:center;">
            <button class="fav-btn ${settings.favorite ? 'active' : ''}" onclick="toggleFavorite('${company.name}', this)">
                ${settings.favorite ? '★' : '☆'}
            </button>
        </td>
        <td>
            <select class="status-select" onchange="updateStatus('${company.name}', this)">
                ${STATUS_OPTIONS.map(opt => `<option value="${opt}" ${settings.status === opt ? 'selected' : ''}>${opt}</option>`).join('')}
            </select>
        </td>
        <td><strong>${company.name}</strong></td>
        <td>${company.industry || '-'}</td>
        <td>${company.category || '-'}</td>
        <td>${company.salary ? company.salary + '万円' : '-'}</td>
        <td>${company.employees ? company.employees.toLocaleString() : '-'}人</td>
        <td><a href="${company.url}" target="_blank" class="url-link">URL</a></td>
        <td style="font-size: 0.85em; color: #555;">${company.memo || ''}</td>
        <td>
            <textarea class="personal-memo" placeholder="面接の感想など..." 
                oninput="updatePersonalMemo('${company.name}', this.value)">${settings.personalMemo || ""}</textarea>
        </td>
        <td style="text-align:center;">
            <button class="del-btn" onclick="deleteCompany('${company.name}')">削除</button>
        </td>
    `;
    return row;
}

function renderTable(data) {
    isGrouped = false;
    tableBody.innerHTML = '';
    data.forEach(company => tableBody.appendChild(createRow(company)));
}

function renderGrouped(data) {
    isGrouped = true;
    tableBody.innerHTML = '';
    const groups = {};
    data.forEach(company => {
        const industries = getTerms(company, 'industry');
        industries.forEach(ind => {
            if (!groups[ind]) groups[ind] = [];
            if (!groups[ind].includes(company)) groups[ind].push(company);
        });
    });

    Object.keys(groups).sort().forEach(industry => {
        const indRow = document.createElement('tr');
        // 11列あるので colspan="11"
        indRow.innerHTML = `<td colspan="11" style="background:#dde2e6; font-weight:bold;">📁 業界：${industry}</td>`;
        tableBody.appendChild(indRow);
        groups[industry].forEach(company => tableBody.appendChild(createRow(company)));
    });
}

// --- 6. フィルタ & イベント ---

function createFilterButtons() {
    const industries = new Set();
    const categories = new Set();
    
    // masterDataから動的にボタンを生成
    masterData.forEach(c => {
        getTerms(c, 'industry').forEach(ind => industries.add(ind));
        getTerms(c, 'category').forEach(cat => categories.add(cat));
    });

    filterButtonsContainer.innerHTML = '<h3>表示フィルタ</h3>';
    const btnGroup = document.createElement('div');
    
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = '全て表示';
    allBtn.onclick = (e) => { currentData = [...masterData]; updateActiveBtn(e.target); renderTable(currentData); };
    btnGroup.appendChild(allBtn);

    const favFilterBtn = document.createElement('button');
    favFilterBtn.className = 'filter-btn';
    favFilterBtn.style.background = "#f1c40f";
    favFilterBtn.textContent = '★ お気に入り';
    favFilterBtn.onclick = (e) => { currentData = masterData.filter(c => userSettings[c.name]?.favorite); updateActiveBtn(e.target); renderTable(currentData); };
    btnGroup.appendChild(favFilterBtn);
    filterButtonsContainer.appendChild(btnGroup);

    const indSec = document.createElement('div');
    indSec.innerHTML = '<p style="margin:10px 0 5px; font-weight:bold; font-size:0.9em;">業界で絞り込む</p>';
    Array.from(industries).sort().forEach(ind => indSec.appendChild(generateBtn(ind, 'industry')));
    filterButtonsContainer.appendChild(indSec);

    const catSec = document.createElement('div');
    catSec.innerHTML = '<p style="margin:10px 0 5px; font-weight:bold; font-size:0.9em;">業種で絞り込む</p>';
    Array.from(categories).sort().forEach(cat => catSec.appendChild(generateBtn(cat, 'category')));
    filterButtonsContainer.appendChild(catSec);
}

function generateBtn(label, type) {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${type === 'industry' ? 'ind-btn' : 'cat-btn'}`;
    btn.textContent = label;
    btn.onclick = (e) => {
        currentData = masterData.filter(c => getTerms(c, type).includes(label));
        updateActiveBtn(e.target);
        renderGrouped(currentData);
    };
    return btn;
}

function updateActiveBtn(target) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    target.classList.add('active');
}

// --- 7. イベントリスナー ---

window.toggleFavorite = function(name, btn) {
    if (!userSettings[name]) userSettings[name] = { favorite: false, status: "未エントリー", personalMemo: "" };
    userSettings[name].favorite = !userSettings[name].favorite;
    btn.classList.toggle('active');
    btn.textContent = userSettings[name].favorite ? '★' : '☆';
    saveUserData();
    updateSummary();
};

window.updateStatus = function(name, select) {
    if (!userSettings[name]) userSettings[name] = { favorite: false, status: "未エントリー", personalMemo: "" };
    const newStatus = select.value;
    userSettings[name].status = newStatus;
    const row = select.closest('tr');
    row.className = `status-${newStatus}`;
    saveUserData();
    updateSummary();
};

window.updatePersonalMemo = function(name, value) {
    if (!userSettings[name]) userSettings[name] = { favorite: false, status: "未エントリー", personalMemo: "" };
    userSettings[name].personalMemo = value;
    saveUserData();
};

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    currentData = masterData.filter(c => 
        c.name.toLowerCase().includes(term) || 
        (c.industry && c.industry.toLowerCase().includes(term)) ||
        (c.category && c.category.toLowerCase().includes(term))
    );
    isGrouped ? renderGrouped(currentData) : renderTable(currentData);
});

sortSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'salary_avg') currentData.sort((a, b) => parseSalary(b.salary, 'avg') - parseSalary(a.salary, 'avg'));
    else if (val === 'salary_new') currentData.sort((a, b) => parseSalary(b.salary, 'new') - parseSalary(a.salary, 'new'));
    else if (val === 'employees') currentData.sort((a, b) => (b.employees || 0) - (a.employees || 0));
    else currentData.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    isGrouped ? renderGrouped(currentData) : renderTable(currentData);
});

viewListBtn.addEventListener('click', () => renderTable(currentData));
viewGroupBtn.addEventListener('click', () => renderGrouped(currentData));

// --- 8. 初期表示 ---
createFilterButtons();
renderTable(currentData);
updateSummary();