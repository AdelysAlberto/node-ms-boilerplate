//
const authRestrict = (req, res, next) => {
  // Extract the header.
  const { authorization } = req.headers;

  // Reject if the header is'nt present.
  if (!authorization) {
    res.status(403).json({ message: 'Access denied' });
  }
  next();
};

module.exports = {
  authRestrict
};
