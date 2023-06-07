const config = {
  HOST_API: 'https://api.dev.elearning.viziple.com/',
  COMPANY: 101,
  TOKEN: 'token',
  itemsCountPerPage: 10,
};
export default config;

export const RESPONSE_STATUS = {
  SUCESS: 200,
  CREATE_SUCCESS: 201,
  NOT_FOUND: 404,
  INTERVAL_SERVER: 500,
  FORBIDDEN: 403,
  ACCESS_DENIED: 401,
};

export const INVALID_TOKEN = 'INVALID_TOKEN';

export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const URL_UPLOAD = `${process.env.REACT_APP_API_URL}files/upload/`;
export const URL_DOWNLOAD = `${process.env.REACT_APP_API_URL}files/download/`;
export const URL_UPLOAD_LESSON = `${process.env.REACT_APP_API_URL}files/uploads/lessons`;

export const DATE_TIME_FORMAT = 'DD/MM/YYYY';


export const OPERATOR = ['+', '-', '*', '^', '/', '(', ')'];
export const API_MEDIA = process.env.REACT_APP_MEDIA_URL;
