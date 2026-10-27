
const rules = [
  {code:"Rp1",en:"Deathmatch",ja:"デスマッチ（DM）",pun:"収監 20分",note:"理由の入力必須",category:"RP"},
  {code:"Rp2",en:"DeathmatchAuto",ja:"デスマッチ・オート（DM Auto）",pun:"収監 20分",note:"理由の入力必須",category:"RP"},
  {code:"Rp3",en:"NrpPower",ja:"ノンロールプレイ・パワー（NP）",pun:"収監 10分",category:"RP"},
  {code:"Rp4",en:"CreatingNrpSituations",ja:"ノンロールプレイ（NRP）",pun:"収監 15分",category:"RP"},
  {code:"Rp5",en:"Metagaming",ja:"メタゲーミング（MG）",pun:"ミュート 30分",note:"全チャンネルでミュート",category:"RP"},
  {code:"Rp6",en:"RoleplayRejection",ja:"RP拒否",pun:"収監 30分",category:"RP"},
  {code:"Rp7",en:"RoleplayDisbalance",ja:"RPのアンバランス",pun:"収監 20分",category:"RP"},
  {code:"Rp8",en:"AfkInGame",ja:"AFK",pun:"ゲーム内Kick",category:"RP"},
  {code:"Rp9",en:"DriveBy",ja:"ドライブバイ（DB）",pun:"収監 60分",category:"RP"},
  {code:"Rp9.1",en:"MassDriveBy",ja:"大規模なドライブバイ",pun:"Ban 12時間",note:"アカウントBanのみ",category:"RP"},
  {code:"RP10",en:"RepeatKill",ja:"リピートキル（RK）",pun:"収監 90分",category:"RP"},
  {code:"Rp11",en:"GreenZoneViolation",ja:"保護エリアに対する不遵守",pun:"収監 45分",category:"RP"},
  {code:"Rp12",en:"NrpKidnapping",ja:"非ロールプレイ誘拐",pun:"収監 30分",category:"RP"},
  {code:"Rp13",en:"NrpFactionActions",ja:"機関NRP",pun:"Ban 3日",note:"アカウントのみ",category:"RP"},
  {code:"Rp14",en:"SexualHarassment",ja:"セクシャルハラスメント",pun:"Ban 30日",note:"アカウントのみ",category:"RP"},
  {code:"Rp15",en:"FactionMemberProvocation",ja:"機関業務の妨害",pun:"収監 30分",category:"RP"},
  {code:"Rp16",en:"CrimesAgainstEmergencyPersonnel",ja:"救護隊員に対する犯罪行為",pun:"Ban 12時間",note:"アカウント",category:"RP"},

  {code:"Name1",en:"NrpNickname",ja:"非RPな名前",pun:"ゲーム内Kick",category:"Name"},
  {code:"Name2",en:"OffensiveNickname",ja:"不適切な名前",pun:"Kick",category:"Name"},

  {code:"Ac1",en:"SellingAccount",ja:"アカウントの販売",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Account"},
  {code:"Ac2",en:"TransferringAccount",ja:"アカウントの譲渡",pun:"永久Ban",note:"アカウントBan・デバイスBanなし・999999（永久）",category:"Account"},
  {code:"Ac3",en:"CreatingTooManyAccount",ja:"3つを超えるアカウントの作成",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Account"},
  {code:"Ac4",en:"AccountHacking",ja:"アカウントのハッキング",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Account"},
  {code:"Ac5",en:"RealWorldTrading",ja:"RMT（リアルマネートレーディング）",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Account"},

  {code:"Chat1",en:"InsultingPlayer",ja:"プレイヤーへの侮辱",pun:"Ban 24時間",note:"アカウント",category:"Chat"},
  {code:"Chat2",en:"InsultingRelatives",ja:"プレイヤーの親族に対する侮辱",pun:"Ban 3日",note:"アカウント",category:"Chat"},
  {code:"Chat3",en:"DiscriminationInsults",ja:"宗教・人種・国籍・性別などに基づく侮辱",pun:"Ban 3日",note:"アカウント",category:"Chat"},
  {code:"Chat4",en:"InsultingAdministration",ja:"運営チームへの侮辱",pun:"Ban 7日",note:"アカウント",category:"Chat"},
  {code:"Chat5",en:"SpamAndFlood",ja:"チャットの乱用",pun:"ミュート 10分",note:"全チャンネルでメッセージミュート",category:"Chat"},
  {code:"Chat6",en:"ReportSystemAbuse",ja:"報告／ヘルプシステムの乱用",pun:"ミュート 30分",note:"全チャンネルでメッセージミュート",category:"Chat"},
  {code:"Chat7",en:"UnauthorizedAdvertising",ja:"許可のない広告",pun:"Ban 10日",note:"アカウント",category:"Chat"},
  {code:"Chat8",en:"MusicInVoiceChat",ja:"ボイスチャットでの音楽の使用",pun:"ミュート 60分",note:"マイクミュート",category:"Chat"},
  {code:"Chat9",en:"ImpersonatingStaff",ja:"運営や当社社員のなりすまし",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Chat"},
  {code:"Chat10",en:"DeceivingPlayers",ja:"不正行為",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Chat"},
  {code:"Chat11",en:"DeceivingAdministration",ja:"運営に対する虚偽の申告",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能・999999（永久）",category:"Chat"},
  {code:"Chat12",en:"Defamation",ja:"名誉毀損",pun:"Ban 1日",note:"デバイスBanのみ・1日",category:"Chat"},
  {code:"Chat13",en:"RealLifeThreats",ja:"OOC脅迫",pun:"Ban 10日",note:"アカウント",category:"Chat"},
  {code:"Chat14",en:"ProvokingRuleViolations",ja:"NRPインフルエンス",pun:"Ban 12時間",note:"アカウント",category:"Chat"},
  {code:"Chat15",en:"ToxicBehavior",ja:"有害行為",pun:"Ban 3日",note:"アカウント",category:"Chat"},
  {code:"Chat16",en:"UnofficialLanguageUsage",ja:"非公用語の使用",pun:"ミュート 10分",note:"全チャンネルでメッセージミュート",category:"Chat"},
  {code:"Chat17",en:"PersonalInfoDisclosure",ja:"個人情報の不正公開",pun:"デバイスBan",note:"デバイスBanのみ・アカウントは利用可能",category:"Chat"},

  {code:"TChat1",en:"TradeChatAbuse",ja:"トレードチャットの乱用",pun:"ミュート 20分",note:"全チャンネルでメッセージミュート",category:"TradeChat"}
];

const search = document.getElementById("search");
const list = document.getElementById("rule-list");
const resultCount = document.getElementById("result-count");
const filterButtons = document.querySelectorAll("[data-category]");

let selectedCategory = "all";

function renderRules() {
  const keyword = search.value.trim().toLowerCase();

  const filtered = rules.filter(rule => {
    const matchesCategory =
      selectedCategory === "all" ||
      rule.category === selectedCategory;

    const text = [
      rule.code,
      rule.en,
      rule.ja,
      rule.pun,
      rule.note || "",
      rule.category
    ].join(" ").toLowerCase();

    return matchesCategory && text.includes(keyword);
  });

  resultCount.textContent = `${filtered.length}件のルール`;

  list.innerHTML = filtered.map(rule => `
    <article class="rule">
      <div>
        <span class="rule-code">${escapeHTML(rule.code)}</span>
        <span class="rule-name">${escapeHTML(rule.ja)}</span>
        <div class="rule-en">
          ${escapeHTML(rule.en)} · ${escapeHTML(rule.category)}
        </div>
        ${rule.note ? `
          <div class="note">※ ${escapeHTML(rule.note)}</div>
        ` : ""}
      </div>
      <span class="punishment">${escapeHTML(rule.pun)}</span>
    </article>
  `).join("");

  if (filtered.length === 0) {
    list.innerHTML = `
      <p class="description">該当するルールが見つかりません。</p>
    `;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

search.addEventListener("input", renderRules);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    filterButtons.forEach(item => {
      item.classList.toggle("selected", item === button);
    });

    renderRules();
  });
});

document.querySelectorAll(".nav").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    document.getElementById("rules").hidden =
      button.dataset.page !== "rules";

    document.getElementById("guide").hidden =
      button.dataset.page !== "guide";
  });
});

document.getElementById("total").textContent = rules.length;

renderRules();

// Supabase connection
const SUPABASE_URL = "4CUjLhhP7swrnurUkWkL4g_kwyW5nlF";
const SUPABASE_PUBLISHABLE_KEY = "dvnw9AVcGYqJ9cnrDJMh-w_pF0uQXKH";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const loginForm = document.getElementById("login-form");
const authMessage = document.getElementById("auth-message");
const punishmentContent = document.getElementById("punishment-content");
const punishmentMessage = document.getElementById("punishment-message");
const punishmentRows = document.getElementById("punishment-rows");
const logoutButton = document.getElementById("logout-button");

async function loadPunishments() {
  punishmentMessage.textContent = "読み込み中...";
  punishmentRows.replaceChildren();

  const { data, error } = await supabaseClient
    .from("punishment_logs")
    .select("punishment_date, target_name, punishment_type, duration, rule_code, notes")
    .order("punishment_date", { ascending: false });

  if (error) {
    punishmentMessage.textContent =
      "読み込み失敗：" + error.message;
    return;
  }

  if (!data || data.length === 0) {
    punishmentMessage.textContent = "処罰履歴はまだありません。";
    return;
  }

  for (const item of data) {
    const row = document.createElement("tr");

    const values = [
      item.punishment_date,
      item.target_name,
      item.punishment_type,
      item.duration,
      item.rule_code,
      item.notes
    ];

    for (const value of values) {
      const cell = document.createElement("td");
      cell.textContent = value ?? "";
      row.appendChild(cell);
    }

    punishmentRows.appendChild(row);
  }

  punishmentMessage.textContent = data.length + "件の履歴";
}

async function showPunishments() {
  const { data, error } =
    await supabaseClient.auth.getSession();

  if (error || !data.session) {
    punishmentContent.hidden = true;
    loginForm.hidden = false;
    return;
  }

  loginForm.hidden = true;
  punishmentContent.hidden = false;
  await loadPunishments();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "ログイン中...";

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    authMessage.textContent =
      "ログインできませんでした。メールアドレスとパスワードを確認してね。";
    return;
  }

  authMessage.textContent = "ログインしました。";
  await showPunishments();
});

logoutButton.addEventListener("click", async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    authMessage.textContent = "ログアウトできませんでした。";
    return;
  }

  punishmentContent.hidden = true;
  loginForm.hidden = false;
  loginForm.reset();
  authMessage.textContent = "ログアウトしました。";
});

showPunishments();
