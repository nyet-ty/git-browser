import axios from 'axios'

export const getRepositoryList = async (username: string) => {
    try {
        const { data } = await axios(`https://api.github.com/users/${username}/repos`)
        return data
    }
    catch (error) {
        if (error.response.status === 404) return `No user with username ${username} finded`
        else return `Error ${error.response.status}`
    }
}

export const getRepositoryReadMe = async (username: string, repository: string) => {
    try {
        const { data } = await axios(`https://raw.githubusercontent.com/${username}/${repository}/master/README.md`)
        return data
    }
    catch (error) {
        if (error.response.status === 404) return `Repository ${repository} has no README.md file`
        else return `Error ${error.response.status}`
    }
}