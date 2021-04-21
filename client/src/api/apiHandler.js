const useApiHandler = (url, method, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default useApiHandler;
