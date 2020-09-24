
export default function dateFilter(value) {
    const options = {
        day:'2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}