function signup(signupInfo= {
      email: "dragonite@mail.com",
      username: "快龍",
      password: "wda@123",
      gender: "female",
      user_birth: "2023-09-13",
      user_avatar: "userURL",
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

function addKid(kidInfo= {
      "userId": 99,
      "kid_name": "迷你龍",
      "kid_birth": "2012-09-17",
      "ini_height": 123.1,
      "ini_weight": 36.1,
      "mom_height": 165.1,
      "dad_height": 176.1,
      "kid_avatar": "kidURL",
    }){
  kidInfo.userId = kidInfo.userId?kidInfo.userId:updateInfo.id;    
  kidInfo.created_at = getDatetime();
  kidInfo.modified_time = getDatetime();
  kidInfo.isExist = "Y";
  axios.post(`${url}/kids`,kidInfo)
  .then(function (response){
    console.log(response.data);
    addKidData = response.data;
  })
  .catch(function (error){
    console.log(error.response);
    addKidData = error.response;
  })
}