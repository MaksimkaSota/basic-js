function getEmailDomain(email) {
  let index = email.lastIndexOf('@');
  return email.slice(index + 1);
}

module.exports = {
  getEmailDomain
};
