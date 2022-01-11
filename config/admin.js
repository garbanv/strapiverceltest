module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9956c34a26b8fdebe65d6170cc3e5a53'),
  },
});
