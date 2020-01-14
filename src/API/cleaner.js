
export const getWeeklyComicsCleaner = (comics) => {
  const cleanedData = comics.map(comic => {
    return {
      id: comic.id,
      cover: comic.thumbnail,
      title: comic.title
    }
  });
  return cleanedData;
}

export const getComicIssueCleaner = (comic) => {
  const cleanedData = comic.map(issue => {
    return {
      cover: issue.thumbnail,
      title: issue.title,
      urls: issue.urls,
      pageCount: issue.pageCount,
      issueNumber: issue.issueNumber,
      dates: issue.dates,
      prices: issue.prices,
      description: issue.description,
      creators: issue.creators.items,
    }
  })
  return cleanedData;
}

export const getEventsCleaner = (events) => {
  const cleanedData = events.map(event => {
    return {
      title: event.title,
      id: event.id,
      urls: event.urls,
      description: event.description,
      thumbnail: event. thumbnail
    }
  });
  return cleanedData;
}