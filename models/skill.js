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
    getOne,
    create
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }