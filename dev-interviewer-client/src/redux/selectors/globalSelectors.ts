export const getIsLoading = (
  state:any,
) => state.questionsStore.isLoadingQuestions && state.tagsStore.isLoadingTags;

export const getIsDualError = (
  state:any,
):boolean => state.tagsStore.error && state.questionsStore.error;
