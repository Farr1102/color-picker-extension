const inputElement = document.getElementById("colorPicker");
const colorValue = document.getElementById("colorValue");
    
inputElement.addEventListener("change", (event) => {
  console.log("值已改变，新值为：" + event.target.value);
  this.copyColor(event.target.value)
});

inputElement.addEventListener("input", (event) => {
  console.log("正在输入，当前值为：" + event.target.value);
  colorValue.innerHTML = event.target.value
});

function copyColor(selectedColor) {
  
  const tempInput = document.createElement('input');
  tempInput.value = selectedColor;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  modalMessage.textContent = '已复制颜色值：' + selectedColor;
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 1500);

  // 利用报错强行关闭input
  inputElement.close()
}