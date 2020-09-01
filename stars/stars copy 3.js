// 多个JSON数组文件多次调用
stars = {
  init: function(url, className) {
    var that = this
    $.getJSON(url,
      function(data) {
          that.render(data, className);
      });
  },
  render: function(data, name) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(name).append(li);
  }
}

// stars.init("./mine.json", ".mine")
// stars.init("./docs.json", ".docs")
// stars.init("./code.json", ".code")
// stars.init("./skill.json", ".skill")
// stars.init("./school.json", ".school")
// stars.init("./community.json", ".community")
// stars.init("./serve.json", ".serve")
// stars.init("./sitetool.json", ".sitetool")
// stars.init("./design.json", ".design")
// stars.init("./tools.json", ".tools")
