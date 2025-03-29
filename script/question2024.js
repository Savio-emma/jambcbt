const questions = {
    english: [
      // Comprehension (Questions 1-5)
      {
        q: " Education is the foundation of progress in any society. It equips individuals with the knowledge and skills needed to navigate life’s challenges and contribute meaningfully to their communities. Beyond personal growth, education drives economic development by creating a skilled workforce capable of innovation and productivity. However, access to quality education remains a challenge in many parts of the world, particularly in rural areas where resources are scarce. Governments must prioritize investment in education to bridge this gap and ensure a prosperous future. What is the central theme of the passage?",
        options: [
          "Economic development",
          "The importance of education",
          "Challenges in rural areas",
          "Government investment",
          "Personal growth"
        ],
        answer: "The importance of education",
        image: ""
      },
      {
        q: "According to the passage, education contributes to society by:",
        options: [
          "Reducing poverty",
          "Creating a skilled workforce",
          "Improving health",
          "Building infrastructure",
          "Enhancing security"
        ],
        answer: "Creating a skilled workforce",
        image: ""
      },
      {
        q: "What challenge to education is highlighted in the passage?",
        options: [
          "Lack of teachers",
          "Limited access in rural areas",
          "High cost of schooling",
          "Poor curriculum",
          "Overcrowded classrooms"
        ],
        answer: "Limited access in rural areas",
        image: ""
      },
      {
        q: "The passage suggests that governments should:",
        options: [
          "Reduce taxes",
          "Invest in education",
          "Focus on urban areas",
          "Eliminate rural schools",
          "Privatize education"
        ],
        answer: "Invest in education",
        image: ""
      },
      {
        q: "The phrase 'bridge this gap' in the passage refers to:",
        options: [
          "Improving transportation",
          "Reducing inequality in education access",
          "Connecting rural and urban areas",
          "Building new schools",
          "Increasing teacher salaries"
        ],
        answer: "Reducing inequality in education access",
        image: ""
      },
    
      // Cloze Passage (Questions 6-15)
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___.  The internet has (6) ___ our lives in remarkable ways.",
        options: ["changed", "transformed", "ruined", "delayed", "ignored"],
        answer: "transformed",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___. It allows us to (7) ___ information quickly...",
        options: ["store", "access", "delete", "hide", "create"],
        answer: "access",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___. However, it also presents (8) ___ such as cybercrime...",
        options: ["benefits", "solutions", "risks", "advantages", "opportunities"],
        answer: "risks",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...we must develop skills to (9) ___ reliable sources...",
        options: ["identify", "ignore", "reject", "copy", "destroy"],
        answer: "identify",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...and protect our (10) ___. Education is key...",
        options: ["wealth", "privacy", "health", "skills", "time"],
        answer: "privacy",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...ensuring that individuals can (11) ___ these challenges.",
        options: ["avoid", "navigate", "increase", "deny", "repeat"],
        answer: "navigate",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___. Governments should (12) ___ policies to regulate...",
        options: ["abolish", "enforce", "ignore", "delay", "criticize"],
        answer: "enforce",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...while individuals take (13) ___ for their digital behavior.",
        options: ["responsibility", "credit", "blame", "risks", "chances"],
        answer: "responsibility",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...we can enjoy the (14) ___ of technology...",
        options: ["challenges", "limits", "benefits", "dangers", "costs"],
        answer: "benefits",
        image: ""
      },
      {
        q: "The internet has (6) ___ our lives in remarkable ways. It allows us to (7) ___ information quickly and connect with others across the globe. However, it also presents (8) ___ such as cybercrime and misinformation. To use it effectively, we must develop skills to (9) ___ reliable sources and protect our (10) ___. Education is key to ensuring that individuals can (11) ___ these challenges. Governments should (12) ___ policies to regulate online activities while individuals take (13) ___ for their digital behavior. By doing so, we can enjoy the (14) ___ of technology without its (15) ___...without its (15) ___.",
        options: ["advantages", "drawbacks", "profits", "rewards", "gains"],
        answer: "drawbacks",
        image: ""
      },
    
      // Reading Text (Questions 16-25)
      {
        q: "Agriculture remains a vital part of Nigeria’s economy. It employs a large portion of the population and provides food for millions. However, traditional farming methods have limited its growth. Modern techniques, such as mechanized farming and the use of fertilizers, could increase productivity. Yet, many farmers lack the resources or knowledge to adopt these methods. The government has introduced programs to support agriculture, but corruption and poor implementation have reduced their impact. What is the main idea of the passage?",
        options: [
          "The decline of agriculture",
          "The importance and challenges of agriculture in Nigeria",
          "Government corruption",
          "Modern farming techniques",
          "Employment in Nigeria"
        ],
        answer: "The importance and challenges of agriculture in Nigeria",
        image: ""
      },
      {
        q: "Agriculture in Nigeria is described as:",
        options: [
          "Unimportant",
          "Vital to the economy",
          "Fully modernized",
          "Declining rapidly",
          "Unsupported"
        ],
        answer: "Vital to the economy",
        image: ""
      },
      {
        q: "What limits the growth of agriculture, according to the passage?",
        options: [
          "Lack of farmers",
          "Traditional farming methods",
          "Excessive rainfall",
          "High costs of food",
          "Government bans"
        ],
        answer: "Traditional farming methods",
        image: ""
      },
      {
        q: "Modern techniques could improve agriculture by:",
        options: [
          "Reducing employment",
          "Increasing productivity",
          "Limiting resources",
          "Eliminating fertilizers",
          "Simplifying farming"
        ],
        answer: "Increasing productivity",
        image: ""
      },
      {
        q: "What prevents farmers from adopting modern methods?",
        options: [
          "Government restrictions",
          "Lack of resources or knowledge",
          "Fear of change",
          "Excessive rainfall",
          "High profits"
        ],
        answer: "Lack of resources or knowledge",
        image: ""
      },
      {
        q: "The passage suggests that government programs:",
        options: [
          "Have been highly successful",
          "Are unnecessary",
          "Have limited impact due to corruption",
          "Focus only on urban areas",
          "Ban modern techniques"
        ],
        answer: "Have limited impact due to corruption",
        image: ""
      },
      {
        q: "The word 'mechanized' in the passage refers to:",
        options: [
          "Manual labor",
          "Use of machines",
          "Traditional tools",
          "Organic farming",
          "Irrigation systems"
        ],
        answer: "Use of machines",
        image: ""
      },
      {
        q: "Why is agriculture important to Nigeria’s population?",
        options: [
          "It provides entertainment",
          "It employs many and provides food",
          "It increases urban growth",
          "It reduces imports",
          "It eliminates poverty"
        ],
        answer: "It employs many and provides food",
        image: ""
      },
      {
        q: "The tone of the passage is:",
        options: ["Optimistic", "Pessimistic", "Concerned", "Humorous", "Indifferent"],
        answer: "Concerned",
        image: ""
      },
      {
        q: "The passage implies that improving agriculture requires:",
        options: [
          "Reducing government involvement",
          "Better implementation of support programs",
          "Eliminating traditional methods entirely",
          "Focusing only on fertilizers",
          "Ignoring rural farmers"
        ],
        answer: "Better implementation of support programs",
        image: ""
      },
    
      // Lexis and Structure (Questions 26-50)
      // Sentence Interpretation (26-30)
      {
        q: "'She hit the nail on the head.' This means:",
        options: [
          "She missed the point",
          "She was exactly right",
          "She injured herself",
          "She was confused",
          "She worked hard"
        ],
        answer: "She was exactly right",
        image: ""
      },
      {
        q: "'He’s barking up the wrong tree.' This means:",
        options: [
          "He’s chasing a dog",
          "He’s using the wrong approach",
          "He’s climbing a tree",
          "He’s making noise",
          "He’s succeeding"
        ],
        answer: "He’s using the wrong approach",
        image: ""
      },
      {
        q: "'The exam was a walk in the park.' This means:",
        options: [
          "It was outdoors",
          "It was very easy",
          "It was tiring",
          "It was confusing",
          "It was delayed"
        ],
        answer: "It was very easy",
        image: ""
      },
      {
        q: "'They buried the hatchet.' This means:",
        options: [
          "They fought bitterly",
          "They made peace",
          "They hid a weapon",
          "They started a war",
          "They dug a hole"
        ],
        answer: "They made peace",
        image: ""
      },
      {
        q: "'He’s on cloud nine.' This means:",
        options: [
          "He’s very happy",
          "He’s traveling",
          "He’s upset",
          "He’s dreaming",
          "He’s lost"
        ],
        answer: "He’s very happy",
        image: ""
      },
    
      // Antonyms (31-35)
      {
        q: "Opposite of 'brave':",
        options: ["Strong", "Fearful", "Bold", "Confident", "Wise"],
        answer: "Fearful",
        image: ""
      },
      {
        q: "Opposite of 'expand':",
        options: ["Grow", "Increase", "Shrink", "Extend", "Develop"],
        answer: "Shrink",
        image: ""
      },
      {
        q: "Opposite of 'abundant':",
        options: ["Plentiful", "Scarce", "Rich", "Full", "Many"],
        answer: "Scarce",
        image: ""
      },
      {
        q: "Opposite of 'accept':",
        options: ["Receive", "Reject", "Agree", "Welcome", "Take"],
        answer: "Reject",
        image: ""
      },
      {
        q: "Opposite of 'simple':",
        options: ["Easy", "Complex", "Plain", "Clear", "Basic"],
        answer: "Complex",
        image: ""
      },
    
      // Synonyms (36-40)
      {
        q: "Synonym of 'happy':",
        options: ["Sad", "Joyful", "Angry", "Tired", "Bored"],
        answer: "Joyful",
        image: ""
      },
      {
        q: "Synonym of 'quick':",
        options: ["Slow", "Fast", "Late", "Heavy", "Dull"],
        answer: "Fast",
        image: ""
      },
      {
        q: "Synonym of 'begin':",
        options: ["End", "Start", "Stop", "Finish", "Pause"],
        answer: "Start",
        image: ""
      },
      {
        q: "Synonym of 'huge':",
        options: ["Small", "Large", "Tiny", "Little", "Short"],
        answer: "Large",
        image: ""
      },
      {
        q: "Synonym of 'calm':",
        options: ["Peaceful", "Noisy", "Angry", "Restless", "Wild"],
        answer: "Peaceful",
        image: ""
      },
    
      // Basic Grammar (41-50)
      {
        q: "Identify the verb in: 'The dog barks loudly.'",
        options: ["Dog", "Barks", "Loudly", "The", "None"],
        answer: "Barks",
        image: ""
      },
      {
        q: "Choose the correct form: 'She ___ to school every day.'",
        options: ["Go", "Goes", "Went", "Going", "Gone"],
        answer: "Goes",
        image: ""
      },
      {
        q: "What is the subject in: 'The children played happily'?",
        options: ["Played", "Happily", "The children", "The", "None"],
        answer: "The children",
        image: ""
      },
      {
        q: "Choose the correct tense: 'I ___ my homework yesterday.'",
        options: ["Do", "Does", "Did", "Doing", "Done"],
        answer: "Did",
        image: ""
      },
      {
        q: "Identify the adjective in: 'The tall building collapsed.'",
        options: ["Building", "Collapsed", "Tall", "The", "None"],
        answer: "Tall",
        image: ""
      },
      {
        q: "Fill in the blank: 'He is ___ than his brother.'",
        options: ["Tall", "Taller", "Tallest", "More tall", "Most tall"],
        answer: "Taller",
        image: ""
      },
      {
        q: "Choose the correct pronoun: '___ is going to the market.'",
        options: ["He", "Him", "His", "Himself", "He’s"],
        answer: "He",
        image: ""
      },
      {
        q: "Identify the preposition in: 'She sat on the chair.'",
        options: ["Sat", "She", "On", "Chair", "The"],
        answer: "On",
        image: ""
      },
      {
        q: "Choose the correct form: 'They ___ playing football now.'",
        options: ["Is", "Are", "Was", "Were", "Be"],
        answer: "Are",
        image: ""
      },
      {
        q: "What is the object in: 'The teacher explained the lesson'?",
        options: ["Teacher", "Explained", "The lesson", "The", "None"],
        answer: "The lesson",
        image: ""
      },
    
      // Oral Forms (Questions 51-60)
      // Vowels (51-52)
      {
        q: "Identify the vowel sound in 'bed':",
        options: ["/i:/", "/e/", "/æ/", "/o/", "/u/"],
        answer: "/e/",
        image: ""
      },
      {
        q: "Which word contains the vowel sound /ɔ:/ ?",
        options: ["Cat", "Cot", "Caught", "Cut", "Kit"],
        answer: "Caught",
        image: ""
      },
    
      // Consonants (53-54)
      {
        q: "Identify the consonant sound at the start of 'ship':",
        options: ["/s/", "/ʃ/", "/z/", "/t/", "/d/"],
        answer: "/ʃ/",
        image: ""
      },
      {
        q: "Which word ends with the consonant sound /ŋ/ ?",
        options: ["Sing", "Sin", "Sit", "Sip", "Sick"],
        answer: "Sing",
        image: ""
      },
    
      // Rhymes (55-56)
      {
        q: "Choose the word that rhymes with 'day':",
        options: ["Buy", "Say", "See", "Sew", "Sue"],
        answer: "Say",
        image: ""
      },
      {
        q: "Which word rhymes with 'book'?",
        options: ["Back", "Bake", "Took", "Tuck", "Tick"],
        answer: "Took",
        image: ""
      },
    
      // Word Stress (57-58)
      {
        q: "In 'record' (as a noun), which syllable is stressed?",
        options: [
          "First (RE-cord)",
          "Second (re-CORD)",
          "Both",
          "Neither",
          "None"
        ],
        answer: "First (RE-cord)",
        image: ""
      },
      {
        q: "Choose the correct stress pattern for 'photography':",
        options: [
          "PHO-to-gra-phy",
          "pho-TO-gra-phy",
          "pho-to-GRA-phy",
          "pho-to-gra-PHY",
          "None"
        ],
        answer: "pho-to-GRA-phy",
        image: ""
      },
    
      // Emphatic Stress (59-60)
      {
        q: "In 'I didn’t take his book,' stressing 'I' implies:",
        options: [
          "I took it",
          "Someone else took it",
          "His book wasn’t taken",
          "I took something else",
          "None"
        ],
        answer: "Someone else took it",
        image: ""
      },
      {
        q: "In 'She wrote the letter,' stressing 'wrote' implies:",
        options: [
          "She didn’t write it",
          "She performed the action of writing",
          "Someone else wrote it",
          "The letter wasn’t written",
          "None"
        ],
        answer: "She performed the action of writing",
        image: ""
      }
    ],



    physics: [
        {
          q: "The inner diameter of a test tube can be measured accurately using a:",
          options: [
            "Micrometer screw gauge",
            "Pair of dividers",
            "Metre rule",
            "Pair of vernier calipers"
          ],
          answer: "Pair of vernier calipers",
          image: ""
        },
        {
          q: "Two bodies have masses in the ratio 3:1. They experience forces which impart to them accelerations in the ratio 2:9 respectively. Find the ratio of forces the masses experienced.",
          options: ["1:4", "2:1", "2:3", "2:5"],
          answer: "1:4",
          image: ""
        },
        {
          q: "Particles of mass 10⁻² kg are fixed to the tip of a fan blade which rotates with an angular velocity of 100 rad⁻¹. If the radius of the blade is 0.2 m, the centripetal force is:",
          options: ["2 N", "20 N", "200 N", "400 N"],
          answer: "200 N",
          image: ""
        },
        {
          q: "A body of mass 2 kg moves with a velocity of 10 m/s. Its kinetic energy is:",
          options: ["20 J", "40 J", "100 J", "200 J"],
          answer: "200 J",
          image: ""
        },
        {
          q: "A force of 10 N stretches a spring by 0.05 m. The force constant of the spring is:",
          options: ["50 N/m", "200 N/m", "100 N/m", "150 N/m"],
          answer: "200 N/m",
          image: ""
        },
        {
          q: "The velocity ratio of an inclined plane of length 5 m and height 1 m is:",
          options: ["1", "2", "3", "5"],
          answer: "5",
          image: ""
        },
        {
          q: "A transformer has 500 turns in the primary coil and 100 turns in the secondary coil. If the primary voltage is 200 V, the secondary voltage is:",
          options: ["40 V", "50 V", "100 V", "20 V"],
          answer: "40 V",
          image: ""
        },
        {
          q: "The capacitance of a parallel plate capacitor is 2 μF. If the area of each plate is doubled while the separation between them is halved, the new capacitance is:",
          options: ["8 μF", "4 μF", "2 μF", "16 μF"],
          answer: "8 μF",
          image: ""
        },
        {
          q: "The time taken for a radioactive substance to reduce to half its original mass is called:",
          options: ["Decay constant", "Half-life", "Mean life", "Activity"],
          answer: "Half-life",
          image: ""
        },
        {
          q: "A convex lens of focal length 10 cm forms an image at a distance of 30 cm from the lens. The object distance is:",
          options: ["15 cm", "20 cm", "30 cm", "40 cm"],
          answer: "20 cm",
          image: ""
        },
        {
          q: "The unit of electric current is:",
          options: ["Volt", "Coulomb", "Ohm", "Ampere"],
          answer: "Ampere",
          image: ""
        },
        {
          q: "The phenomenon whereby light passes through an optical fiber irrespective of its shape is:",
          options: ["Refraction", "Diffraction", "Total internal reflection", "Dispersion"],
          answer: "Total internal reflection",
          image: ""
        },
        {
          q: "Which of the following is a scalar quantity?",
          options: ["Velocity", "Acceleration", "Force", "Energy"],
          answer: "Energy",
          image: ""
        },
        {
          q: "The slope of a velocity-time graph represents:",
          options: ["Displacement", "Acceleration", "Speed", "Jerk"],
          answer: "Acceleration",
          image: ""
        },
        {
          q: "A body of mass 5 kg is acted upon by a force of 20 N. The acceleration produced is:",
          options: ["0.25 m/s²", "4 m/s²", "5 m/s²", "20 m/s²"],
          answer: "4 m/s²",
          image: ""
        },
        {
          q: "The frequency of a wave is 500 Hz and its wavelength is 0.6 m. The speed of the wave is:",
          options: ["300 m/s", "600 m/s", "1200 m/s", "1800 m/s"],
          answer: "300 m/s",
          image: ""
        },
        {
          q: "A transformer with 1000 turns in the primary coil is connected to a 240 V mains supply. What is the number of turns in the secondary coil to give an output of 120 V?",
          options: ["500", "1000", "2000", "240"],
          answer: "500",
          image: ""
        },
        {
          q: "A man walks 1 km due east and then 1 km due north. His displacement is:",
          options: [
            "√2 km N 45° E",
            "1 km N 30° E",
            "1 km N 15° E",
            "√2 km N 60° E"
          ],
          answer: "√2 km N 45° E",
          image: ""
        },
        {
          q: "The density of 400 cm³ of palm oil was 0.9 g/cm³ before frying. If the density of the oil was 0.6 g/cm³ after frying, the volume of the oil after frying is:",
          options: ["600 cm³", "450 cm³", "300 cm³", "150 cm³"],
          answer: "600 cm³",
          image: ""
        },
        {
          q: "The least possible error encountered when taking measurement with a meter rule is:",
          options: ["0.1 mm", "1.0 mm", "0.5 mm", "0.2 mm"],
          answer: "0.5 mm",
          image: ""
        },
        {
          q: "Which of the following quantities requires both magnitude and direction to be fully described?",
          options: ["Temperature", "Distance", "Displacement", "Mass"],
          answer: "Displacement",
          image: ""
        },
        {
          q: "Which of the following particles cannot be deflected by both electric and magnetic fields?",
          options: ["Gamma rays", "Alpha particles", "Wave particles", "Beta particles"],
          answer: "Gamma rays",
          image: ""
        },
        {
          q: "A pump is capable of lifting 5000 kg of water through a vertical height of 60 m in 15 minutes. The power of the pump is:",
          options: [
            "3.3 × 10³ W",
            "2.5 × 10⁴ W",
            "2.5 × 10⁵ W",
            "3.3 × 10² W"
          ],
          answer: "3.3 × 10³ W",
          image: ""
        },
        {
          q: "Calculate the temperature change when 500 J of heat is supplied to 100 g of water. (Specific heat capacity of water = 4200 J/kg·K)",
          options: ["12.1°C", "2.1°C", "1.2°C", "0.1°C"],
          answer: "1.2°C",
          image: ""
        },
        {
          q: "A man walks 3 km due east and then 4 km due north. His displacement is:",
          options: [
            "5 km N 53° E",
            "5 km N 37° E",
            "7 km N 45° E",
            "1 km N 30° E"
          ],
          answer: "5 km N 53° E",
          image: ""
        },
        {
          q: "A car accelerates uniformly from rest to a speed of 20 m/s in 10 seconds. The distance covered in this time is:",
          options: ["100 m", "200 m", "150 m", "50 m"],
          answer: "100 m",
          image: ""
        },
        {
          q: "The half-life of a radioactive substance is 5 years. What fraction of the substance remains after 15 years?",
          options: ["1/2", "1/4", "1/8", "1/16"],
          answer: "1/8",
          image: ""
        },
        {
          q: "A transformer has 200 turns in the primary coil and 50 turns in the secondary coil. If the primary voltage is 100 V, the secondary voltage is:",
          options: ["25 V", "50 V", "100 V", "200 V"],
          answer: "25 V",
          image: ""
        },
        {
          q: "The force constant of a spring is 500 N/m. If the spring is stretched by 0.02 m, the force exerted is:",
          options: ["10 N", "20 N", "25 N", "30 N"],
          answer: "10 N",
          image: ""
        },
        {
          q: "A body of mass 10 kg is lifted to a height of 5 m. The potential energy gained is:",
          options: ["50 J", "100 J", "500 J", "1000 J"],
          answer: "500 J",
          image: ""
        },
        {
          q: "Which of the following is a characteristic of stationary waves?",
          options: [
            "They are formed by two identical waves traveling in opposite directions.",
            "They can be transverse or longitudinal.",
            "The distance between two successive nodes is one wavelength.",
            "The antinode is a point of minimum displacement."
          ],
          answer: "They are formed by two identical waves traveling in opposite directions.",
          image: ""
        },
        {
          q: "To produce an enlarged and erect image with a concave mirror, the object must be positioned:",
          options: [
            "At the principal focus.",
            "Beyond the center of curvature.",
            "Between the principal focus and the center of curvature.",
            "Between the principal focus and the pole."
          ],
          answer: "Between the principal focus and the pole.",
          image: ""
        },
        {
          q: "The property that is propagated in a traveling wave is:",
          options: ["Frequency.", "Amplitude.", "Energy.", "Wavelength."],
          answer: "Energy.",
          image: ""
        },
        {
          q: "Which of the following eye defects can be corrected using a cylindrical lens?",
          options: ["Myopia.", "Astigmatism.", "Presbyopia.", "Chromatic aberration."],
          answer: "Astigmatism.",
          image: ""
        },
        {
          q: "A transformer has 500 turns in the primary coil and 100 turns in the secondary coil. If the primary voltage is 200 V, the secondary voltage is:",
          options: ["40 V.", "100 V.", "200 V.", "500 V."],
          answer: "40 V.",
          image: ""
        },
        {
          q: "The half-life of a radioactive substance is 10 years. What fraction of the substance remains after 30 years?",
          options: ["1/2.", "1/3.", "1/4.", "1/8."],
          answer: "1/8.",
          image: ""
        }
      ],



    chemistry: [
        {
          q: "Which of the following statements is NOT correct?",
          options: [
            "The average kinetic energy of a gas is directly proportional to its temperature",
            "At constant temperature, the volume of a gas increases as the pressure increases",
            "The pressure of a gas is directly proportional to its density",
            "The temperature of a gas is directly proportional to its volume"
          ],
          answer: "At constant temperature, the volume of a gas increases as the pressure increases",
          image: ""
        },
        {
          q: "Zinc oxide is a/an",
          options: [
            "Basic oxide",
            "Acidic oxide",
            "Amphoteric oxide",
            "Neutral oxide",
            "Reactive oxide"
          ],
          answer: "Amphoteric oxide",
          image: ""
        },
        {
          q: "When sodium chloride and metallic sodium are each dissolved in water,",
          options: [
            "both processes are exothermic",
            "both processes are endothermic",
            "the dissolution of metallic sodium is endothermic",
            "the dissolution of metallic sodium is exothermic",
            "the dissolution of sodium chloride is explosive"
          ],
          answer: "the dissolution of metallic sodium is exothermic",
          image: ""
        },
        {
          q: "The periodic classification of elements arranges the elements in order of their",
          options: [
            "Atomic weights",
            "Isotopic weights",
            "Molecular weights",
            "Atomic numbers",
            "Atomic masses"
          ],
          answer: "Atomic numbers",
          image: ""
        },
        {
          q: "In the reaction between sodium hydroxide and sulphuric acid, what volume of 0.5 M NaOH would exactly neutralise 10 cm³ of 1.25 M H₂SO₄?",
          options: ["5 cm³", "10 cm³", "20 cm³", "25 cm³", "50 cm³"],
          answer: "20 cm³",
          image: ""
        },
        {
          q: "in the process of electrolysis. The electrode at which oxidation occurs is",
          options: ["The cathode", "The anode", "Both electrodes", "Neither electrode"],
          answer: "The anode",
          image: ""
        },
        {
          q: "Unsaturated organic compounds are identified by the decolourization of",
          options: [
            "Silver bromide solution and bromine water",
            "Bromine water and acidified potassium tetraoxomanganate (VII) solution",
            "Silver bromine and potassium tetraoxomanganate (VII) solutions",
            "Bromine water and alkaline potassium tetraoxomanganate (VII) solution"
          ],
          answer: "Bromine water and acidified potassium tetraoxomanganate (VII) solution",
          image: ""
        },
        {
          q: "The conditions necessary for the extraction of a water molecule from two molecules of ethanol are",
          options: [
            "Less acid and lower temperature",
            "Excess acid and a lower temperature",
            "Excess acid and a higher temperature",
            "Less acid and a higher temperature"
          ],
          answer: "Excess acid and a higher temperature",
          image: ""
        },
        {
          q: "The chlorinated alkane often used industrially to remove grease is",
          options: [
            "Tetrachloromethane",
            "Chloromethane",
            "Trichloromethane",
            "Dichloromethane"
          ],
          answer: "Dichloromethane",
          image: ""
        },
        {
          q: "A small quantity of solid ammonium chloride is heated gently and gradually disappears to produce two gases, later depositing a white cloudy solid on the cooler part of the tube. This process is called",
          options: ["Distillation", "Sublimation", "Precipitation", "Evaporation", "Decomposition"],
          answer: "Sublimation",
          image: ""
        },
        {
          q: "When air is passed through alkaline pyrogallol and then over quicklime, the only gases left are",
          options: [
            "Nitrogen and carbon dioxide",
            "The rare gases",
            "Nitrogen and oxygen",
            "Nitrogen and the rare gases",
            "Nitrogen, carbon dioxide and the rare gases"
          ],
          answer: "Nitrogen and the rare gases",
          image: ""
        },
        {
          q: "By means of filtration, one component can be obtained pure from an aqueous mixture of sodium chloride and",
          options: ["Potassium nitrate", "Sand", "Lead nitrate", "Sugar (glucose)", "Starch"],
          answer: "Sand",
          image: ""
        },
        {
          q: "The property used in the industrial preparation of nitrogen and oxygen from air is",
          options: ["Rate of diffusion", "Density", "Boiling point", "Solubility"],
          answer: "Boiling point",
          image: ""
        },
        {
          q: "A mixture of sugar and sulphur can be separated by",
          options: [
            "Dissolution in water, evaporation and filtration",
            "Filtration, evaporation and dissolution in water",
            "Dissolution in water, filtration and evaporation",
            "Evaporation, dissolution in water and filtration"
          ],
          answer: "Dissolution in water, filtration and evaporation",
          image: ""
        },
        {
          q: "[Diagram] Use the diagram above to answer the question: In the diagram showing an electrochemical cell, the electrode where reduction takes place is",
          options: ["Aluminiumtetraoxosulphate(VI)", "Calciumtrioxonitrate(V)", "Iron(III)bromide", "Potassiumsulphide,"],
          answer: "Iron(III)bromide",
          image: "https://myschool.ng/storage/classroom/fr744TadbaHhb7ZX8hnc0nAhGVqBDkxuRKHX3Zwu.png"
        },
        {
          q: "The least easily oxidized of the metals below is",
          options: ["Ca", "Na", "Zn", "Al"],
          answer: "Al",
          image: ""
        },
        {
          q: "The repeating unit in natural rubber is",
          options: ["Alkyne", "Isoprene", "N-propene", "Peoprene"],
          answer: "Isoprene",
          image: ""
        },
        {
          q: "Bases turn litmus paper from",
          options: ["Blue to red", "Red to blue", "White to red", "No change"],
          answer: "Red to blue",
          image: ""
        },
        {
          q: "A catalyst increases the rate of a chemical reaction by providing a pathway that has",
          options: ["Higher activation energy", "Increased temperature", "Lower activation energy", "Increased concentration"],
          answer: "Lower activation energy",
          image: ""
        },
        {
          q: "In the equilibrium reaction 2SO₂(g) + O₂(g) ↔ 2SO₃(g) with ΔH = -189 kJ/mol, increasing the equilibrium constant (K) can be achieved by",
          options: ["Decreasing the temperature", "Increasing the pressure", "Decreasing the temperature", "Adding a catalyst"],
          answer: "Decreasing the temperature",
          image: ""
        },
        {
          q: "In the reaction: C(s) + H₂O(g) → H₂(g) + CO₂(g) at 1300 K, if ΔG is -43 kJ, the reaction is",
          options: ["Not feasible", "At equilibrium", "Feasible", "Exothermic"],
          answer: "Feasible",
          image: ""
        },
        {
          q: "Two equal bulbs, one containing ammonia and the other nitrogen, are connected at room temperature. The entropy of the mixture of gases is likely to",
          options: ["Remain unchanged", "Increase", "Decrease", "Change unpredictably"],
          answer: "Increase",
          image: ""
        },
        {
          q: "The periodic table is arranged in order of increasing",
          options: ["Atomic weights", "Atomic numbers", "Electron affinities", "Metallic character"],
          answer: "Atomic numbers",
          image: ""
        },
        {
          q: "[Diagram] In the graph above, y represents ",
          options: [" endothermic reaction", "activation energy", "exothermic reaction", "ionization energy"],
          answer: "activation energy",
          image: "https://myschool.ng/storage/classroom/y5GBLQVPWEI9dZKzVkuDLvb0JiLwvlWGfASX4DOB.png"
        },
        {
          q: "In a redox reaction, oxidation is defined as",
          options: ["Addition of hydrogen", "Loss of electrons", "Gain of oxygen", "Loss of oxygen"],
          answer: "Loss of electrons",
          image: ""
        },
        {
          q: "The oxidation number of sulfur in H₂SO₄ is",
          options: ["+4", "+5", "+6", "-2"],
          answer: "+6",
          image: ""
        },
        {
          q: "In an electrolysis experiment, the quantity of substance liberated at an electrode is directly proportional to",
          options: [
            "The volume of the solution",
            "The temperature",
            "The quantity of electricity passed",
            "The concentration of the electrolyte"
          ],
          answer: "The quantity of electricity passed",
          image: ""
        },
        {
          q: "[Diagram] The IUPAC nomenclature of the compound above is",
          options: [" propan-1-ol", "butan-1-ol", "2-methyl propan-1-ol", "2-methyl propan-2-ol"],
          answer: "2-methyl propan-2-ol",
          image: "https://myschool.ng/storage/classroom/tTswqf6QttNp7CTBgVW6NeB9zba19JnxcL0p9qG9.png"
        },
        {
          q: "The reaction rate generally increases with temperature because",
          options: [
            "The concentration decreases",
            "Molecules have more kinetic energy",
            "The equilibrium constant decreases",
            "The activation energy increases"
          ],
          answer: "Molecules have more kinetic energy",
          image: ""
        },
        {
          q: "Le Chatelier’s principle states that if a dynamic equilibrium is disturbed, the system will",
          options: [
            "Remain the same",
            "Shift to oppose the change",
            "Shift in the direction of the change",
            "Stop reacting"
          ],
          answer: "Shift to oppose the change",
          image: ""
        },
        {
          q: "The molar volume of an ideal gas at STP is",
          options: ["22.4 L", "11.2 L", "44.8 L", "22.4 L"],
          answer: "22.4 L",
          image: ""
        },
        {
          q: "Avogadro’s number is approximately",
          options: ["6.02 x 10²²", "6.02 x 10²³", "6.02 x 10²³", "6.02 x 10²⁴"],
          answer: "6.02 x 10²³",
          image: ""
        },
        {
          q: "The ideal gas law is represented by the equation",
          options: ["PV = nRT", "P = nRT/V", "PV = nRT", "V = nRT/P"],
          answer: "PV = nRT",
          image: ""
        },
        {
          q: "The bond angle in a water molecule is approximately",
          options: ["180°", "120°", "104.5°", "90°"],
          answer: "104.5°",
          image: ""
        },
        {
          q: "The pH of a neutral solution at 25°C is",
          options: ["0", "7", "7", "14"],
          answer: "7",
          image: ""
        },
        {
          q: "A buffer solution is capable of",
          options: [
            "Changing pH drastically",
            "Resisting changes in pH upon addition of small amounts of acid or base",
            "Neutralizing strong acids only",
            "Only diluting the solution"
          ],
          answer: "Resisting changes in pH upon addition of small amounts of acid or base",
          image: ""
        },
        {
          q: "[Diagram] Use the diagram above to answer: The IUPAC name of the compound above is",
          options: ["3-bromo, 3-methyl butane", "2-bromo, 2-methyl butane", "2-methyl, 2-bromo butane", "3-methyl, 3-bromo butane"],
          answer: "2-bromo, 2-methyl butane",
          image: "https://myschool.ng/storage/classroom/stFru5b9O0F2UFv7uD9jVBnJQEVJErudrFXJt8Lc.png"
        },
        {
          q: "The extraction of copper from its ores involves which type of reaction?",
          options: ["Oxidation", "Reduction", "Neutralization", "Decomposition"],
          answer: "Reduction",
          image: ""
        },
        {
          q: "In balancing the equation: 3Cu + pHNO₃ → 3Cu(NO)₂ + 4H₂O + xNO, the values of p and x are",
          options: ["1 and 3", "2 and 3", "6 and 2", "8 and 2"],
          answer: "8 and 2",
          image: ""
        },
        {
          q: "In a chemical reaction, a catalyst",
          options: [
            "Increases the activation energy",
            "Lowers the activation energy",
            "Changes the equilibrium constant",
            "Is consumed during the reaction"
          ],
          answer: "Lowers the activation energy",
          image: ""
        }
      ],



    biology: [
            {
              q: "The major building block of an organism is",
              options: ["Nitrogen", "Carbon", "Water", "Sulphur"],
              answer: "Carbon",
              image: ""
            },
            {
              q: "The process by which plants lose water to the atmosphere is",
              options: ["Transpiration", "Guttation", "Translocation", "Evaporation"],
              answer: "Transpiration",
              image: ""
            },
            {
              q: "[Diagram] Use the diagram above to answer the question: The organism belongs to kingdom",
              options: ["Monera", "Protista", "Fungi", "Animalia"],
              answer: "Monera",
              image: "https://myschool.ng/storage/classroom/3hMKLkc2QxGXqMhzaR6YRiWHD75GfVoMhnOzwubI.png"
            },
            {
              q: "The formation of cilia and flagella in living cells is carried out with the help of",
              options: ["Ribosome", "Lysosome", "Centriole", "Plastid"],
              answer: "Centriole",
              image: ""
            },
            {
              q: "The food nutrient with the highest energy value is",
              options: ["Protein", "Carbohydrate", "Lipid", "Minerals"],
              answer: "Lipid",
              image: ""
            },
            {
              q: "Which of the Nigeria states is Northern guinea savanna located?",
              options: ["Borno", "Kano", "Oyo", "Kwara"],
              answer: "Borno",
              image: ""
            },
            {
              q: "Darwin's theory of evolution is based on the principle of",
              options: ["Use and disuse of organ", "Natural selection", "Acquired characteristics", "Mutation"],
              answer: "Natural selection",
              image: ""
            },
            {
              q: "Similar structures that are modified to work in different ways in different organisms are referred to as",
              options: ["Homologous structures", "Analogous structures", "Divergent structures", "Convergent structures"],
              answer: "Homologous structures",
              image: ""
            },
            {
              q: "One of the ways of controlling Schistosomiasis is by",
              options: ["Destroying water snails and water weeds", "Clearing the bushes around the house", "Washing hands after using the toilet", "Properly washing fruits before eating them"],
              answer: "Destroying water snails and water weeds",
              image: ""
            },
            {
              q: "The central nervous system comprises of",
              options: ["Brain and somatic", "Brain and spinal cord", "Spinal cord and somatic", "Brain only"],
              answer: "Brain and spinal cord",
              image: ""
            },
            {
              q: "[Diagram] Use the diagram above to answer the question: The organelle that shows the organism has plant characteristics is",
              options: ["I", "II", "III", "IV"],
              answer: "II",
              image: "https://myschool.ng/storage/classroom/c0DmqdZioar6fq6veC3SBG8L3BJEWho4yiArDO8h.png"
            },
            {
              q: "Reproduction in paramecium is by",
              options: ["Binary fission", "Budding", "Spore formation", "Fragmentation"],
              answer: "Binary fission",
              image: ""
            },
            {
              q: "A community with a population of 2,310,000 people living in an area of 2,310 km² has a population density of",
              options: ["10,000", "10", "100", "1000"],
              answer: "1000",
              image: ""
            },
            {
              q: "A succession that occurs in an area where there is no pre-existing community is called",
              options: ["Tertiary succession", "Primary succession", "Post‑primary succession", "Secondary succession"],
              answer: "Primary succession",
              image: ""
            },
            {
              q: "Which of the following processes releases oxygen to the atmosphere?",
              options: ["Respiration", "Combustion", "Decomposition", "Photosynthesis"],
              answer: "Photosynthesis",
              image: ""
            },
            {
              q: "The depressed side of paramecium which is lined with cilia leads to a tube‑like structure called",
              options: ["Anal pore", "Oral groove", "Gullet", "Food vacuole"],
              answer: "Oral groove",
              image: ""
            },
            {
              q: "The rhizoid of liverwort is",
              options: ["Unicellular and unbranched", "Multicellular and branched", "Unicellular and branched", "Multicellular and unbranched"],
              answer: "Unicellular and unbranched",
              image: ""
            },
            {
              q: "In glycolysis, glucose is broken down (in the presence of enzyme and absence of oxygen) to produce",
              options: ["Acetyl‑coenzyme + ATP", "Phosphorylated glucose", "Pyruvic acid + ATP", "Amino acid"],
              answer: "Pyruvic acid + ATP",
              image: ""
            },
            {
              q: "Gaseous exchange takes place through the plasma membrane in",
              options: ["Hydra", "Paramecium", "Flatworm", "Earthworm"],
              answer: "Paramecium",
              image: ""
            },
            {
              q: "One of the characteristics of secondary succession is that it",
              options: ["Starts on a bare surface", "Takes longer time to reach climax", "Starts on an already colonized surface", "Starts with low organism density"],
              answer: "Starts on an already colonized surface",
              image: ""
            },
            {
              q: "One of the components of xylem tissue is",
              options: ["Companion cell", "Tracheid", "Sieve tube", "Epidermal cell"],
              answer: "Tracheid",
              image: ""
            },
            {
              q: "Which statement best explains the theory of natural selection?",
              options: ["There is no struggle for existence", "New species get better adaptation", "The weaker offspring are eliminated", "Unused structures disappear later"],
              answer: "The weaker offspring are eliminated",
              image: ""
            },
            {
              q: "The chemical and physical composition of soil is an example of a(n)",
              options: ["Climatic factor", "Topographic factor", "Edaphic factor", "Chemical factor"],
              answer: "Edaphic factor",
              image: ""
            },
            {
              q: "The abiotic factor that affects the population growth of an organism is",
              options: ["Predator", "Rainfall", "Food shortage", "Disease"],
              answer: "Rainfall",
              image: ""
            },
            {
              q: "The cells responsible for transmitting messages to the effectors are",
              options: ["Motor neurons", "Sensory neurons", "Hair cells", "Relay neurons"],
              answer: "Motor neurons",
              image: ""
            },
            {
              q: "The oxygen transported to all parts of the body during blood circulation is used for",
              options: ["Growth and development of cells", "Removal of waste products", "Release of energy from food", "Formation of carboxyl haemoglobin"],
              answer: "Release of energy from food",
              image: ""
            },
            {
              q: "After fertilization in plants, the zygote develops into",
              options: ["Fruit", "An embryo", "Seed", "An endosperm"],
              answer: "An embryo",
              image: ""
            },
            {
              q: "[Diagram] Use the diagram above to answer the question: The organ is responsible for",
              options: ["Production of heat", "Osmoregulation", "Vasoconstriction", "Production of hormones"],
              answer: "Osmoregulation",
              image: "https://myschool.ng/storage/classroom/oCZ9Bz3lIZ54odVNqc5PinvVA9jA1amePLepBe0Q.png"
            },
            {
              q: "Which evidence of evolution employs radio‑isotope dating?",
              options: ["Comparative anatomy", "Embryology", "Fossil records", "Vestigial organs"],
              answer: "Fossil records",
              image: ""
            },
            {
              q: "The pentadactyl forelimb of vertebrates (variations due to environment) is evidence from",
              options: ["Comparative anatomy", "Physiological evidence", "Embryological evidence", "Fossil records"],
              answer: "Comparative anatomy",
              image: ""
            },
            {
              q: "[Diagram] Use the diagram above to answer the question: The part labelled III is",
              options: ["abdomen", "head", "maxillae", "thorax"],
              answer: "thorax",
              image: "https://myschool.ng/storage/classroom/hdlQA7azX1cqSPDtYvmFh9XAidiaNqUp7Cxx0yD7.png"
            },
            {
              q: "[Diagram] Use the insect diagram above to answer the question: The part labelled I is",
              options: ["Abdomen", "Head", "Maxillae", "Thorax"],
              answer: "Head",
              image: "https://myschool.ng/storage/classroom/hdlQA7azX1cqSPDtYvmFh9XAidiaNqUp7Cxx0yD7.png"
            },
            {
              q: "What is the genotypic ratio of the offspring produced in the F₁ generation?",
              options: ["2:1:1", "1:2:1", "2:2", "3:1"],
              answer: "3:1",
              image: ""
            },
            {
              q: "Body temperature, thirst, and hunger are regulated by",
              options: ["Thalamus", "Hypothalamus", "Medulla oblongata", "Spinal cord"],
              answer: "Hypothalamus",
              image: ""
            },
            {
              q: "Cell division that involves growth, development, repair, and replacement of worn‑out tissues is called",
              options: ["Biosynthesis", "Mitosis", "Meiosis", "Synthesis"],
              answer: "Mitosis",
              image: ""
            },
            {
              q: "[Diagram] Use the diagram above to answer the question: Recombination of genes at fertilization is represented by the part labelled",
              options: ["I", "II", "III", "IV"],
              answer: "III",
              image: "https://myschool.ng/storage/classroom/TU9ZBoobkKF9JlbXs73a9L5D4eGVY1kkUUVhqh7H.jpeg"
            },
            {
              q: "The bacteria in the large intestine of man synthesize",
              options: ["Vitamins and minerals", "Vitamins and glucose", "Amino acids and vitamins", "Amino acids and minerals"],
              answer: "Vitamins and minerals",
              image: ""
            },
            {
              q: "Which of the following organelles is known as the powerhouse of the cell?",
              options: ["Nucleus", "Mitochondrion", "Chloroplast", "Ribosome"],
              answer: "Mitochondrion",
              image: ""
            },
            {
              q: "Photosynthesis occurs in which part of the plant cell?",
              options: ["Cytoplasm", "Mitochondrion", "Chloroplast", "Nucleus"],
              answer: "Chloroplast",
              image: ""
            },
            {
              q: "In humans, hemoglobin is found in which cell type?",
              options: ["White blood cells", "Red blood cells", "Platelets", "Plasma cells"],
              answer: "Red blood cells",
              image: ""
            }
          ]
};

// Shuffle options and adjust correct answer position
function shuffleOptions(questions) {
    questions.forEach(subject => {
        subject.forEach(q => {
            const shuffled = [...q.options].sort(() => Math.random() - 0.5);
            q.options = shuffled;
            q.correctIndex = shuffled.indexOf(q.answer);
        });
    });
}

shuffleOptions(Object.values(questions));