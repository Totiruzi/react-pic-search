import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 3MT1aDNTd6p1QOd0G2A6KTGXR454NCioVMK82aAgYTo',
  },
})