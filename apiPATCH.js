function updatePassword(){
  axios.patch(`${url}/600/users/${updateInfo.id.toString()}`,updateInfo,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    token = response.data.accessToken;
    console.log(response.data); 
  })
  .catch(function (error){
    console.log(error.response);
  })
}