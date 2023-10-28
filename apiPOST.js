function signup(signupInfo= {
      email: "pikachu@mail.com",
      username: "皮卡丘",
      password: "wda@123",
      gender: "female",
      user_birth: "2023-09-13",
      user_avatar: "userURL",
      created_at: getDatetime(),
      modified_time: getDatetime(),
      isExist: "Y"
    }){
  signupInfo.created_at = getDatetime();
  signupInfo.modified_time = getDatetime();
  signupInfo.isExist = "Y";
  axios.post(`${url}/signup`,signupInfo)
  .then(function (response){
    console.log(response.data);
    signupData = response.data;
  })
  .catch(function (error){
    console.log(error.response);
    signupData = error.response;
  })
}

function login(email='Charizard@mail.com',password='wda@123'){
  axios.post(`${url}/login`,{
    email:email,
    password:password
  })
  .then(function (response){
    token = response.data.accessToken;
    updateInfo.id = response.data.user.id;
    console.log(response.data);
    getUserInfo();

  })
  .catch(function (error){
    console.log(error.response);
  })
}