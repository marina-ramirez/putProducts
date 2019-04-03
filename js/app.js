$.getJSON("./json/data.json", function(data){

    $.each(data.products, function(idx, val){
        var box = $("<div></div>");
        var myTitle = $("<h2></h2>");
        var myPrice = $("<h3></h3>");

        box.addClass("box");




        myTitle.html("Name: "+val.name);
        myPrice.html("Price: "+val.price);

        if (val.price > 100) {
            myPrice.addClass("high")
        }

        if(val.stock == 0) {
            box.addClass("out")
        }

        if(val.stock < 10) {
            box.addClass("low");
            var message = $("<h3></h3>");
            message.html("Low Stock");
            message.addClass("warning");
            box.append(message)
        }

        if(val.image){
            var image = $("<img alt='picture' src='"+val.image+"'/>");
            box.append(image);
        }

        if(val.image == 0) {
            var missing =$("<h4></h4>");
            missing.html("No Image Provided");
            box.append(missing)
        }

        box.append(myTitle, myPrice);
        $("body").append(box);
    })
});