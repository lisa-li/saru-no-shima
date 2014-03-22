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
      question: {english: "Hello. How are you?", japanese: 'こにちわ。お　げんき　ですか。'},
      correct: [{id: 1, english: 'Yes, I am well. How are you?', japanese: 'はい、げんき　です　か。'}],
      neutral: [
        {id: 2, english: 'Hi, and you?', japanese: 'こにちわ。あなた　わ。'},
        {id: 3, english: 'Great, I am well.', japanese: 'そごい、でんき　です。'}
      ],
      wrong: [{id: 4, english: 'Kiss me right now!', japanese: 'いっま、キス　して。'}]
    },
    {
      question: {english: "Do you like gardening?", japanese: 'にわしごと　が　すき　です　か。'},
      correct: [{id: 1, english: 'I really like flower arranging.', japanese: 'いけばな　お　だい　すき　です。'}],
      neutral: [
        {id: 2, english: 'Bonsais are great!', japanese: 'ぼんさい　が　そごい　です　ね。'},
        {id: 3, english: 'I like photography.', japanese: 'しゃしn　お　すき　です。'}
      ],
      wrong: [{id: 4, english: 'We are having a party.', japanese: 'パアチ　お　します。'}]
    },
    {
      question: {english: "Your Japanese is so good. Keep in touch.", japanese: 'にほんご　が　お　じょず　です　ね。'},
      correct: [{id: 1, english: 'Here is my telephone number.', japanese: 'これ　が　わたし　の　でんわばんご　です。'}],
      neutral: [
        {id: 2, english: 'Bon voyage.', japanese: 'よい　たび　お。'},
        {id: 3, english: 'It is nothing really.', japanese: 'つ　ま　らない　もの　です　が。'}
      ],
      wrong: [{id: 4, english: 'Merry Christmas!', japanese: 'メリ　クリスマス。'}]
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
