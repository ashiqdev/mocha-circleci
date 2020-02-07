const grabData = require('./app/grab-data');

grabData().then((data) => {
  console.log(data);
});
