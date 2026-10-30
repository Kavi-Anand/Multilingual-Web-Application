// BhashaSetu AI — Vidya Vaani Master Dataset (PS ID: 26042)

// 22 Eighth Schedule Languages + Vernacular Belts
export const LANGUAGES_MASTER = [
  // TIER 1: FULLY SUPPORTED LIVE (8 Languages)
  { id: 'tamil', code: 'ta-IN', short: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🌴', tier: 'live', region: 'Tamil Nadu & Puducherry' },
  { id: 'marathi', code: 'mr-IN', short: 'mr', name: 'Marathi', native: 'मराठी', flag: '🚩', tier: 'live', region: 'Maharashtra & Goa' },
  { id: 'hindi', code: 'hi-IN', short: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🪔', tier: 'live', region: 'Northern Belts' },
  { id: 'bhojpuri', code: 'hi-IN', short: 'hi', name: 'Bhojpuri', native: 'भोजपुरी', flag: '🌾', tier: 'live', region: 'Eastern UP & Bihar' },
  { id: 'bengali', code: 'bn-IN', short: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🌊', tier: 'live', region: 'West Bengal & Tripura' },
  { id: 'santhali', code: 'hi-IN', short: 'hi', name: 'Santhali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🏹', tier: 'live', region: 'Jharkhand & Odisha' },
  { id: 'gujarati', code: 'gu-IN', short: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🪡', tier: 'live', region: 'Gujarat & Daman' },
  { id: 'telugu', code: 'te-IN', short: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🏺', tier: 'live', region: 'Andhra & Telangana' },

  // TIER 2: CONTENT EXPANSION IN PROGRESS (14 Languages)
  { id: 'assamese', code: 'as-IN', short: 'as', name: 'Assamese', native: 'অসমীয়া', flag: '🦏', tier: 'expansion', region: 'Assam' },
  { id: 'bodo', code: 'brx-IN', short: 'hi', name: 'Bodo', native: 'बड़ो', flag: '⛰️', tier: 'expansion', region: 'Bodoland Assam' },
  { id: 'dogri', code: 'doi-IN', short: 'hi', name: 'Dogri', native: 'डोगरी', flag: '🏔️', tier: 'expansion', region: 'Jammu & Kashmir' },
  { id: 'kannada', code: 'kn-IN', short: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🏛️', tier: 'expansion', region: 'Karnataka' },
  { id: 'kashmiri', code: 'ks-IN', short: 'ks', name: 'Kashmiri', native: 'کٲشُر', flag: '❄️', tier: 'expansion', region: 'Kashmir Valley' },
  { id: 'konkani', code: 'kok-IN', short: 'hi', name: 'Konkani', native: 'कोंकणी', flag: '🏖️', tier: 'expansion', region: 'Goa & Konkan' },
  { id: 'maithili', code: 'mai-IN', short: 'hi', name: 'Maithili', native: 'मैथिली', flag: '🎨', tier: 'expansion', region: 'Mithila Bihar' },
  { id: 'malayalam', code: 'ml-IN', short: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🛶', tier: 'expansion', region: 'Kerala' },
  { id: 'manipuri', code: 'mni-IN', short: 'mni', name: 'Manipuri', native: 'মৈতৈলোন্', flag: '🌺', tier: 'expansion', region: 'Manipur' },
  { id: 'nepali', code: 'ne-IN', short: 'ne', name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', tier: 'expansion', region: 'Sikkim & Darjeeling' },
  { id: 'odia', code: 'or-IN', short: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🛕', tier: 'expansion', region: 'Odisha' },
  { id: 'punjabi', code: 'pa-IN', short: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🌾', tier: 'expansion', region: 'Punjab' },
  { id: 'sanskrit', code: 'sa-IN', short: 'sa', name: 'Sanskrit', native: 'संस्कृतम्', flag: '📜', tier: 'expansion', region: 'Pan-India Heritage' },
  { id: 'sindhi', code: 'sd-IN', short: 'sd', name: 'Sindhi', native: 'سنڌي', flag: '🪕', tier: 'expansion', region: 'Sindhi Belts' },
  { id: 'urdu', code: 'ur-IN', short: 'ur', name: 'Urdu', native: 'اردو', flag: '✒️', tier: 'expansion', region: 'Pan-India Vernacular' }
];

// Cultural Context Engine (10 Indian Regions)
export const CULTURAL_REGIONS = [
  { id: 'tn', name: 'Tamil Nadu', fruit: 'Mango (மாம்பழம்)', vehicle: 'Village bus (ஊர் பஸ்)', place: 'Village Haat (ஊர் சந்தை)', elder: 'Selvi Paatti', motif: 'Kolam & Temple Pond' },
  { id: 'mh', name: 'Maharashtra', fruit: 'Vidarbha Orange (संत्री)', vehicle: 'Bullock cart (बैलगाडी)', place: 'Local Bazaar (गावचा बाजार)', elder: 'Ananda Aajoba', motif: 'Wada & Farm' },
  { id: 'up_bihar', name: 'Purvanchal & Bihar', fruit: 'Guava (अमरूद)', vehicle: 'Rickshaw (ठेला)', place: 'Village Painth (गाँव के पैंठ)', elder: 'Mantu Kaka', motif: 'Pokhar & Chulha' },
  { id: 'wb', name: 'West Bengal', fruit: 'Sweet Mango (মিষ্টি আম)', vehicle: 'Country Boat (ডিঙ্গি নৌকা)', place: 'Village Market (গ্রামের বাজার)', elder: 'Rahim Chacha', motif: 'Sundarbans River' },
  { id: 'ka', name: 'Karnataka', fruit: 'Coconut (తెంగినకాయి)', vehicle: 'Cart', place: 'Santhe (ಸಂತೆ)', elder: 'Gowda Aja', motif: 'Paddy Farm' },
  { id: 'kl', name: 'Kerala', fruit: 'Banana (ഏത്തപ്പഴം)', vehicle: 'Canoe Boat (വള്ളം)', place: 'Angadi (അങ്ങാടി)', elder: 'Amma', motif: 'Backwaters' },
  { id: 'ap_ts', name: 'Andhra & Telangana', fruit: 'Sweet Mango (మామిడి)', vehicle: 'Cart (బండి)', place: 'Santhulu (సంత)', elder: 'Ramayya Tata', motif: 'Village Tank' },
  { id: 'pb', name: 'Punjab', fruit: 'Kinnow (ਕਿੰਨੂ)', vehicle: 'Tractor (ਟਰੈਕਟਰ)', place: 'Mandi (ਮੰਡੀ)', elder: 'Baba ji', motif: 'Mustard Fields' },
  { id: 'or', name: 'Odisha', fruit: 'Jackfruit (પણસ)', vehicle: 'Cart', place: 'Haat (ഹാଟ)', elder: 'Aja', motif: 'Village Pond' },
  { id: 'as', name: 'Assam', fruit: 'Areca nut (তামোল)', vehicle: 'Boat', place: 'Bazaar (বজাৰ)', elder: 'Kakai', motif: 'Tea Gardens' }
];

// Voice Personas
export const VOICE_PERSONAS = [
  { id: 'ananya', name: 'Ananya', label: '👩 Ananya — Warm Teacher', role: 'Primary Educator', pitch: 1.0, rate: 1.0 },
  { id: 'arjun', name: 'Arjun', label: '👨 Arjun — Friendly Teacher', role: 'Interactive Mentor', pitch: 0.85, rate: 0.95 },
  { id: 'meena', name: 'Meena', label: '👩 Meena — Storyteller', role: 'Village Elder Storyteller', pitch: 1.2, rate: 0.8 },
  { id: 'ravi', name: 'Ravi', label: '👨 Ravi — Energetic Mentor', role: 'Activity Facilitator', pitch: 1.35, rate: 1.1 }
];

// 15 Master Data-Driven Lessons across Math, EVS, Language
export const MASTER_LESSONS = [
  // MATHEMATICS (5 Lessons)
  {
    id: 'm1',
    subject: 'math',
    subjectName: 'Mathematics',
    grade: 2,
    difficulty: 'Easy',
    estimatedTime: '6 mins',
    title: 'Addition at the Market',
    learningObjective: 'Understand addition as combining quantities using familiar village currency & fruits.',
    englishText: 'The boy buys an apple for ₹10 and a ball for ₹5. How much money does he spend in total?',
    literalTranslations: {
      tamil: 'சிறுவன் ₹10க்கு ஒரு ஆப்பிளையும் ₹5க்கு ஒரு பந்தையும் வாங்குகிறான். அவன் மொத்தம் எவ்வளவு பணம் செலவழிக்கிறான்?',
      marathi: 'मुलगा ₹10 ला एक सफरचंद आणि ₹5 ला एक चेंडू विकत घेतो. तो एकूण किती पैसे खर्च करतो?',
      hindi: 'लड़का ₹10 में एक सेब और ₹5 में एक गेंद खरीदता है। वह कुल कितने रुपये खर्च करता है?'
    },
    vidyaVaaniAdaptations: {
      tamil: 'முத்து ஊர் சந்தையில் செல்வி பாட்டியிடம் ₹10க்கு 2 இனிப்பு மாம்பழங்களும், ₹5க்கு ஒரு களிமண் பொம்மையும் வாங்குகிறான். அவன் பாட்டிக்கு மொத்தம் எவ்வளவு பணம் கொடுத்தான்?',
      marathi: 'तन्वी गावच्या बाजारात आनंदा आजोबांकडून ₹10 ची रसाळ संत्री आणि ₹5 चे खेळणे घेते. तिने आजोबांना एकूण किती रुपये दिले?',
      hindi: 'छोटू गाँव के पैंठ में मंटू काका से ₹10 के ताजा अमरूद अउरी ₹5 के खिलौना खरीदेला। बताओ ऊ कुल केतना रूपया देले होई?'
    },
    adaptationsReasoning: [
      { change: 'Apple → Cart Mangoes / Oranges / Guavas', reason: 'Local fruit familiarity in regional belts.' },
      { change: 'Ball → Clay Toy / Local Toy', reason: 'Anchors purchase to traditional village haat stalls.' },
      { change: 'Boy → Muthu / Tanvi / Chhotu', reason: 'Familiar age-appropriate local child names.' }
    ],
    teachingSequence: {
      explanation: 'Addition means combining two sets of money together to find the total sum.',
      localExample: 'If you have ₹10 note in one pocket and ₹5 coin in another, put them together: 10 + 5 = ₹15.',
      question: 'Muthu spends ₹10 on mangoes and ₹5 on a toy. What is 10 + 5?',
      correctAnswer: '15',
      feedbackCorrect: 'Correct! 🎉 10 + 5 = 15. You mastered market addition!',
      followUp: 'If Muthu gives a ₹20 note, how much change should Selvi Paatti return?'
    },
    quiz: {
      question: 'If you buy mangoes for ₹10 and a toy for ₹5, what is the total cost?',
      options: ['₹12', '₹15', '₹18', '₹20'],
      correctIndex: 1,
      explanation: '10 + 5 = ₹15. Adding ₹10 and ₹5 gives ₹15 in total!'
    }
  },
  {
    id: 'm2',
    subject: 'math',
    subjectName: 'Mathematics',
    grade: 1,
    difficulty: 'Easy',
    estimatedTime: '4 mins',
    title: 'Counting Around Us',
    learningObjective: 'Count numbers 1 to 10 using village trees and animals.',
    englishText: 'There are 4 cows in a farm and 3 cows near the pond. How many cows are there altogether?',
    literalTranslations: {
      tamil: 'ஒரு பண்ணையில் 4 பசுக்களும் குளத்தின் அருகில் 3 பசுக்களும் உள்ளன. மொத்தத்தில் எத்தனை பசுக்கள் உள்ளன?',
      marathi: 'एका शेतात ४ गाई आणि तलावाजवळ ३ गाई आहेत. एकूण किती गाई आहेत?'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் புல்வெளியில் 4 வெள்ளாடுகளும், ஏரிக்கரையில் 3 வெள்ளாடுகளும் மேய்ஞ்சிட்டு இருக்கு. இப்போ மொத்தம் எத்தனை ஆடுகள் இருக்கு?',
      marathi: 'आपल्या शेतात ४ वासरे आणि विहिरीपाशी ३ वासरे चरत आहेत. एकूण किती वासरे झाली?'
    },
    adaptationsReasoning: [
      { change: 'Cows → Goats / Calves', reason: 'Children see goats grazing daily near homes.' }
    ],
    teachingSequence: {
      explanation: 'Counting combines groups one by one: 1, 2, 3, 4... then 5, 6, 7.',
      localExample: '4 goats on the meadow plus 3 goats by the pond equals 7 goats.',
      question: 'Count: 4 + 3 equals how many?',
      correctAnswer: '7',
      feedbackCorrect: 'Great job! 4 + 3 = 7. You counted all the animals!',
      followUp: 'What comes right after number 7 when counting?'
    },
    quiz: {
      question: 'What is 4 + 3?',
      options: ['6', '7', '8', '9'],
      correctIndex: 1,
      explanation: '4 + 3 = 7!'
    }
  },
  {
    id: 'm3',
    subject: 'math',
    subjectName: 'Mathematics',
    grade: 2,
    difficulty: 'Medium',
    estimatedTime: '5 mins',
    title: 'Subtraction with Fruits',
    learningObjective: 'Understand subtraction as taking away items from a total group.',
    englishText: 'A seller has 8 oranges in a basket. A buyer takes 3 oranges. How many oranges are left in the basket?',
    literalTranslations: {
      tamil: 'ஒரு விற்பனையாளர் கூடையில் 8 ஆரஞ்சுகளை வைத்திருக்கிறார். வாங்குபவர் 3 ஆரஞ்சுகளை எடுக்கிறார். கூடையில் எத்தனை ஆரஞ்சுகள் எஞ்சியுள்ளன?',
      marathi: 'विक्रेत्याकडे टोपलीत ८ संत्री आहेत. ग्राहक ३ संत्री घेतो. टोपलीत किती संत्री उरली?'
    },
    vidyaVaaniAdaptations: {
      tamil: 'செல்வி பாட்டி கூடையில் 8 இனிப்பு மாம்பழங்கள் வச்சிருக்காங்க. முத்து 3 மாம்பழங்களை வாங்கிட்டான். இப்போ பாட்டி கூடையில் மீதி எத்தனை மாம்பழங்கள் இருக்கும்?',
      marathi: 'आजोबांकडे बांबूच्या टोपलीत ८ ताजी संत्री होती. तन्वीने ३ संत्री घेतली. आता टोपलीत किती संत्री उरली?'
    },
    adaptationsReasoning: [
      { change: 'Oranges → Basket Mangoes', reason: 'Anchors subtraction (8 - 3 = 5) to market baskets.' }
    ],
    teachingSequence: {
      explanation: 'Subtraction means removing a smaller number from a larger total.',
      localExample: 'Start with 8 mangoes. Take away 3: 8 - 3 = 5 mangoes remaining.',
      question: 'If you have 8 mangoes and give 3 away, how many are left?',
      correctAnswer: '5',
      feedbackCorrect: 'Correct! 🎉 8 - 3 = 5.',
      followUp: 'If you give away 2 more, how many will be left?'
    },
    quiz: {
      question: '8 - 3 = ?',
      options: ['4', '5', '6', '7'],
      correctIndex: 1,
      explanation: '8 - 3 = 5.'
    }
  },
  {
    id: 'm4',
    subject: 'math',
    subjectName: 'Mathematics',
    grade: 3,
    difficulty: 'Medium',
    estimatedTime: '7 mins',
    title: 'Measuring Everyday Objects',
    learningObjective: 'Understand length & height using hand-spans and local paces.',
    englishText: 'The table is 5 hand-spans long and the bench is 3 hand-spans long. What is the total length?',
    literalTranslations: {
      tamil: 'மேஜை 5 ஜாண் நீளமும், பெஞ்ச் 3 ஜாண் நீளமும் கொண்டது. மொத்த நீளம் என்ன?',
      marathi: 'टेबल ५ वीत लांब आणि बाक ३ वीत लांब आहे. एकूण लांबी किती?'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் பள்ளி திண்ணை 5 ஜாண் நீளமும், உட்காரும் பலகை 3 ஜாண் நீளமும் இருக்கு. இரண்டும் சேர்ந்து மொத்தம் எத்தனை ஜாண் நீளம்?',
      marathi: 'आपली शाळा पडवी ५ वीत लांब आणि लाकडी बाक ३ वीत लांब आहे. एकूण लांबी किती वीत झाली?'
    },
    adaptationsReasoning: [
      { change: 'Table → Village School Veranda (திண்ணை)', reason: 'Uses traditional hand-span (சாண்/वीत) measurement.' }
    ],
    teachingSequence: {
      explanation: 'Length can be measured using hand-spans (சாண்) by counting end-to-end.',
      localExample: '5 hand-spans for the veranda + 3 hand-spans for the bench = 8 hand-spans total.',
      question: '5 + 3 = ?',
      correctAnswer: '8',
      feedbackCorrect: 'Awesome! 5 + 3 = 8 hand-spans.',
      followUp: 'How many hand-spans is your study desk?'
    },
    quiz: {
      question: '5 hand-spans + 3 hand-spans = ?',
      options: ['7', '8', '9', '10'],
      correctIndex: 1,
      explanation: '5 + 3 = 8.'
    }
  },
  {
    id: 'm5',
    subject: 'math',
    subjectName: 'Mathematics',
    grade: 3,
    difficulty: 'Hard',
    estimatedTime: '8 mins',
    title: 'Shapes Around the Village',
    learningObjective: 'Identify circles, triangles, and rectangles in village architecture.',
    englishText: 'A wheel is round like a circle. A hut roof is triangular like a triangle.',
    literalTranslations: {
      tamil: 'ஒரு சக்கரம் வட்டம் போல வட்டமானது. ஒரு குடிலின் கூரை முக்கோணம் போல முக்கோண வடிவமானது.',
      marathi: 'चाक वर्तुळासारखे गोलाकार असते. झोपडीचे छत त्रिकोणासारखे त्रिकोणी असते.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் மாட்டுவண்டி சக்கரம் வட்ட வடிவம் (Circle). நம்ம ஊர் ஓட்டு வீட்டின் கூரை முக்கோண வடிவம் (Triangle)!',
      marathi: 'बैलगाडीचे लाकडी चाक वर्तुळ (Circle). आपल्या मातीच्या घराचे छत त्रिकोण (Triangle)!'
    },
    adaptationsReasoning: [
      { change: 'Wheel → Bullock Cart Wheel', reason: 'Connects geometry to physical village objects.' }
    ],
    teachingSequence: {
      explanation: 'Shapes are everywhere: wheels are circular, hut roofs are triangular.',
      localExample: 'Look at a bullock cart wheel: round edge = circle.',
      question: 'What shape is a bullock cart wheel?',
      correctAnswer: 'Circle',
      feedbackCorrect: 'Spot on! A wheel is a circle.',
      followUp: 'Can you name another round object in your kitchen?'
    },
    quiz: {
      question: 'What shape is a bullock cart wheel?',
      options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
      correctIndex: 1,
      explanation: 'A wheel is round, forming a circle!'
    }
  },

  // ENVIRONMENTAL SCIENCE (5 Lessons)
  {
    id: 'e1',
    subject: 'evs',
    subjectName: 'Environmental Science',
    grade: 2,
    difficulty: 'Easy',
    estimatedTime: '5 mins',
    title: 'My Village & Surroundings',
    learningObjective: 'Understand community roles, village ponds, and shared natural resources.',
    englishText: 'People in the village get clean water from the community well and grow crops in the fields.',
    literalTranslations: {
      tamil: 'கிராமத்தில் உள்ள மக்கள் சமூகக் கிணற்றிலிருந்து சுத்தமான நீரைப் பெறுகிறார்கள் மற்றும் வயல்களில் பயிர்களை வளர்க்கிறார்கள்.',
      marathi: 'गावातील लोक सार्वजनिक विहिरीतून स्वच्छ पाणी मिळवतात आणि शेतात पिके पिकवतात.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் மக்கள் அனைவரும் ஊர்க் கிணற்றிலிருந்து நன்னீர் இறைத்து பயன்படுத்துறாங்க, அப்புறம் நன்செய் வயல்களில் நெல் விளைவிக்கிறாங்க!',
      marathi: 'आपल्या गावातील लोक विहिरीतून गोड पाणी ओढतात आणि शेतात हिरवेगार भात पिकवतात!'
    },
    adaptationsReasoning: [
      { change: 'Crops → Paddy (நெல் / भात)', reason: 'Relates agriculture to regional staple crops.' }
    ],
    teachingSequence: {
      explanation: 'Villages share natural resources like open wells and paddy fields.',
      localExample: 'Drawing water from the village well supplies fresh drinking water.',
      question: 'Where do village families get fresh water?',
      correctAnswer: 'Village Well',
      feedbackCorrect: 'Correct! Community wells provide fresh water.',
      followUp: 'Why should we keep our village well clean?'
    },
    quiz: {
      question: 'Where does fresh drinking water come from in villages?',
      options: ['Factories', 'Community Well', 'Dirty Puddles', 'Pipes only'],
      correctIndex: 1,
      explanation: 'Community wells provide clean groundwater for villages.'
    }
  },
  {
    id: 'e2',
    subject: 'evs',
    subjectName: 'Environmental Science',
    grade: 2,
    difficulty: 'Medium',
    estimatedTime: '6 mins',
    title: 'Plants Around Us',
    learningObjective: 'Identify parts of a plant: roots, stem, leaves, and flowers.',
    englishText: 'Roots hold the plant in the soil and absorb water. Leaves prepare food using sunlight.',
    literalTranslations: {
      tamil: 'வேர்கள் தாவரத்தை மண்ணில் பிடித்து நீரை உறிஞ்சுகின்றன. இலைகள் சூரிய ஒளியைப் பயன்படுத்தி உணவை தயாரிக்கின்றன.',
      marathi: 'मुळे झाडाला मातीत घट्ट धरून ठेवतात आणि पाणी शोषून घेतात. पाने सूर्याच्या प्रकाशात अन्न तयार करतात.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'செடியின் வேர்கள் மண்ணுக்கு அடியில் இருந்து தண்ணீரை உறிஞ்சுது. பச்சை இலைகள் சூரிய வெளிச்சத்தை வச்சு உணவு தயாரிக்குது!',
      marathi: 'झाडाची मुळे जमिनीतील गोड पाणी पितात आणि हिरवी पाने सूर्याच्या प्रकाशात अन्न बनवतात!'
    },
    adaptationsReasoning: [
      { change: 'Soil → Ground soil & Well water', reason: 'Simplifies plant nutrition concepts.' }
    ],
    teachingSequence: {
      explanation: 'Roots act like straw drinking groundwater; leaves act like green sun-cookers.',
      localExample: 'Pulling a small weed shows roots clinging tightly to soil.',
      question: 'Which part of the plant absorbs water from soil?',
      correctAnswer: 'Roots',
      feedbackCorrect: 'Exactly right! Roots absorb water.',
      followUp: 'What color are healthy leaves?'
    },
    quiz: {
      question: 'Which part absorbs water from the soil?',
      options: ['Flower', 'Stem', 'Roots', 'Fruit'],
      correctIndex: 2,
      explanation: 'Roots absorb groundwater and anchor the plant.'
    }
  },
  {
    id: 'e3',
    subject: 'evs',
    subjectName: 'Environmental Science',
    grade: 3,
    difficulty: 'Medium',
    estimatedTime: '6 mins',
    title: 'Animals Near Us',
    learningObjective: 'Distinguish between domestic farm animals and wild forest creatures.',
    englishText: 'Cows and goats live near human homes and give milk. Tigers and deer live deep in the forest.',
    literalTranslations: {
      tamil: 'பசுக்களும் ஆடுகளும் மனித வீடுகளுக்கு அருகில் வசித்து பால் தருகின்றன. புலிகளும் மான்களும் காட்டில் வாழ்கின்றன.',
      marathi: 'गाई आणि शेळ्या माणसांच्या घराजवळ राहतात व दूध देतात. वाघ आणि हरीण जंगलात राहतात.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் வீட்டு முற்றத்தில் பசு மாடும் ஆடும் வாழுது. அடர்ந்த காட்டில் புலியும் மானும் சுதந்திரமா வாழுது!',
      marathi: 'आपल्या गोठ्यात गाय आणि शेळी राहते. घनदाट जंगलात वाघ आणि हरीण मुक्त फिरते!'
    },
    adaptationsReasoning: [
      { change: 'Human homes → Cattle shed (गोठा / வீட்டு முற்றம்)', reason: 'Connects farm animals to domestic village sheds.' }
    ],
    teachingSequence: {
      explanation: 'Domestic animals live in village cattle sheds; wild animals live in forests.',
      localExample: 'Cows in the village shed provide wholesome milk.',
      question: 'Where do cows live?',
      correctAnswer: 'Village Cattle Shed',
      feedbackCorrect: 'Correct! Domestic animals live near human homes.',
      followUp: 'Name one wild animal that lives in the forest.'
    },
    quiz: {
      question: 'Which of these is a domestic farm animal?',
      options: ['Tiger', 'Cow', 'Elephant', 'Lion'],
      correctIndex: 1,
      explanation: 'Cows are domestic farm animals living near homes.'
    }
  },
  {
    id: 'e4',
    subject: 'evs',
    subjectName: 'Environmental Science',
    grade: 3,
    difficulty: 'Hard',
    estimatedTime: '7 mins',
    title: 'Water Around Us',
    learningObjective: 'Understand how rain clouds form and replenish groundwater in wells.',
    englishText: 'Rainwater fills ponds, rivers, and underground wells so village families have water for cooking and farming.',
    literalTranslations: {
      tamil: 'மழைநீர் குளங்கள், ஆறுகள் மற்றும் நிலத்தடி கிணறுகளை நிரப்புகிறது.',
      marathi: 'पावसाचे पाणी तलाव, नद्या आणि विहिरी भरते.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'மழை பெய்யும் போது ஊர் ஏரியும் கிணறும் நிரம்புது. அந்த தண்ணீயை நாம சமையலுக்கும் விவசாயத்துக்கும் பயன்படுத்துறோம்!',
      marathi: 'पाऊस पडल्यावर आपली विहीर आणि नदी तुडुंब भरते. ते पाणी आपण शेतीसाठी आणि पिण्यासाठी वापरतो!'
    },
    adaptationsReasoning: [
      { change: 'Ponds → Village Lakes & Wells', reason: 'Relates rainfall to drinking water security.' }
    ],
    teachingSequence: {
      explanation: 'Rain is nature\'s gift that refills village wells and farming tanks.',
      localExample: 'Monsoon rain filling empty wells ensures summer water supply.',
      question: 'What fills village wells during monsoon?',
      correctAnswer: 'Rainwater',
      feedbackCorrect: 'Spot on! Rainwater refills wells.',
      followUp: 'Why should we harvest rainwater?'
    },
    quiz: {
      question: 'What fills village wells during monsoon?',
      options: ['Factories', 'Rainwater', 'Ocean salt', 'Sand'],
      correctIndex: 1,
      explanation: 'Rainwater refills groundwater wells and lakes.'
    }
  },
  {
    id: 'e5',
    subject: 'evs',
    subjectName: 'Environmental Science',
    grade: 1,
    difficulty: 'Easy',
    estimatedTime: '4 mins',
    title: 'Clean Water, Healthy Life',
    learningObjective: 'Learn basic hygiene: boiling drinking water and washing hands before meals.',
    englishText: 'Always wash your hands with soap before eating food and drink clean boiled water.',
    literalTranslations: {
      tamil: 'உணவு உண்பதற்கு முன் எப்போதும் சோப்பினால் கைகளைக் கழுவவும், சுத்தமான காய்ச்சிய நீரைக் குடிக்கவும்.',
      marathi: 'जेवणापूर्वी नेहमी साबणाने हात धुवा आणि स्वच्छ उकळलेले पाणी प्या.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'சாப்பிடும் முன் சோப்பு போட்டு நல்லா கை கழுவணும். காய்ச்சி ஆறவெச்ச நல்ல தண்ணீயை தான் குடிக்கணும்!',
      marathi: 'जेवणाआधी साबणाने स्वच्छ हात धुवावेत आणि उकळून थंड केलेले पाणीच प्यावे!'
    },
    adaptationsReasoning: [
      { change: 'Boiled water → Boiled & cooled drinking water (காய்ச்சி ஆறவெச்ச தண்ணீர்)', reason: 'Matches home health habits.' }
    ],
    teachingSequence: {
      explanation: 'Washing hands removes dirt germs before meals.',
      localExample: 'Washing hands under the tap before eating lunch.',
      question: 'What should we use to wash hands before eating?',
      correctAnswer: 'Soap and Water',
      feedbackCorrect: 'Great habit! Soap and water keep us healthy.',
      followUp: 'When else should we wash our hands?'
    },
    quiz: {
      question: 'What should you do before eating meals?',
      options: ['Play in mud', 'Wash hands with soap', 'Run around', 'Sleep'],
      correctIndex: 1,
      explanation: 'Washing hands with soap removes germs before eating.'
    }
  },

  // LANGUAGE & VOCABULARY (5 Lessons)
  {
    id: 'l1',
    subject: 'lang',
    subjectName: 'Language',
    grade: 1,
    difficulty: 'Easy',
    estimatedTime: '4 mins',
    title: 'My Family',
    learningObjective: 'Learn family vocabulary in mother tongue.',
    englishText: 'Father, mother, grandmother, grandfather, brother, and sister live together happily.',
    literalTranslations: {
      tamil: 'தந்தை, தாய், பாட்டி, தாத்தா, சகோதரன் மற்றும் சகோதரி ஒன்றாக மகிழ்ச்சியாக வாழ்கிறார்கள்.',
      marathi: 'वडील, आई, आजी, आजोबा, भाऊ आणि बहीण एकत्र आनंदात राहतात.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம வீட்ல அப்பா, அம்மா, பாட்டி, தாத்தா, அண்ணன், அக்கா எல்லாரும் அன்பா ஒண்ணா வாழ்றோம்!',
      marathi: 'आपल्या घरात बाबा, आई, आजी, आजोबा, दादा आणि ताई सगळे आनंदाने एकत्र राहतात!'
    },
    adaptationsReasoning: [
      { change: 'Formal words → Home terms (அப்பா, அம்மா, பாட்டி / बाबा, आई, आजी)', reason: 'Teaches natural home spoken terms.' }
    ],
    teachingSequence: {
      explanation: 'Family members are the people who love and care for us at home.',
      localExample: 'Selvi Paatti telling stories after dinner.',
      question: 'What is the home word for grandmother?',
      correctAnswer: 'Paatti / Aaji',
      feedbackCorrect: 'Heartwarming! Paatti / Aaji is grandmother.',
      followUp: 'What story does your grandmother tell you?'
    },
    quiz: {
      question: 'What is the friendly home word for mother?',
      options: ['Amma / Aai', 'Teacher', 'Doctor', 'Friend'],
      correctIndex: 0,
      explanation: 'Amma / Aai is the warm home word for mother.'
    }
  },
  {
    id: 'l2',
    subject: 'lang',
    subjectName: 'Language',
    grade: 1,
    difficulty: 'Easy',
    estimatedTime: '4 mins',
    title: 'Naming Objects Around Us',
    learningObjective: 'Identify common household and classroom objects in mother tongue.',
    englishText: 'Book, pencil, slate, bag, and water bottle are used in school.',
    literalTranslations: {
      tamil: 'புத்தகம், பென்சில், பலகை, பை மற்றும் தண்ணீர் பாட்டில் பள்ளியில் பயன்படுத்தப்படுகின்றன.',
      marathi: 'पुस्तक, पेन्सिल, पाटी, पिशवी आणि पाण्याची बाटली शाळेत वापरली जातात.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'பள்ளிப்பையில் புத்தகம், பென்சில், எழுதற பலகை, அப்புறம் குடிநீர் பாட்டில் வச்சு எடுத்துட்டு போறோம்!',
      marathi: 'शाळेच्या दप्तरात पुस्तक, पेन्सिल, लिहिण्याची पाटी आणि पाण्याची बाटली ठेवतो!'
    },
    adaptationsReasoning: [
      { change: 'Bag → School Backpack (பள்ளிப்பை / दप्तर)', reason: 'Connects objects to school routine.' }
    ],
    teachingSequence: {
      explanation: 'Every object has a name: books for reading, pencils for drawing.',
      localExample: 'Writing letters on a traditional slate with chalk.',
      question: 'What do we write on in primary school?',
      correctAnswer: 'Slate / Notebook',
      feedbackCorrect: 'Correct! Slates and notebooks are for writing.',
      followUp: 'What color is your school bag?'
    },
    quiz: {
      question: 'What object do we use to write letters?',
      options: ['Bottle', 'Pencil / Slate', 'Shoes', 'Cap'],
      correctIndex: 1,
      explanation: 'Pencils and slates are used for writing letters.'
    }
  },
  {
    id: 'l3',
    subject: 'lang',
    subjectName: 'Language',
    grade: 2,
    difficulty: 'Medium',
    estimatedTime: '5 mins',
    title: 'Action Words in Daily Life',
    learningObjective: 'Learn action verbs: running, reading, drinking, and singing.',
    englishText: 'The child reads a book, drinks water, and runs happily in the playground.',
    literalTranslations: {
      tamil: 'குழந்தை புத்தகம் படிக்கிறது, தண்ணீர் குடிக்கிறது, மைதானத்தில் மகிழ்ச்சியாக ஓடுகிறது.',
      marathi: 'मूल पुस्तक वाचते, पाणी पिते आणि मैदानावर आनंदाने धावते.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'பாப்பா புத்தகம் படிக்குது, நன்னீர் குடிக்குது, அப்புறம் புல்வெளியில துள்ளி ஓடுது!',
      marathi: 'बाळ पुस्तक वाचते, गोड पाणी पिते आणि मैदानावर दुडुदुडू धावते!'
    },
    adaptationsReasoning: [
      { change: 'Generic child → Paappa / Baalu (பாப்பா / बाळ)', reason: 'Uses affectionate primary child phrasing.' }
    ],
    teachingSequence: {
      explanation: 'Action words tell us what someone is doing: reading, running, drinking.',
      localExample: 'Reading a storybook aloud to friends.',
      question: 'What action word means consuming water?',
      correctAnswer: 'Drinking (குடித்தல் / पिणे)',
      feedbackCorrect: 'Spot on! Drinking is the action.',
      followUp: 'Can you show the action of running?'
    },
    quiz: {
      question: 'Which of these is an action word?',
      options: ['Book', 'Running', 'Table', 'Water'],
      correctIndex: 1,
      explanation: 'Running describes an physical action.'
    }
  },
  {
    id: 'l4',
    subject: 'lang',
    subjectName: 'Language',
    grade: 2,
    difficulty: 'Medium',
    estimatedTime: '5 mins',
    title: 'Building Simple Sentences',
    learningObjective: 'Form Subject + Object + Verb sentences in mother tongue.',
    englishText: 'Muthu drinks fresh milk. Tanvi reads a story.',
    literalTranslations: {
      tamil: 'முத்து புதிய பால் குடிக்கிறான். தन्வி ஒரு கதையைப் படிக்கிறாள்.',
      marathi: 'मुथू ताजे दूध पितो. तन्वी गोष्ट वाचते.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'முத்து பசுவின் பசும்பால் குடிக்கிறான். தனா சுவாரஸ்யமான கதை படிக்கிறாள்.',
      marathi: 'मुथू गाईचे ताजे दूध पितो. तन्वी छान गोष्ट वाचते.'
    },
    adaptationsReasoning: [
      { change: 'Fresh milk → Fresh cow milk (பசும்பால் / गाईचे दूध)', reason: 'Adds natural descriptive adjectives.' }
    ],
    teachingSequence: {
      explanation: 'Sentences put words together to share complete thoughts.',
      localExample: 'Muthu (Who) + drinks (Action) + cow milk (What).',
      question: 'In "Muthu drinks milk", what is Muthu drinking?',
      correctAnswer: 'Milk',
      feedbackCorrect: 'Correct! Milk is the object.',
      followUp: 'Make a sentence about what you like to eat.'
    },
    quiz: {
      question: 'Complete the sentence: "The boy reads a ___"',
      options: ['Water', 'Storybook', 'Tree', 'Shoe'],
      correctIndex: 1,
      explanation: 'Storybook completes the sentence meaningfully.'
    }
  },
  {
    id: 'l5',
    subject: 'lang',
    subjectName: 'Language',
    grade: 3,
    difficulty: 'Hard',
    estimatedTime: '6 mins',
    title: 'Story Time: The Kind Mango Tree',
    learningObjective: 'Comprehend narrative themes: sharing, kindness, and nature.',
    englishText: 'A big mango tree gave sweet fruits and cool shade to all the village children.',
    literalTranslations: {
      tamil: 'ஒரு பெரிய மாமரம் கிராமத்து குழந்தைகள் அனைவருக்கும் இனிப்பான பழங்களையும் குளிர்ந்த நிழலையும் கொடுத்தது.',
      marathi: 'एका मोठ्या आंब्याच्या झाडाने गावातील सर्व मुलांना गोड फळे आणि थंड सावली दिली.'
    },
    vidyaVaaniAdaptations: {
      tamil: 'நம்ம ஊர் நடுவே நின்ன பெரிய மாமரம், விளையாட வர்ற ஊர் குழந்தைகளுக்கு இனிப்பான மாம்பழத்தையும், நல்ல குளிர்ந்த நிழலையும் தந்துச்சு!',
      marathi: 'आपल्या गावच्या मध्यभागी उभे असलेले मोठे आंब्याचे झाड खेळायला येणाऱ्या सर्व मुलांना गोड आंबे आणि थंडगार सावली द्यायचे!'
    },
    adaptationsReasoning: [
      { change: 'Big tree → Village Tree (நம்ம ஊர் மாமரம்)', reason: 'Anchors nature stories to community spaces.' }
    ],
    teachingSequence: {
      explanation: 'Stories teach us values like sharing and caring for nature.',
      localExample: 'Sitting under the shade of a mango tree on a warm afternoon.',
      question: 'What did the mango tree give to the village children?',
      correctAnswer: 'Sweet fruits and cool shade',
      feedbackCorrect: 'Heartwarming! Trees give fruits and shade.',
      followUp: 'How can we thank trees in our village?'
    },
    quiz: {
      question: 'What did the mango tree share with children?',
      options: ['Stones', 'Sweet fruits and shade', 'Mud', 'Plastic'],
      correctIndex: 1,
      explanation: 'Trees provide shade and delicious fruits.'
    }
  }
];

// Story Mode Dataset ("Meena Visits the Village Market")
export const BRANCHING_STORY = {
  id: 'story-1',
  title: 'Meena Visits the Village Market (மீனாவின் சந்தை பயணம்)',
  language: 'Tamil',
  scenes: [
    {
      step: 1,
      narrative: 'Meena walks into the weekly village Haat market with Selvi Paatti. The market is bustling with fruit carts, clay pot makers, and sweet stalls.',
      nativeNarrative: 'மீனா தன் செல்வி பாட்டியுடன் ஊர் வாரச் சந்தைக்கு நடந்து செல்கிறாள். சந்தையில் மாம்பழ வண்டிகள், களிமண் பானைகள், மற்றும் இனிப்புக் கடைகள் நிறைந்துள்ளன.',
      question: 'Where should Meena go first?',
      choices: [
        { label: '🥭 Visit Selvi Paatti\'s Mango Cart', nextStep: 2 },
        { label: '🍯 Visit the Honey & Jaggery Stall', nextStep: 3 }
      ]
    },
    {
      step: 2,
      narrative: 'Meena arrives at the fruit cart. Selvi Paatti offers her sweet mangoes priced at ₹10 for 2 mangoes.',
      nativeNarrative: 'மீனா மாம்பழ வண்டிக்கு வருகிறாள். பாட்டி அவளுக்கு ₹10க்கு 2 இனிப்பு மாம்பழங்களை தருகிறார்.',
      question: 'If Meena pays ₹10, how many mangoes does she get?',
      choices: [
        { label: '2 Sweet Mangoes', nextStep: 4, correct: true },
        { label: '5 Mangoes', nextStep: 4, correct: false }
      ]
    },
    {
      step: 3,
      narrative: 'Meena tastes fresh palm jaggery at the sweet stall. The vendor gives her 3 pieces.',
      nativeNarrative: 'மீனா இனிப்புக் கடையில் சுவையான பனங்கற்கண்டை சுவைக்கிறாள். கடைக்காரர் அவளுக்கு 3 துண்டுகள் தருகிறார்.',
      question: 'What natural sweetener did Meena get?',
      choices: [
        { label: 'Palm Jaggery (பனங்கற்கண்டு)', nextStep: 4, correct: true },
        { label: 'White Sugar', nextStep: 4, correct: false }
      ]
    },
    {
      step: 4,
      narrative: 'Meena happily shares her market treats with her brother Muthu under the big village banyan tree. They learned counting and sharing today!',
      nativeNarrative: 'மீனா சந்தையில் வாங்கியவற்றை தன் தம்பி முத்துவடன் ஆலமரத்தடியில் பகிர்ந்து கொள்கிறாள். இருவரும் இன்று பகிர்வையும் கணிதத்தையும் கற்றுக் கொண்டனர்!',
      question: 'Story Complete! What value did Meena demonstrate?',
      choices: [
        { label: '🌟 Sharing and Kindness', nextStep: 'finish' }
      ]
    }
  ]
};
