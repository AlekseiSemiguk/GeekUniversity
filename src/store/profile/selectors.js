
const getUserName = (state) => state.profile.username || 'noname';

export const profileSelectors = {
  getUserName
}