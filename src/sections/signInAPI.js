export default {
    login: data => {
      const {username, password} = data;
      return new Promise((resolve, reject) => {
        if (username === "bleronatmava" && password === "123456") {
          resolve({
            username,
            name: "Blerona",
            surname: "Tmava",
            lastLogin: new Date("04/08/2019 13:20:22")
          });
        } else {
          reject("Incorrect password or login!");
        }
      });
    }
  };
  