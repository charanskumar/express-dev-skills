const skills = [
    {id: 123456, skill: 'JavaScript', learned: true},
    {id: 345678, skill: 'HTML', learned: true},
    {id: 412298, skill: 'CSS', learned: true},
    {id: 678965, skill: 'Python', learned: false},
    {id: 678896, skill: 'React', learned: false},
    {id: 404247, skill: 'MongoDB', learned: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
}