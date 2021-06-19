import { insertQuestion } from '../dal/questions.repository';
import { insertTag } from '../dal/tags.repository';
import seeds from './seedsData';

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
