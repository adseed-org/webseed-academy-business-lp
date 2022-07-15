function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function(){
  if (getParam('wsa') === '1') {
    $('.wpcf7-list-item').find('label').removeClass('active');
    $('#wsa').find('label').addClass('active');
  }
});

// TODO:以下のようにWebSeed Academyについてのspanタグに「id="wsa"」を追加してください
{/* <span id="wsa" class="wpcf7-list-item">
  <label>
    <input type="radio" name="radio-719" value="WebSeed Academyについて">
      <span class="wpcf7-list-item-label">WebSeed Academyについて</span>
  </label>
</span> */}
