
const ACCESS_TOKEN = "token"

function getSession() {
    const token = localStorage.getItem(ACCESS_TOKEN)
    return `${token}`;
}

function setSession(data: string) {
    localStorage.setItem(ACCESS_TOKEN, data)
}

export { getSession, setSession }