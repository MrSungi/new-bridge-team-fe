const api = {
  get: (_, response) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() > 0.7) {
          reject(new Error('Ooops'));
        } else {
          resolve(response);
        }
      }, 1200)
    ),
};

export default api;
