// ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// divの作成
// buttonの作成
// liにdivを追加

$('#add').click(function(){
  // 入力欄を取得
  let inputTask = $('#task');
  // 入力値を取得

  let task = inputTask.val();
  

  // 入力値が空の場合は中断

  if (task == '') {
    return;
  }
  // liタグの作成

  let li = $('<li>');
  // liに入力値を設定

  li.text(task);

  let buttons = $('<div>');
  buttons.addClass('buttons');
  
  //buttonの作成

  let remove = $('<button>');
  remove.addClass('remove');
  remove.html(removeIcon);

  let done = $('<button>');
  done.addClass('done');
  done.html(doneIcon);

  //buttonの追加

  buttons.append(remove);
  buttons.append(done);

  //liにdivの追加

  li.append(buttons);
  
  // NotYetのulにliを追加
  $('#not-yet').prepend(li);

  // 入力欄のリセット

  inputTask.val('');
}) 