export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user.username;

export const selectEmail = state => state.auth.user.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectId = state => state.auth.user.id;

export const selectIsLoading = state => state.auth.isLoading;

export const selectBalance = state => state.auth.user.balance;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectEmail,
  selectToken,
  selectIsLoading,
  selectBalance,
};
export default authSelectors;
