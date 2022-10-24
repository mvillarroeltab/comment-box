let Count = document.getElementById('count');
let Comment = document.getElementById('comment');
let Comment2 = document.getElementById('comment');
let Comment3 = document.getElementById('comment');
let Number = document.getElementById('number');
let Button = document.getElementById('bttn');
let Name = document.getElementById('name');


function CountCharacter(){

  if(Comment.value.length > 140) {
    Count.innerHTML = 'Please do not exceed the character count of 140',
    Comment.classList.add('redComment')
  } else {
    Count.innerHTML = 'Keep typing...'
  }
};

function NumberCharacter (){
Number.innerHTML = 'Number of characters:' + Comment2.value.length + '/140';
};

function postComment()
{
var div = document.getElementById("c");
var div2 = document.getElementById("n");
event.preventDefault();
div.innerHTML = div.innerHTML +"<br>"+ document.getElementById("comment").value;
div2.innerHTML = div2.innerHTML +"<br>"+ document.getElementById("name").value;
Comment3.value = "";
Name.value = "";

}

comment.addEventListener ('input', CountCharacter);
comment.addEventListener ('input', NumberCharacter);
bttn.addEventListener ('click', postComment);
