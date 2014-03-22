var quests = [
{
  id: '1',
  name: 'hello',
  description: 'Greeting a friend.',
  character: 'Alex',
  location: [ -33.846235, 151.231714 ],
  background: 'Garden'
  questions: [
    {
      question: {english: "Hello", japanese: 'こんにちは'},
      correct: [{id: 1, english: 'Hello', japanese: 'こんにちは'}],
      neutral: [
        {id: 2, english: 'Um', japanese: 'ええと'},
        {id: 3, english: 'Er', japanese: 'あのう'}
      ],
      wrong: [{id: 4, english: 'Go away', japanese: 'かってにしろ'}]
    }
  ]
},
{
  id: '2',
  name: 'train ticket',
  description: 'Buying a train ticket',
  character: 'Sam',
  location: [ -33.858667, 151.214028 ],
  questions: [
    {
      question: "How may I help you?",
      correct: ["I'd like to buy a train ticket"],
      neutral: ["Train ticket?", "Buy ticket?"],
      wrong: ["I want to buy a fish"]
    }
  ]
},
];

questIndex = {};
for (var i = 0; i < quests.length; ++i) {
  questIndex[quests[i].id] = i;
}
var bacground = {
  "Garden": "http://1.bp.blogspot.com/_Ol0ZREa9Igw/S_Y7xQybURI/AAAAAAAABXE/9qDZeaOJFF0/s1600/Japanese+Garden_900.jpg"
}

var characters = {
  "Alex": {
    neutral: "http://mascot.crystalxp.net/png/autigone-kirby-gc-22880.png",
    happy: "http://img1.wikia.nocookie.net/__cb20120627075127/kirby/en/images/thumb/0/01/KDCol_Kirby_K64.png/551px-KDCol_Kirby_K64.png",
    angry: "http://img2.wikia.nocookie.net/__cb20140110163651/ssbb/es/images/a/a5/Kirby_en_Kirby_Triple_Deluxe.png",
    confused: "http://img4.wikia.nocookie.net/__cb20131020025854/mugen/images/2/21/K3DS_Kirby.png"
  },
  "Sam": "https://cdn1.iconfinder.com/data/icons/free-large-boss-icon-set/128/Uncle_Sam.png"
};

function initialize() {
  // Sets up the map
  var styles = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "water",
    stylers: [
      { color : "#05065E" }
    ]
  },
  {
    featureType: "road",
    stylers: [
      { color : "#FFFFFF" },
      { visibility: "simplified" }
    ]
  },
  {
    featureType: "landscape",
    stylers: [
      { color : "#36375C" }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      { color : "#535499" }
    ]
  }
  ];


  var mapOptions = {
    center: new google.maps.LatLng(-33.846235, 151.231714),
    zoom: 14,
    //disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  map.setOptions({styles: styles});

  // game state
  var current_quest = {
    id: -1,
    question: 0
  };

  // listen for answer clicks
  document.getElementById('quest').onclick = questWindowClick;

  // Set up popup window that shows above each quest marker.
  var infowindow = new google.maps.InfoWindow({
    content: "hello world - replace this with the questions HTML"
  });

  // Add markers for the quests.
  for (var i = 0; i < quests.length; ++i) {
    var q = quests[i];
    var img = {
      url: characters[q.character],
      size: new google.maps.Size(128, 128),
      scaledSize: new google.maps.Size(128, 128)
    }
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(q.location[0], q.location[1]),
      map: map,
      title: q.name,
      icon: img
    });
    marker.data = q;
    google.maps.event.addListener(marker, "click", function() {
      // remove previous listener on infowindow
      infowindow.getContent().onclick = null;
      infowindow.setContent(soy.renderAsElement(templates.infoWindowContents, {
        title: this.data.name,
        description: this.data.description,
        character: characters[this.data.character]
      }));
      infowindow.getContent().onclick = infoWindowClick;
      infowindow.getContent().data=this.data;
      infowindow.open(map, this);

    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);


function renderQuestWin(character, title, question, showMeanings) {
  var questWin = document.getElementById('quest');

  console.log(title);
  console.log(question);

  // shuffle the answers.
  var answers = goog.array.concat(question.correct, question.neutral, question.wrong);
  goog.array.shuffle(answers);

  questWin.innerHTML = templates.questWindow({
    character: character,
    title: title,
    hintText: question.question,
    answers: answers,
    showMeanings: !!showMeanings
  });

  // show the window
  questWin.style.display = 'block';

  var closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click',hideQuestWindow);
}

function advanceQuest() {
  var quest = quests[questIndex[current_quest.id]];

  current_quest.question = current_quest.question + 1;
  if (current_quest.question >= quest.questions.length) {
    // Quest success.
    renderQuestEnding('happy');
  } else {
    // quest has more questions.
    var question = quest.questions[current_quest.question];
    renderQuestWin(characters[quest.character], quest.name, question, false /* showMeanings */)
  }
}

function questWindowClick(e) {
  var quest = quests[questIndex[current_quest.id]];
  var question = quest.questions[current_quest.question];

  var answerid = e.target.id;
  if (goog.array.find(question.correct,
                      function(question) { return question.id == answerid; })) {
    console.log('clicked on right answer');
    renderQuestWin(characters[quest.character], quest.name, question, true /* showMeanings */);
    window.setTimeout(advanceQuest, 1000);
  } //else if (goog.array.find(question.neutral
}

function infoWindowClick() {
  renderQuestWin(characters[this.data.character], this.data.name, this.data.questions[0]);

  // set game state.
  current_quest = {
    id: this.data.id,
    question: 0
  };
};

function hideQuestWindow() {
  var questWin = document.getElementById('quest');
  questWin.style.display = 'none';
}
