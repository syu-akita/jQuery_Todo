$('#add').click(function(){
  // 入力欄を取得
  let inputTask = $('#task');
  // 入力値を取得

  let task = inputTask.val();
  console.log(task);
  // liタグの作成

  let li = $('<li>');
  // liに入力値を設定

  li.text(task);
  // NotYetのulにliを追加
  $('#not-yet').prepend(li);
}) 