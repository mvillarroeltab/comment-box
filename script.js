// Declare all the variables

let Count = document.getElementById('count');
let Comment = document.getElementById('comment');
let Comment2 = document.getElementById('comment');
let Comment3 = document.getElementById('comment');
let Number = document.getElementById('number');
let Button = document.getElementById('bttn');
let Name = document.getElementById('name');
let Email = document.getElementById('email');


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
  var divComment = document.getElementById("comment-container");

  event.preventDefault();

  divComment.innerHTML +=
  "<div class='comment-row'>"
  +"<div class= 'comment-name' id = 'n'>"
  + document.getElementById("name").value
  + "</div>"
  + "<div class= 'comment-comment' id = 'c'>"
  + document.getElementById("comment").value
  + "</div>"
  +"</div>"
  +"<br>";


  Comment3.value = "";
  Name.value = "";
  Email.value = "";
  Number.innerHTML = "";
  Count.innerHTML = "";

}

comment.addEventListener ('input', CountCharacter);
comment.addEventListener ('input', NumberCharacter);
bttn.addEventListener ('click', postComment);
