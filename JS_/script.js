//시연
function showCategory(category) {
  // 모든 카테고리를 비활성화
  var categories = document.querySelectorAll('.category');
  categories.forEach(function(cat) {
    cat.classList.remove('active');
  });
  // 클릭한 카테고리 활성화
  document.querySelector('.' + category).classList.add('active');
  
  // 모든 항목을 비활성화
  var items = document.querySelectorAll('.item');
  items.forEach(function(item) {
    item.classList.remove('active');
  });
  // 해당 카테고리의 항목 활성화
  document.querySelector('.' + category).classList.add('active');
}