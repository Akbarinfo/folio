// document.getElementById('color').addEventListener('click', function()
// {
//   document.body.classList.toggle('dark')
// } )

let rightbtn = document.getElementById('right-click');

let leftbtn = document.getElementById('left-click');

let color = document.getElementById('fx-color');

leftbtn.addEventListener(
  'click', function(){
    color.classList.add('show');
  }
);

rightbtn.addEventListener('click', function() {
  color.classList.remove('show');
});

document.getElementById('id-dark').addEventListener('click', function()
{
  document.body.classList.toggle('dark')
} )

document.getElementById('id-light').addEventListener('click', function()
{
  document.body.classList.toggle('root')
} )