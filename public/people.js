
const userInfoLimit = 9;

// getUser
async function getUser(searchedUser = null){
  let res= {};
  if(searchedUser){
    res = searchedUser;
  }
  else{
    res = await axios.get('/user');
  }
  const users = res.data;
  console.log(users);
  const userList = document.querySelector('#user-list');
  userList.innerHTML = '';
  users.map( (user)=>{
    console.log(user);
    const userKeys = Object.keys(user).slice(0,userInfoLimit);
    console.log(userKeys);
    // console.log(userKeys[0]);
    // console.log(userKeys[1]);
    // console.log(userKeys[2]);
    // console.log(userKeys[3]);
    // console.log(userKeys[4]);
    // console.log(userKeys[5]);

    const userInfoContainer = document.createElement('div');
    userInfoContainer.className = 'userInfoContainer';
    // <h4>{{user.id}}</h4>
    const userId= document.createElement('h4');
    let key = userKeys[0];
    userId.innerText = user[key];
    // <div class="face"></div>
    const userFace = document.createElement('div');
    userFace.className += 'face';
    // <h2 class="name">{{user.name}}</h2>
    const userName = document.createElement('h2');
    key = userKeys[1];
    console.log(key);
    console.log(user[key]);
    
    userName.innerText = user[key];
    userName.className = 'name';
    // <p>{{user.phone_number}}</p>

    const userInfo = document.createElement('h2');
    key = userKeys[3];
    userInfo.innerText = user[key];
    // <p>{{user.phone_number_family}}</p>
    const userPIC = document.createElement('h2')
    key = userKeys[4];
    userPIC.innerText = user[key];
    // <p>{{user.phone_number_house}}</p>
    const userVehicleType = document.createElement('h2')
    key = userKeys[5];
    userVehicleType.innerText = user[key];



    const phoneNumber = document.createElement('h2');
    key = userKeys[6];
    phoneNumber.innerText = user[key];
    // <p>{{user.phone_number_family}}</p>
    const phoneNumberFamily = document.createElement('h2')
    key = userKeys[7];
    phoneNumberFamily.innerText = user[key];
    // <p>{{user.phone_number_house}}</p>
    const phoneNumberHouse = document.createElement('h2')
    key = userKeys[8];
    phoneNumberHouse.innerText = user[key];





    const btnContainer = document.createElement('div');
    
    //delete
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '??????';
    deleteBtn.addEventListener("click", async (e)=>{
      console.log(e.path[2].querySelector('.name').innerText);
      const data = e.path[2].querySelector('.name').innerText;
      await axios.post('/user/delete', {data});
      getUser();
    });
    const editBtn = document.createElement('button');
    editBtn.innerText = '??????';
    editBtn.addEventListener('click',(e)=>{
    })
    editBtn.onClick = (e)=>{
      console.log(e);
    }


    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(editBtn);
    
    userInfoContainer.appendChild(userId);
    userInfoContainer.appendChild(userFace);
    userInfoContainer.appendChild(userName);
    userInfoContainer.appendChild(userInfo);
    userInfoContainer.appendChild(userPIC);
    userInfoContainer.appendChild(userVehicleType);
    userInfoContainer.appendChild(phoneNumber);
    userInfoContainer.appendChild(phoneNumberFamily);
    userInfoContainer.appendChild(phoneNumberHouse);
    userInfoContainer.appendChild(btnContainer);

    userList.appendChild(userInfoContainer);
  })
  
}
window.onload = function(){
  getUser(null);
}; // onload?????? ?????? ?????? ??????????????? ??????????????? ????????? ?????? ????????? ????????????.

// register
// user-form 
const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', async (e)=>{
    const inputInfoNum = 8; // ????????? form??? ?????? ?????? ?????? ??????(???????????? ???????????? ?????? ??? ????????? ???)
    e.preventDefault();
    console.log(e);
    const username = e.target.username.value;
    const phoneNumber = e.target.phoneNumber.value;

    // ??? ?????? refactoring ????????????. 
    // ?????? ???????????? ??? ?????? ??????????????? ?????? ?????? ????????? ?????? ????????????.
    // db?????? ??????????????????. // ????????? ????????? ?????? ????????? ??????????????? ?????? null??? ??????
    if (!username) {
      return alert('????????? ???????????????');
    }
    if(!phoneNumber){
      return alert('????????? ???????????????');
    }
    
    let userData = {};
    for (let i = 1; i<=inputInfoNum; i++){
      userData[e.target[i].id] = e.target[i].value;
    }
    console.log(userData);

    try {
      await axios.post('/user/', {data : userData});
    } catch (err) {
      console.error(err);
    }
    
    e.target.username.value = '';
    e.target.phoneNumber.value = '';
    e.target.phoneNumberFamily.value = '';
    e.target.phoneNumberHouse.value = '';

    getUser();
  })

// user-form input setting
// ????????? ???????????? ?????? ??????.!!
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

setInputFilter(document.getElementById("phoneNumber"), function(value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });

setInputFilter(document.getElementById("phoneNumberFamily"), function(value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });
setInputFilter(document.getElementById("phoneNumberHouse"), function(value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });

// ?????? ??????
document.querySelector('#userSearchContainer').addEventListener('submit', (e)=>{
  e.preventDefault();
});
document.querySelector('#userSearchContainer').querySelector('#userSearchInput').addEventListener('input', async (e)=>{
  console.log(e.target.value);
  const userName = e.target.value;
  try{
    const searchedUser =  await axios.get(`/user/search?name=${userName}`);
    getUser(searchedUser);

  } catch(err){
    console.log(err);
  }
});

// dropdown ??????

document.querySelector('#vehicleTypeSangdong').addEventListener('click',async(e)=>{
  console.log(e.target.innerText);
  const userName = e.target.innerText;

  try{
    const searchedUser =  await axios.get(`/user/search?vehicleType=${userName}`);
    getUser(searchedUser);

  } catch(err){
    console.log(err);
  }

});

document.querySelector('#userPICJun').addEventListener('click',async(e)=>{
  console.log(e.target.innerText);
  const userName = e.target.innerText;

  try{
    const searchedUser =  await axios.get(`/user/search?userPIC=${userName}`);
    getUser(searchedUser);

  } catch(err){
    console.log(err);
  }

});

document.querySelector('#userPICCaptain').addEventListener('click',async(e)=>{
  console.log(e.target.innerText);
  const userName = e.target.innerText;

  try{
    const searchedUser =  await axios.get(`/user/search?userPIC=${userName}`);
    getUser(searchedUser);

  } catch(err){
    console.log(err);
  }

});


