const roles = ['user', 'admin', 'patient', 'doctor'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'getPatients', 'managePatients']);
roleRights.set(roles[3], ['getPatients', 'managePatients']);

module.exports = {
  roles,
  roleRights,
};
