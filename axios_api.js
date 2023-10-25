function apiGET(query){
    axios.get(`${url}${query}`)
  .then(function (response){
    console.log(response.data);
  })
  .catch(function (error){
    console.log(error.response);
  })
}

function getKids(){
  axios.get(`${url}/kids`)
  .then(function(response){
    console.log(response);
  })
}



function signup(){
  axios.post(`${url}/signup`,signupInfo)
  .then(function (response){
    console.log(response.data);
  })
  .catch(function (error){
    console.log(error.response);
  })
}

function login(email='pikachu@mail.com',password='wda@123'){
  axios.post(`${url}/login`,{
    email:email,
    password:password
  })
  .then(function (response){
    token = response.data.accessToken;
    updateInfo.id = response.data.user.id;
    console.log(response.data);
  })
  .catch(function (error){
    console.log(error.response);
  })
}

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
function getMemberInfo(){
  // login();
  axios.get(`${url}/600/users/${updateInfo.id.toString()}?_embed=kids`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    // token = response.data.accessToken;
    // console.log(response.data);
    // return response.data;
    let namesOfKids = [];
    response.data.kids.forEach(element => {
      namesOfKids.push(element.kid_name);
    });
    // console.log(kidsOfMember);
    let userInfo = response.data;
    delete userInfo.password;
    let kidsOfMember = userInfo.kids;
    delete userInfo.kids;
    let obj={
      userInfo,
      kidsOfMember
      // namesOfKids
    }
    console.log(obj);
    return obj;
    
  })
  .catch(function (error){
    console.log(error.response);
  })
}