const skills = [
    {id: 123456, skill: 'JavaScript'},
    {id: 345678, skill: 'HTML'},
    {id: 412298, skill: 'CSS'}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}