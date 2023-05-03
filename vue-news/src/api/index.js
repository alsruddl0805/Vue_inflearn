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

async function fetchList(name) {
    try {
        return await axios.get(`${config.baseUrl}${name}/1.json`)
    } catch(err) {
        console.log('err')
    }
}

async function fetchUserInfo(userId) {
    try {
        return await axios.get(`${config.baseUrl}/user/${userId}.json`)
    } catch(err) {
        console.log('err')
    }
}

async function fetchAskInfo(askId) {
    try {
        return await axios.get(`${config.baseUrl}/item/${askId}.json`)
    } catch(err) {
        console.log('err')
    }
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAskInfo, fetchList }