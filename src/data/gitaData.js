// ============================================================
// GITA VISUAL GUIDE — Complete Data (Chapters 2–18)
// Every model is typed for automatic template rendering.
// Template types: comparison | flow | radial | cycle | hierarchy | grid
// ============================================================

const GITA_DATA = [
  // ========== CHAPTER 2 ==========
  {
    chapter: 2,
    title: "Sankhya Yoga",
    subtitle: "The Yoga of Knowledge",
    models: [
      {
        id: "ch2-atma-body",
        name: "Eternal Self vs Temporary Body",
        desc: "The foundational distinction — Atma is the imperishable inner core, the body is the perishable outer shell that changes across lifetimes (2.11–30).",
        type: "comparison",
        data: {
          left: { label: "Atma (Self)", items: ["Eternal, unborn, undying (2.20)", "Unchanging and immutable (2.25)", "Beyond weapons, fire, water, wind (2.23–24)", "Not slain when the body is slain (2.19)", "The inner luminous core"] },
          right: { label: "Body (Sharira)", items: ["Perishable, subject to death (2.18)", "Changes from childhood to old age (2.13)", "Like worn-out clothes that are discarded (2.22)", "Temporary dwelling of the eternal Self", "The outer shell of matter"] }
        },
        scriptures: [
          { ref: "2.19", sanskrit: "य एनं वेत्ति हन्तारं", text: "The Self is not slain when the body is slain." },
          { ref: "2.20", sanskrit: "न जायते म्रियते वा कदाचिन्", text: "Atma is unborn, eternal, ever-existing, and undying." },
          { ref: "2.22", sanskrit: "वासांसि जीर्णानि यथा विहाय", text: "As a person discards old clothes, the soul accepts new bodies." }
        ]
      },
      {
        id: "ch2-wisdom-lenses",
        name: "Two Lenses of Wisdom",
        desc: "Sankhya Buddhi is the lens of discriminative wisdom — seeing what is real and eternal (2.39). Yoga Buddhi is acting without attachment to outcomes (2.47–48). Both lead to liberation but through different means: one through analysis, the other through selfless action (2.51).",
        type: "comparison",
        data: {
          left: { label: "Sankhya (Knowledge)", items: ["Discrimination between Self and non-Self", "Intellectual understanding", "Leads to Jnana Yoga"] },
          right: { label: "Yoga (Action)", items: ["Performing duties with detachment", "Practical application in life", "Leads to Karma Yoga"] }
        },
        scriptures: [
          { ref: "2.39", sanskrit: "एषा तेऽभिहिता सांख्ये", text: "Analytical wisdom has been told; now hear of practical wisdom." },
          { ref: "2.51", sanskrit: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः", text: "Both paths lead to the same goal — liberation." }
        ]
      },
      {
        id: "ch2-karma-cycle",
        name: "Karma Yoga Cycle",
        desc: "The complete cycle of selfless action — from duty through detachment to liberation. Krishna's foundational framework for living in the world without being bound by it (2.47–2.50).",
        type: "cycle",
        data: {
          center: "Yoga is Skill in Action (2.50)",
          steps: ["Right Action — Perform Swadharma", "No Attachment — Release the fruits", "Equanimity — Equal in success and failure", "Purity of Mind — Intellect clarifies", "Liberation — Moksha attained"]
        },
        scriptures: [
          { ref: "2.47", sanskrit: "कर्मण्येवाधिकारस्ते", text: "You have a right to perform duty, but not to its fruits." },
          { ref: "2.48", sanskrit: "योगस्थः कुरु कर्माणि", text: "Perform your duty equipoised, abandoning all attachment." },
          { ref: "2.50", sanskrit: "योगः कर्मसु कौशलम्", text: "Yoga is skill in action." }
        ]
      },
      {
        id: "ch2-stitha-prajna",
        name: "Sthitaprajña — The Steady-Wisdom Sage",
        desc: "18 qualities of a person of established wisdom — a complete psychological portrait of the liberated mind (2.54–72).",
        type: "radial",
        data: {
          center: "Steady Wisdom",
          items: ["Completely free from desires (2.55)", "Detached from pain and pleasure (2.56)", "Free from anger, fear, and attachment (2.56)", "Withdraws senses like a tortoise into its shell (2.58)", "Moves among sense objects with perfect control (2.64)", "Steady and undisturbed after contact with the world (2.65)", "Like an ocean unmoved by rivers flowing into it (2.70)", "Abides in peace, desiring nothing (2.71)"]
        },
        scriptures: [
          { ref: "2.56", sanskrit: "दुःखेष्वनुद्विग्नमनाः", text: "Detached from pain and pleasure. Free from attachment, fear, and anger." },
          { ref: "2.58", sanskrit: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः", text: "One who withdraws the senses like a tortoise draws in its limbs is of steady wisdom." },
          { ref: "2.70", sanskrit: "आपूर्यमाणमचलप्रतिष्ठं", text: "Desires vanish like rivers merging into the ocean." }
        ]
      },
      {
        id: "ch2-sat-asat",
        name: "Sat–Asat–Mithya — The Reality Framework",
        desc: "Three levels of existence. What is Real never ceases to be; what is Unreal has no existence. The wise perceive the truth of both (2.16).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "SAT (The Eternal)", desc: "Unchanging, imperishable truth", accent: true },
            { label: "MITHYA (The Flux)", desc: "Temporary, dependent reality" },
            { label: "ASAT (The Void)", desc: "Non-existent illusion" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "2.16", sanskrit: "नासतो विद्यते भावो", text: "The unreal has no existence; the real never ceases to be." }
        ]
      },
      {
        id: "ch2-rebirth",
        name: "The Rebirth Cycle — Changing Clothes",
        desc: "Just as a person discards old clothes and puts on new ones, the soul discards worn-out bodies and enters new ones — an infinite cycle until liberation (2.13, 2.22).",
        type: "cycle",
        data: {
          center: "Eternal Soul",
          steps: ["Childhood", "Youth", "Adulthood", "Old Age", "Death", "New Body"]
        },
        scriptures: [
          { ref: "2.13", sanskrit: "देहिनोऽस्मिन्यथा देहे", text: "As the soul passes from childhood to old age, it passes into another body." },
          { ref: "2.22", sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि", text: "Just as one discards old clothes and puts on new, the soul accepts new bodies." }
        ]
      },
      {
        id: "ch2-decision",
        name: "Svadharma — The Decision Framework",
        desc: "Should one act or not? Krishna introduces the framework: personal duty (Svadharma), honor, the consequences of inaction, and equanimity in all outcomes (2.31–38, 2.41).",
        type: "flow",
        data: {
          steps: [
            { label: "Recognize Svadharma", desc: "Nothing more auspicious than righteous duty (2.31)" },
            { label: "Filter Moha (Delusion)", desc: "Refusing duty incurs sin (2.33)" },
            { label: "Equanimity", desc: "Be equal in gain/loss, victory/defeat (2.38)" },
            { label: "Resolute Action", desc: "The intellect is single-pointed (2.41)", accent: true }
          ]
        },
        scriptures: [
          { ref: "2.31", sanskrit: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि", text: "For a Kshatriya, nothing is more auspicious than a righteous war." },
          { ref: "2.41", sanskrit: "व्यवसायात्मिका बुद्धिः", text: "The resolute intellect is single-pointed." }
        ]
      },
      {
        id: "ch2-mind-hierarchy",
        name: "Mind, Senses & Intellect — Control Hierarchy",
        desc: "The chain of command within — senses carry away the mind, but intellect governed by the Soul can restore order. A chariot model of inner governance (2.60–67).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Soul (Atman)", desc: "Supreme controller", accent: true },
            { label: "Intellect (Buddhi)", desc: "Discriminative faculty" },
            { label: "Mind (Manas)", desc: "Seat of emotions" },
            { label: "Senses (Indriyas)", desc: "Carry away the mind (2.60)" },
            { label: "Objects (Matter)", desc: "Source of temptation" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "2.60", sanskrit: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः", text: "Even a wise man's senses carry away his mind." },
          { ref: "2.62", sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते", text: "Dwelling on sense-objects, attachment is born; from attachment, desire..." },
          { ref: "2.67", sanskrit: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते", text: "The mind following wandering senses destroys wisdom like wind destroys a ship." }
        ]
      }
    ]
  },

  // ========== CHAPTER 3 ==========
  {
    chapter: 3,
    title: "Karma Yoga",
    subtitle: "The Yoga of Action",
    models: [
      {
        id: "ch3-two-paths",
        name: "Two Paths Clarified — Jñāna vs Karma",
        desc: "Arjuna's fundamental confusion: If knowledge is superior, why ask me to fight? Krishna clarifies — both paths lead to liberation, but selfless action is suited for most people (3.1–8).",
        type: "comparison",
        data: {
          left: { label: "Jnana Yoga", items: ["Contemplative path", "Discrimination of Self", "For the reflective mind"] },
          right: { label: "Karma Yoga", items: ["Path of selfless action", "Suited for most people", "No one can remain actionless (3.5)"] }
        },
        scriptures: [
          { ref: "3.3", sanskrit: "लोकेऽस्मिन्द्विविधा निष्ठा", text: "Two paths to realization: Knowledge and Action." },
          { ref: "3.5", sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्", text: "No one can remain without performing action even for a moment." },
          { ref: "3.8", sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः", text: "Perform your prescribed duty, for action is superior to inaction." }
        ]
      },
      {
        id: "ch3-yajna",
        name: "Yajña Cycle — Cosmic Cooperation",
        desc: "The magnificent cycle: Sacrifice feeds the Devas, who bring rains, which produce food, which sustains all beings. He who breaks this wheel lives in vain (3.9–16).",
        type: "cycle",
        data: {
          center: "Cosmic Harmony",
          steps: ["Action (Karma)", "Yajna (Sacrifice)", "Devas Pleased", "Rains Fall", "Food Grows", "Beings Thrive"]
        },
        scriptures: [
          { ref: "3.9", sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः", text: "The world is bound by action except those done as sacrifice." },
          { ref: "3.14", sanskrit: "अन्नाद्भवन्ति भूतानि", text: "From food, beings are born; from rain, food is produced." }
        ]
      },
      {
        id: "ch3-duty",
        name: "Structure of Duty",
        desc: "Krishna's framework for righteous action: perform prescribed duty without attachment, set an example for others to follow, and the wise should not unsettle the minds of the ignorant. 'Therefore, do your duty without attachment' (3.19). 'Whatever a great man does, others follow' (3.21).",
        type: "flow",
        data: {
          steps: [
            { label: "Prescribed Action", desc: "Perform your duty (3.19)" },
            { label: "Detached Performance", desc: "Without attachment to results" },
            { label: "Set Example", desc: "Great men act, others follow (3.21)" },
            { label: "Purity & Liberation", desc: "Attain supreme through selfless work", accent: true }
          ]
        },
        scriptures: [
          { ref: "3.19", sanskrit: "तस्मादसक्तः सततं", text: "Perform duty without attachment." },
          { ref: "3.21", sanskrit: "यद्यदाचरति श्रेष्ठः", text: "Whatever a great man does, common people follow." },
          { ref: "3.26", sanskrit: "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्", text: "The wise should not unsettle the minds of the ignorant." }
        ]
      },
      {
        id: "ch3-gunatita",
        name: "Guṇātīta Karma — Action Without Ego",
        desc: "All actions are performed by the Gunas of Prakriti. The deluded think 'I am the doer.' The wise know the difference and act without attachment to results (3.27–29).",
        type: "flow",
        data: {
          steps: [
            { label: "Gunas of Prakriti Act", desc: "Nature performs all actions (3.27)" },
            { label: "Ego Claims Doership", desc: "The deluded think 'I am the doer'" },
            { label: "Wise Observe", desc: "Knowing the difference, act without attachment (3.28)" },
            { label: "Abandon Doership", desc: "Realize the soul is not the doer", accent: true }
          ]
        },
        scriptures: [
          { ref: "3.27", sanskrit: "प्रकृतेः क्रियमाणानि", text: "Gunas do the work; the deluded ego thinks 'I am the doer.'" },
          { ref: "3.28", sanskrit: "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः", text: "The wise know the difference and act without attachment." }
        ]
      },
      {
        id: "ch3-desire-anger",
        name: "Desire–Anger Vortex",
        desc: "The all-devouring enemies — when desire is frustrated it becomes anger, which destroys the intellect. Arjuna asks: 'What impels a man to commit sin against his will?' Krishna answers decisively (3.36–43).",
        type: "flow",
        data: {
          steps: [
            { label: "Contact with Objects", desc: "Senses encounter the world" },
            { label: "Desire (Kama)", desc: "Born of passion (3.37)" },
            { label: "Frustration", desc: "When desire is unfulfilled" },
            { label: "Anger (Krodha)", desc: "Burning enemy of wisdom" },
            { label: "Delusion → Downfall", desc: "Destruction of intellect (3.39)", accent: true }
          ]
        },
        scriptures: [
          { ref: "3.36", sanskrit: "अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः", text: "Arjuna asks: What impels a man to commit sin against his will?" },
          { ref: "3.37", sanskrit: "काम एष क्रोध एष", text: "It is desire and anger, born of passion — the all-devouring enemy." },
          { ref: "3.43", sanskrit: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना", text: "Know the Self to be superior to the intellect. Conquer this enemy." }
        ]
      },
      {
        id: "ch3-inner-hierarchy",
        name: "Consciousness Pyramid",
        desc: "The hierarchy of inner instruments: Senses are superior to the body, the mind to the senses, the intellect to the mind, and the Self to the intellect. Control flows from top down (3.42).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Self (Atman)", desc: "Supreme, beyond all", accent: true },
            { label: "Intellect (Buddhi)", desc: "Superior to mind" },
            { label: "Mind (Manas)", desc: "Superior to senses" },
            { label: "Senses", desc: "Superior to body" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "3.42", sanskrit: "इन्द्रियाणि पराण्याहुः", text: "Senses are above matter, mind above senses, intellect above mind, and the Self above all." }
        ]
      },
      {
        id: "ch3-leader-ripple",
        name: "The Leadership Ripple Effect",
        desc: "Whatever a great man does, ordinary people emulate. The standards great leaders set become the benchmark the entire world follows. Krishna uses this to show Arjuna that even He acts — not out of need, but to set an example. Inaction by leaders causes moral collapse (3.20–21).",
        type: "flow",
        data: {
          steps: [
            { label: "Leader Acts Righteously", desc: "Sets the standard through personal example" },
            { label: "Society Observes", desc: "Common people look up and follow" },
            { label: "Order is Restored", desc: "Dharma sustained through righteous example", accent: true }
          ]
        },
        scriptures: [
          { ref: "3.21", sanskrit: "यद्यदाचरति श्रेष्ठः", text: "Whatever a great man does, common people follow." }
        ]
      },
      {
        id: "ch3-action-worship",
        name: "Karma as Bhakti — Action as Worship",
        desc: "Every action — from daily work to sacred duty — becomes a liberating offering when surrendered to the Divine. 'All actions should be performed as sacrifice; otherwise action binds one to this world' (3.9). This transforms even mundane labor into spiritual practice (3.30).",
        type: "flow",
        data: {
          steps: [
            { label: "Work with Devotion", desc: "Perform duty with heart centered on the Divine" },
            { label: "Renounce Ego", desc: "Surrender all actions to Me (3.30)" },
            { label: "Attain Liberation", desc: "Free from bondage of karma", accent: true }
          ]
        },
        scriptures: [
          { ref: "3.30", sanskrit: "मयि सर्वाणि कर्माणि", text: "Surrender all actions to Me with mind on the Self." }
        ]
      }
    ]
  },

  // ========== CHAPTER 4 ==========
  {
    chapter: 4,
    title: "Jnana Karma Sanyasa Yoga",
    subtitle: "The Yoga of Knowledge & Renunciation of Action",
    models: [
      {
        id: "ch4-parampara",
        name: "Guru Paramparā — The Sacred Lineage",
        desc: "Krishna first taught this eternal science to Vivasvan (the Sun God), who taught it to Manu, who taught Ikshvaku. Lost over time through the chain of succession, Krishna now revives it for Arjuna (4.1–3).",
        type: "flow",
        data: {
          steps: [
            { label: "Krishna (Origin)", desc: "Source of eternal knowledge", accent: true },
            { label: "Vivasvan (Sun God)", desc: "First recipient" },
            { label: "Manu", desc: "Progenitor of mankind" },
            { label: "Ikshvaku", desc: "Royal sage lineage" },
            { label: "Lost Over Time", desc: "Knowledge forgotten through ages" },
            { label: "Arjuna", desc: "Krishna revives it (4.3)", accent: true }
          ]
        },
        scriptures: [
          { ref: "4.1", sanskrit: "इमं विवस्वते योगं प्रोक्तवानहमव्ययम्", text: "I taught this imperishable yoga to Vivasvan, who taught it to Manu." },
          { ref: "4.3", sanskrit: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः", text: "That same ancient yoga I now declare to you, for you are My devotee and friend." }
        ]
      },
      {
        id: "ch4-avatara",
        name: "Avatāra — Why the Divine Incarnates",
        desc: "The cosmic cycle of dharma restoration — whenever righteousness declines, the Divine manifests to protect the good, destroy the wicked, and re-establish order (4.7–8).",
        type: "cycle",
        data: {
          center: "Divine Will",
          steps: ["Dharma Declines", "Adharma Rises", "Divine Incarnation", "Protection of Good", "Destruction of Evil", "Dharma Restored"]
        },
        scriptures: [
          { ref: "4.7", sanskrit: "यदा यदा हि धर्मस्य", text: "Whenever Dharma declines and Adharma rises, I manifest Myself." },
          { ref: "4.8", sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्", text: "To protect the good, destroy the wicked, and establish Dharma." }
        ]
      },
      {
        id: "ch4-jnana-karma",
        name: "Jñāna-Karma Synthesis",
        desc: "He who sees inaction in action and action in inaction is the wisest among men. Such a person, though engaged in all kinds of activities, is not bound by karma (4.18–20).",
        type: "comparison",
        data: {
          left: { label: "Outer Appearance", items: ["Performing action", "Engaging with world", "Appears active"] },
          right: { label: "Inner Reality", items: ["No sense of doership", "Burned by fire of knowledge", "Not bound by karma (4.20)"] }
        },
        scriptures: [
          { ref: "4.18", sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः", text: "He who sees inaction in action and action in inaction is wise among men." },
          { ref: "4.19", sanskrit: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः", text: "Actions performed with wisdom are burned in the fire of knowledge." }
        ]
      },
      {
        id: "ch4-yajna-types",
        name: "Twelve Yajnas",
        desc: "Krishna reveals that sacrifice (Yajna) takes many forms beyond ritual: material offering (dravya), austerity (tapas), scripture study (swadhyaya), breath control (pranayama), knowledge (jnana), and self-surrender (atma samyama). 'Superior to material sacrifice is the sacrifice of knowledge' (4.33).",
        type: "radial",
        data: {
          center: "Sacred Fire",
          items: ["Material offering (Dravya)", "Austerity (Tapas)", "Scripture study (Swadhyaya)", "Wisdom offering (Jnana)", "Breath control (Pranayama)", "Ego surrender (Atma Samyama)", "Sense restraint", "Yoga practice"]
        },
        scriptures: [
          { ref: "4.25", sanskrit: "दैवमेवापरे यज्ञं", text: "Some offer sacrifice to deities, others offer the self into the fire of Brahman." },
          { ref: "4.33", sanskrit: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप", text: "The sacrifice of knowledge is superior to all material sacrifices." }
        ]
      },
      {
        id: "ch4-knowledge-fire",
        name: "The Fire of Knowledge",
        desc: "Just as a blazing fire reduces wood to ashes, so does the fire of knowledge burn all karmic reactions to ashes. Nothing in this world purifies like knowledge (4.37).",
        type: "flow",
        data: {
          steps: [
            { label: "Accumulated Karma", desc: "Actions and their impressions across lifetimes" },
            { label: "Fire of Knowledge (Jnana Agni)", desc: "Wisdom burns like fire burns wood", accent: true },
            { label: "Ashes of Ignorance", desc: "All karma reduced to nothing (4.37)" }
          ]
        },
        scriptures: [
          { ref: "4.37", sanskrit: "यथैधांसि समिद्धोऽग्निः", text: "As fire reduces wood to ashes, so does the fire of knowledge burn all karma." }
        ]
      },
      {
        id: "ch4-knowledge-boat",
        name: "The Knowledge Boat",
        desc: "Just as a blazing fire reduces wood to ashes, so does the fire of knowledge burn all karmic reactions to ashes. Nothing in this world purifies like knowledge (4.37). 'Even if you are the worst of all sinners, the boat of knowledge will carry you across the ocean of miseries' (4.36).",
        type: "flow",
        data: {
          steps: [
            { label: "Ocean of Sin", desc: "Even the worst sinner can be saved" },
            { label: "Boat of Wisdom", desc: "Knowledge carries you across (4.36)", accent: true },
            { label: "Shore of Liberation", desc: "Supreme peace through faith and mastery (4.39)" }
          ]
        },
        scriptures: [
          { ref: "4.36", sanskrit: "अपि चेदसि पापेभ्यः", text: "Even if you are the greatest sinner, knowledge will carry you across." },
          { ref: "4.39", sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः", text: "The man of faith, devotion, and mastery gains supreme peace." },
          { ref: "4.42", sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः", text: "Cut asunder the doubts in your heart with the sword of knowledge." }
        ]
      },
      {
        id: "ch4-guru-path",
        name: "Path to Knowledge — Humility, Inquiry, Service",
        desc: "The path to receiving wisdom is threefold: approach the wise with humility, ask sincere questions, and render service. 'The enlightened souls who have realized the truth will impart knowledge to you' (4.34). This is the ancient Guru-Shishya (teacher-student) tradition.",
        type: "flow",
        data: {
          steps: [
            { label: "Humility (Pranipata)", desc: "Approach the wise with reverence" },
            { label: "Inquiry (Pariprasna)", desc: "Ask genuine questions" },
            { label: "Service (Seva)", desc: "Serve the teacher with devotion" },
            { label: "Revelation", desc: "The wise impart knowledge to you (4.34)", accent: true }
          ]
        },
        scriptures: [
          { ref: "4.34", sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया", text: "Approach the wise with humility, inquiry, and service — they will impart knowledge to you." }
        ]
      }
    ]
  },

  // ========== CHAPTER 5 ==========
  {
    chapter: 5,
    title: "Karma Sanyasa Yoga",
    subtitle: "The Yoga of Renunciation",
    models: [
      {
        id: "ch5-renunciation-vs-action",
        name: "Renunciation vs Action",
        desc: "Arjuna asks which is better — renouncing action or performing it? Krishna declares Karma Yoga superior: 'Both lead to liberation, but among the two, Karma Yoga is easier and more effective' (5.2). True renunciation is not abandoning action but abandoning attachment to results.",
        type: "comparison",
        data: {
          left: { label: "Karma Sanyasa", items: ["Renounces all action", "Contemplative mind", "Leads to liberation"] },
          right: { label: "Karma Yoga (Superior)", items: ["Renounces attachment to action", "Practical and accessible", "Leads to liberation faster (5.2)"] }
        },
        scriptures: [
          { ref: "5.2", sanskrit: "संन्यासः कर्मयोगश्च", text: "Both lead to liberation, but Karma Yoga is superior." }
        ]
      },
      {
        id: "ch5-freedom-flow",
        name: "Freedom Through Detachment",
        desc: "Placing all actions in Brahman, the devoted one remains untouched by sin — like a lotus leaf untouched by water. A step-by-step path from action to inner peace (5.7–12).",
        type: "flow",
        data: {
          steps: [
            { label: "Perform Action", desc: "Engage in prescribed duty" },
            { label: "Inner Detachment", desc: "Remain unbound by results" },
            { label: "Purity of Mind", desc: "Intellect becomes purified" },
            { label: "Attain Peace", desc: "United with the Self (5.12)", accent: true }
          ]
        },
        scriptures: [
          { ref: "5.10", sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः", text: "The devoted one, placing all actions in Brahman, remains untouched by sin." },
          { ref: "5.12", sanskrit: "युक्तः कर्मफलं त्यक्त्वा", text: "United with the Self, abandoning fruit, one attains peace." }
        ]
      },
      {
        id: "ch5-nine-gates",
        name: "City of Nine Gates",
        desc: "The embodied soul dwells at ease in the city of nine gates (the body) — two eyes, two ears, two nostrils, mouth, and two lower openings. The wise soul neither acts nor causes others to act, remaining as a detached witness within this bodily city (5.13).",
        type: "grid",
        data: {
          title: "The Bodily City",
          items: ["2 Eyes", "2 Ears", "2 Nostrils", "Mouth", "Navel", "Lower Gate"],
          highlight: "The soul resides happy within, renouncing all doership (5.13)"
        },
        scriptures: [
          { ref: "5.13", sanskrit: "सर्वकर्माणि मनसा", text: "The embodied soul, ruler of nine gates, dwells happily in the city of the body." }
        ]
      },
      {
        id: "ch5-sage-vision",
        name: "Sama-Darshana — Vision of Equality",
        desc: "The sage of equal vision sees the same divine presence in a learned Brahmin, a cow, an elephant, a dog, and even an outcaste. 'Those whose minds are established in equality have already conquered creation' (5.19). This radical equality is the hallmark of true wisdom.",
        type: "grid",
        data: {
          title: "The Wise See Equally",
          items: ["Learned Brahmana", "Cow", "Elephant", "Dog", "Outcast"],
          highlight: "One Brahman in all — the Pandit sees no distinction (5.18)"
        },
        scriptures: [
          { ref: "5.18", sanskrit: "विद्याविनयसंपन्ने", text: "The wise look with equal eye on all beings." },
          { ref: "5.21", sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्", text: "The wise do not rejoice in sense pleasures; they find joy in the Self." }
        ]
      },
      {
        id: "ch5-two-happiness",
        name: "Two Sources of Joy",
        desc: "External pleasures born of sense contact have a beginning and an end — they are wombs of suffering (5.22). True joy comes from within — the one who finds happiness in the Self, whose light is within, attains the peace of Brahman. The wise do not rejoice in fleeting sense pleasures (5.21).",
        type: "comparison",
        data: {
          left: { label: "External Pleasure", items: ["From contact with objects", "Temporary", "Ends in sorrow", "Sense-dependent"] },
          right: { label: "Inner Bliss", items: ["From union with Self", "Everlasting", "Source of true peace", "Self-sustained (5.21)"] }
        },
        scriptures: [
          { ref: "5.21", sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्", text: "The wise do not rejoice in sense pleasures; they rejoice in the Self." },
          { ref: "5.22", sanskrit: "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते", text: "Pleasures born of contact are wombs of sorrow. The wise do not delight in them." }
        ]
      }
    ]
  },

  // ========== CHAPTER 6 ==========
  {
    chapter: 6,
    title: "Dhyana Yoga",
    subtitle: "The Yoga of Meditation",
    models: [
      {
        id: "ch6-yoga-ladder",
        name: "The Yoga Ladder — From Action to Silence",
        desc: "A clear progression: the beginner practices Karma Yoga, the intermediate renounces selfish desires, the advanced attains perfect equanimity. Action is the means; silence is the summit (6.1–4).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "True Yogi (Arudha)", desc: "Established in silence and meditation (6.4)", accent: true },
            { label: "Renounces Desire", desc: "Lets go of selfish rewards (6.2)" },
            { label: "Disciplines Self", desc: "Practices balance and control (6.3)" },
            { label: "Performs Duty (Arurukshu)", desc: "Karma Yoga as the starting point (6.1)" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "6.1", sanskrit: "अनाश्रितः कर्मफलं कार्यं कर्म करोति यः", text: "One who performs action without attachment is a true renunciant and yogi." },
          { ref: "6.3", sanskrit: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते", text: "Action is the means for beginners; silence for the advanced." }
        ]
      },
      {
        id: "ch6-mind-friend-enemy",
        name: "The Mind — Friend or Foe",
        desc: "The mind is the greatest ally for the self-controlled and the worst enemy for the undisciplined. Inner duality that determines whether you rise or fall (6.5–6).",
        type: "comparison",
        data: {
          left: { label: "Mind as Friend", items: ["Controlled and disciplined through practice", "Uplifts the self toward liberation", "Greatest ally on the spiritual path", "Leads to clarity, wisdom, and peace"] },
          right: { label: "Mind as Enemy", items: ["Uncontrolled, restless, and reactive", "Degrades the self into bondage", "Worst adversary — works against you (6.6)", "Leads to confusion, desire, and downfall"] }
        },
        scriptures: [
          { ref: "6.5", sanskrit: "उद्धरेदात्मनात्मानं", text: "Elevate yourself through the Self. Do not degrade yourself." },
          { ref: "6.6", sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः", text: "A controlled mind is your greatest friend, an uncontrolled one your enemy." }
        ]
      },
      {
        id: "ch6-meditation-setup",
        name: "7-Step Meditation Blueprint",
        desc: "Krishna prescribes a complete meditation system: (1) seek solitude, (2) establish a firm seat with kusha grass and cloth, (3) sit with spine erect, (4) fix the gaze on the tip of the nose, (5) control breath and calm the mind, (6) become fearless and celibate, (7) devote the purified mind to the Supreme (6.10–15).",
        type: "flow",
        data: {
          steps: [
            { label: "Solitude", desc: "Retire to a quiet place (6.10)" },
            { label: "Steady Seat", desc: "Firm, clean, and comfortable (6.11)" },
            { label: "Upright Posture", desc: "Body, head, and neck aligned (6.13)" },
            { label: "Fixed Gaze", desc: "Focus on tip of nose (6.13)" },
            { label: "Controlled Breath", desc: "Steady Pranayama" },
            { label: "Calm and Fearless", desc: "Free from agitation (6.14)" },
            { label: "Devoted to Self-Purification", desc: "Mind absorbed in the Supreme", accent: true }
          ]
        },
        scriptures: [
          { ref: "6.10", sanskrit: "योगी युञ्जीत सततमात्मानं रहसि स्थितः", text: "The yogi should retire to a solitary place and meditate with concentrated mind." },
          { ref: "6.14", sanskrit: "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः", text: "Serene, fearless, firm in the vow, with mind controlled — one meditates on Me." }
        ]
      },
      {
        id: "ch6-moderation",
        name: "Path of Moderation — The Middle Way",
        desc: "Yoga is not for the one who eats too much or too little, nor for one who sleeps too much or stays awake too long. 'Yoga destroys all sorrow for one who is moderate in eating, recreation, work, sleep, and wakefulness' (6.17). Balance in all things is the key.",
        type: "grid",
        data: {
          title: "The Middle Path",
          items: ["Moderate Eating", "Moderate Sleep", "Moderate Activity", "Moderate Recreation"],
          highlight: "Yoga is not for the excessive eater or starver, not for the over-sleeper or over-watcher (6.16)"
        },
        scriptures: [
          { ref: "6.16", sanskrit: "नात्यश्नतस्तु योगोऽस्ति", text: "Yoga is for those moderate in eating, sleep, and work." },
          { ref: "6.17", sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु", text: "For one who is moderate in all things, yoga becomes the destroyer of sorrow." }
        ]
      },
      {
        id: "ch6-windless-lamp",
        name: "The Windless Lamp — Stillness of Mind",
        desc: "Like a lamp in a windless place that does not flicker — the ultimate metaphor for the disciplined meditator whose mind is perfectly steady, leading to infinite bliss (6.19–23).",
        type: "flow",
        data: {
          steps: [
            { label: "Restless Mind", desc: "Like a flame flickering in the wind" },
            { label: "Steady Practice", desc: "Gradual control through discipline" },
            { label: "Windless Lamp", desc: "Mind perfectly still in meditation (6.19)", accent: true },
            { label: "Supreme Joy", desc: "Unshakeable bliss of Self-realization (6.21–23)" }
          ]
        },
        scriptures: [
          { ref: "6.19", sanskrit: "यथा दीपो निवातस्थो", text: "Like a lamp in a windless place that does not flicker — such is the disciplined mind." },
          { ref: "6.21", sanskrit: "सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम्", text: "In that state, one experiences infinite bliss perceived by the purified intellect." }
        ]
      },
      {
        id: "ch6-fallen-yogi",
        name: "Path of the Fallen Yogi — No Effort is Lost",
        desc: "Arjuna asks: what happens to one who fails in yoga? Krishna assures that no spiritual effort is ever wasted. Such a person is reborn into a noble or wise family, regains the consciousness of their previous life, and strives with even greater vigor. 'After many births, the perfected yogi attains the Supreme' (6.45).",
        type: "flow",
        data: {
          steps: [
            { label: "Yogi Falls Short", desc: "Fails to achieve perfection in one life" },
            { label: "Reborn in Noble Family", desc: "Takes birth among the pure and prosperous (6.41)" },
            { label: "Continues Practice", desc: "Previous impressions carry forward (6.44)" },
            { label: "Reaches Perfection", desc: "Eventually attains the supreme goal (6.45)", accent: true }
          ]
        },
        scriptures: [
          { ref: "6.40", sanskrit: "पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते", text: "There is no destruction for one who does good — they never come to grief." },
          { ref: "6.45", sanskrit: "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः", text: "The yogi, striving with effort, perfected over many lives, reaches the supreme goal." }
        ]
      },
      {
        id: "ch6-yogi-hierarchy",
        name: "Hierarchy of Yogis",
        desc: "The yogi is superior to the ascetic (tapasvi), the scholar (jnani), and the ritualist (karmi). But among all yogis, 'he who worships Me with full faith, with his mind absorbed in Me — him I consider the most devoted' (6.47). The devotee-yogi stands at the summit.",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Yogi with Devotion to Krishna", desc: "The highest of all (6.47)", accent: true },
            { label: "Yogis (Meditators)", desc: "Disciplined in meditation" },
            { label: "Jnanis (Learned)", desc: "Seekers of knowledge" },
            { label: "Tapasvis (Ascetics)", desc: "Practitioners of austerity" },
            { label: "Karmis (Ritualists)", desc: "Followers of ritual worship" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "6.46", sanskrit: "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः", text: "The yogi is superior to ascetics, scholars, and ritualists." },
          { ref: "6.47", sanskrit: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना", text: "Of all yogis, he who worships Me with full faith is the highest." }
        ]
      }
    ]
  },

  // ========== CHAPTER 7 ==========
  {
    chapter: 7,
    title: "Jnana Vijnana Yoga",
    subtitle: "The Yoga of Knowledge & Wisdom",
    models: [
      {
        id: "ch7-jnana-vijnana",
        name: "Jñāna vs Vijñāna — Two Types of Knowledge",
        desc: "Intellectual knowledge (Jñāna) forms the base; direct experiential realization (Vijñāna) is the peak. Information without realization is incomplete; realization without study is rare (7.2).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Vijnana (Realized Wisdom)", desc: "Experiential, transformative knowing", accent: true },
            { label: "Jnana (Intellectual Knowledge)", desc: "Theoretical, conceptual understanding" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "7.2", sanskrit: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः", text: "I shall teach you knowledge with realization, after which nothing remains to be known." }
        ]
      },
      {
        id: "ch7-eightfold-prakriti",
        name: "Eightfold Material Nature",
        desc: "Krishna's lower material nature (Apara Prakriti) manifests as eight elements: earth (bhumi), water (apah), fire (tejas), air (vayu), ether (akasha), mind (manas), intellect (buddhi), and ego (ahamkara). These eight constitute the entire material realm — from the grossest matter to the subtlest thought (7.4).",
        type: "radial",
        data: {
          center: "Apara Prakriti",
          items: ["Earth (Bhumi)", "Water (Apah)", "Fire (Tejas)", "Air (Vayu)", "Ether (Akasha)", "Mind (Manas)", "Intellect (Buddhi)", "Ego (Ahamkara)"]
        },
        scriptures: [
          { ref: "7.4", sanskrit: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च", text: "Earth, water, fire, air, ether, mind, intellect, and ego — these are My eightfold material energy." }
        ]
      },
      {
        id: "ch7-two-natures",
        name: "Lower & Higher Nature",
        desc: "Beyond the eight material elements (Apara Prakriti) exists Krishna's higher nature (Para Prakriti) — the life force (Jiva Shakti) that sustains all beings. Matter is inert; consciousness animates it. 'Know that all beings arise from these two natures, and I am the origin and dissolution of the entire universe' (7.5–6).",
        type: "comparison",
        data: {
          left: { label: "Apara Prakriti (Lower)", items: ["8 material elements", "Matter-bound", "Perishable"] },
          right: { label: "Para Prakriti (Higher)", items: ["Life force (Jiva)", "Consciousness", "Sustains the universe (7.5)"] }
        },
        scriptures: [
          { ref: "7.5", sanskrit: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्", text: "Beyond this inferior nature is My superior energy — the living beings who sustain the world." }
        ]
      },
      {
        id: "ch7-thread-garland",
        name: "Thread in a Garland — The Hidden Unity",
        desc: "All beings are strung on Krishna like pearls on a thread — He is the hidden unity connecting all existence. 'I am the taste of water, the light of the sun and moon, the sacred syllable Om, the ability in humans, the fragrance of earth' (7.7–8). The Divine is woven into the fabric of everything we experience.",
        type: "radial",
        data: {
          center: "Krishna (The Thread)",
          items: ["Taste in water", "Light of sun and moon", "Om in the Vedas", "Ability in man", "Fragrance of earth", "Brilliance of fire", "Life of all beings"]
        },
        scriptures: [
          { ref: "7.7", sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय", text: "There is nothing higher than Me. All beings are strung on Me like pearls on a thread." },
          { ref: "7.8", sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः", text: "I am the taste of water, the light of the sun and moon, the sacred syllable Om." }
        ]
      },
      {
        id: "ch7-four-devotees",
        name: "Four Types of Devotees",
        desc: "Four noble seekers approach the Divine: Ārta (the distressed), Arthārthī (the seeker of wealth), Jijñāsu (the curious seeker of knowledge), and Jñānī (the realized sage). Of these, the Jñānī is dearest to Krishna (7.16–18).",
        type: "grid",
        data: {
          title: "Four Seekers of God",
          items: ["Arta — The Distressed", "Artharthi — Seeker of Wealth", "Jijnasu — Seeker of Knowledge", "Jnani — The Realized Devotee"],
          highlight: "All are noble, but the Jnani is dearest to Krishna (7.17–18)"
        },
        scriptures: [
          { ref: "7.16", sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन", text: "Four types of pious men worship Me: the distressed, the seeker of wealth, the curious, and the wise." },
          { ref: "7.17", sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते", text: "Of these, the wise devotee who is ever united in love is the dearest to Me." }
        ]
      },
      {
        id: "ch7-four-non-surrender",
        name: "Four Who Don't Surrender",
        desc: "Four types of people fail to seek the Divine: the foolish (mudhah) who lack discrimination, the lowest of mankind (naradhama) who waste their human birth, those whose knowledge is stolen by maya (mayapahrita-jnana), and the demoniac (asura-bhava) who actively oppose God (7.15).",
        type: "grid",
        data: {
          title: "Those Who Turn Away",
          items: ["Mudha — The Ignorant", "Naradhama — The Degraded", "Maya-apahrta — Deluded by Maya", "Asura-bhava — The Demoniac"],
          highlight: "Obstacles: ego, pride, delusion, and false knowledge (7.15)"
        },
        scriptures: [
          { ref: "7.15", sanskrit: "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः", text: "The evil-doers, the ignorant, those whose knowledge is stolen by Maya, and those of demoniac nature do not surrender to Me." }
        ]
      },
      {
        id: "ch7-maya-delusion",
        name: "Delusion by Maya",
        desc: "Deluded by the three qualities of material nature — Sattva, Rajas, and Tamas — the entire world fails to recognize Krishna as the imperishable Supreme. 'This divine illusion (Maya) of Mine, consisting of the three Gunas, is very difficult to overcome. But those who surrender to Me alone cross beyond it' (7.13–14).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Supreme Truth (Krishna)", desc: "Beyond the three gunas", accent: true },
            { label: "Sattva Veil", desc: "Attachment to happiness" },
            { label: "Rajas Veil", desc: "Restless desire" },
            { label: "Tamas Veil", desc: "Ignorance and delusion" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "7.13", sanskrit: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्", text: "Deluded by the three gunas, the world does not know Me who am above them." },
          { ref: "7.14", sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया", text: "This divine Maya of Mine is hard to overcome; but those who surrender to Me cross beyond it." }
        ]
      }
    ]
  },

  // ========== CHAPTER 8 ==========
  {
    chapter: 8,
    title: "Akshara Brahma Yoga",
    subtitle: "The Yoga of the Imperishable",
    models: [
      {
        id: "ch8-sixfold-cosmic",
        name: "Sixfold Cosmic Framework",
        desc: "The six fundamental metaphysical concepts that govern all existence: Brahman (the Absolute), Adhyātma (the Self), Karma (action), Adhibhūta (matter), Adhidaiva (the cosmic gods), and Adhiyajña (the Lord of sacrifice within) (8.3–4).",
        type: "radial",
        data: {
          center: "Brahman",
          items: ["Adhyatma — Individual Self", "Karma — Creative Force", "Adhibhuta — Perishable Matter", "Adhidaiva — Cosmic Intelligence", "Adhiyajna — The Lord Within"]
        },
        scriptures: [
          { ref: "8.3", sanskrit: "अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते", text: "Brahman is the imperishable Supreme. Adhyatma is the individual self. Karma is the creative force." },
          { ref: "8.4", sanskrit: "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम्", text: "Adhibhuta is the perishable nature. Adhidaiva is the cosmic person. Adhiyajna is Myself." }
        ]
      },
      {
        id: "ch8-death-consciousness",
        name: "Consciousness at Death",
        desc: "Whatever one remembers at the time of death, that state one attains without fail. 'Whoever at the end leaves the body remembering Me alone, attains My nature — of this there is no doubt' (8.5). Therefore Krishna urges: remember Me at all times, and fight (8.7). A lifetime of practice determines that final thought.",
        type: "flow",
        data: {
          steps: [
            { label: "Life of Practice", desc: "What you cultivate becomes your nature" },
            { label: "Moment of Death", desc: "The mind's focus at the final moment" },
            { label: "Remembering Krishna", desc: "Whoever remembers Me attains My nature (8.5)", accent: true },
            { label: "Remembering Other", desc: "One becomes whatever one remembers (8.6)" }
          ]
        },
        scriptures: [
          { ref: "8.5", sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्", text: "Whoever remembers Me alone at the end attains My nature." },
          { ref: "8.6", sanskrit: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्", text: "Whatever state one remembers at death, that state one attains." }
        ]
      },
      {
        id: "ch8-two-paths-afterlife",
        name: "Two Paths After Death",
        desc: "Two cosmic paths await the departing soul: the Shukla Gati (path of light) — through fire, light, day, bright fortnight — leads to Brahman and no return. The Krishna Gati (path of darkness) — through smoke, night, dark fortnight — leads to rebirth. 'Knowing these two paths, no yogi is deluded' (8.24–26).",
        type: "comparison",
        data: {
          left: { label: "Shukla Gati (Path of Light)", items: ["For yogis who know the Supreme", "Leads to no return (liberation)", "Depart during day, bright half", "Merge into Brahman"] },
          right: { label: "Krishna Gati (Path of Smoke)", items: ["For worldly doers", "Leads to rebirth", "Depart at night, dark half", "Return to mortal world"] }
        },
        scriptures: [
          { ref: "8.24", sanskrit: "अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम्", text: "The path of light leads to no return. The wise who know Brahman traverse it." },
          { ref: "8.26", sanskrit: "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते", text: "The light and dark paths are considered eternal. One leads to liberation, the other to return." }
        ]
      },
      {
        id: "ch8-yogic-exit",
        name: "Yogic Death Process",
        desc: "The yogic method of conscious departure: withdraw all senses, fix the mind in the heart, raise the life-breath to the crown of the head, establish in yoga, utter the sacred syllable Om, and depart thinking of the Supreme. 'Such a yogi attains the highest goal' (8.12–13).",
        type: "flow",
        data: {
          steps: [
            { label: "Sense Withdrawal", desc: "Close all gates of the body" },
            { label: "Mind Fixed in Heart", desc: "Concentrate within" },
            { label: "Life-breath to Crown", desc: "Raise prana to the head (8.12)" },
            { label: "Chanting OM", desc: "Established in yogic concentration (8.13)" },
            { label: "Soul Departs to Supreme", desc: "Attains the highest goal", accent: true }
          ]
        },
        scriptures: [
          { ref: "8.12", sanskrit: "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च", text: "Closing all the gates of the body, fixing the mind in the heart..." },
          { ref: "8.13", sanskrit: "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्", text: "Uttering the single syllable OM, remembering Me — one attains the supreme goal." }
        ]
      },
      {
        id: "ch8-cosmic-time",
        name: "Cosmic Time Cycles",
        desc: "One day of Brahma equals 1,000 yugas (4.32 billion years). At dawn, all beings manifest from the unmanifest; at nightfall, they dissolve back. This cosmic rhythm of creation and dissolution continues endlessly — 'But beyond this unmanifest, there is another eternal unmanifest existence that does not perish' (8.17–20).",
        type: "comparison",
        data: {
          left: { label: "Day of Brahma", items: ["4.32 billion human years", "All beings manifest", "Creation and activity"] },
          right: { label: "Night of Brahma", items: ["4.32 billion human years", "All beings dissolve", "Rest and dissolution"] }
        },
        scriptures: [
          { ref: "8.17", sanskrit: "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः", text: "One day of Brahma is a thousand ages. His night is equally long." },
          { ref: "8.18", sanskrit: "अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे", text: "At dawn, all beings manifest. At nightfall, they dissolve into the unmanifest." }
        ]
      }
    ]
  },

  // ========== CHAPTER 9 ==========
  {
    chapter: 9,
    title: "Raja Vidya Raja Guhya Yoga",
    subtitle: "The Yoga of Royal Knowledge",
    models: [
      {
        id: "ch9-supreme-knowledge",
        name: "Crown Jewel Knowledge",
        desc: "Krishna calls this teaching the king of knowledge (Raja Vidya), the king of secrets (Raja Guhya), and the supreme purifier — directly perceivable, righteous, easy to practice, and imperishable. 'This is the most confidential knowledge, knowing which you shall be freed from the miseries of material existence' (9.2).",
        type: "radial",
        data: {
          center: "Liberation through Bhakti",
          items: ["Raja Vidya — King of Knowledge", "Raja Guhya — King of Secrets", "Pavitram — The Most Sacred"]
        },
        scriptures: [
          { ref: "9.2", sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्", text: "This is the king of knowledge, the king of secrets — most sacred, directly perceivable, righteous, and eternal." }
        ]
      },
      {
        id: "ch9-cosmic-cycle",
        name: "Cosmic Manifestation Cycle",
        desc: "At the end of each cosmic cycle, all beings merge back into Krishna's nature. By His will alone, creation manifests again and again. 'Under My direction, material nature produces all moving and non-moving beings. By this cause, the cosmic manifestation revolves' (9.10). Yet He remains untouched, like the sky remains unaffected by the wind (9.9).",
        type: "cycle",
        data: {
          center: "Krishna's Will",
          steps: ["Creation Begins", "Beings Manifest", "World Sustained", "Cycle Ends", "All Return to Unmanifest", "Rest Period"]
        },
        scriptures: [
          { ref: "9.7", sanskrit: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्", text: "At the end of a cycle, all return to My unmanifest nature." },
          { ref: "9.8", sanskrit: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः", text: "By My will, I create the entire cosmos again and again." },
          { ref: "9.10", sanskrit: "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम्", text: "Under My direction, Prakriti produces all moving and non-moving beings." }
        ]
      },
      {
        id: "ch9-bhakti-simple",
        name: "Bhakti — Simple Acts, Supreme Result",
        desc: "If one offers Me a leaf, a flower, a fruit, or water with pure love and devotion — I accept it. The qualification is not perfection, but love. This is the great equalizer of all spiritual paths (9.26–28).",
        type: "flow",
        data: {
          steps: [
            { label: "Offer with Love", desc: "A leaf, flower, fruit, or water (9.26)" },
            { label: "Krishna Accepts", desc: "Offered with devotion, I receive it" },
            { label: "Renounce Fruits", desc: "Dedicate all actions to Me (9.27)" },
            { label: "Become Free", desc: "Liberated from bondage of karma (9.28)", accent: true }
          ]
        },
        scriptures: [
          { ref: "9.26", sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति", text: "Whoever offers a leaf, flower, fruit, or water with devotion — I accept it." },
          { ref: "9.27", sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्", text: "Whatever you do, eat, offer, give, or practice — do it as an offering to Me." }
        ]
      },
      {
        id: "ch9-inclusivity",
        name: "Circle of Grace — No One is Disqualified",
        desc: "Even if the most sinful person worships Krishna with exclusive devotion, that person is to be considered saintly — for the resolve is right. 'Quickly that person becomes righteous and attains lasting peace. Declare boldly that My devotee never perishes' (9.30–31). No one is excluded from divine grace.",
        type: "grid",
        data: {
          title: "Bhakti is for Everyone",
          items: ["Women", "Merchants (Vaishyas)", "Workers (Shudras)", "Those of sinful birth", "The greatest sinner who turns to Me"],
          highlight: "Even the worst sinner, devoted with love, is quickly transformed and attains eternal peace (9.30–31)"
        },
        scriptures: [
          { ref: "9.30", sanskrit: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्", text: "Even if the most sinful worships Me with exclusive devotion, he is to be considered saintly." },
          { ref: "9.31", sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति", text: "Such a person quickly becomes righteous and attains lasting peace." },
          { ref: "9.32", sanskrit: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः", text: "All who take refuge in Me attain the supreme destination." }
        ]
      },
      {
        id: "ch9-surrender",
        name: "4-Part Surrender Formula",
        desc: "Krishna's direct instruction for attaining Him: fix your mind on Me, be devoted to Me, worship Me, and bow down to Me. 'Engaging your mind and intellect in Me, you shall surely come to Me — this is My promise to you, for you are dear to Me' (9.34). The simplest and most direct path.",
        type: "flow",
        data: {
          steps: [
            { label: "Fix Your Mind on Me", desc: "Constant remembrance" },
            { label: "Be Devoted to Me", desc: "Whole-hearted love" },
            { label: "Worship Me", desc: "Through action and ritual" },
            { label: "Bow Down to Me", desc: "Complete surrender", accent: true }
          ]
        },
        scriptures: [
          { ref: "9.34", sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु", text: "Fix your mind on Me, be devoted to Me, worship Me, bow to Me — you shall come to Me." }
        ]
      }
    ]
  },

  // ========== CHAPTER 10 ==========
  {
    chapter: 10,
    title: "Vibhuti Yoga",
    subtitle: "The Yoga of Divine Glories",
    models: [
      {
        id: "ch10-vibhuti-mandala",
        name: "Divine Manifestations",
        desc: "Krishna declares His vibhutis — divine glories manifest in the excellence of all things: among mountains, He is Meru; among water bodies, the ocean; among weapons, the thunderbolt; among sages, Bhrigu; among sounds, Om. 'Whatever is glorious, prosperous, or powerful — know it to be a spark of My splendor' (10.41). He pervades the universe with a single fragment of Himself (10.42).",
        type: "radial",
        data: {
          center: "Krishna — Source of All",
          items: ["Vyasa (Wisdom, 10.37)", "Om (Speech, 10.25)", "Rama (Rulers, 10.31)", "Meru (Mountains, 10.23)", "Ganga (Rivers, 10.31)", "Lion (Animals, 10.30)", "Garuda (Birds, 10.30)", "Arjuna (Warriors, 10.37)"]
        },
        scriptures: [
          { ref: "10.41", sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा", text: "Whatever is glorious, prosperous, or powerful — know it to be a spark of My splendor." },
          { ref: "10.42", sanskrit: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन", text: "I pervade the entire universe with just a fragment of Myself." }
        ]
      },
      {
        id: "ch10-devotion-flow",
        name: "Devotion to Realization",
        desc: "Those who constantly worship Krishna with loving devotion — their minds absorbed in Him, their lives surrendered — to them Krishna grants Buddhi Yoga (the yoga of understanding) by which they come to Him. 'Out of compassion for them, I, dwelling in their hearts, destroy the darkness born of ignorance with the shining lamp of knowledge' (10.10–11).",
        type: "flow",
        data: {
          steps: [
            { label: "Constant Devotion", desc: "Chanting, glorifying, delighting in Krishna (10.9)" },
            { label: "Buddhi Yoga Given", desc: "Krishna bestows the yoga of intellect (10.10)" },
            { label: "Darkness Destroyed", desc: "Lamp of knowledge dispels ignorance (10.11)", accent: true }
          ]
        },
        scriptures: [
          { ref: "10.9", sanskrit: "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम्", text: "With minds fixed on Me, lives devoted to Me, they enlighten one another." },
          { ref: "10.10", sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्", text: "To those ever devoted, I give the understanding by which they come to Me." },
          { ref: "10.11", sanskrit: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः", text: "Out of compassion, I destroy the darkness born of ignorance with the shining lamp of knowledge." }
        ]
      },
      {
        id: "ch10-spark-model",
        name: "Spark of Splendor",
        desc: "All greatness in this world — every glorious, beautiful, or mighty being — is but a spark of Krishna's infinite splendor. 'There is no being, moving or non-moving, that can exist without Me' (10.39). He sustains the entire universe with merely a fragment of His divine energy (10.42). This transforms how we see excellence everywhere.",
        type: "flow",
        data: {
          steps: [
            { label: "Infinite Source (Krishna)", desc: "The Supreme, beginningless Lord", accent: true },
            { label: "A Fragment Pervades", desc: "Just a spark of His infinite splendor (10.42)" },
            { label: "All Greatness", desc: "Whatever is glorious in the world is a manifestation of His power (10.41)" }
          ]
        },
        scriptures: [
          { ref: "10.39", sanskrit: "यच्चापि सर्वभूतानां बीजं तदहमर्जुन", text: "There is no being — moving or non-moving — that can exist without Me." },
          { ref: "10.41", sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा", text: "Whatever is glorious, prosperous, or powerful — know it as a spark of My splendor." }
        ]
      }
    ]
  },

  // ========== CHAPTER 11 ==========
  {
    chapter: 11,
    title: "Vishwarupa Darshana Yoga",
    subtitle: "Vision of the Universal Form",
    models: [
      {
        id: "ch11-three-levels",
        name: "Three Levels of Divine Perception",
        desc: "Arjuna receives divine eyes (Divya Chakshu) to see beyond human limitation. The progression: human form → four-armed divine form → infinite cosmic Vishwarūpa. Each level demands greater spiritual capacity (11.3–8).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Divine Vision (Divya Chakshu)", desc: "Requires spiritual eye to perceive (11.8)", accent: true },
            { label: "Cosmic Form (Vishwarupa)", desc: "Infinite, majestic, all-encompassing" },
            { label: "Human Form (Krishna)", desc: "Familiar charioteer — limited perception" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "11.8", sanskrit: "न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा", text: "But you cannot see Me with your own eyes. I give you divine vision." },
          { ref: "11.13", sanskrit: "तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा", text: "Arjuna saw the entire universe, with its infinite divisions, in the body of the God of Gods." }
        ]
      },
      {
        id: "ch11-arjuna-arc",
        name: "Arjuna's Emotional Journey",
        desc: "Upon seeing the Universal Form, Arjuna undergoes a dramatic emotional arc: initial curiosity and request (11.3–4), wonder at divine sight (11.14), awe and praise (11.15–22), terror at seeing destruction (11.23–30), trembling and seeking forgiveness (11.35–44), and finally pleading for Krishna's gentle form again (11.45–46).",
        type: "flow",
        data: {
          steps: [
            { label: "Awe & Amazement", desc: "Hair standing on end (11.14–15)" },
            { label: "Fear & Trembling", desc: "Seeing the terrible aspect (11.23–24)" },
            { label: "Collapse & Surrender", desc: "Prostrating before the cosmic form (11.35–36)" },
            { label: "Apology & Devotion", desc: "Seeking forgiveness for past familiarity (11.41–42)" },
            { label: "Request for Mercy", desc: "Please show me your gentle form again (11.45–46)", accent: true }
          ]
        },
        scriptures: [
          { ref: "11.14", sanskrit: "ततः स विस्मयाविष्टो हृष्टरोमा धनञ्जयः", text: "Filled with wonder, hair standing on end, Arjuna bowed and spoke with folded hands." },
          { ref: "11.32", sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः", text: "I am Time, the great destroyer of the worlds." }
        ]
      },
      {
        id: "ch11-kala",
        name: "Kāla — Time the Destroyer",
        desc: "The most terrifying revelation: 'I am Time, the great destroyer of the worlds.' Even without Arjuna's participation, all warriors are already destined to perish. He is merely the instrument (11.32–34).",
        type: "flow",
        data: {
          steps: [
            { label: "All Beings", desc: "Warriors, kings, armies, worlds" },
            { label: "Time (Kala)", desc: "I am Time, the great destroyer (11.32)", accent: true },
            { label: "All Consumed", desc: "Even without Arjuna's action, they are already destroyed" }
          ]
        },
        scriptures: [
          { ref: "11.32", sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः", text: "I am Time, the great destroyer of the worlds. Even without your participation, all these warriors will cease to exist." },
          { ref: "11.33", sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्", text: "Therefore arise and win glory. Conquer your enemies. They are already slain by Me." }
        ]
      },
      {
        id: "ch11-bhakti-access",
        name: "Bhakti Unlocks the Infinite",
        desc: "After revealing the terrifying cosmic form, Krishna declares that this vision cannot be attained through Vedas, austerity, charity, or ritual. 'Only by undivided devotion can I be known, seen in this form, and truly entered into' (11.54). Bhakti alone is the key that unlocks the Infinite.",
        type: "flow",
        data: {
          steps: [
            { label: "Not by Vedas or Austerity", desc: "Cannot be seen through ritual alone" },
            { label: "Not by Charity or Study", desc: "Intellectual effort is insufficient" },
            { label: "Only by Undivided Devotion", desc: "Exclusive bhakti reveals the truth (11.54)", accent: true }
          ]
        },
        scriptures: [
          { ref: "11.54", sanskrit: "भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन", text: "Only by undivided devotion can I be seen in this form, truly known, and entered into." }
        ]
      }
    ]
  },

  // ========== CHAPTER 12 ==========
  {
    chapter: 12,
    title: "Bhakti Yoga",
    subtitle: "The Yoga of Devotion",
    models: [
      {
        id: "ch12-form-vs-formless",
        name: "Form vs Formless — Two Paths of Worship",
        desc: "Arjuna asks the ultimate question: which devotee is better — one who worships Your personal form, or one who meditates on the formless Absolute? Krishna clearly favors the devotee of His form, as the formless path is exceedingly difficult for embodied beings (12.1–5).",
        type: "comparison",
        data: {
          left: { label: "Saguna (With Form)", items: ["Worship Krishna directly", "Easier and more accessible (12.2)", "Personal connection", "Recommended path"] },
          right: { label: "Nirguna (Formless)", items: ["Meditate on unmanifest Brahman", "Difficult, requires mastery (12.5)", "Abstract and impersonal", "Also leads to liberation"] }
        },
        scriptures: [
          { ref: "12.2", sanskrit: "मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते", text: "Those who fix their minds on Me with steadfast devotion are considered the best in yoga." },
          { ref: "12.5", sanskrit: "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्", text: "The path of the unmanifest is difficult for embodied beings." }
        ]
      },
      {
        id: "ch12-devotion-ladder",
        name: "Devotion Ladder",
        desc: "If you cannot fix your mind on Krishna steadily, practice regular devotion (abhyasa yoga). If that's too hard, perform actions for His sake. If even that is difficult, simply renounce the fruits of all actions. 'Knowledge is better than practice, meditation is better than knowledge, and renunciation of fruits is better than meditation — for peace immediately follows renunciation' (12.12).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Fix Mind on Krishna (12.8)", desc: "Constant absorption in the Divine", accent: true },
            { label: "Practice Regular Devotion (12.9)", desc: "Sadhana if you can't fix the mind" },
            { label: "Perform Actions for Krishna (12.10)", desc: "Karma Yoga as service" },
            { label: "Renounce Results of Actions (12.11)", desc: "Self-controlled surrender of outcomes" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "12.8", sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय", text: "Fix your mind on Me alone; let your intellect dwell in Me." },
          { ref: "12.11", sanskrit: "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः", text: "If unable even to do this, then renounce the fruits of all action with self-control." },
          { ref: "12.12", sanskrit: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते", text: "Knowledge is better than practice; meditation better than knowledge; renunciation of fruits — from that, peace immediately follows." }
        ]
      },
      {
        id: "ch12-dear-qualities",
        name: "8 Qualities Dear to Krishna",
        desc: "A complete portrait of the ideal devotee — free from hatred, compassionate to all, without possessiveness, balanced in joy and sorrow, forgiving, content, self-controlled, and firm in devotion. These are the qualities that make one exceedingly dear to the Lord (12.13–20).",
        type: "radial",
        data: {
          center: "Dear to Krishna",
          items: ["Free from hatred", "Friendly & compassionate", "Without ego or possessiveness", "Equal in pain & pleasure", "Forgiving & content", "Self-controlled & devoted", "Not agitating the world", "Steady in joy & sorrow"]
        },
        scriptures: [
          { ref: "12.13", sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च", text: "One who is free from hatred, friendly and compassionate to all — that devotee is dear to Me." },
          { ref: "12.15", sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः", text: "One who does not agitate the world and is not agitated by it — that one is dear to Me." },
          { ref: "12.20", sanskrit: "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते", text: "Those who follow this immortal dharma with faith, making Me the supreme goal, are exceedingly dear to Me." }
        ]
      }
    ]
  },

  // ========== CHAPTER 13 ==========
  {
    chapter: 13,
    title: "Kshetra Kshetrajna Vibhaga Yoga",
    subtitle: "The Field & the Knower",
    models: [
      {
        id: "ch13-field-knower",
        name: "Kshetra vs Kshetrajña — Field and Knower",
        desc: "The fundamental metaphysical duality: the Field (Kshetra) is the body-mind-senses complex; the Knower of the Field (Kshetrajña) is the conscious Self that observes it all. Knowing both is true knowledge (13.1–3).",
        type: "comparison",
        data: {
          left: { label: "Kshetra (The Field)", items: ["Body, senses, mind", "The perceived", "Temporary, changing", "Made of Prakriti (matter)"] },
          right: { label: "Kshetrajna (The Knower)", items: ["Soul (Atman)", "The perceiver", "Eternal, unchanging", "Pure consciousness (Purusha)"] }
        },
        scriptures: [
          { ref: "13.1", sanskrit: "इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते", text: "This body is called the field. One who knows it is the knower of the field." },
          { ref: "13.3", sanskrit: "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत", text: "Know Me as the Knower of the Field in all fields." }
        ]
      },
      {
        id: "ch13-jnana-qualities",
        name: "Qualities of True Knowledge",
        desc: "Krishna defines true knowledge (Jnana) not as intellectual learning but as 20+ inner qualities: humility, non-violence, forgiveness, uprightness, service to the teacher, purity, steadfastness, self-control, detachment from sense objects, absence of ego, perception of the evil in birth/death/old age, non-attachment, even-mindedness, and unswerving devotion (13.7–11).",
        type: "radial",
        data: {
          center: "Jnana (True Knowledge)",
          items: ["Humility", "Non-violence", "Forgiveness", "Service to teacher", "Detachment", "Seeing impermanence", "Steadfastness", "Self-control", "Desirelessness", "Realizing the Self"]
        },
        scriptures: [
          { ref: "13.7", sanskrit: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्", text: "Humility, non-violence, forgiveness, uprightness, service to the guru — these are declared as knowledge." },
          { ref: "13.11", sanskrit: "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम्", text: "Unwavering devotion to Me — this is declared as knowledge. All else is ignorance." }
        ]
      },
      {
        id: "ch13-three-observer",
        name: "Three-Level Observer",
        desc: "Reality operates at three levels: Kshetra (the field — body and mind), Kshetrajña (the knower — individual soul witnessing from within), and Paramatma (the Supreme Witness — God present in all beings). 'He who sees the Supreme Lord dwelling equally in all beings, the imperishable within the perishable — truly sees' (13.27).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Paramatma (Supreme Witness)", desc: "Universal self dwelling in all (13.23)", accent: true },
            { label: "Kshetrajna (Individual Soul)", desc: "Observer within each body" },
            { label: "Kshetra (Body-Mind)", desc: "The field being observed" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "13.23", sanskrit: "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः", text: "The Supreme Lord in the body is called the witness, the guide, the sustainer." },
          { ref: "13.27", sanskrit: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्", text: "One who sees the Supreme Lord equally in all beings — truly sees." }
        ]
      },
      {
        id: "ch13-purusha-prakriti",
        name: "Purusha & Prakriti",
        desc: "All experience arises from the interaction of two cosmic principles: Purusha (consciousness, the witnessing Self) and Prakriti (material nature, the active principle). Nature produces the body and the Gunas; the soul experiences pleasure and pain. 'The cause of the soul's embodiment in good and evil wombs is its attachment to the Gunas of nature' (13.21).",
        type: "comparison",
        data: {
          left: { label: "Prakriti (Nature)", items: ["Source of body & gunas", "Drives action", "Bound by karma"] },
          right: { label: "Purusha (Conscious Self)", items: ["Witness, enjoyer", "Appears to experience", "Liberated by knowledge (13.23)"] }
        },
        scriptures: [
          { ref: "13.19", sanskrit: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि", text: "Know that both Prakriti and Purusha are beginningless." },
          { ref: "13.29", sanskrit: "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः", text: "One who sees that all actions are performed by Prakriti alone, and the Self is non-doer — truly sees." }
        ]
      }
    ]
  },

  // ========== CHAPTER 14 ==========
  {
    chapter: 14,
    title: "Gunatraya Vibhaga Yoga",
    subtitle: "The Three Qualities of Nature",
    models: [
      {
        id: "ch14-three-gunas",
        name: "Three Guṇas — The Binding Qualities of Nature",
        desc: "Every being is bound by these three forces of material nature. Sattva binds through attachment to happiness, Rajas through restless desire, and Tamas through ignorance and inertia. All three must be transcended (14.5–9).",
        type: "grid",
        data: {
          title: "Three Gunas of Nature",
          items: ["Sattva — Purity, clarity, knowledge; binds by attachment to happiness (14.6)", "Rajas — Passion, desire, restlessness; binds through attachment to action (14.7)", "Tamas — Ignorance, laziness, delusion; binds through negligence and inertia (14.8)"],
          highlight: "All three bind the soul to the body. Liberation comes from transcending them all."
        },
        scriptures: [
          { ref: "14.5", sanskrit: "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः", text: "Sattva, Rajas, and Tamas — born of Prakriti — bind the imperishable soul to the body." },
          { ref: "14.10", sanskrit: "रजस्तमश्चाभिभूय सत्त्वं भवति भारत", text: "Sometimes Sattva dominates, sometimes Rajas, sometimes Tamas — they compete for supremacy." }
        ]
      },
      {
        id: "ch14-guna-effects",
        name: "Guna Effects & Rebirth",
        desc: "Each Guna produces distinct signs and determines rebirth destiny. Sattva manifests as illumination and knowledge — one dies in sattva and reaches higher realms. Rajas manifests as greed and restless activity — dying in rajas brings rebirth among those attached to action. Tamas manifests as darkness and delusion — dying in tamas leads to birth in ignorant wombs (14.11–15).",
        type: "comparison",
        data: {
          left: { label: "When Dominant", items: ["Sattva: Light, clarity, knowledge", "Rajas: Greed, ambition, unrest", "Tamas: Darkness, confusion, delusion"] },
          right: { label: "Rebirth Outcome", items: ["Sattva: Higher realms / wise beings", "Rajas: Earthly rebirth among active", "Tamas: Lower realms / deluded beings"] }
        },
        scriptures: [
          { ref: "14.14", sanskrit: "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत्", text: "Dying in Sattva, one attains the pure realms of the knowers of truth." },
          { ref: "14.15", sanskrit: "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते", text: "Dying in Rajas, one is born among those attached to action. Dying in Tamas, in deluded wombs." },
          { ref: "14.16", sanskrit: "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम्", text: "The fruit of Sattva is purity. Of Rajas, pain. Of Tamas, ignorance." }
        ]
      },
      {
        id: "ch14-gunateeta",
        name: "The Guṇātīta — Beyond the Three Forces",
        desc: "One who transcends the three Gunas sits apart as a witness, undisturbed by the play of nature. Neither elated by Sattva, nor agitated by Rajas, nor dulled by Tamas — such a person treats gold and stone alike, remains steady in praise and blame, and is 'established in the Self, regarding equally pleasure and pain, a clod, a stone, and gold' (14.22–25).",
        type: "radial",
        data: {
          center: "Transcended (Gunateeta)",
          items: ["Detached from guna-rise and fall", "Not elated or depressed", "Equal in pleasure and pain", "Same toward friend and foe", "Self-reliant", "Firm in devotion (14.26)"]
        },
        scriptures: [
          { ref: "14.22", sanskrit: "प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव", text: "One who does not hate illumination, activity, or delusion when present, nor long for them when absent." },
          { ref: "14.26", sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते", text: "One who serves Me with unwavering devotion transcends the gunas and becomes fit for Brahman." }
        ]
      },
      {
        id: "ch14-liberation-ladder",
        name: "Guna Liberation Ladder",
        desc: "The path to ultimate freedom: unwavering devotion to Krishna (14.26) → transcendence of all three Gunas (becoming Gunatita) → realization of Brahman, which is immortal, imperishable, the eternal dharma, and absolute bliss. 'I am the abode of Brahman, the immortal and imperishable, of eternal dharma and of absolute bliss' (14.27).",
        type: "flow",
        data: {
          steps: [
            { label: "Devotion to Krishna", desc: "Unwavering exclusive bhakti (14.26)" },
            { label: "Transcend the Gunas", desc: "Rise above Sattva, Rajas, Tamas" },
            { label: "Attain Brahman", desc: "Eternal, beyond sorrow (14.27)", accent: true }
          ]
        },
        scriptures: [
          { ref: "14.26", sanskrit: "मां च योऽव्यभिचारेण भक्तियोगेन सेवते", text: "One who serves Me with unwavering devotion transcends the three gunas." },
          { ref: "14.27", sanskrit: "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च", text: "For I am the basis of Brahman — the immortal, the imperishable, of eternal dharma and absolute bliss." }
        ]
      }
    ]
  },

  // ========== CHAPTER 15 ==========
  {
    chapter: 15,
    title: "Purushottama Yoga",
    subtitle: "The Yoga of the Supreme Person",
    models: [
      {
        id: "ch15-ashvattha",
        name: "The Inverted Ashvattha Tree",
        desc: "The most powerful metaphor in the Gita — a cosmic tree with roots above (the Supreme) and branches below (the material world). Its leaves are the Vedas. One must cut this tree with the axe of non-attachment to find the eternal refuge (15.1–4).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Roots Above (Brahman)", desc: "Origin in the Supreme", accent: true },
            { label: "Branches Below (Gunas)", desc: "Spreading into material world" },
            { label: "Leaves (Vedas)", desc: "Knowledge nourishing the tree" },
            { label: "Entangled Beings", desc: "Bound by karma and desire" },
            { label: "Axe of Detachment", desc: "Cut the tree to attain liberation (15.3–4)" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "15.1", sanskrit: "ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्", text: "There is an eternal Ashvattha tree with roots above and branches below. Its leaves are the Vedas." },
          { ref: "15.3", sanskrit: "न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च सम्प्रतिष्ठा", text: "Its form cannot be perceived here. Cut this tree with the strong axe of detachment." }
        ]
      },
      {
        id: "ch15-jivatma-spark",
        name: "Soul as Spark of Divinity",
        desc: "An eternal fragment of Myself becomes the individual soul. Like sparks from a great fire, each soul retains divine luminosity yet becomes veiled by matter, struggling with the six senses including the mind (15.7).",
        type: "flow",
        data: {
          steps: [
            { label: "Supreme (Krishna)", desc: "The infinite source", accent: true },
            { label: "Eternal Fragment", desc: "A spark emanates from the Divine (15.7)" },
            { label: "Enters the Body", desc: "Attracts mind and senses" },
            { label: "Carries Impressions", desc: "Like wind carries fragrance (15.8)" }
          ]
        },
        scriptures: [
          { ref: "15.7", sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः", text: "An eternal fragment of Myself becomes the individual soul in the living world." },
          { ref: "15.8", sanskrit: "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः", text: "As the wind carries fragrance from flowers, the soul carries its impressions from body to body." }
        ]
      },
      {
        id: "ch15-three-purushas",
        name: "Three Purushas",
        desc: "Reality consists of three levels of being: Kshara Purusha — the perishable material world and all changing entities within it; Akshara Purusha — the imperishable individual soul that is eternal and unchanging; and Purushottama — Krishna, the Supreme Person who transcends both, sustaining the entire cosmos. 'Because I transcend the perishable and am beyond even the imperishable, I am celebrated as Purushottama' (15.17–18).",
        type: "hierarchy",
        data: {
          layers: [
            { label: "Purushottama (Supreme Person)", desc: "Krishna — beyond both, transcendent (15.17)", accent: true },
            { label: "Akshara (Imperishable Soul)", desc: "The eternal, unchanging individual self" },
            { label: "Kshara (Perishable Beings)", desc: "Material world — all changing entities" }
          ],
          direction: "top-down"
        },
        scriptures: [
          { ref: "15.16", sanskrit: "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च", text: "There are two classes of beings: the perishable and the imperishable." },
          { ref: "15.17", sanskrit: "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः", text: "But the Supreme Person is beyond both — the Purushottama who sustains all." },
          { ref: "15.19", sanskrit: "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्", text: "One who knows Me as Purushottama, knowing all, worships Me with whole being." }
        ]
      },
      {
        id: "ch15-inner-sustainer",
        name: "Krishna as Inner Power",
        desc: "Krishna reveals Himself as the sustaining power behind all natural functions: 'I am the light of the sun and moon' (15.12), 'I enter the earth and sustain all beings with My energy' (15.13), 'Becoming the fire of digestion, I digest the four kinds of food' (15.14), 'I am seated in the hearts of all — from Me come memory, knowledge, and forgetfulness' (15.15).",
        type: "radial",
        data: {
          center: "Krishna Within",
          items: ["Light of sun and moon (15.12)", "Fire of digestion (15.14)", "Memory and knowledge (15.15)", "Forgetfulness (15.15)", "Source of all Vedas", "Author of Vedanta"]
        },
        scriptures: [
          { ref: "15.12", sanskrit: "यदादित्यगतं तेजो जगद्भासयतेऽखिलम्", text: "The light of the sun that illumines the world — know it as Mine." },
          { ref: "15.14", sanskrit: "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः", text: "Becoming the fire of digestion, I digest the four kinds of food." },
          { ref: "15.15", sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च", text: "I am seated in everyone's heart. From Me come memory, knowledge, and their loss." }
        ]
      }
    ]
  },

  // ========== CHAPTER 16 ==========
  {
    chapter: 16,
    title: "Daivasura Sampad Vibhaga Yoga",
    subtitle: "The Divine & Demoniac Natures",
    models: [
      {
        id: "ch16-divine-vs-demoniac",
        name: "Daivī vs Āsurī — The Psychological Profile",
        desc: "A strikingly contemporary framework. Krishna maps the complete psychological profile of divine vs demoniac natures — useful for self-assessment, leadership ethics, and cultural diagnosis (16.1–4).",
        type: "comparison",
        data: {
          left: { label: "Daivi (Divine Nature)", items: ["Fearlessness", "Purity of heart", "Self-control & non-violence", "Compassion & humility", "Steadfastness in knowledge"] },
          right: { label: "Asuri (Demoniac Nature)", items: ["Hypocrisy (dambha)", "Arrogance (darpa)", "Anger (krodha)", "Harshness & ignorance", "Delusion & overconfidence"] }
        },
        scriptures: [
          { ref: "16.1", sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः", text: "Fearlessness, purity, steadfastness in knowledge — these belong to the divine nature." },
          { ref: "16.4", sanskrit: "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च", text: "Hypocrisy, arrogance, anger, harshness, and ignorance belong to the demoniac nature." },
          { ref: "16.5", sanskrit: "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता", text: "The divine nature leads to liberation; the demoniac to bondage." }
        ]
      },
      {
        id: "ch16-asura-spiral",
        name: "Cycle of Self-Destruction",
        desc: "The demoniac person spirals through a vicious cycle: bound by hundreds of desires, driven by lust and anger, they amass wealth by unjust means. They think 'I have gained this, I shall gain more. I have slain that enemy, I shall slay others. I am the lord, I am the enjoyer.' Deluded by ignorance, they fall into foul hells (16.10–18).",
        type: "flow",
        data: {
          steps: [
            { label: "Endless Desires", desc: "Insatiable cravings" },
            { label: "Greed & Pride", desc: "I am the doer, I am the enjoyer" },
            { label: "Harms Others", desc: "For personal gain and power" },
            { label: "Deeper Delusion", desc: "Rejects truth and dharma" },
            { label: "Spiritual Ruin", desc: "Falls into the lowest states (16.19–20)", accent: true }
          ]
        },
        scriptures: [
          { ref: "16.8", sanskrit: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्", text: "They say: There is no truth, no God, no moral order in the universe." },
          { ref: "16.12", sanskrit: "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः", text: "Bound by hundreds of desires, enslaved by anger and lust." },
          { ref: "16.20", sanskrit: "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि", text: "Entering demoniac births, they sink to the lowest degradation." }
        ]
      },
      {
        id: "ch16-three-gates-hell",
        name: "Three Gates to Hell",
        desc: "Krishna identifies three gateways that lead to self-destruction and spiritual ruin: Kama (lust — insatiable craving), Krodha (anger — destructive rage when desires are blocked), and Lobha (greed — hoarding beyond all need). 'Therefore, one must abandon these three' (16.21–22). Escaping these three gates, one engages in self-beneficial conduct and attains the highest goal.",
        type: "grid",
        data: {
          title: "Gates of Spiritual Destruction",
          items: ["Kama — Lust / Desire", "Krodha — Anger", "Lobha — Greed"],
          highlight: "These three are the gates to hell, leading to the ruin of the soul. One must abandon all three. (16.21)"
        },
        scriptures: [
          { ref: "16.21", sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः", text: "Lust, anger, and greed — these three are the gates to hell. One must abandon all three." },
          { ref: "16.22", sanskrit: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः", text: "A person freed from these three gates of darkness acts for their own welfare and attains the supreme goal." }
        ]
      },
      {
        id: "ch16-shastra-compass",
        name: "Scripture as Compass",
        desc: "For those bewildered about right and wrong action, the scriptures (Shastra) serve as the authoritative compass. 'One who discards scriptural guidance and acts on whims attains neither perfection, nor happiness, nor the supreme goal' (16.23). 'Therefore let scripture be your authority in determining what should be done and what should not' (16.24).",
        type: "flow",
        data: {
          steps: [
            { label: "Discard Scripture", desc: "Acting on whim and desire" },
            { label: "No Perfection, No Happiness", desc: "Those who abandon dharma fail (16.23)" },
            { label: "Follow Shastra", desc: "Scripture determines right and wrong (16.24)", accent: true },
            { label: "Attain the Goal", desc: "Live and act according to divine guidance" }
          ]
        },
        scriptures: [
          { ref: "16.23", sanskrit: "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः", text: "One who discards scriptural guidance and acts on whim attains neither perfection nor happiness." },
          { ref: "16.24", sanskrit: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ", text: "Therefore, let scripture be your guide in determining what should and should not be done." }
        ]
      }
    ]
  },

  // ========== CHAPTER 17 ==========
  {
    chapter: 17,
    title: "Shraddhatraya Vibhaga Yoga",
    subtitle: "The Threefold Division of Faith",
    models: [
      {
        id: "ch17-threefold-faith",
        name: "Three Types of Faith",
        desc: "The faith born of each person's nature determines their worship, diet, and life pattern. Sattvic faith worships the gods with purity. Rajasic faith worships power-spirits and demons with restless desire. Tamasic faith worships ghosts and spirits with ignorance and delusion. 'One's faith conforms to one's nature — whatever one's faith, that indeed is what one is' (17.3).",
        type: "grid",
        data: {
          title: "Faith by Nature (Guna)",
          items: ["Sattva — Serene faith; worship of Gods and universal forces", "Rajas — Passionate faith; worship of powerful spirits and beings", "Tamas — Deluded faith; worship of ghosts and lower entities"],
          highlight: "As is one's faith, so is one's nature and destiny (17.3)"
        },
        scriptures: [
          { ref: "17.2", sanskrit: "त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा", text: "The faith of each is in accordance with their nature. A person is made of their faith." },
          { ref: "17.3", sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत", text: "Sattvic worship the gods, Rajasic worship powerful spirits, Tamasic worship ghosts and spirits." }
        ]
      },
      {
        id: "ch17-food-guna",
        name: "Food Preferences by Guna",
        desc: "Sattvic foods are fresh, juicy, nourishing, and agreeable — promoting health, strength, and happiness. Rajasic foods are excessively bitter, sour, salty, hot, and pungent — causing pain and disease. Tamasic foods are stale, tasteless, rotten, and impure — leading to illness and lethargy. 'The food that is dear to each person is of three kinds' (17.7–10).",
        type: "grid",
        data: {
          title: "Food & The Gunas",
          items: ["Sattva — Juicy, nourishing, life-giving", "Rajas — Bitter, sour, salty, overly spicy", "Tamas — Spoiled, impure, stale, leftover"],
          highlight: "Food preference reveals the dominant guna operating within (17.7)"
        },
        scriptures: [
          { ref: "17.8", sanskrit: "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः", text: "Sattvic foods increase life, purity, strength, health, happiness, and satisfaction." },
          { ref: "17.9", sanskrit: "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः", text: "Rajasic foods are bitter, sour, salty, excessively hot — causing pain and disease." },
          { ref: "17.10", sanskrit: "यातयामं गतरसं पूति पर्युषितं च यत्", text: "Tamasic foods are stale, tasteless, impure — leading to dullness." }
        ]
      },
      {
        id: "ch17-threefold-tapas",
        name: "Threefold Austerity",
        desc: "Austerity operates at three levels: Body (sharira tapas) — worship of God, respect for teachers, cleanliness, non-violence, celibacy (17.14). Speech (vak tapas) — words that are truthful, beneficial, pleasing, and include study of scriptures (17.15). Mind (manasa tapas) — serenity, gentleness, silence, self-control, and purity of thought (17.16).",
        type: "grid",
        data: {
          title: "Three Dimensions of Tapas",
          items: ["Body (Sharira) — Worship, cleanliness, non-violence, continence", "Speech (Vak) — Truthful, pleasant, beneficial, non-agitating words", "Mind (Manasa) — Serenity, silence, self-control, purity of thought"],
          highlight: "Performed with faith and without desire for reward — this is Sattvic austerity (17.17)"
        },
        scriptures: [
          { ref: "17.14", sanskrit: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्", text: "Worship of the Supreme, purity, simplicity, non-violence — these are austerity of the body." },
          { ref: "17.15", sanskrit: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्", text: "Speech that is truthful, pleasant, beneficial, and non-agitating — this is austerity of speech." },
          { ref: "17.16", sanskrit: "मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः", text: "Serenity of mind, silence, self-control, purity of being — this is austerity of the mind." }
        ]
      },
      {
        id: "ch17-threefold-charity",
        name: "Charity by Guna",
        desc: "Sattvic charity is given to a worthy person at the right time and place, without expectation of return — 'this is duty' (17.20). Rajasic charity is given reluctantly, with expectation of reciprocation or with a desire for merit (17.21). Tamasic charity is given at wrong time/place, to unworthy persons, without respect or with contempt (17.22).",
        type: "grid",
        data: {
          title: "Three Types of Charity",
          items: ["Sattva — Right time, place, deserving person; no expectation", "Rajas — Given with expectation of return or prestige", "Tamas — Given at wrong time, to undeserving, without respect"],
          highlight: "Sattvic charity is given as a duty, without any expectation (17.20)"
        },
        scriptures: [
          { ref: "17.20", sanskrit: "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे", text: "Charity given as a duty, at the right time and place, to a worthy person — that is Sattvic." },
          { ref: "17.21", sanskrit: "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः", text: "Charity given expecting something in return or grudgingly — that is Rajasic." },
          { ref: "17.22", sanskrit: "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते", text: "Charity given at the wrong time, to the wrong person, without respect — that is Tamasic." }
        ]
      },
      {
        id: "ch17-om-tat-sat",
        name: "Om Tat Sat",
        desc: "The threefold designation of Brahman: Om — the sacred syllable beginning all Vedic acts; Tat — 'That' — dedicating actions to the Absolute without desire for reward; Sat — 'Truth/Reality' — goodness and praiseworthy action. Acts of sacrifice, austerity, and charity performed without faith are called 'Asat' — they bear no fruit here or hereafter (17.23–28).",
        type: "radial",
        data: {
          center: "Brahman",
          items: ["OM — Represents the Absolute; begins all sacred acts", "TAT — 'That' — offering everything to the Divine", "SAT — Truth, goodness, reality; sincerity in action"]
        },
        scriptures: [
          { ref: "17.23", sanskrit: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः", text: "Om Tat Sat — this threefold designation of Brahman was used to sanctify all creation." },
          { ref: "17.28", sanskrit: "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत्", text: "Without faith, whatever sacrifice, charity, or austerity is performed — it is called Asat. It has no value here or hereafter." }
        ]
      }
    ]
  },

  // ========== CHAPTER 18 ==========
  {
    chapter: 18,
    title: "Moksha Sannyasa Yoga",
    subtitle: "The Yoga of Liberation & Renunciation",
    models: [
      {
        id: "ch18-sannyasa-vs-tyaga",
        name: "Sannyasa vs Tyaga",
        desc: "Sannyasa means giving up all desire-motivated actions entirely. Tyaga means continuing to perform duty but renouncing attachment to the results. Krishna endorses Tyaga: 'Acts of sacrifice, charity, and austerity should not be abandoned — they purify even the wise. But they should be performed without attachment to results — this is My definite and supreme verdict' (18.5–6).",
        type: "comparison",
        data: {
          left: { label: "Sannyasa", items: ["Giving up actions entirely", "Often for renunciants", "Complete withdrawal from activity"] },
          right: { label: "Tyaga (Recommended)", items: ["Giving up fruits of actions", "For engaged householders", "Continue duty, surrender outcomes (18.6)"] }
        },
        scriptures: [
          { ref: "18.2", sanskrit: "काम्यानां कर्मणां न्यासं सन्न्यासं कवयो विदुः", text: "Giving up desire-motivated actions is Sannyasa. Giving up results of all actions is Tyaga." },
          { ref: "18.6", sanskrit: "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च", text: "Sacrifice, charity, and austerity should not be given up — they must be performed without attachment to results." }
        ]
      },
      {
        id: "ch18-guna-action",
        name: "Threefold Action",
        desc: "Sattvic action is performed without attachment, without love or hatred, by one not seeking the fruit (18.23). Rajasic action is performed with great effort by one who seeks to gratify desires or is driven by ego (18.24). Tamasic action is undertaken through delusion, without regard for consequences, loss, injury, or one's own capacity (18.25).",
        type: "grid",
        data: {
          title: "Action by Guna",
          items: ["Sattva — Done without attachment, no selfish motive", "Rajas — Done with craving for result, ego-driven", "Tamas — Done in delusion, with harm or without thinking"],
          highlight: "The guna dominant at the time of action determines its quality and karmic fruit."
        },
        scriptures: [
          { ref: "18.23", sanskrit: "नियतं सङ्गरहितमरागद्वेषतः कृतम्", text: "Action performed as duty, without attachment or love-hate — that is Sattvic." },
          { ref: "18.24", sanskrit: "यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुनः", text: "Action done with craving for results, with ego — that is Rajasic." },
          { ref: "18.25", sanskrit: "अनुबन्धं क्षयं हिंसामनवेक्ष्य च पौरुषम्", text: "Action undertaken out of delusion, without care for consequences — that is Tamasic." }
        ]
      },
      {
        id: "ch18-buddhi-dhrti",
        name: "Intellect & Resolve Matrix",
        desc: "Sattvic intellect knows duty from non-duty, fear from fearlessness, bondage from liberation (18.30). Rajasic intellect confuses dharma and adharma, right and wrong action (18.31). Tamasic intellect sees adharma as dharma — everything inverted (18.32). Similarly, Sattvic resolve sustains mind and senses through yoga; Rajasic clings to results; Tamasic refuses to give up sleep, fear, grief, and vanity (18.33–35).",
        type: "grid",
        data: {
          title: "Inner Compass — Buddhi & Dhrti",
          items: [
            "Sattvic Buddhi — Knows right from wrong, duty from non-duty",
            "Rajasic Buddhi — Confused between dharma and adharma",
            "Tamasic Buddhi — Sees wrong as right, reverses all values",
            "Sattvic Dhrti — Firm in meditation and duty",
            "Rajasic Dhrti — Clings to outcome and desires",
            "Tamasic Dhrti — Unsteady, based on fear or laziness"
          ],
          highlight: "Your intellect and resolve are colored by the dominant guna."
        },
        scriptures: [
          { ref: "18.30", sanskrit: "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये", text: "Sattvic intellect knows what is duty and non-duty, fear and fearlessness, bondage and liberation." },
          { ref: "18.33", sanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः", text: "Sattvic resolve sustains the functions of mind, life-force, and senses through unbroken yoga." }
        ]
      },
      {
        id: "ch18-happiness-curve",
        name: "Threefold Happiness — The Time Test",
        desc: "Which happiness endures? Sattvic joy feels like poison at first but becomes nectar. Rajasic joy starts sweet but turns bitter. Tamasic joy is delusion from beginning to end (18.36–39).",
        type: "grid",
        data: {
          title: "Happiness Over Time",
          items: ["Sattva — Like poison at first, nectar in the end; lasting bliss (18.37)", "Rajas — Like nectar at first, poison in the end; fleeting pleasure (18.38)", "Tamas — Delusional from start to finish; arising from sleep, laziness, and negligence (18.39)"],
          highlight: "Only Sattvic happiness endures. It requires discipline but yields lasting peace."
        },
        scriptures: [
          { ref: "18.37", sanskrit: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम्", text: "That which seems like poison at first but tastes like nectar in the end — born of Self-realization — is Sattvic happiness." },
          { ref: "18.38", sanskrit: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्", text: "That which seems like nectar from sense contact but becomes poison — that is Rajasic happiness." },
          { ref: "18.39", sanskrit: "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः", text: "Happiness arising from sleep, laziness, and negligence — that is Tamasic." }
        ]
      },
      {
        id: "ch18-varnashrama",
        name: "Fourfold Vocation",
        desc: "Duties are distributed by inherent nature (svabhava), not birth: Brahmanas — serenity, self-control, austerity, knowledge, faith (18.42). Kshatriyas — heroism, vigor, firmness, skill, generosity, leadership (18.43). Vaishyas — agriculture, cattle-rearing, commerce (18.44). Shudras — service and labor (18.44). 'Better is one's own dharma though imperfectly performed than the dharma of another' (18.47).",
        type: "grid",
        data: {
          title: "Duties by Nature",
          items: ["Brahmana — Teaching, wisdom, serenity, austerity", "Kshatriya — Courage, leadership, discipline", "Vaishya — Farming, commerce, charity", "Shudra — Service, support, manual skill"],
          highlight: "Each person achieves perfection by performing their own nature's duty with devotion (18.45)"
        },
        scriptures: [
          { ref: "18.41", sanskrit: "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप", text: "The duties of Brahmanas, Kshatriyas, Vaishyas, and Shudras are distributed according to their qualities born of nature." },
          { ref: "18.45", sanskrit: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः", text: "By following one's own nature in worship of the Supreme, a person attains perfection." },
          { ref: "18.47", sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्", text: "Better is one's own dharma, though imperfect, than another's well performed." }
        ]
      },
      {
        id: "ch18-liberation-path",
        name: "The Supreme Surrender — Verse 18.66",
        desc: "The culminating teaching of the Gita — from performing one's own duty, through detachment, to complete surrender. This is Krishna's final and most intimate instruction to Arjuna (18.45–66).",
        type: "flow",
        data: {
          steps: [
            { label: "Perform Svadharma", desc: "Excel at your own nature's duty (18.45)" },
            { label: "Detach from Results", desc: "Renounce fruits of action" },
            { label: "Surrender to Krishna", desc: "Abandon all varieties of dharma (18.66)", accent: true },
            { label: "Liberation Attained", desc: "I shall deliver you from all sin. Do not grieve." }
          ]
        },
        scriptures: [
          { ref: "18.55", sanskrit: "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः", text: "By devotion one comes to know Me in truth; then one enters into My nature." },
          { ref: "18.66", sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज", text: "Abandon all varieties of dharma and surrender unto Me alone. I shall deliver you from all sin. Do not grieve." }
        ]
      },
      {
        id: "ch18-final-message",
        name: "Where Krishna & Arjuna Unite, There is Victory",
        desc: "The grand finale — Sanjaya declares: wherever there is Krishna, the Lord of Yoga, and Arjuna, the wielder of the bow, there will always be fortune, victory, prosperity, and firm righteousness. The eternal partnership of wisdom and action (18.70–78).",
        type: "flow",
        data: {
          steps: [
            { label: "Study this Teaching", desc: "One who studies it worships Me through wisdom (18.70)" },
            { label: "Share with the Faithful", desc: "Teaching this to devotees is supreme devotion" },
            { label: "Krishna + Arjuna", desc: "Where there is Krishna (Dharma) and Arjuna (Action)...", accent: true },
            { label: "Victory is Certain", desc: "There is prosperity, victory, happiness, and firm morality (18.78)" }
          ]
        },
        scriptures: [
          { ref: "18.70", sanskrit: "अध्येष्यते च य इमं धर्म्यं संवादमावयोः", text: "One who studies this sacred conversation of ours worships Me through the sacrifice of knowledge." },
          { ref: "18.78", sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः", text: "Wherever there is Krishna and Arjuna, there is prosperity, victory, happiness, and morality." }
        ]
      }
    ]
  }
];

export default GITA_DATA;
