/* eslint-disable no-console */
import app from './app';

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server in running on ${PORT}`);
});
