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
function getUserInfo(){
  // login();
  axios.get(`${url}/600/users/${updateInfo.id.toString()}?_embed=kids`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response.data);
    data = response.data;
    kidsList = response.data.kids;
    userInfo = response.data;
  })
  .catch(function (error){
    console.log(error.response);
  })
}
function getRecentSleepTime(kidNum=0){
  // login();
  axios.get(`${url}/600/daily_records?kidId=${data.kids[kidNum].id.toString()}&userId=${data.id.toString()}&_sort=record_date&_order=desc&_limit=7`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response.data);
    recentSleepTime = response.data;
  })
  .catch(function (error){
    console.log(error.response);
  })
}
function getSleepTimeByMonth(kidNum=0,year=0,month=0){
  // login();
  axios.get(`${url}/600/daily_records?kidId=${data.kids[kidNum].id.toString()}&record_date_gte=${getMonthDate('firstDay',year,month)}&record_date_lte=${getMonthDate('lastDay',year,month)}&_sort=record_date&_order=asc`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response.data);
    sleepTimeByMonth = response.data;
  })
  .catch(function (error){
    console.log(error.response);
  })
}
function getFoodRecordsByMonth(kidNum=0,year=0,month=0){
  // login();
  axios.get(`${url}/600/daily_records?kidId=${data.kids[kidNum].id.toString()}&_sort=record_date&_order=asc&record_date_gte=${getMonthDate('firstDay',year,month)}&record_date_lte=${getMonthDate('lastDay',year,month)}&_embed=breakfast_records&_embed=lunch_records&_embed=dinner_records`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response.data);
    foodRecordsByMonth = response.data;
  })
  .catch(function (error){
    console.log(error.response);
  })
}
function getMonthlyRecords(num = 1,kidNum=0){
  // login();
  axios.get(`${url}/600/monthly_records?kidId=${data.kids[kidNum].id.toString()}&_sort=record_month&_order=desc&_limit=${num}`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    console.log(response.data);
    monthlyRecords = response.data;
  })
  .catch(function (error){
    console.log(error.response);
  })
}

async function tryApi() {
  try {
    const response = await axios.get(`${url}/600/users/${updateInfo.id.toString()}?_embed=kids`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
    console.log(response.data);
    return response.data
    
   
  } catch (error) {
    console.log(error.response);
    throw error; // 抛出错误以便处理错误情况
  }
}

async function main() {
  try {
    const result = await tryApi();
    console.log("Promise 已解决，结果为: ", result);
  } catch (error) {
    console.error("Promise 已拒绝，错误为: ", error);
  }
}