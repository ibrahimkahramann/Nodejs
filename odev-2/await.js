const posts = [
  { author: "User 1", content: "Lorem ipsum dolor" },
  { author: "User 2", content: "Suspendisse ut lacus" },
  { author: "User 3", content: "lviverra nec sapien sit amet" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(`User: ${post.author}\nContent: ${post.content}\n`);
  });
};

const addContent = (newContent) => {
    listPosts();
  return new Promise((resolve, reject) => {
    if (newContent) {
        setTimeout(() => {
            posts.push(newContent)
            resolve();
        },2000);
    } else {
      reject(10);
    }
  });
};

const showContents = async () => {
    try {
        await addContent({author:"user 10", content: "ut lacus nec sapien ipsum dolor"})
        listPosts();
    }catch(err){
        console.log(`Bir hata olustu: ${err}`)
    }
}

showContents();

console.log("baska islemler...\n");
console.log("baska islemler...\n");
console.log("baska islemler...\n");
console.log("baska islemler...\n");