
       // let hehi = ["fguyguytguytgy?", "shhhhhhhhhh?"];
      //  let coolhehi = ["shh", "shhh"];
      //  let hehevar = document.getElementById("hehe");
  //  function megaheh () {
     //   for(let i = 0; i < hehi.length; i++){

         //    let heh = prompt(hehi[i],'');

          //   hehevar.innerHTML += "<div class ='hans-" + i + "'>" + heh + "</div>";

        //     if (heh == coolhehi[i]){
         //       hehevar.innerHTML += "You're goddamn right";
         //   } else {
         //       hehevar.innerHTML += "Ты што, ябацька?";
          //  }
     //   } //document.write(heh);
        /*let heh2 = prompt('pytanne','');
        console.log(heh2);*/
  //  }


    // Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      }
  
      function showCover() {
        let coverDiv = document.createElement('div');
        coverDiv.id = 'cover-div';
  
        // убираем возможность прокрутки страницы во время показа модального окна с формой
        document.body.style.overflowY = 'hidden';
  
        document.body.append(coverDiv);
      }
  
      function hideCover() {
        document.getElementById('cover-div').remove();
        document.body.style.overflowY = '';
      }
  
      function showPrompt(text, callback) {
        showCover();
        let form = document.getElementById('prompt-form');
        let container = document.getElementById('prompt-form-container');
        document.getElementById('prompt-message').innerHTML = text;
        form.text.value = '';
  
        function complete(value) {
          hideCover();
          container.style.display = 'none';
          document.onkeydown = null;
          callback(value);
        }
  
        form.onsubmit = function() {
          let value = form.text.value;
          if (value == '') return false; // игнорируем отправку пустой формы
  
          complete(value);
          return false;
        };
  
        form.cancel.onclick = function() {
          complete();
        };
  
        document.onkeydown = function(e) {
          if (e.key == 'Escape') {
            complete();
          }
        };
  
        let lastElem = form.elements[form.elements.length - 1];
        let firstElem = form.elements[0];
  
        lastElem.onkeydown = function(e) {
          if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
          }
        };
  
        firstElem.onkeydown = function(e) {
          if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
          }
        };
  
        container.style.display = 'block';
        form.elements.text.focus();
      }
  
  
  
  
  let hehi = ['show-button',"show-butto","show-butt","show-but","show-bu","show-b", "show-", "show", "sho", "sh"];
  let coolhehi = [
    'Вызначце від акалічнасці,<br> якая адказвае на пытанні<br> ДЗЕ? КУДЫ? АДКУЛЬ?',
    'Век пражыў, а розуму не нажыў.<br>ВЫПІШЫЦЕ ГРАМАТЫЧНУЮ АСНОВУ СКАЗА',
    'ВЫПІШЫЦЕ ДАПАЎНЕННІ:<br>Народныя думы і казкі давалі<br> мне сілы нямала.',
    'Вызначце від сувязі слоў у словазлучэнні:<br> ЧЫТАЦЬ ЛЕЖАЧЫ',
    'ВЫПІШЫЦЕ ЗВАРОТАК:<br> Эх, досвітак маленства, лета!<br>Табой навек душа сагрэта!',
    'ВЫПІШЫЦЕ ПРЫДАТКІ:<br>Злева ад дарогі стаяў<br> домік-прыгажун.',
    'ВЫПІШЫЦЕ СКАЗ, ПАСТАЎЦЕ ЗНАКІ ПРЫПЫНКУ:<br>Багата родная ты мова.',
    'ВЫПІШЫЦЕ АЗНАЧЭННІ:<br>Прыйшла пара вучыцца мове роднай.',
    'ЗНАЙДЗІЦЕ АБАГУЛЬНЯЛЬНАЕ СЛОВА: І лес, і поле, і луг, і гай – усё маўчала.',
    'ВЫПІШЫЦЕ СКАЗ, ПАСТАЎЦЕ ЗНАКІ ПРЫПЫНКУ:<br>Поле вокам не абняць.'
  ];
  let hehianwers = [
    ["месца", "акалічнасць месца"],
    ["пражыў, не нажыў", "пражыў не нажыў"],
    ["мне сілы", "сілы мне"],
    ["прымыканне"],
    ["досвітак маленства, лета", "досвітак маленства лета", "лета, досвітак маленства", "лета досвітак маленства"],
    ["прыгажун"],
    ["багата, родная ты мова."],
    ["вучыцца роднай", "роднай вучыцца"],
    ["усё", "усе"],
    ["поле - вокам не абняць.", "поле-вокам не абняць.", "поле -вокам не абняць."]
  ]
  let hehanswersICO = {
    NEOKAdkaz:"Недакладна. Перачытайце ўмову",
    OKAdkaz: "Дакладна",
    ferstquestion: ["Месца", "МЕСЦА", "месца", "акалічнасць месца", "Акалічнасць месца", "АКАЛІЧНАСЦЬ МЕСЦА"],
  };
  let hehevar = document.getElementById("hehe");
  
  function megaheh(megaheh, ind){
  
    let heh = showPrompt(megaheh, function(value = '') {
      // get answers array by index
      const answers = hehianwers[ind];
  
      // convert user answer to lowercase
      value = value.toLowerCase();
  
      // remove commas (except questions 6 and 9)
      if (ind !== 6 && ind !== 9) {
        value = value.replace(',', '');
      }
  
      // look user answer in our answers array
      if (answers.indexOf(value) !== -1) {
        hehevar.innerHTML += value;
        hehevar.innerHTML += "<br>" + hehanswersICO.OKAdkaz + "<br>";
      }
      else if (value == undefined){}
      else {
        hehevar.innerHTML += value;
        hehevar.innerHTML += "<br>" + hehanswersICO.NEOKAdkaz + "<br>";
      }
    });
  
  }
  
  for(let i = 0; i <= coolhehi.length; i++){
    for(let i = 0; i <= hehi.length; i++){
      let h = document.getElementById(hehi[i]);
  
      // check the element is found
      if (!h) {
        continue;
      }
  
      h.onclick = function(){
        megaheh(coolhehi[i], i);
      }
    }
  }
  
  
  
  
  
  
  
  
  
  //zapchasti
  //
  //document.getElementById('show-button').onclick = function() {