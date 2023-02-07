async function getRandomChineseWord(length) {
  const promises = [...Array(length)].map((item, index) => {
    return getRandomChineseChar((index + 1) * 50);
  });

  return await Promise.all(promises);
}

function getRandomChineseChar(time = 50) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const timeStr = Date.now().toString();
      const lastSec = timeStr.substring(timeStr.length - 5);
      resolve(String.fromCharCode(lastSec));
    }, time);
  });
}

const chineseResult = getRandomChineseWord(5);

chineseResult.then((values) => {
  console.log("Chinese word: ", values.join(""));
});
