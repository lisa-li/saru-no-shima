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
    }
  ]
},
{
  id: '2',
  name: 'Making conversation.',
  description: 'What are your hobbies?',
  character: 'Alex',
  location: [ 35.773111, 140.392639 ],
  background: 'garden',
  questions: [
    {
      question: {english: "Do you like gardening?", japanese: 'にわしごと　が　すき　です　か。'},
      correct: [{id: 1, english: 'I really like flower arranging.', japanese: 'いけばな　お　だい　すき　です。'}],
      neutral: [
        {id: 2, english: 'Bonsais are great!', japanese: 'ぼんさい　が　そごい　です　ね。'},
        {id: 3, english: 'I like photography.', japanese: 'しゃしn　お　すき　です。'}
      ],
      wrong: [{id: 4, english: 'We are having a party.', japanese: 'パアチ　お　します。'}]
    }
  ]
},
{
  id: '3',
  name: 'Making conversation.',
  description: 'Ending a conversation.',
  character: 'Alex',
  location: [ 35.773111, 140.392639 ],
  background: 'garden',
  questions: [
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
];
