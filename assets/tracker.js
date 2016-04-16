console.log('ran')
copy_button = document.getElementById('copy-button');
function copyText () {
  console.log('clicked')
  var copy_text = $('#link').val().toString();
  console.log('clicked')
  if (copy_text !== undefined) {
    console.log('made it hurr')
    clipboardData.setData(copy_text)
    console.log('cool brah')
  } else {
    console.log('failed')
  }
}
copy_button.onClick = copyText();
