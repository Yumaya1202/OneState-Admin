
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

  {code:"TChat1",en:"TradeChatAbuse",ja:"トレードチャットの乱用",pun:"ミュート 20分",note:"全チャンネルでメッセージミュート",category:"TradeChat"},
    // Abuse
  { code: "Abuse1", en: "GameModeAbuse", ja: "ゲーム仕様の悪用", pun: "Ban 30日", note: "アカウント", category: "Abuse" },
  { code: "Abuse2", en: "AfkAbuse", ja: "AFKの悪用", pun: "Ban 3日", note: "アカウント", category: "Abuse" },
  { code: "Abuse3", en: "SystematicRuleViolation", ja: "ルール不遵守", pun: "Ban 30日", note: "アカウント", category: "Abuse" },
  { code: "Abuse4", en: "LargeScaleRpInterruption", ja: "大規模なRP妨害", pun: "Ban 24時間", note: "アカウント", category: "Abuse" },
  { code: "Abuse5", en: "GameplayObstruction", ja: "重要ポイントへのアクセス妨害", pun: "収監 60分", category: "Abuse" },

  // Alert
  { code: "Alert1", en: "BanBypass", ja: "BAN回避", pun: "デバイスBan", note: "デバイスBanのみ・アカウントは利用可能・期間：Ban 14日", category: "Alert" },
  { code: "Alert2", en: "ServerDamage", ja: "サーバーへの損害", pun: "デバイスBan", note: "デバイスBanのみ・アカウントは利用可能・999999（永久）", category: "Alert" },
  { code: "Alert3", en: "UsingCheats", ja: "サードパーティ製ソフトウェア（チート）の使用", pun: "デバイスBan", note: "デバイスBanのみ・アカウントは利用可能", category: "Alert" },
  { code: "Alert4", en: "EconomyDamage", ja: "サーバー経済への損害", pun: "永久Ban", note: "アカウント・段階的Ban（注記参照）", category: "Alert" },
  { code: "Alert5", en: "ExternalDefamation", ja: "公式・外部チャンネル上での誹謗中傷", pun: "デバイスBan", note: "デバイスのみ・999999（永久）", category: "Alert" },
  { code: "Alert6", en: "ThirdPartyPromotion", ja: "第三者コンテンツの宣伝", pun: "デバイスBan", note: "デバイスのみ・14日", category: "Alert" },

  // Media
  { code: "Media1", en: "Mediastalking", ja: "ライブ配信妨害・撮影妨害", pun: "Ban 1日", note: "1日間のアカウントBan", category: "Media" },

  // Clan
  { code: "Clan1", en: "GangNameViolation", ja: "ギャング名、説明文、ランク名", pun: "Kick", category: "Clan" },
  { code: "Clan2", en: "BlockingGangHouse", ja: "ギャングハウス入口マーカーの封鎖", pun: "収監 60分", category: "Clan" },
  { code: "Clan3", en: "GangChatViolotion", ja: "ギャングチャットルール", pun: "ミュート 240分", note: "全チャンネルでメッセージミュート", category: "Clan" },
  { code: "Clan4", en: "GangTeaming", ja: "イベントでのギャング同盟禁止", pun: "収監 30分", category: "Clan" },
  { code: "Clan5", en: "GangTazerAbuse", ja: "ギャングスタンガンの使用", pun: "収監 90分", category: "Clan" },
  { code: "Clan6", en: "GangRecruitmentGreenZone", ja: "グリーンゾーンでのギャング勧誘", pun: "ミュート 60分", note: "全チャンネルでメッセージミュート", category: "Clan" },
  { code: "Clan10", en: "GangCurrencyAbuse", ja: "ギャング通貨の不正取得と乱用", pun: "Ban 30日", note: "アカウント", category: "Clan" },
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