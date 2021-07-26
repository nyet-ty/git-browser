import axios from 'axios'

export const getRepositoryList = async (username: string) => {
    const { data } = await axios(`https://api.github.com/users/${username}/repos`)
    return data
}

export const getRepositoryReadMe = async (username: string, repository: string) => {
    const { data } = await axios(`https://raw.githubusercontent.com/${username}/${repository}/master/README.md`)
    return data
}