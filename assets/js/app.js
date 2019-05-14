// ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// 追加ボタンがクリックされた時
$('#add').click(function() {
    // 入力欄を取得
    let inputTask = $('#task');

    // 入力値を取得
    let task = inputTask.val();

    // 入力値が空かチェック
    if (task == '') {
        // 入力値が空の場合、処理を中断
        return;
    }

    // liタグの作成
    let li = $('<li>');

    // liに入力値を設定
    li.text(task);

    // divの作成
    let buttons = $('<div>');
    buttons.addClass('buttons');

    // buttonの作成
    // 削除ボタン
    let remove = $('<button>');
    remove.addClass('remove');
    remove.html(removeIcon);

    // 完了ボタン
    let done = $('<button>');
    done.addClass('done');
    done.html(doneIcon);

    // divにボタンを追加
    buttons.append(remove);
    buttons.append(done);

    // liにdivを追加
    li.append(buttons);

    // NotYetのulにliを追加
    $('#not-yet').prepend(li);

    // 入力欄のリセット
    inputTask.val('');
});