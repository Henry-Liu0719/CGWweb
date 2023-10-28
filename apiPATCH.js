function updatePassword(updateInfo={
  password:"wda@123"
}){
  updateInfo.id = userInfo.id.toString();
  axios.patch(`${url}/600/users/${userInfo.id.toString()}`,updateInfo,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response);
    _response = response;
  })
  .catch(function (error){
    console.log(error.response);
    _response = error.response;
  })
}