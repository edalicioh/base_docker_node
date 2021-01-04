const allowlist = [
  'http://localhost:3000',
];

export const corsOptions = {
  origin(origin, callback) {
    if (allowlist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Alloed by cors'));
    }
  },
};
