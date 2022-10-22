fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then((response) => {
  if (response.status !== 200){
    return response.status;
  }
  return response.json();
})
    .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
      console.log(data);
      var content = ""
      for (let i = 0; i < data.length; i++){
        content += '<li class="px-2 py-2 rounded-lg border border-orange-500">'
        content += '<img src="'+data[i].icon+'">'
        content += '<div class="text-orange-500 font-medium text-xl">'+data[i].name+"</div>"
            var genrecontent = '<div class="flex flex-wrap my-2">'
        for (let ig = 0; ig < data[i].genre.length; ig++){
            genrecontent += '<span class="bg-orange-500 text-white px-1 text-sm rounded-md mr-2 my-1">'+data[i].genre[ig]+'</span>'
        }
        genrecontent += "</div>"
        content += genrecontent
        content += '<p class="h-32 overflow-y-scroll text-white">'+data[i].description+"</p>"
        content += '<a class="bg-orange-500 text-white px-2 py-1 rounded-md hover:underline" href="'+data[i].icon+'" target="_blank">link</a>'
        content += "</li>"
        
      }
        document.getElementById('list').innerHTML = content
    }
  })