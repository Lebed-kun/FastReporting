import { debounce } from "../../utils";

const queryThreads = async () => {
  const threads = await debounce(() => {
    return document.querySelectorAll("[class^=thread-]");
  });

  return threads;
};

const queryThreadBlocks = async (parentList, selector) => {
  let result = [];

  for (let i = 0; i < parentList.length; i++) {
    const blocks = await debounce(() => {
      return parentList[i].querySelectorAll(selector);
    });

    result = [...result, blocks];
  }

  return result;
};

const getMatchingPostIdsByRegex = async (posts, regex) => {
  const data = await debounce(() => {
    return posts.reduce((res, post) => {
      const postId = post.parentNode.getAttribute("data-num");
      const matches = !!post.textContent.match(regex);
      return matches ? (res.length === 0 ? postId : `${res}, ${postId}`) : res;
    }, "");
  });

  return data;
};

const getAllMatchingPostIds = async (posts, regexes) => {
  let result = ``;

  for (let i = 0; i < regexes.length; i++) {
    const postIds = await getMatchingPostIdsByRegex(posts, regexes[i]);
    result = result.length === 0 ? postIds! : `${result}, ${postIds!}`;
  }
};
