import {Memo} from '~/types/contents/Memo';

const memoCount = 5;

const mockMemos = Array<Memo>(memoCount);
for (let i = 0; i < memoCount; i++) {
  mockMemos[i] = {
    title: `memo: title ${i}`,
    content: `memo: content ${i}`,
  };
}

export {mockMemos};
