// Comprehensive 22 Eighth Schedule Languages of India + Vernacular Sub-Dialects

export const ALL_LANGUAGES = [
  // TIER 1: FULLY LIVE & SUPPORTED (8 Languages & Belts)
  {
    id: 'tamil',
    code: 'ta-IN',
    name: 'Tamil (தமிழ்)',
    script: 'தமிழ்',
    flag: '🌴',
    tier: 'fully-live',
    region: 'Tamil Nadu & Puducherry',
    dialects: [
      { id: 'ta-std', name: 'Standard Tamil (செந்தமிழ்)' },
      { id: 'ta-kongu', name: 'Kongu Tamil (கொங்குத் தமிழ் - Western TN)' },
      { id: 'ta-nellai', name: 'Nellai Tamil (நெல்லைத் தமிழ் - Southern TN)' },
      { id: 'ta-madurai', name: 'Madurai Tamil (மதுரைத் தமிழ்)' }
    ]
  },
  {
    id: 'marathi',
    code: 'mr-IN',
    name: 'Marathi (मराठी)',
    script: 'मराठी',
    flag: '🚩',
    tier: 'fully-live',
    region: 'Maharashtra & Goa',
    dialects: [
      { id: 'mr-std', name: 'Standard Marathi (प्रमाण मराठी)' },
      { id: 'mr-varhadi', name: 'Varhadi Marathi (वर्हाडी - Vidarbha Region)' },
      { id: 'mr-ahirani', name: 'Ahirani Marathi (अहिराणी - Khandesh)' },
      { id: 'mr-konkani', name: 'Coastal Malvani Marathi (मालवणी - Konkan)' }
    ]
  },
  {
    id: 'hindi',
    code: 'hi-IN',
    name: 'Hindi (हिन्दी)',
    script: 'देवनागरी',
    flag: '🪔',
    tier: 'fully-live',
    region: 'Northern & Central Belts',
    dialects: [
      { id: 'hi-std', name: 'Standard Hindi (मानक हिन्दी)' },
      { id: 'hi-bhojpuri', name: 'Bhojpuri (भोजपुरी - Purvanchal & Bihar)' },
      { id: 'hi-awadhi', name: 'Awadhi (अवधी - Central UP)' },
      { id: 'hi-braj', name: 'Braj Bhasha (ब्रज - Western UP)' },
      { id: 'hi-haryanvi', name: 'Haryanvi (हरियाणवी - Haryana)' }
    ]
  },
  {
    id: 'bhojpuri',
    code: 'hi-IN',
    name: 'Bhojpuri (भोजपुरी)',
    script: 'भोजपुरी',
    flag: '🌾',
    tier: 'fully-live',
    region: 'Eastern UP & Western Bihar',
    dialects: [
      { id: 'bho-purvanchal', name: 'Purvanchal Dehati (पूर्वांचल देहाती)' },
      { id: 'bho-shahabad', name: 'Shahabadi Bhojpuri (शाहाबादी)' }
    ]
  },
  {
    id: 'bengali',
    code: 'bn-IN',
    name: 'Bengali (বাংলা)',
    script: 'বাংলা',
    flag: '🌊',
    tier: 'fully-live',
    region: 'West Bengal & Tripura',
    dialects: [
      { id: 'bn-std', name: 'Standard Rarhi Bengali (রাঢ়ী বাংলা)' },
      { id: 'bn-sundarbans', name: 'Sundarbans Coastal Bengali (সুন্দরবন)' }
    ]
  },
  {
    id: 'santhali',
    code: 'hi-IN',
    name: 'Santhali (ᱥᱟᱱᱛᱟᱲᱤ)',
    script: 'Ol Chiki',
    flag: '🏹',
    tier: 'fully-live',
    region: 'Jharkhand, Odisha & WB Tribal Belts',
    dialects: [
      { id: 'sat-kolhan', name: 'Kolhan Santhali (ᱠᱚᱞᱦᱟᱱ)' },
      { id: 'sat-pargana', name: 'Santhal Parganas Register' }
    ]
  },
  {
    id: 'gujarati',
    code: 'gu-IN',
    name: 'Gujarati (ગુજરાતી)',
    script: 'ગુજરાતી',
    flag: '🪡',
    tier: 'fully-live',
    region: 'Gujarat & Daman',
    dialects: [
      { id: 'gu-std', name: 'Standard Gujarati (ગુજરાતી)' },
      { id: 'gu-saurashtra', name: 'Kathiyawadi / Saurashtra Gujarati (કાઠિયાવાડી)' }
    ]
  },
  {
    id: 'telugu',
    code: 'te-IN',
    name: 'Telugu (తెలుగు)',
    script: 'తెలుగు',
    flag: '🏺',
    tier: 'fully-live',
    region: 'Andhra Pradesh & Telangana',
    dialects: [
      { id: 'te-std', name: 'Standard Telugu (ప్రామాణిక తెలుగు)' },
      { id: 'te-telangana', name: 'Telangana Rural Dialect (తెలంగాణ మాండలికం)' }
    ]
  },

  // TIER 2: EXPANDING SOON (The Rest of 22 Eighth Schedule Languages)
  { id: 'assamese', code: 'as-IN', name: 'Assamese (অসমীয়া)', script: 'অসমীয়া', flag: '🦏', tier: 'expanding-soon', region: 'Assam' },
  { id: 'bodo', code: 'brx-IN', name: 'Bodo (बड़ो)', script: 'देवनागरी', flag: '⛰️', tier: 'expanding-soon', region: 'Bodoland Assam' },
  { id: 'dogri', code: 'doi-IN', name: 'Dogri (डोगरी)', script: 'देवनागरी', flag: '🏔️', tier: 'expanding-soon', region: 'Jammu & Kashmir' },
  { id: 'kannada', code: 'kn-IN', name: 'Kannada (ಕನ್ನಡ)', script: 'ಕನ್ನಡ', flag: '🏛️', tier: 'expanding-soon', region: 'Karnataka' },
  { id: 'kashmiri', code: 'ks-IN', name: 'Kashmiri (کٲشُر)', script: 'نستعلیق', flag: '❄️', tier: 'expanding-soon', region: 'Kashmir Valley' },
  { id: 'konkani', code: 'kok-IN', name: 'Konkani (कोंकणी)', script: 'देवनागरी', flag: '🏖️', tier: 'expanding-soon', region: 'Goa & Konkan Coast' },
  { id: 'maithili', code: 'mai-IN', name: 'Maithili (मैथिली)', script: 'तिरहुता / मैथिली', flag: '🎨', tier: 'expanding-soon', region: 'Mithila Bihar' },
  { id: 'malayalam', code: 'ml-IN', name: 'Malayalam (മലയാളം)', script: 'മലയാളം', flag: '🛶', tier: 'expanding-soon', region: 'Kerala & Lakshadweep' },
  { id: 'manipuri', code: 'mni-IN', name: 'Manipuri (মৈতৈলোন্)', script: 'Meitei Mayek', flag: '🌺', tier: 'expanding-soon', region: 'Manipur' },
  { id: 'nepali', code: 'ne-IN', name: 'Nepali (नेपाली)', script: 'देवनागरी', flag: '🇳🇵', tier: 'expanding-soon', region: 'Sikkim & Darjeeling' },
  { id: 'odia', code: 'or-IN', name: 'Odia (ଓଡ଼ିଆ)', script: 'ଓଡ଼ିଆ', flag: '🛕', tier: 'expanding-soon', region: 'Odisha' },
  { id: 'punjabi', code: 'pa-IN', name: 'Punjabi (ਪੰਜਾਬੀ)', script: 'ਗੁਰਮੁਖੀ', flag: '🌾', tier: 'expanding-soon', region: 'Punjab & Chandigarh' },
  { id: 'sanskrit', code: 'sa-IN', name: 'Sanskrit (संस्कृतम्)', script: 'देवनागरी', flag: '📜', tier: 'expanding-soon', region: 'Pan-Indian Heritage' },
  { id: 'sindhi', code: 'sd-IN', name: 'Sindhi (سنڌي)', script: 'Arabic / Devanagari', flag: '🪕', tier: 'expanding-soon', region: 'Sindhi Cultural Belts' },
  { id: 'urdu', code: 'ur-IN', name: 'Urdu (اردو)', script: 'نستعلیق', flag: '✒️', tier: 'expanding-soon', region: 'Pan-Indian Vernacular' }
];

export const TIER1_LANGUAGES = ALL_LANGUAGES.filter((l) => l.tier === 'fully-live');
export const TIER2_LANGUAGES = ALL_LANGUAGES.filter((l) => l.tier === 'expanding-soon');
