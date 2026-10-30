// Data-driven Lessons Library for VidyaVaani Primary Education (Grades 1-5, NEP 2020 MTB-MLE)

export const LESSONS = [
  {
    id: 'les-1',
    grade: 2,
    subject: 'math',
    title: 'Multiplication & Currency Word Problem',
    englishText: 'A shop sells apples. Ravi buys 5 apples for Rs 2 each. How much did he pay in total?',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'ஒரு கடை ஆப்பிள் விற்கிறது. ரவி தலா 2 ரூபாய்க்கு 5 ஆப்பிள் வாங்குகிறார். அவர் மொத்தம் எவ்வளவு செலுத்தினார்?',
        literalNote: 'Generic literal MT. Rural TN Grade 2 children rarely see apple orchards; "Rs 2 apples" is culturally alien.',
        transcreated: 'ஊர் சந்தையில் செல்வி பாட்டி வண்டியில் மாம்பழம் விற்கிறார். முத்து ₹5 வீதம் 4 இனிப்பு மாம்பழங்களை வாங்குகிறான். அவன் பாட்டிக்கு மொத்தம் எவ்வளவு பணம் கொடுத்தான்?',
        transcreatedPhonetic: 'Oor sandhaiyil Selvi paatti vandiyil maambazham virkiraar...',
        changes: [
          { item: 'Object', from: 'Apples', to: 'Cart Mangoes (மாம்பழம்)' },
          { item: 'Context', from: 'Supermarket', to: 'Village Haat (ஊர் சந்தை)' },
          { item: 'Characters', from: 'Ravi', to: 'Muthu & Selvi Paatti' },
          { item: 'Rate', from: 'Rs 2 each', to: '₹5 per fresh cart mango' }
        ],
        pedagogyReasoning: 'Anchors multiplication to weekly "Sandhai" market visits with grandmothers.'
      },
      marathi: {
        language: 'Marathi (मराठी)',
        langCode: 'mr-IN',
        literal: 'एक दुकान सफरचंद विकते. रवीने प्रत्येकी 2 रुपयांना 5 सफरचंद विकत घेतली. त्याने एकूण किती पैसे दिले?',
        literalNote: 'Standard Marathi textbook phrasing uses city items unfamiliar in rural Vidarbha.',
        transcreated: 'वर्हाडी बाजारात आनंदा आजोबांच्या बैलगाडीवर रसाळ संत्री होती. तन्वीने ₹5 प्रमाणे 4 ताजी संत्री घेतली. तिने आजोबांना एकूण किती रुपये दिले?',
        changes: [
          { item: 'Object', from: 'Apples', to: 'Vidarbha Oranges (संत्री)' },
          { item: 'Context', from: 'City Shop', to: 'Bullock Cart Market (बैलगाडी)' }
        ],
        pedagogyReasoning: 'Uses Vidarbha orange harvesting on bullock carts for multiplication grouping.'
      },
      bhojpuri: {
        language: 'Bhojpuri (भोजपुरी)',
        langCode: 'hi-IN',
        literal: 'एगो दुकान सेव बेचेला। रवि 2 रुपया हिसाब से 5 गो सेव खरीदेला। ऊ कुल केतना रुपइया दिहलस?',
        literalNote: 'Literal dictionary translation ignores Purvanchal market register.',
        transcreated: 'गाँव के पैंठ में मंटू काका ठेला पर ताजा अमरूद बेचेलन। छोटू ₹2-₹2 वाला 5 गो पक्का अमरूद लिहलस। बताओ छोटू काका के कुल केतना रूपया देले होई?',
        changes: [
          { item: 'Object', from: 'Apples', to: 'Guavas (अमरूद)' },
          { item: 'Context', from: 'City Store', to: 'Village Market (पैंठ)' }
        ],
        pedagogyReasoning: 'Relates counting to guava carts in local village "पैंठ" markets.'
      },
      santhali: {
        language: 'Santhali (ᱥᱟᱱᱛᱟᱲᱤ)',
        langCode: 'hi-IN',
        literal: 'ᱢᱤᱫᱴᱟᱝ ᱫᱚᱠᱟᱱ ᱥᱮᱣ ᱟᱹᱠᱷᱨᱤᱧᱟ. ᱨᱚᱵᱤ ᱒ ᱴᱟᱠᱟ ᱠᱟᱛᱮ ᱕ ᱴᱟᱠᱟ ᱥᱮᱣ ᱦᱟᱛᱟᱣᱮᱫᱟ.',
        literalNote: 'Urban apple trade is unfamiliar in forest tribal belts.',
        transcreated: 'ᱦᱟᱴ (Haat) ᱨᱮ ᱵᱤᱨᱥᱟ ᱫᱟᱫᱟ ᱕ ᱴᱟᱠᱟ ᱠᱟᱛᱮ ᱔ ᱴᱟᱠᱟ ᱥᱟ surface ᱥᱟᱨᱡᱚᱢ ᱵᱟᱦᱟ (Sal Flowers) ᱟᱹᱠᱷᱨᱤᱧᱮᱫᱟ. ᱯᱷᱩᱞᱢᱚᱱᱤ ᱛᱤᱱᱟᱹᱜ ᱴᱟᱠᱟ ᱮᱢᱟᱠᱟᱫᱟ?',
        changes: [
          { item: 'Object', from: 'Apples', to: 'Sal Flowers & Mahua Produce' },
          { item: 'Context', from: 'Store', to: 'Tribal Weekly Haat (ᱦᱟᱴ)' }
        ],
        pedagogyReasoning: 'Complies with NEP 2020 MTB-MLE tribal forest context guidelines.'
      }
    }
  },

  {
    id: 'les-2',
    grade: 3,
    subject: 'math',
    title: 'Group Multiplication in Village Baskets',
    englishText: 'A farmer puts 6 mangoes in each basket. If there are 4 baskets, how many mangoes are there in total?',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'ஒரு விவசாயி ஒவ்வொரு கூடையிலும் 6 மாம்பழங்களை வைக்கிறார். 4 கூடைகள் இருந்தால், மொத்தம் எத்தனை மாம்பழங்கள் உள்ளன?',
        literalNote: 'Standard formal translation uses distant mathematical phrasing.',
        transcreated: 'நம்ம ஊர் மாந்தோப்பில் செல்வி பாட்டி 4 ஓலை கூடைகளில் கூடைக்கு 6 இனிப்பு மாம்பழங்கள் வீதம் அடுக்கி வச்சாங்க. மரத்தடியில் மொத்தம் எத்தனை மாம்பழங்கள் இருக்கும்?',
        changes: [
          { item: 'Context', from: 'Generic Farm', to: 'Village Mango Grove (மாந்தோப்பு)' },
          { item: 'Container', from: 'Baskets', to: 'Traditional Palm Leaf Baskets (ஓலை கூடை)' }
        ],
        pedagogyReasoning: 'Teaches 4 × 6 = 24 as equal group addition using traditional palm leaf baskets.'
      },
      marathi: {
        language: 'Marathi (मराठी)',
        langCode: 'mr-IN',
        literal: 'एक शेतकरी प्रत्येक टोपलीत ६ आंबे ठेवतो. ४ टोपल्या असल्यास एकूण किती आंबे आहेत?',
        literalNote: 'Textbook phrasing.',
        transcreated: 'आपल्या आंब्याच्या बागेत आनंदा आजोबांनी ४ बांबूच्या टोपल्यांमध्ये प्रत्येकी ६ पिवळेधमक आंबे ठेवले. आजोबांकडे एकूण किती आंबे झाले?',
        changes: [
          { item: 'Context', from: 'Farm', to: 'Village Mango Orchard (आंब्याची बाग)' }
        ],
        pedagogyReasoning: 'Uses traditional bamboo baskets ("बांबूच्या टोपल्या") for repeated addition.'
      }
    }
  },

  {
    id: 'les-3',
    grade: 1,
    subject: 'math',
    title: 'Simple Addition: Animals in the Meadow',
    englishText: 'There are 3 cows grazing in a field. 2 more cows join them. How many cows are in the field now?',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'ஒரு வயலில் 3 பசுக்கள் மேய்கின்றன. மேலும் 2 பசுக்கள் அவர்களுடன் சேர்கின்றன. இப்போது வயலில் எத்தனை பசுக்கள் உள்ளன?',
        literalNote: 'Grammatically rigid text.',
        transcreated: 'நம்ம ஊர் பச்சைப் புல்வெளியில் 3 வெள்ளாடுகள் மேய்ஞ்சிட்டு இருந்துச்சு. கூடவே இன்னும் 2 வெள்ளாடுகள் துள்ளி ஓடி வந்து சேர்ந்துச்சு. இப்போ புல்வெளியில் மொத்தம் எத்தனை ஆடுகள் இருக்கு?',
        changes: [
          { item: 'Animal', from: 'Cows', to: 'Village Goats (வெள்ளாடு)' },
          { item: 'Context', from: 'Field', to: 'Village Meadow (புல்வெளி)' }
        ],
        pedagogyReasoning: 'Young Grade 1 children interact daily with village goats grazing near homes.'
      },
      bhojpuri: {
        language: 'Bhojpuri (भोजपुरी)',
        langCode: 'hi-IN',
        literal: 'एक खेत में 3 गो गाय चरत बाड़ी। 2 गो अउरी गाय आ गइली। अब खेत में कुल केतना गाय बाड़ी?',
        literalNote: 'Standard phrasing.',
        transcreated: 'गाँव के पोखर नगीचे ३ गो बछरू घाम में चरत रहलें। २ गो अउरी बछरू कुदकत आ गइले। बताओ अब पोखर भीरी कुल केतना बछरू भइले?',
        changes: [
          { item: 'Animal', from: 'Cows', to: 'Playful Calves (बछरू)' },
          { item: 'Context', from: 'Generic Field', to: 'Village Pond Bank (पोखर)' }
        ],
        pedagogyReasoning: 'Relates Grade 1 addition (3 + 2 = 5) to calves running near the village pond.'
      }
    }
  },

  {
    id: 'les-4',
    grade: 2,
    subject: 'evs',
    title: 'Water Cycle & Rain in Village Wells',
    englishText: 'Sunlight evaporates water from rivers and lakes into clouds, which bring rain back to fill rivers and ground wells.',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'சூரிய ஒளி ஆறுகள் மற்றும் ஏரிகளிலிருந்து நீரை ஆவியாக்கி மேகங்களாக மாற்றுகிறது, இது மழையைக் கொண்டுவருகிறது.',
        literalNote: 'Abstract science words confuse Grade 2 children.',
        transcreated: 'நம்ம ஊர் ஏரியில இருக்கிற தண்ணீயை வெயில் காய்ஞ்சு ஆவியா மேலே கொண்டு போய் மேகமாக்குது. அப்புறம் அதே மேகம் குளிர்ந்து மழையா பெய்து நம்ம ஊர் கிணற்றையும் ஏரியையும் நிரப்புது!',
        changes: [
          { item: 'Water Source', from: 'Lakes', to: 'Village Well & Tank (ஊர் கிணறு & ஏரி)' },
          { item: 'Jargon', from: 'Evaporation', to: 'Sunlight drying water into rain clouds (சூரிய வெப்பம்)' }
        ],
        pedagogyReasoning: 'Explains evaporation by connecting hot summer lake drying to monsoon rain.'
      },
      marathi: {
        language: 'Marathi (मराठी)',
        langCode: 'mr-IN',
        literal: 'सूर्याचा प्रकाश नद्या आणि तलावांतील पाण्याचे बाष्पीभवन करून ढग बनवतो, ज्यामुळे पाऊस पडतो.',
        literalNote: 'Heavy Sanskritized words ("बाष्पीभवन").',
        transcreated: 'आपल्या गावातील नदीचे पाणी उन्हाळ्यात वाफ होऊन आकाशात जाते आणि काळे ढग बनते. मग पावसाळ्यात तोच पाऊस पडून आपली विहीर पुन्हा तुडुंब भरते!',
        changes: [
          { item: 'Water Source', from: 'Generic Lake', to: 'Village River & Well (गावातील विहीर)' }
        ],
        pedagogyReasoning: 'Replaces "बाष्पीभवन" with summer steam ("वाफ") rising to fill open wells.'
      }
    }
  },

  {
    id: 'les-5',
    grade: 3,
    subject: 'sci',
    title: 'Photosynthesis: Leaves & Sun Energy',
    englishText: 'Plants absorb light from the Sun to make their own food through photosynthesis like a kitchen cooking meals.',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'தாவரங்கள் ஒளிச்சேர்க்கை மூலம் தங்கள் சொந்த உணவை தயாரிக்க சூரியனிலிருந்து ஒளியை உறிஞ்சுகின்றன.',
        literalNote: 'Abstract scientific jargon ("ஒளிச்சேர்க்கை").',
        transcreated: 'நம்ம வீட்ல அம்மா விறகு அடுப்புல சமையல் பண்ற மாதிரி, பச்சை செடிகள் சூரிய வெளிச்சத்தையும் தண்ணீளையும் வச்சு தங்களுக்கு பிடிச்ச உணவை தாங்களே சமைச்சுக்குது!',
        changes: [
          { item: 'Analogy', from: 'Modern Kitchen', to: 'Mother cooking on firewood stove (விறகு அடுப்பு)' }
        ],
        pedagogyReasoning: 'Relates plant nutrition to mother cooking on traditional firewood stoves.'
      },
      bhojpuri: {
        language: 'Bhojpuri (भोजपुरी)',
        langCode: 'hi-IN',
        literal: 'पौधा प्रकाश संश्लेषण द्वारा आपन भोजन बनावे खातिर सूरज के रोशनी लेवेला।',
        literalNote: 'Literal phrasing.',
        transcreated: 'जैसे माई चूल्हा पर धूप अउरी पानी से रोटी-साग बनावेली, वैसे हीं हरियर पत्ता सूरज देव के घाम ले के आपन मीठ-मीठ भोजन बनावेला!',
        changes: [
          { item: 'Analogy', from: 'Kitchen Stove', to: 'Maai cooking Roti-Saag on Chulha (चूल्हा)' }
        ],
        pedagogyReasoning: 'Anchors leaf food-making to traditional hearth cooking.'
      }
    }
  },

  {
    id: 'les-6',
    grade: 1,
    subject: 'evs',
    title: 'Colors in Nature & Village Fruits',
    englishText: 'Mangos are yellow, sal leaves are green, and ripe berries are dark purple.',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'மாம்பழங்கள் மஞ்சளாகவும், இலைகள் பச்சையாகவும், பெர்ரிகள் அடர் ஊதாவாகவும் இருக்கும்.',
        literalNote: 'Generic colors list.',
        transcreated: 'நம்ம ஊர் மாம்பழம் இனிப்பான மஞ்சள் நிறம், ஆலமரத்து இலை பசுமையான பச்சை நிறம், அப்புறம் நாவல் பழம் கணகணப்பான ஊதா நிறம்!',
        changes: [
          { item: 'Examples', from: 'Berries', to: 'Jamun / Jamun Fruit (நாவல் பழம்)' }
        ],
        pedagogyReasoning: 'Teaches colors using local summer fruits like Jamun (நாவல் பழம்).'
      },
      marathi: {
        language: 'Marathi (मराठी)',
        langCode: 'mr-IN',
        literal: 'आंबे पिवळे, पाने हिरवी आणि बोरे जांभळी असतात.',
        literalNote: 'Formal dictionary translation.',
        transcreated: 'आपल्या बागेतील पिकलेला आंबा पिवळाधमक, लिंबाचे पान हिरवेगार, आणि जांभूळ काळे-जांभळे गोड असते!',
        changes: [
          { item: 'Examples', from: 'Berries', to: 'Wild Jamun (जांभूळ)' }
        ],
        pedagogyReasoning: 'Anchors colors to sensory sights of village fruit trees.'
      }
    }
  },

  {
    id: 'les-7',
    grade: 2,
    subject: 'math',
    title: 'Subtraction: Birds on a Banyan Tree',
    englishText: 'There are 8 parrots sitting on a branch. 3 parrots fly away. How many parrots remain on the branch?',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'ஒரு கிளையில் 8 கிளிகள் அமர்ந்துள்ளன. 3 கிளிகள் பறந்து செல்கின்றன. கிளையில் எத்தனை கிளிகள் எஞ்சியுள்ளன?',
        literalNote: 'Standard word problem phrasing.',
        transcreated: 'நம்ம ஊர் ஆலமரத்து கிளையில் 8 பச்சை கிளிகள் கொஞ்சி விளையாடிட்டு இருந்துச்சு. அதுல 3 கிளிகள் பழத்தோப்புக்கு பறந்து போச்சு. இப்போ ஆலமரத்துல எத்தனை கிளிகள் உட்கார்ந்திருக்கு?',
        changes: [
          { item: 'Tree', from: 'Generic Branch', to: 'Village Banyan Tree (ஆலமரம்)' }
        ],
        pedagogyReasoning: 'Visualizes subtraction (8 - 3 = 5) on a familiar village banyan tree branch.'
      },
      bhojpuri: {
        language: 'Bhojpuri (भोजपुरी)',
        langCode: 'hi-IN',
        literal: 'एक डाल पर 8 गो सुगा बैठल बाड़ें। 3 गो सुगा उड़ गइले। डाल पर कुल केतना सुगा बचलें?',
        literalNote: 'Standard textbook text.',
        transcreated: 'पीपर के गछिया पर ८ गो हरियर सुगा बइठल रहलें। ३ गो सुगा घाम में उड़ गइले। बताओ पीपर पर कुल केतना सुगा बचल बाड़ें?',
        changes: [
          { item: 'Tree', from: 'Branch', to: 'Village Peepal Tree (पीपर के गछिया)' }
        ],
        pedagogyReasoning: 'Uses Peepal tree green parrots ("हरियर सुगा") for subtraction.'
      }
    }
  },

  {
    id: 'les-8',
    grade: 3,
    subject: 'sci',
    title: 'Friction & Bullock Cart Wheels',
    englishText: 'Friction is the force that opposes motion when two surfaces rub against each other, like cart wheels on a dirt road.',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'உராய்வு என்பது இரண்டு பரப்புகள் ஒன்றுக்கொன்று தேய்க்கப்படும்போது இயக்கத்தை எதிர்க்கும் விசையாகும்.',
        literalNote: 'Technical terms cause rote memorization pressure.',
        transcreated: 'நம்ம ஊர் மாட்டுவண்டி மண் பாதையில உருளும் போது, சக்கரத்துக்கும் சேற்று மண்ணுக்கும் நடுவுல ஏற்படுற உரசலே (Friction) வண்டியை மெல்ல நிறுத்த உதவுது!',
        changes: [
          { item: 'Surface', from: 'Two surfaces', to: 'Cart Wheels & Mud Track (சேற்று மண் பாதை)' }
        ],
        pedagogyReasoning: 'Anchors mechanical friction to bullock cart wooden wheels in muddy tracks.'
      }
    }
  },

  {
    id: 'les-9',
    grade: 1,
    subject: 'evs',
    title: 'Family Members & Home Words',
    englishText: 'Father, mother, grandmother, grandfather, brother, and sister live together in a loving home.',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'தந்தை, தாய், பாட்டி, தாத்தா, சகோதரன் மற்றும் சகோதரி ஒரு வீட்டில் வசிக்கிறார்கள்.',
        literalNote: 'Formal literary words.',
        transcreated: 'நம்ம ஊர் வீட்ல அப்பா, அம்மா, செல்ல பாட்டி, தாத்தா, அண்ணன், அக்கா எல்லாரும் ஒண்ணா சந்தோஷமா வாழறோம்!',
        changes: [
          { item: 'Vocabulary', from: 'Formal terms', to: 'Warm home speech (அப்பா, அம்மா, பாட்டி)' }
        ],
        pedagogyReasoning: 'Teaches social relationships using children\'s spoken family terms.'
      }
    }
  },

  {
    id: 'les-10',
    grade: 2,
    subject: 'math',
    title: 'Counting Money at the Village Haat Market',
    englishText: 'Chhotu has two 10-rupee notes and three 5-rupee coins. How much money does he have in total?',
    transcreatedVersions: {
      tamil: {
        language: 'Tamil (தமிழ்)',
        langCode: 'ta-IN',
        literal: 'சோட்டுவிடம் இரண்டு 10 ரூபாய் நோட்டுகளும் மூன்று 5 ரூபாய் நாணயங்களும் உள்ளன. அவரிடம் மொத்தம் எவ்வளவு பணம் உள்ளது?',
        literalNote: 'Textbook translation.',
        transcreated: 'முத்து தன் பாக்கெட்டில் இரண்டு ₹10 தாள் பணமும், மூன்று ₹5 சில்லறை நாணயமும் வச்சிருக்கான். சந்தையில அவன்கிட்ட மொத்தம் எவ்வளவு ரூபாய் இருக்கு? (10+10+5+5+5 = ₹35)',
        changes: [
          { item: 'Currency Framing', from: 'Generic notes', to: 'Paper notes (₹10 தாள்) & Coins (₹5 சில்லறை)' }
        ],
        pedagogyReasoning: 'Practices mental addition of real currency notes at village shops.'
      }
    }
  }
];

