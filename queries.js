var path = location.pathname.split("/").pop();

class Review {
    constructor(person, review) {
        this.person = person;
        this.review = review;
    }
}

let wSmith = new Review("Will Smith", "I feel so at peace here... there is something so absolutely right about this place.");
let kSardo = new Review("Kim Sardo", "Australia was our dream trip, but Splendour was the icing on the cake. The tours were exactly what we were looking for and felt more like we were with family than a company");
let bSchierl = new Review("Bill Schierl", "What a beautiful city and an over the top exerience to end our travels with. Splendour Tailored Tours was outstanding and ranks in the top travel professionals we have experienced. A big thank you for the WOW experience!");
let lWinck = new Review("Leah Winck", "My family and I loved our fun excursions and experiencing Sydney with a local. The care, friendliness, and professionalism was top notch with Splendour Tailored Tours, they were absolutely fantastic!");
let reviews = [wSmith, kSardo, bSchierl, lWinck];

if (path == "about_us.html") {
    $(document).ready(function() {
        var selected = 0;
        showSlides(selected);

        $("[id*='dot_'").click(function() {
            var id = $(this).attr("id");
            var split = id.split("_");
            var num = parseInt(split[1]);
            showSlides(num, "same");
        });

        $("#prev").click(function() { 
            showSlides(1, "minus"); 
        });
        $("#next").click(function() { 
            showSlides(1, "add"); 
        });    

        function showSlides(num, operation) {
            if (operation == "add") { 
                selected += num; 
                if (selected >= reviews.length) { selected = 0; }
            }
            else if (operation == "minus") { 
                selected -= num; 
                if (selected < 0) { selected = (reviews.length - 1); }
            }
            else if (operation == "same") { selected = (num - 1); }

            var review = reviews[selected];
            $("#revTxt").text(review.review);
            $("#revP").text(review.person);
        }
    }); 
}