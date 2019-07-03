module.exports = [{
method: 'GET',
path:'/greetings',
handler(request, h) {
return `<b>hello readers!</b>`;
}
}]