// Vocabulary Array for "Word Match Bazaar" Game
export const GAME_VOCABULARY = [
  { id: 'v1', grade: 1, english: '5 Mangoes', tamil: '5 மாம்பழங்கள்', marathi: '५ आंबे', bhojpuri: '५ गो अमरूद', audioText: '5 மாம்பழங்கள்' },
  { id: 'v2', grade: 1, english: 'Fresh Water', tamil: 'குடிநீர்', marathi: 'पिण्याचे पाणी', bhojpuri: 'मीठ पानी', audioText: 'குடிநீர்' },
  { id: 'v3', grade: 1, english: 'Banyan Tree', tamil: 'ஆலமரம்', marathi: 'वड', bhojpuri: 'पीपर के पेड़', audioText: 'ஆலமரம்' },
  { id: 'v4', grade: 1, english: 'Green Leaves', tamil: 'பச்சை இலைகள்', marathi: 'हिरवी पाने', bhojpuri: 'हरियर पत्ता', audioText: 'பச்சை இலைகள்' },
  { id: 'v5', grade: 2, english: 'Bullock Cart', tamil: 'மாட்டுவண்டி', marathi: 'बैलगाडी', bhojpuri: 'बैलगाड़ी', audioText: 'மாட்டுவண்டி' },
  { id: 'v6', grade: 2, english: 'Village Market', tamil: 'ஊர் சந்தை', marathi: 'गावचा बाजार', bhojpuri: 'गाँव के पैंठ', audioText: 'ஊர் சந்தை' },
  { id: 'v7', grade: 2, english: 'Rain Cloud', tamil: 'மழை மேகம்', marathi: 'पावसाचे ढग', bhojpuri: 'पावस के बदरी', audioText: 'மழை மேகம்' },
  { id: 'v8', grade: 2, english: 'Sunlight', tamil: 'சூரிய வெளிச்சம்', marathi: 'सूर्याचा प्रकाश', bhojpuri: 'सूरज के घाम', audioText: 'சூரிய வெளிச்சம்' },
  { id: 'v9', grade: 3, english: 'Firewood Stove', tamil: 'விறகு அடுப்பு', marathi: 'लाकडाची चूल', bhojpuri: 'माटी के चूल्हा', audioText: 'விறகு அடுப்பு' },
  { id: 'v10', grade: 3, english: 'Cart Wheel', tamil: 'வண்டி சக்கரம்', marathi: 'गाडीचे चाक', bhojpuri: 'चक्का', audioText: 'வண்டி சக்கரம்' }
];
