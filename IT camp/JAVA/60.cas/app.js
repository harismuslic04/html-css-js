const getVideos = async () => {
  const response = await fetch(
    `https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`
  );
  const data = await response.json();
  console.log(data);
  const playerId = data.Player.id;
  console.log(playerId);
  const videos = data.Video[0];
  console.log(videos);
};
getVideos();

const getUsers = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await data.json();
  console.log(users);
};

getUsers(5);
