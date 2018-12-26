this one actually works
$.ajax({
        url: 'https://www2.meethue.com/en-us',
        beforeSend: function() {
        }, success: function(data){
          let scriptArray = Array.prototype.slice.call(data);
          console.log(scriptArray.join(''));
            //process the JSON data etc
        }
})

// let scriptArray = Array.toString().split("[\\s@&.?$+-]");
