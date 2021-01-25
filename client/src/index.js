document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is loaded')
  console.log('This app Bootstrap for styling')
  init()
})


function init(){
  loadCats()
  renderHobbies()
  handleSubmit()
}
