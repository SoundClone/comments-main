const commentModel = require('./index.js');
var faker = require('faker');

class CommentGen {
  constructor() {
    this.data = {
      userData: {
        username: faker.internet.userName(),
        displayName: faker.name.findName(),
        profileURL: 'https://soundcloud.com/richarddjames',
        profilePicture: faker.image.avatar(),
        followCount: faker.random.number(),
      },
      timeData: {
        postDate: faker.date.recent(750),
        timestamp: faker.random.number(180),
      },
      commentBody: faker.lorem.sentences()
    };
  }

}

let output = (z) => {
  let res = [];

  for (let i = 0; i < z; i++) {
    let temp = new CommentGen();
    res.push(temp.data);
  }

  return res;
};

commentModel.create({
  songId: 1,
  comments: output(129)
});

console.log('The database has been populated.');