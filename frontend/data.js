var quests = [
{
  id: '1',
  name: 'Making conversation.',
  description: 'Greeting a friend.',
  character: 'Alex',
  location: [ 35.773111, 140.392639 ],
  background: 'garden',
  questions: [
    {
      question: {english: "Hello. How are you?", japanese: 'こにちは。おげんき　ですか。'},
      correct: [{id: 1, english: 'Yes, I am well. How are you?', japanese: 'はい、げんき　です。あなたは?'}],
      neutral: [
        {id: 2, english: 'Hi, who are you?', japanese: 'こにちは。あなたは。'},
        {id: 3, english: 'I"m really well!', japanese: 'そごい、げんき　です。'}
      ],
      wrong: [{id: 4, english: 'Kiss me right now!', japanese: 'いっま、キス　して。'}]
    },
    {
      question: {english: "Do you like gardening?", japanese: 'にわしごと　が　すき　です　か?'},
      correct: [{id: 1, english: 'I really like flower arranging.', japanese: 'いけばな　おだいすき　です。'}],
      neutral: [
        {id: 2, english: 'Bonsais are great!', japanese: 'ぼんさい　が　そごい　です　ね。'},
        {id: 3, english: 'I like photography.', japanese: 'しゃしん　おすき　です。'}
      ],
      wrong: [{id: 4, english: 'We are having a party.', japanese: 'パアテイー　おします。'}]
    },
    {
      question: {english: "Your Japanese is so good. Keep in touch.", japanese: 'にほんご　が　おじょず　です　ね。おたがいに　れんらく　を　とりあいましょう。'},
      correct: [{id: 1, english: 'Yes! Here is my telephone number.', japanese: 'はい！　これ　が　わたし　の　でんわばんご　です。'}],
      neutral: [
        {id: 2, english: 'Bon voyage.', japanese: 'よい　たび　を。'},
        {id: 3, english: 'Bugger off!', japanese: 'かってにしろ'}
      ],
      wrong: [{id: 4, english: 'Merry Christmas!', japanese: 'メリー　クリスマス。'}]
    }
  ]
},
{
  id: '3',
  name: 'hello',
  description: 'Greeting a friend.',
  character: 'Alex',
  location: [ 35.746235, 140.371714 ],
  background: 'garden',
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
  location: [ 35.758667, 140.414028 ],
  questions: [
    {
      question: "How may I help you?",
      correct: ["I'd like to buy a train ticket"],
      neutral: ["Train ticket?", "Buy ticket?"],
      wrong: ["I want to buy a fish"]
    }
  ]
},
{
  id: '4',
  name: 'eating',
  description: 'Going out for dinner',
  character: 'Sam',
  location: [  35.790667, 140.354028 ],
  questions: []
}
];
