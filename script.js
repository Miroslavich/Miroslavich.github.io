
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
let coolhehi = ['Вызначце від акалічнасці,<br> якая адказвае на пытанні<br> ДЗЕ? КУДЫ? АДКУЛЬ?', 'У якім стылі пераважна ўжываюцца намінатыўныя<br> сказы?', 'ВЫПІШЫЦЕ ДАПАЎНЕННІ:<br>Народныя думы і казкі давалі<br> мне сілы нямала.', 'Вызначце від сувязі слоў у словазлучэнні:<br> ЧЫТАЦЬ ЛЕЖАЧЫ', 'ВЫПІШЫЦЕ ФОРМАЎТВАРАЛЬНЫЯ ЧАСЦІЦЫ:<br> хоць, амаль, бы, толькі', 'ВЫПІШЫЦЕ ПРЫДАТКІ:<br>Злева ад дарогі стаяў<br> домік-прыгажун.', 'ВЫПІШЫЦЕ СКАЗ, ПАСТАЎЦЕ ЗНАКІ ПРЫПЫНКУ:<br>Багата родная ты мова.', 'ВЫПІШЫЦЕ АЗНАЧЭННІ:<br>Прыйшла пара вучыцца мове роднай.', 'ЗНАЙДЗІЦЕ АБАГУЛЬНЯЛЬНАЕ СЛОВА: І лес, і поле, і луг, і гай – усё маўчала. ', 'ВЫПІШЫЦЕ СКАЗ, ПАСТАЎЦЕ ЗНАКІ ПРЫПЫНКУ:<br>Поле вокам не абняць.'];
let hehanswersICO = {
  NEOKAdkaz:"Недакладна. Перачытайце ўмову",      
  OKAdkaz: "Дакладна",      
  ferstquestion: ["Месца", "МЕСЦА", "месца", "акалічнасць месца", "Акалічнасць месца", "АКАЛІЧНАСЦЬ МЕСЦА"],
};
let hehevar = document.getElementById("hehe");

function megaheh(megaheh){
 
  let heh = showPrompt(megaheh, function(value) {
    if (value == value == "Месца" || value == "месца" || value == "МЕСЦА" || value == "акалічнасць месца" || value == "Акалічнасць месца" || value == "АКАЛІЧНАСЦЬ МЕСЦА" || value == "у мастацкім" || value == "мастацкім" || value == "мастацкім стылі"|| value == "У мастацкім" || value == "Мастацкім" || value == "Мастацкім стылі"|| value == "МАСТАЦКІМ" || value == "мастацкі" || value == "мастацкі стыль" || value == "У МАСТАЦКІМ СТЫЛІ" || value == "МАСТАЦКІМ СТЫЛІ" || value == "МАСТАЦКІ" || value == "у мастацкім стылі" || value == "мастацкі стыль" || value == "МАСТАЦКІ СТЫЛь" || value == "мне сілы" || value == "мне, сілы" || value == "сілы мне" || value == "сілы, мне" || value == "Мне сілы" || value == "Мне, сілы" || value == "Сілы мне" || value == "Сілы, мне" || value == "МНЕ СІЛЫ" || value == "МНЕ, СІЛЫ" || value == "СІЛЫ МНЕ" || value == "СІЛЫ, МНЕ" || value == "прымыканне" || value == "Прымыканне" || value == "ПРЫМЫКАННЕ" || value == "бы" || value == "Бы" || value == "БЫ" || value == "прыгажун" || value == "Прыгажун" || value == "ПРЫГАЖУН" || value == "Багата, родная ты мова." || value == "вучыцца, роднай" || value == "Вучыцца, роднай" || value == "вучыцца роднай" || value == "ВУЧЫЦЦА, РОДНАЙ" || value == "ВУЧЫЦЦА РОДНАЙ" || value == "Вучыцца роднай" || value == "роднай, вучыцца" || value == "роднай вучыцца" || value == "Роднай вучыцца" || value == "Роднай, вучыцца" || value == "РОДНАЙ ВУЧЫЦЦА" || value == "РОДНАЙ, ВУЧЫЦЦА" || value == "усё" || value == "УСЁ" || value == "Усё" || value == "усе" || value == "УСЕ" || value == "Усе" || value == "Поле - вокам не абняць." || value == "Поле-вокам не абняць." || value == "Поле -вокам не абняць.") {
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
h.onclick = function(){
   megaheh(coolhehi[i]);
}}}  









//zapchasti
//
//document.getElementById('show-button').onclick = function() {