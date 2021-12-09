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

    let result = (function(){
        //ユーザーがグーを出した時の条件分岐
        if(user == 0 && pc == 0) return '引き分け';
        if(user == 0 && pc == 1) return '勝ち';
        if(user == 0 && pc == 2) return '負け';
        //ユーザーがチョキを出した時の条件分岐
        if(user == 1 && pc == 1) return '引き分け';
        if(user == 1 && pc == 2) return '勝ち';
        if(user == 1 && pc == 0) return '負け';
        //ユーザーがパーを出した時の条件分岐
        if(user == 2 && pc == 2) return '引き分け';
        if(user == 2 && pc == 0) return '勝ち';
        if(user == 2 && pc == 1) return '負け';
    });

    //勝負の結果をresultに表示
    document.getElementById("result").textContent =result();
    
}