import { insertQuestion } from '../dal/questions.repository';
import { insertTag } from '../dal/tags.repository';
import { Question, Tag } from '../types';

interface Seed extends Tag {
    questions?: Question[]
}

const seeds: Seed[] = [
  {
    name: 'React.js',
    description: 'A library',
    questions: [
      {
        question: 'What is React?',
        answer: 'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. ',
        votesUp: 0,
        votesDown: 0,
      },
    ],
  },
];

const insertSeeds = async () => {
  try {
    await Promise.all(seeds.map(async (tag) => {
      const { questions, ...rest } = tag;

      const tagInsertedId = await insertTag(rest);

      if (questions?.length) {
        await Promise.all(questions.map(
          async (question) => insertQuestion({
            tagId: tagInsertedId,
            ...question,
          }),
        ));
      }
    }));

    // eslint-disable-next-line no-console
    console.log('Seeds inserted successfully!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

insertSeeds();
