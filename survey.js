const readline = require('readline');

const questions = {
  a: "What's your name? Nicknames are also acceptable 😊 ",
  b: "What's an activity you like doing? ",
  c: "What do you listen to while doing that? ",
  d: "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  e: "What's your favourite thing to eat for that meal? ",
  f: "Which sport is your absolute favourite? ",
  g: "What is your superpower? In a few words, tell us what you are amazing at! "
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(questions.a, (answerA) => {
  rl.question(questions.b, (answerB) => {
    rl.question(questions.c, (answerC) => {
      rl.question(questions.d, (answerD) => {
        rl.question(questions.e, (answerE) => {
          rl.question(questions.f, (answerF) => {
            rl.question(questions.g, (answerG) => {
              console.log(answers);
              console.log(`Nice to meet you ${answerA}. ${answerB} is a great activity.
Listening to ${answerC} must help you focus. 
Agreed, ${answerD} is very tasty and ${answerE} is probably the best part.
${answerF} is a wonderful sport.
I'm not surprised your so good at ${answerG};`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


