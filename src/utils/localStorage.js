export const getSavedStoriesIds = () => {
    const savedStoryIds = localStorage.getItem('saved_stories')
    ? JSON.parse(localStorage.getItem('saved_stories'))
    : [];

    return savedStoryIds;
};

export const saveStoryIds = (storyIdArr) => {
    if (storyIdArr.length) {
        localStorage.setItem('saved_stories', JSON.stringify(storyIdArr));
    } else {
        localStorage.removeItem('saved_stories');
    }
};

export const removeStoryId = (StoryId) => {
    const savedStoryIds = localStorage.getItem('saved_stories')
    ? JSON.parse(localStorage.getItem('saved_stories'))
    :null;

    if (!saveStoryIds) {
        return false;
    }
    const updatedSavedStoryIds = savedStoryIds?.filter((savedStoryId) => savedStoryId !== StoryId);
    localStorage.setItem('saved_stories', JSON.stringify(updatedSavedStoryIds));

    return true;
};