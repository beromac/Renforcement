/* Vitalité 50+ : exercices de renforcement, séances, tests de force, sécurité.
   Angles en degrés (SVG) : 0 = droite, 90 = bas, -90 = haut, 180 = gauche. */
(function () {
  var CHAIR = [[48, 95, 84, 95], [48, 95, 48, 60], [52, 95, 52, 122], [80, 95, 80, 122]];
  var CHAIR2 = [[62, 96, 104, 96], [62, 96, 62, 56], [66, 96, 66, 122], [100, 96, 100, 122]];
  var TABLE = [[116, 89, 156, 89], [124, 89, 124, 122], [152, 89, 152, 122]];
  var SUPPORT = [[126, 46, 126, 122], [118, 46, 134, 46]];
  var SIDE = [[72, 46, 72, 122], [64, 46, 80, 46]];
  var FRONT = [[100, 24, 100, 62], [88, 26, 112, 26], [92, 62, 108, 62], [92, 62, 92, 92], [92, 92, 92, 122], [108, 62, 108, 92], [108, 92, 108, 122]];

  window.DATA = {
    groups: ["Jambes & fessiers", "Haut du corps", "Dos, ventre & équilibre", "Échauffement & cardio"],

    exos: [
      {
        id: "squat", name: "Squat au gobelet (vers une chaise)", group: "Jambes & fessiers", icon: "🏋️", loaded: true,
        dose: { type: "reps", sets: 3, reps: 10 }, rest: 60,
        cap: ["Debout", "Assise en arrière"],
        steps: [
          "Pieds écartés comme les épaules, un haltère (ou une bouteille d'eau) tenu contre la poitrine, une chaise derrière vous.",
          "Poussez les fesses en arrière comme pour vous asseoir, dos droit, genoux dans l'axe des pieds.",
          "Effleurez la chaise, puis remontez en poussant dans les talons et en soufflant."
        ],
        tips: ["Les jambes sont le plus gros réservoir de muscle : c'est l'exercice le plus rentable du programme."],
        stop: "Douleur vive au genou ou à la hanche, vertige.",
        easier: "Sans charge, en vous asseyant réellement sur une chaise haute (coussin), puis en vous relevant.",
        harder: "Plus de charge, ou descente en 3 secondes.",
        yt: "squat gobelet débutant chaise",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [60, -110], l: [90, 90], props: CHAIR },
          { r: [73, 87], t: -65, h: -65, a: [60, -110], l: [10, 95], props: CHAIR }
        ]
      },
      {
        id: "lunge", name: "Fente arrière courte (avec appui)", group: "Jambes & fessiers", icon: "🦵",
        dose: { type: "reps", sets: 2, reps: 8, perSide: true }, rest: 60,
        cap: ["Debout", "Pas en arrière"],
        steps: [
          "Debout près d'une chaise ou d'un mur, une main en appui.",
          "Faites un petit pas en arrière et descendez à la verticale, le buste droit.",
          "Poussez dans la jambe avant pour revenir, puis changez de jambe."
        ],
        tips: ["Le genou avant reste au-dessus de la cheville."],
        stop: "Douleur au genou, perte d'équilibre.",
        easier: "Pas plus court, descente moins profonde, appui des deux mains.",
        harder: "Un haltère dans chaque main, appui retiré.",
        yt: "fente arrière avec appui débutant",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [75, 85], l: [84, 90], l2: [96, 90], props: [[56, 46, 56, 122], [48, 46, 64, 46]] },
          { r: [84, 92], t: -90, h: -90, a: [75, 85], l: [0, 90], l2: [108, 168], props: [[56, 46, 56, 122], [48, 46, 64, 46]] }
        ]
      },
      {
        id: "bridge", name: "Pont fessier", group: "Jambes & fessiers", icon: "🌉",
        dose: { type: "reps", sets: 3, reps: 12 }, rest: 45,
        cap: ["Départ", "Bassin levé"],
        steps: [
          "Allongée sur le dos, genoux pliés, pieds à plat écartés comme le bassin.",
          "Serrez les fessiers et montez le bassin jusqu'à aligner épaules, hanches et genoux.",
          "Tenez 2 secondes en soufflant, redescendez lentement."
        ],
        tips: ["Les fessiers et le plancher pelvien travaillent ensemble : pensez à « soulever » le périnée en montant."],
        stop: "Crampe ou douleur dans le bas du dos.",
        easier: "Montez moins haut, sans maintien.",
        harder: "Un haltère sur le bassin, ou pont sur une jambe.",
        yt: "pont fessier exercice femme",
        frames: [
          { r: [90, 122], t: 180, h: 180, a: [-15, -15], l: [-55, 60] },
          { r: [94, 104], t: 150, h: 180, a: [0, 0], l: [-30, 90] }
        ]
      },
      {
        id: "abduction", name: "Jambe sur le côté (debout, avec appui)", group: "Jambes & fessiers", icon: "↔️",
        dose: { type: "reps", sets: 3, reps: 12, perSide: true }, rest: 45,
        cap: ["Départ", "Jambe écartée"],
        steps: [
          "Debout, une main sur le dossier d'une chaise, corps droit.",
          "Levez la jambe tendue sur le côté d'environ 30 cm, pointe du pied vers l'avant.",
          "Redescendez lentement sans pencher le tronc."
        ],
        tips: ["Renforce le fessier moyen, essentiel pour la stabilité de la marche et la prévention des chutes."],
        stop: "Douleur à la hanche.",
        easier: "Amplitude réduite.",
        harder: "Élastique autour des chevilles.",
        yt: "abduction de hanche debout fessier moyen",
        frames: [
          { raw: { head: [100, 13], lines: FRONT.concat([[88, 26, 80, 44], [80, 44, 72, 58], [112, 26, 116, 44], [116, 44, 114, 60]]).slice(0, 7).concat([[88, 26, 80, 44], [80, 44, 72, 58], [112, 26, 116, 44], [116, 44, 114, 60]]) }, props: [[70, 56, 70, 122], [65, 56, 77, 56]] },
          { raw: { head: [100, 13], lines: [[100, 24, 100, 62], [88, 26, 112, 26], [92, 62, 108, 62], [92, 62, 92, 92], [92, 92, 92, 122], [108, 62, 123, 88], [123, 88, 138, 114], [88, 26, 80, 44], [80, 44, 72, 58], [112, 26, 116, 44], [116, 44, 114, 60]] }, props: [[70, 56, 70, 122], [65, 56, 77, 56]] }
        ]
      },
      {
        id: "calf", name: "Montées sur la pointe des pieds", group: "Jambes & fessiers", icon: "👣",
        dose: { type: "reps", sets: 3, reps: 15 }, rest: 45,
        cap: ["Pieds à plat", "Sur la pointe"],
        steps: [
          "Debout face à un mur ou une chaise, mains en appui léger.",
          "Montez sur la pointe des pieds, tenez 1 seconde.",
          "Redescendez lentement."
        ],
        tips: ["Bon pour la circulation, les mollets et l'équilibre."],
        stop: "Crampe forte ou douleur à la cheville.",
        easier: "Version assise.",
        harder: "Sur une seule jambe, ou haltère dans une main.",
        yt: "montées sur pointes de pieds mollets",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [50, 50], l: [90, 90], props: SUPPORT.concat([[100, 122, 108, 122]]) },
          { r: [100, 54], t: -90, h: -90, a: [50, 50], l: [90, 90], props: SUPPORT.concat([[100, 114, 108, 122]]) }
        ]
      },
      {
        id: "pushinc", name: "Pompes sur plan incliné (mains sur table)", group: "Haut du corps", icon: "🧱",
        dose: { type: "reps", sets: 3, reps: 8 }, rest: 60,
        cap: ["Bras tendus", "Poitrine vers la table"],
        steps: [
          "Mains sur une table solide, un peu plus larges que les épaules, corps en ligne droite des talons à la tête.",
          "Fléchissez les coudes pour approcher la poitrine de la table, ventre et fessiers serrés.",
          "Poussez pour revenir en soufflant."
        ],
        tips: ["Plus la table est basse, plus c'est difficile : c'est votre moyen de progresser."],
        stop: "Douleur à l'épaule ou au poignet.",
        easier: "Pompes contre un mur.",
        harder: "Mains sur une surface plus basse (canapé, banc).",
        yt: "pompes inclinées sur table débutante",
        frames: [
          { r: [98.6, 76], t: -50, h: -50, a: [90, 90], l: [130, 130], props: TABLE },
          { r: [107.3, 85.1], t: -38, h: -38, a: [157.3, 77.9], l: [142, 142], props: TABLE }
        ]
      },
      {
        id: "row", name: "Tirage avec élastique (debout)", group: "Haut du corps", icon: "🎽", loaded: true,
        dose: { type: "reps", sets: 3, reps: 12 }, rest: 45,
        cap: ["Bras tendus", "Coudes en arrière"],
        steps: [
          "Fixez un élastique à une poignée de porte, à hauteur de poitrine.",
          "Debout, pieds largeur du bassin, genoux souples, dos droit.",
          "Tirez les coudes vers l'arrière en rapprochant les omoplates, tenez 1 seconde, relâchez lentement."
        ],
        tips: ["Excellent pour la posture et le haut du dos."],
        stop: "Douleur dans l'épaule ou le dos.",
        easier: "Élastique plus souple.",
        harder: "Élastique plus résistant, ou 3 secondes au retour.",
        yt: "tirage élastique debout dos",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [0, 0], l: [90, 90], props: [[140, 24, 172, 32]] },
          { r: [100, 62], t: -90, h: -90, a: [120, 0], l: [90, 90], props: [[110, 41, 172, 32]] }
        ]
      },
      {
        id: "press", name: "Développé épaules (assise, haltères)", group: "Haut du corps", icon: "🙌", loaded: true,
        dose: { type: "reps", sets: 3, reps: 10 }, rest: 60,
        cap: ["Haltères aux épaules", "Bras tendus en haut"],
        steps: [
          "Assise sur une chaise stable, dos droit, un haltère dans chaque main à hauteur d'épaules.",
          "Poussez les haltères vers le haut sans cambrer le dos, en soufflant.",
          "Redescendez lentement."
        ],
        tips: ["Commencez léger : 1 à 3 kg suffisent au début."],
        stop: "Douleur à l'épaule ou au cou.",
        easier: "Sans charge, ou avec des bouteilles d'eau.",
        harder: "Charge un peu plus lourde, descente lente.",
        yt: "développé épaules assise haltères",
        frames: [
          { r: [90, 92], t: -88, h: -88, a: [100, -90], l: [0, 90], props: CHAIR2 },
          { r: [90, 92], t: -88, h: -88, a: [-90, -90], l: [0, 90], props: CHAIR2 }
        ]
      },
      {
        id: "lateral", name: "Élévations latérales (haltères légers)", group: "Haut du corps", icon: "🕊️", loaded: true,
        dose: { type: "reps", sets: 2, reps: 12 }, rest: 45,
        cap: ["Bras le long du corps", "Bras à hauteur d'épaules"],
        steps: [
          "Debout, un haltère léger dans chaque main, coudes légèrement pliés.",
          "Levez les bras sur les côtés jusqu'à hauteur d'épaules.",
          "Redescendez en 3 secondes."
        ],
        tips: ["Une charge légère suffit : le but est de contrôler le mouvement."],
        stop: "Douleur dans l'épaule.",
        easier: "Sans charge.",
        harder: "Charge un peu plus lourde.",
        yt: "élévations latérales épaules haltères légers",
        frames: [
          { raw: { head: [100, 13], lines: FRONT.concat([[88, 26, 84, 46], [84, 46, 84, 66], [112, 26, 116, 46], [116, 46, 116, 66]]) } },
          { raw: { head: [100, 13], lines: FRONT.concat([[88, 26, 68, 28], [68, 28, 48, 30], [112, 26, 132, 28], [132, 28, 152, 30]]) } }
        ]
      },
      {
        id: "curl", name: "Curl biceps (haltères)", group: "Haut du corps", icon: "💪", loaded: true,
        dose: { type: "reps", sets: 3, reps: 12 }, rest: 45,
        cap: ["Bras le long du corps", "Avant-bras plié"],
        steps: [
          "Debout (ou assise), un haltère dans chaque main, coudes collés au corps.",
          "Montez les avant-bras, tenez 1 seconde.",
          "Redescendez en 3 secondes sans balancer le dos."
        ],
        tips: ["Si vous vous cambrez, la charge est trop lourde."],
        stop: "Douleur au coude ou au poignet.",
        easier: "Charge plus légère.",
        harder: "Charge plus lourde, ou montée en 3 secondes.",
        yt: "curl biceps haltères débutante",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [70, 80], l: [90, 90] },
          { r: [100, 62], t: -90, h: -90, a: [70, -70], l: [90, 90] }
        ]
      },
      {
        id: "triceps", name: "Extension triceps (assise, un haltère)", group: "Haut du corps", icon: "🔱", loaded: true,
        dose: { type: "reps", sets: 3, reps: 10 }, rest: 45,
        cap: ["Coude plié derrière la tête", "Bras tendu"],
        steps: [
          "Assise, dos droit, un haltère tenu à deux mains.",
          "Levez les bras, puis pliez les coudes pour descendre l'haltère derrière la tête, coudes près des oreilles.",
          "Tendez les bras vers le haut en soufflant."
        ],
        tips: ["Gardez le dos droit, sans cambrer."],
        stop: "Douleur au coude ou à l'épaule.",
        easier: "Charge très légère, ou avec un élastique.",
        harder: "Charge plus lourde.",
        yt: "extension triceps assise haltère",
        frames: [
          { r: [90, 92], t: -88, h: -88, a: [-75, 155], l: [0, 90], props: CHAIR2 },
          { r: [90, 92], t: -88, h: -88, a: [-80, -80], l: [0, 90], props: CHAIR2 }
        ]
      },
      {
        id: "plank", name: "Planche sur les avant-bras", group: "Dos, ventre & équilibre", icon: "📏",
        dose: { type: "time", sets: 3, secs: 20 }, rest: 45,
        cap: ["Corps en ligne droite"],
        steps: [
          "Appuyée sur les avant-bras (coudes sous les épaules) et sur les pieds, corps en ligne droite.",
          "Serrez le ventre et les fessiers, respirez normalement.",
          "Tenez la durée indiquée."
        ],
        tips: ["Une planche bien faite de 20 secondes vaut mieux qu'une minute mal tenue."],
        stop: "Douleur au bas du dos ou à l'épaule.",
        easier: "Genoux au sol, ou mains sur une table.",
        harder: "30 à 45 secondes.",
        yt: "planche sur les avant-bras débutante genoux",
        frames: [
          { r: [94, 109.6], t: -10, h: -10, a: [90, 0], l: [170, 170] }
        ]
      },
      {
        id: "birddog", name: "Bird-dog (quatre pattes)", group: "Dos, ventre & équilibre", icon: "🐕",
        dose: { type: "reps", sets: 3, reps: 8, perSide: true }, rest: 45,
        cap: ["Départ", "Bras et jambe opposés"],
        steps: [
          "À quatre pattes (coussin sous les genoux), dos neutre, ventre légèrement rentré.",
          "Tendez un bras vers l'avant et la jambe opposée vers l'arrière, dans l'alignement du dos.",
          "Tenez 3 secondes, revenez, changez de côté."
        ],
        tips: ["Imaginez un verre d'eau posé sur le bas du dos."],
        stop: "Douleur au dos ou aux genoux.",
        easier: "Bougez seulement un bras ou une jambe.",
        harder: "Tenez 5 secondes.",
        yt: "bird dog exercice gainage dos",
        frames: [
          { r: [110, 92], t: 195, h: 195, a: [90, 90], l: [90, 0] },
          { r: [110, 92], t: 195, h: 195, a: [90, 90], l: [90, 0], a2: [190, 190], l2: [0, 0] }
        ]
      },
      {
        id: "deadbug", name: "Insecte mort (dead bug)", group: "Dos, ventre & équilibre", icon: "🪲",
        dose: { type: "reps", sets: 3, reps: 8, perSide: true }, rest: 45,
        cap: ["Départ", "Bras et jambe opposés"],
        steps: [
          "Allongée sur le dos, bras tendus vers le plafond, hanches et genoux à 90°. Bas du dos plaqué au sol.",
          "Descendez lentement un bras derrière la tête et la jambe opposée vers le sol.",
          "Revenez au centre, puis alternez."
        ],
        tips: ["Soufflez en descendant. Si le dos décolle, réduisez l'amplitude."],
        stop: "Dos qui se creuse, douleur au cou.",
        easier: "Seulement les jambes.",
        harder: "Un haltère léger dans les mains.",
        yt: "dead bug exercice gainage",
        frames: [
          { r: [90, 122], t: 180, h: 180, a: [-90, -90], l: [-90, 0] },
          { r: [90, 122], t: 180, h: 180, a: [-90, -90], l: [-90, 0], a2: [185, 185], l2: [-6, -6] }
        ]
      },
      {
        id: "backext", name: "Extension dorsale douce", group: "Dos, ventre & équilibre", icon: "🏊",
        dose: { type: "reps", sets: 2, reps: 8 }, rest: 30,
        cap: ["À plat ventre", "Poitrine légèrement levée"],
        steps: [
          "Allongée sur le ventre, bras étendus devant, front au sol.",
          "Soulevez la poitrine et les bras de quelques centimètres seulement, en regardant le sol.",
          "Rapprochez les omoplates, tenez 2 secondes, redescendez."
        ],
        tips: ["Renforce les muscles du dos qui gardent le buste droit. Petit mouvement, sans forcer."],
        stop: "Douleur dans le dos. En cas d'ostéoporose connue, demandez d'abord l'avis de votre médecin.",
        easier: "Seulement les bras, la poitrine reste au sol.",
        harder: "Tenez 5 secondes.",
        yt: "extension dorsale douce renforcement dos",
        frames: [
          { r: [112, 121], t: 180, h: 180, a: [180, 180], l: [0, 0] },
          { r: [112, 119], t: 192, h: 195, a: [190, 190], l: [-8, -8] }
        ]
      },
      {
        id: "balance", name: "Équilibre sur une jambe (avec appui)", group: "Dos, ventre & équilibre", icon: "🦩",
        dose: { type: "time", sets: 2, secs: 20, perSide: true }, rest: 20,
        cap: ["Debout", "Un genou levé"],
        steps: [
          "Debout à côté d'une chaise ou d'un plan de travail, une main en appui.",
          "Levez un genou à hauteur de hanche et tenez en regardant devant vous.",
          "Changez de jambe."
        ],
        tips: ["L'équilibre se travaille comme un muscle et réduit le risque de chute."],
        stop: "Vertige ou douleur à la hanche.",
        easier: "Pied juste décollé du sol.",
        harder: "Sans appui (près d'un mur), ou yeux fermés avec appui à portée.",
        yt: "exercice équilibre unipodal senior",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [130, 130], l: [90, 90], props: SIDE },
          { r: [100, 62], t: -90, h: -90, a: [130, 130], l: [10, 100], l2: [90, 90], props: SIDE }
        ]
      },
      {
        id: "catcamel", name: "Dos rond / dos creux (chat-vache)", group: "Échauffement & cardio", icon: "🐱",
        dose: { type: "reps", sets: 1, reps: 8 }, rest: 30,
        cap: ["Dos rond (expirez)", "Dos creux léger (inspirez)"],
        steps: [
          "À quatre pattes, mains sous les épaules, genoux sous les hanches.",
          "Expirez en arrondissant doucement le dos.",
          "Inspirez en creusant légèrement le dos, sans forcer."
        ],
        tips: ["Mouvement lent, idéal pour s'échauffer."],
        stop: "Douleur au dos, au poignet ou au genou.",
        easier: "Réduisez l'amplitude.",
        harder: "Mouvement plus lent.",
        yt: "chat vache exercice mobilité dos",
        frames: [
          { r: [110, 92], t: 195, h: 140, c: 10, a: [90, 90], l: [90, 0] },
          { r: [110, 92], t: 195, h: 230, c: -8, a: [90, 90], l: [90, 0] }
        ]
      },
      {
        id: "walk", name: "Marche active (ou marche nordique)", group: "Échauffement & cardio", icon: "🚶",
        dose: { type: "cardio", mins: 20 }, rest: 0,
        cap: ["Pas 1", "Pas 2"],
        steps: [
          "Chaussures stables, allure à laquelle vous pouvez parler mais pas chanter.",
          "Marchez d'un bon pas, bras actifs, buste droit.",
          "3 minutes servent d'échauffement avant le renforcement ; 20 à 30 minutes comptent comme séance de cardio."
        ],
        tips: ["La marche entretient aussi la solidité des os et du cœur."],
        stop: "Douleur dans la poitrine, essoufflement anormal, vertige.",
        easier: "Marchez moins longtemps, plusieurs fois par jour.",
        harder: "Allure plus rapide, côtes, ou bâtons de marche nordique.",
        yt: "marche nordique débutante technique",
        frames: [
          { r: [100, 62], t: -90, h: -90, a: [110, 120], a2: [70, 60], l: [70, 100], l2: [110, 120] },
          { r: [100, 62], t: -90, h: -90, a: [70, 60], a2: [110, 120], l: [110, 120], l2: [70, 100] }
        ]
      }
    ],

    sessions: [
      {
        id: "A", name: "Séance A : jambes, pompes et tirage", tag: "Corps entier",
        desc: "Les grands groupes musculaires : jambes, poitrine, dos et ventre.",
        items: [{ id: "walk", mins: 3 }, { id: "catcamel" }, { id: "squat" }, { id: "pushinc" }, { id: "row" }, { id: "bridge" }, { id: "plank" }, { id: "balance" }]
      },
      {
        id: "B", name: "Séance B : fentes, épaules et bras", tag: "Corps entier",
        desc: "Jambes en unilatéral, épaules, bras, ventre et mollets.",
        items: [{ id: "walk", mins: 3 }, { id: "lunge" }, { id: "press" }, { id: "lateral" }, { id: "curl" }, { id: "triceps" }, { id: "deadbug" }, { id: "calf" }]
      },
      {
        id: "C", name: "Séance C : dos, posture et équilibre", tag: "Posture",
        desc: "Dos, fessiers, gainage et équilibre pour rester droite et stable.",
        items: [{ id: "walk", mins: 3 }, { id: "catcamel" }, { id: "birddog" }, { id: "backext" }, { id: "abduction" }, { id: "row", sets: 2 }, { id: "calf", sets: 2 }, { id: "balance" }]
      },
      {
        id: "express", name: "Séance express (20 min)", tag: "Jours chargés",
        desc: "Les trois exercices les plus rentables, en 2 séries chacun.",
        items: [{ id: "squat", sets: 2 }, { id: "pushinc", sets: 2 }, { id: "row", sets: 2 }, { id: "plank", sets: 2 }]
      },
      {
        id: "douce", name: "Séance douce / récupération", tag: "Jours de fatigue",
        desc: "Mobilité et équilibre légers, pour les jours où l'énergie est basse.",
        items: [{ id: "catcamel" }, { id: "bridge", sets: 1, reps: 10 }, { id: "birddog", sets: 1, reps: 6 }, { id: "balance", sets: 1 }, { id: "walk", mins: 10 }]
      }
    ],

    tests: [
      { id: "chair", name: "Levers de chaise en 30 s", unit: "rép.", how: "Assise sur une chaise stable sans accoudoirs, bras croisés sur la poitrine : comptez le nombre de levers complets en 30 secondes." },
      { id: "push", name: "Pompes inclinées (mains sur table)", unit: "rép.", how: "Nombre de pompes propres, sans pause, avec la même table à chaque test." },
      { id: "plank", name: "Planche sur les avant-bras", unit: "s", how: "Tenez la position le plus longtemps possible avec une bonne posture (genoux au sol si besoin, toujours la même version)." },
      { id: "balance", name: "Équilibre sur une jambe", unit: "s", how: "Près d'un mur pour vous rattraper, yeux ouverts. Chronométrez jusqu'à 60 s sur votre meilleure jambe." }
    ],

    safety: {
      intro: "Cette application ne remplace pas un avis médical. Après 50 ans, parlez-en à votre médecin avant de commencer, surtout en cas de maladie cardiaque, de tension élevée, d'ostéoporose, de douleurs articulaires ou de fuites urinaires.",
      rules: [
        "Choisissez une charge qui rend les deux dernières répétitions difficiles, tout en gardant une bonne technique. Jamais de douleur vive.",
        "Soufflez à l'effort et ne bloquez jamais la respiration (c'est important aussi pour le plancher pelvien).",
        "Progressez doucement : augmentez la charge ou les répétitions quand toutes les séries sont réussies avec une bonne technique à deux séances de suite.",
        "Prévoyez 3 séances par semaine avec un jour de repos entre deux séances de renforcement (par exemple lundi, mercredi, vendredi).",
        "De légères courbatures sont normales. Une douleur dans une articulation ne l'est pas."
      ],
      avoid: [
        "Si vous avez une ostéoporose connue : pas de flexion forcée du dos vers l'avant avec une charge, pas de torsions forcées, pas d'impacts, sans avis médical.",
        "Soulever très lourd en bloquant la respiration.",
        "Fuites urinaires ou sensation de pesanteur dans le bassin : parlez-en à votre médecin, une rééducation du périnée (kiné ou sage-femme) aide beaucoup."
      ],
      urgent: [
        "Douleur ou oppression dans la poitrine, essoufflement anormal, palpitations, malaise ou vertige : arrêtez et appelez le 15 (ou le 112).",
        "Douleur vive et brutale dans le dos après un effort ou une chute, ou douleur qui dure plus de 48 heures : consultez."
      ],
      food: "Pour gagner du muscle sans perdre de poids, mangez suffisamment (pas de régime restrictif). Mettez des protéines à chaque repas (environ 1 à 1,2 g par kg de poids et par jour, sauf avis médical contraire, par exemple en cas de maladie rénale), ayez assez de calcium et de vitamine D (demandez conseil à votre médecin), buvez de l'eau et dormez 7 à 8 heures. Votre poids doit rester stable ou augmenter légèrement. Si vous perdez du poids sans le vouloir, consultez."
    }
  };
})();
