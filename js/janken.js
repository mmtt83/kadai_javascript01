//buttonをクリックしたら関数がスタート
$('a').on('click', function(){
    //audioファイルが再生
    $('#play-button').get(0).play();

        //カウントスタート
        let count = 0;
        const countUp = function() {
        console.log(count++);
        }
        const intervalId = setInterval(function(){
            countUp();
            if(count > 5){
                clearInterval(intervalId);
        }}, 1000);

        
        $(function(){
            if (count < 2){
                //class="btn"のどれかをクリックした時の処理
                $('.btn').on('click', function(){
                    //クリックしたbtnのdata-scoreの値を取得。userに代入。
                    let user = $(this).attr('data-score');
                    console.log('data-score');
                    //PCの手をランダムで作成
                    let pc = Math.floor(Math.random()*3);
            
                    //PCの手の画像ファイル名の配列
                    let pcJanken = ['gu_pc.png', 'choki_pc.png', 'pa_pc.png'];
            
                    //ユーザーの手の画像ファイル名を配列
                    let userJanken = ['gu.png', 'choki.png', 'pa.png'];
            
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
                });
            }; //end if(count < 2)

            /* 動かない */
            /* やりたいこと：countが2〜5秒の間に手を選択した場合は
               「あと出し」と判定されメッセージを出す。
               5秒以上経過しても下のメッセージに切り替わらない。 */
            if (count >=2 && count < 5){
                $('.btn').on('click', function(){
                result='あと出しだしはダメ！'+'<img src="img/atodasi.png">';
            })}; //end if (count >=2 && count <5)
    
            /* 動かない */
            /* やりたいこと：countが6秒以降は、「反応なし」と判定され
               手を選択するようメッセージを出す。 */
            if(count == 5){
                result='何か手を選択してね'+'<img src="img/teerande.png">';
                //勝負の結果をresultに表示
                $("#result").html(result);
            }; //end if(count >= 5)

        });
        
        
});