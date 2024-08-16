let totalAmount = 0;
    const menuItems = document.querySelectorAll('.img');
    const selectedItems = document.getElementById('selected-items');

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const price = parseInt(item.getAttribute('data-price')); // data-price 속성에서 가격을 가져옵니다
        totalAmount += price; // totalAmount에 가격을 누적합니다
        selectedItems.innerHTML = `<span id="total-amount">${totalAmount}원</span><br><span id="payment-text">결제하기</span>`; // 'value' 속성을 사용하여 버튼의 텍스트를 변경합니다
      });
      
    });