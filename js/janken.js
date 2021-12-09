function janken(user){
    //PCの手の画像ファイル名の配列
    let pcJanken = ['gu_pc.png', 'choki_pc.png', 'pa_pc.png'];

    //ユーザーの手の画像ファイル名を配列
    let userJanken = ['gu.png', 'choki.png', 'pa.png'];

    //PCの手をランダムで作成
    let pc = Math.floor(Math.random()*3);

    //ユーザーの手の画像を表示するimgタグをDOMから検索
    let userImg = document.getElementById("userImg");
    //上記で検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "img/" + userJanken[user];

    //PCの手の画像を表示するimgタグをDOMから検索
    let pcImg = document.getElementById("pcImg");
    //上記で検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "img/" + pcJanken[pc];

    console.log(user, 'user'); //ユーザーの手の出力確認
    console.log(pc, 'pc');     //PCの手の出力確認

    // let result = (function(){
    //     //ユーザーがグーを出した時の条件分岐
    //     if(user == 0 && pc == 0) return 'もう一回！';
    //     if(user == 0 && pc == 1) return '<img src="img/win01.png" width="300">' ;
    //     if(user == 0 && pc == 2) return '負けちゃった..';
    //     //ユーザーがチョキを出した時の条件分岐
    //     if(user == 1 && pc == 1) return 'もう一回！';
    //     if(user == 1 && pc == 2) return '勝った〜!!';
    //     if(user == 1 && pc == 0) return '負けちゃった..';
    //     //ユーザーがパーを出した時の条件分岐
    //     if(user == 2 && pc == 2) return 'もう一回！';
    //     if(user == 2 && pc == 0) return '勝った〜!!';
    //     if(user == 2 && pc == 1) return '負けちゃった..';
    // });

    let result = "";
    //ユーザーがグーを出した時の条件分岐
    if(user == 0 && pc == 0){
        result='もう一回！'+'<img src="img/draw01.png">';
    } 
    if(user == 0 && pc == 1) {
        result='勝った〜!! '+'<img src="img/win01.png">';
    }
    if(user == 0 && pc == 2) {
        result='負けちゃった..'+'<img src="img/lose01.png">';
    }
    //ユーザーがチョキを出した時の条件分岐
    if(user == 1 && pc == 1){
        result='もう一回！'+'<img src="img/draw01.png">';
    }
    if(user == 1 && pc == 2){
        result='勝った〜!!'+'<img src="img/win01.png">';
    }
    if(user == 1 && pc == 0){
        result='負けちゃった..'+'<img src="img/lose01.png">';
    }
    //ユーザーがパーを出した時の条件分岐
    if(user == 2 && pc == 2){
        result='もう一回！'+'<img src="img/draw01.png">';
    }
    if(user == 2 && pc == 0){
        result='勝った〜!!'+'<img src="img/win01.png">';
    }
    if(user == 2 && pc == 1){
        result='負けちゃった..'+'<img src="img/lose01.png">';
    }

    //勝負の結果をresultに表示
    $("#result").html(result);

    
}