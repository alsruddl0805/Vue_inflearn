import axios from 'axios';

/*
service 구현 패턴
1. Request & Response와 관련된 기본 설정
2. 공통 API 함수 정리
3.
*/
const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`)
}

function fetchList(name) {
    return axios.get(`${config.baseUrl}${name}/1.json`)
}

function fetchUserInfo(userId) {
    return axios.get(`${config.baseUrl}/user/${userId}.json`)
}

function fetchAskInfo(askId) {
    return axios.get(`${config.baseUrl}/item/${askId}.json`)
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskInfo, fetchList }