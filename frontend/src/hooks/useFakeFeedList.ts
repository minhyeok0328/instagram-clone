import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

const DATE_FORMAT: string = 'YYYY-MM-DD hh:mm:ss';

const nowDate: string = dayjs().format('YYYY-MM-DD hh:mm:ss');
const prevDate: string = dayjs().subtract(1, 'month').format(DATE_FORMAT);

export default function useFakeFeedList() {
  const feedList: Array<Feed> = [];

  for (let i = 0; i < 6; i++) {
    feedList.push({
      userId: faker.internet.userName(),
      userName: faker.internet.userName(),
      image: faker.image.cats(),
      profile: faker.image.avatar(),
      title: faker.lorem.sentence(5),
      like: Math.floor(Math.random() * 1000),
      comment: faker.lorem.sentence(5),
      commentCount: Math.floor(Math.random() * 10),
      registerDate: faker.date.between(prevDate, nowDate),
    });
  }

  return feedList;
}
