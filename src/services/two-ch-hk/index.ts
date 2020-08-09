import { debounce } from "../../utils";

const queryThreads = async () => {
  return debounce(() => {
    return document.querySelectorAll("[id^=thread-]");
  });
};

const queryPosts = async (threads: Element[]) => {
  const posts = await Promise.all(
    threads.map((thread) => {
      return debounce(() => {
        return thread.querySelectorAll("[id^=post-]");
      });
    })
  );

  return posts;
};

const postMatchesRegex = async (
  title: string,
  body: string,
  regexes: string[]
) => {
  for (let i = 0; i < regexes.length; i++) {
    const compiledRegex = (await debounce(() => {
      return new RegExp(regexes[i]);
    })) as RegExp;

    if (title.match(compiledRegex)) {
      return true;
    }

    if (body.match(compiledRegex)) {
      return true;
    }
  }

  return false;
};

const getThreadAndPostIds = async (threads: Element[][], regexes: string[]) => {
  let threadIds: {
    [key: string]: string[];
  } = {};

  for (let i = 0; i < threads.length; i++) {
    for (let j = 0; j < threads[i].length; i++) {
      const postTitle = (await debounce(() => {
        return threads[i][j].querySelector(".post__title")?.textContent;
      })) as string;

      const postBody = (await debounce(() => {
        return threads[i][j].querySelector(".post__message")?.textContent;
      })) as string;

      const matchesRegex = await postMatchesRegex(postTitle, postBody, regexes);

      if (matchesRegex) {
        const threadId = threads[i][j].parentElement?.id.replace("thread-", "");

        threadIds[threadId!]
          ? threadIds[threadId!]!.push(threads[i][j].id.replace("post-", ""))
          : (threadIds[threadId!] = [threads[i][j].id.replace("post-", "")]);
      }
    }
  }

  return threadIds;
};

const prepareData = ({
  threadIds,
  reason
}: {
  threadIds: {
    [key: string]: string[];
  };
  reason: string;
}) => {
  let data = [];

  for (let threadId in threadIds) {
    data.push({
      board: (window as any).thread.board,
      thread: threadId,
      posts: threadIds[threadId].join(", "),
      comment: reason,
      task: "report"
    });
  }

  return data;
};

const sendData = async (reportData: any[]) => {
  const responses = await Promise.all(
    reportData.map((data) => {
      return fetch("/makaba/makaba.fcgi?json=1", {
        method: "POST",
        body: JSON.stringify(data)
      });
    })
  );

  return responses;
};

const report = async (reason: string, regexes: string[]) => {
  const threads = (await queryThreads()) as Element[];
  const threadPosts = (await queryPosts(threads)) as Element[][];
  const threadIds = await getThreadAndPostIds(threadPosts, regexes);
  const reportData = await prepareData({ threadIds, reason });
  const responses = await sendData(reportData);

  return responses;
};

export default report;
