// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }


templates.infoWindowContents = function(opt_data, opt_ignored) {
  return '<div style=""><img src="' + soy.$$escapeHtml(opt_data.character) + '" style="display:inline-block;width:50px;padding:10px;"><div style="display:inline-block;vertical-align:top;padding:12px 10px 10px;"><div style="font-weight:bold;font-size:14px">' + soy.$$escapeHtml(opt_data.title) + '</div><div style="">' + soy.$$escapeHtml(opt_data.description) + '</div></div></div>';
};


templates.questWindow = function(opt_data, opt_ignored) {
  var output = '<div style=""><img src="' + soy.$$escapeHtml(opt_data.character) + '" style=""><div style="">' + soy.$$escapeHtml(opt_data.title) + '</div><div style="">' + ((opt_data.showMeanings) ? soy.$$escapeHtml(opt_data.hintText.english) : soy.$$escapeHtml(opt_data.hintText.japanese)) + '</div><div style="">';
  var ansList22 = opt_data.answers;
  var ansListLen22 = ansList22.length;
  for (var ansIndex22 = 0; ansIndex22 < ansListLen22; ansIndex22++) {
    var ansData22 = ansList22[ansIndex22];
    output += '<div id="' + soy.$$escapeHtml(ansData22.id) + '" style="float:left;">' + ((opt_data.showMeanings) ? soy.$$escapeHtml(ansData22.english) : soy.$$escapeHtml(ansData22.japanese)) + '</div>';
  }
  output += '</div></div>';
  return output;
};


templates.questSuccess = function(opt_data, opt_ignored) {
  return '<div style="text-align:center;"><div style="margin:auto"><img src=' + soy.$$escapeHtml(opt_data.character) + ' style="display:inline-block;padding:15px;width:400px"><div style="font-weight:bold;font-size:80px;color:green;display:inline-block;padding:15px;">やった！</div></div></div>';
};
