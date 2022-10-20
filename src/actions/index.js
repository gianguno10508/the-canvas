export const GET_DATA_LIFE_STYLE = 'GET_DATA_LIFE_STYLE';
export const GET_DATA_BUSINESS = 'GET_DATA_BUSINESS';
export const DATA_USER_LOGIN = 'DATA_USER_LOGIN';

export const actSelectDarkMode = (data) => {
  return {
    type: 'GET_DARK_MODE',
    data,
  };
};

export const actLifeStyle = (data) => {
  return {
    type: GET_DATA_LIFE_STYLE,
    data,
  }
}

export const actUserLogin = (data) => {
  return {
    type: DATA_USER_LOGIN,
    data,
  }
}