import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getFormInfo() {
  return request('http://localhost:3000/users/form');
}
