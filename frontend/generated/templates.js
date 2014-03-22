// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }


templates.infoWindowContents = function(opt_data, opt_ignored) {
  return '<div style=""><img src="' + soy.$$escapeHtml(opt_data.character) + '" style="display:inline-block;width:50px;padding:10px;"><div style="display:inline-block;vertical-align:top;padding:12px 10px 10px;"><div style="font-weight:bold;font-size:14px">' + soy.$$escapeHtml(opt_data.title) + '</div><div style="">' + soy.$$escapeHtml(opt_data.description) + '</div></div></div>';
};


templates.questWindow = function(opt_data, opt_ignored) {
  var output = '<div style="padding:20px;text-align:center;background-image:url(' + soy.$$escapeHtml(opt_data.backgroundimg) + ');background-size:cover;height:90%"><img id="closeButton" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-24.png" style="position: absolute; top: 0px;right: 0px;"><div style="font-size:40px;background-color:#F5C9DB;border:1px solid #F5629F;display:inline-block;padding:5px;">' + soy.$$escapeHtml(opt_data.title) + '</div><img src="' + soy.$$escapeHtml(opt_data.character) + '" style="width:256px;display:block;margin:auto;"><div style="font-weight:bold;font-size:40px;background-color:#F5C9DB;border:1px solid #F5629F;display:inline-block;padding:5px;">' + ((opt_data.showMeanings) ? soy.$$escapeHtml(opt_data.hintText.english) : soy.$$escapeHtml(opt_data.hintText.japanese)) + '</div><div style="">';
  var ansList24 = opt_data.answers;
  var ansListLen24 = ansList24.length;
  for (var ansIndex24 = 0; ansIndex24 < ansListLen24; ansIndex24++) {
    var ansData24 = ansList24[ansIndex24];
    output += '<div id="' + soy.$$escapeHtml(ansData24.id) + '" style="font-size:30px;padding:10px;border:1px solid blue;background-color:#94AFFF;margin:10px;display:inline-block;cursor:pointer">' + ((opt_data.showMeanings) ? soy.$$escapeHtml(ansData24.english) : soy.$$escapeHtml(ansData24.japanese)) + '</div>';
  }
  output += '</div></div>';
  return output;
};


templates.questSuccess = function(opt_data, opt_ignored) {
  return '<div style="text-align:center;background-image:url(' + soy.$$escapeHtml(opt_data.backgroundimg) + ');background-size:cover;height:90%"><img id="closeButton" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-24.png" style="position: absolute; top: 0px;right: 0px;"><div style="margin:auto"><img src=' + soy.$$escapeHtml(opt_data.character) + ' style="display:inline-block;padding:15px;width:400px"><div style="font-weight:bold;font-size:80px;display:inline-block;padding:15px;' + ((opt_data.success) ? 'color:green;background-color:#f5C9DB;border:1px solid #f5629F;' : 'color:red;background-color:#FCA577;border:1px solid #FA732A;') + '">' + ((opt_data.success) ? 'やった!' : 'へたこいた!') + '</div></div></div>';
};
