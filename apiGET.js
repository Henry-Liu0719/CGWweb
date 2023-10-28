function apiGET(route='/kids/1'){
    axios.get(`${url}${route}`)
  .then(function (response){
    console.log(response);
    _response = response;
  })
  .catch(function (error){
    console.log(error.response);
    _response=error.response;
  })
}

function getUserInfo(){
  // login();
  axios.get(`${url}/600/users/${userInfo.id.toString()}?_embed=kids`,{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })
  .then(function (response){
    userInfo = response.data;
    console.log(response);
    _response = response;
  })
  .catch(function (error){
    console.log(error.response);
    _response=error.response;
  })
}
function getRecentSleepTime(kidNum=0){
  // login();
  axios.get(`${url}/600/sleep_records?kidId=${userInfo.kids[kidNum].id.toString()}&userId=${userInfo.id.toString()}&_sort=record_date&_order=desc&_limit=7`,{
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
    _response=error.response;
  })
}
function getSleepTimeByMonth(kidNum=0,year=0,month=0){
  // login();
  axios.get(`${url}/600/sleep_records?kidId=${userInfo.kids[kidNum].id.toString()}&record_date_gte=${getMonthDate('firstDay',year,month)}&record_date_lte=${getMonthDate('lastDay',year,month)}&_sort=record_date&_order=asc`,{
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
    _response=error.response;
  })
}
function getFoodRecordsByMonth(kidNum=0,year=0,month=0){
  // login();
  axios.get(`${url}/600/sleep_records?kidId=${userInfo.kids[kidNum].id.toString()}&_sort=record_date&_order=asc&record_date_gte=${getMonthDate('firstDay',year,month)}&record_date_lte=${getMonthDate('lastDay',year,month)}&_embed=breakfast_records&_embed=lunch_records&_embed=dinner_records`,{
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
function getMonthlyRecords(num = 1,kidNum=0){
  // login();
  axios.get(`${url}/600/monthly_records?kidId=${userInfo.kids[kidNum].id.toString()}&_sort=record_month&_order=desc&_limit=${num}`,{
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

async function tryApi() {
  try {
    const response = await axios.get(`${url}/600/users/${userInfo.id.toString()}?_embed=kids`,{
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