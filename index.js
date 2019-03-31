window.onload = function(){
  let ele = document.getElementById('js--bcrypt-btn');
  ele.addEventListener("click", function(){
    //let text = '';
    //let eleDefault = document.getElementsByClassName('js--default');

    bcryptProcess();

    //eleArrのi番目のelementのclassを変更し、delayミリ秒待機する
    function eraseElements(eleArr, i, delay) {
      let text = '';
      return new Promise(resolve => {
        if(eleArr.length > i){
          //is--changedクラスを付与して透明化させる（別途CSSで記述）
          eleArr[i].classList.add('is--changed');
          //消去した要素の文字列
          text += eleArr[i].textContent
          if(eleArr[i].className.indexOf('is--last-content') != -1){
            parentSearch(eleArr[i],'js--default-section')
          }
          setTimeout(() => resolve(text), delay);

          //baseEleの親要素の中から一番近いtargetClassの要素を探索する
          function parentSearch(baseEle, targetClass) {
            let parents = [];
            //const parentElem = function (ele) {
            let parentElem = ele => {
              if (ele.parentNode) {
                if(ele.parentNode.className){
                  if(ele.parentNode.className.indexOf(targetClass) != -1){
                    //ele.parentNode.style.display = 'none';
                    setTimeout(() => {ele.parentNode.style.display = 'none';}, delay + 100)
                  }
                }
                parents.push(ele.parentNode);
                parentElem(ele.parentNode);
              }
            };
            parents['prevObject'] = baseEle;
            parentElem(baseEle);
          };
        }
      });
    }
    


    
    async function insertText() {
      let eleDefault = document.getElementsByClassName('js--default');
      let text = '';
      for(let i=0;i<eleDefault.length;i++){
        //eleDefaultの内部要素を消して待機する
        text += await eraseElements(eleDefault, i, 400);
        //最後のforループでの処理
        if(i === eleDefault.length - 1){
          let ele = document.getElementById('js--bcrypt-container');
          let html = '';
          for(let j=0;j<text.length;j++){
            html += '<span class="js--char">' + text[j] + '</span>'
          }
          ele.innerHTML = html;
          ele.classList.add('is--changed');

          return ele;
        }
      }
    }

    
    async function bcryptProcess(){
      let resultEle = await insertText();
      //変換先の文字列候補
      let randomCharsData = "abcdefghijklmnopqrstuvwxyz0123456789#$&%?!@";
      let ele = resultEle.getElementsByClassName('js--char');
      for(let i=0; i<ele.length; i++){
        setTimeout(() => {
          let randomChar = randomCharsData[Math.floor(Math.random()*randomCharsData.length)];
          ele[i].textContent = randomChar;
          //それっぽく見せるために100回変換処理を行う
          for(let j=0;j<100;j++){
            let randomChar = randomCharsData[Math.floor(Math.random()*randomCharsData.length)];
            ele[i].textContent = randomChar;
          }
          
          //最後のforループでの処理
          if(i == ele.length - 1){
            let bcryptBtnEle = document.getElementById('js--bcrypt-btn');
            let contactBtnEle = document.getElementById('js--contact-btn');
            bcryptBtnEle.classList.add('is--changed');
            setTimeout(() => {
              contactBtnEle.classList.add('is--changed');
            }, 1100)
          }
          
        },500);
      }
    }
    
  });
}