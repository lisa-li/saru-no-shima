var quests = [
{
  id: '1',
  name: 'hello',
  description: 'Greeting a friend.',
  character: 'Alex',
  location: [ -33.846235, 151.231714 ],
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

var characters = {
  "Alex": "http://mascot.crystalxp.net/png/autigone-kirby-gc-22880.png",
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
}

function questWindowClick() {
  quest = quests[questIndex[current_quest.id]];
  question = quest.questions[current_quest.question];

  var answerid = this.id;
  console.log(answerid);
  console.log(target);
  if (goog.array.find(question.correct,
                      function(question) { return question.id == answerid; })) {
    console.log('clicked on right answer');
    renderQuestWin(characters[quest.character], quest.name, question, true);
    //window.setTimeout(advanceQuest, 1000);
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
