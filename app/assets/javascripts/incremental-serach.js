$(document).on('turbolinks:load', function(){

  var searchResult = $('.user-search-result');

  function buildHTML(user){
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>
    `
    searchResult.append(html);
  };

  function NoUser(){
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">一致するユーザーが見つかりませんでした。</p>
    </div>
    `
    searchResult.append(html);
  };
  
  function search(input){
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { username: input },  //ここでparamsを送っている。 だからviewのinputにname: ""を指定しなくてもコントローラーでparams[:username]wを受ける事ができる。
      dataType: 'json'
    })
    .done(function(users){
      console.log(users)
      if(users.length !== 0) {
        searchResult.empty();
        users.forEach(function(user){
          buildHTML(user);
        });
      } else {
        NoUser();
      }
    })
    .fail(function(){
      alert('error');
    })
  };

  $('#user-search-field')
    .on('keyup', function(e){
      e.preventDefault();
      var input = $(this).val();
      if (input) {
        search(input);
      } else {
        searchResult.empty();
      }   
    });
});

$(document)
  .on('click', ".chat-group-user__btn--add", function(){
    var userName = $(this).data('user-name');
    var userId = $(this).data('user-id');
    var html2 = `
    <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${userId}'>
      <p class='chat-group-user__name'>${userName}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>
    `
    $(this).parent().hide();
    $('#chat-group-users').append(html2);

  });
$(document)
  .on('click', '.js-remove-btn', function(){
    $(this).parent().remove();
  });