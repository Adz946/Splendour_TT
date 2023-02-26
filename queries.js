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
        for (i = 0; i < reviews.length; i += 1) {
            var text = "#revTxt_" + (i + 1);
            var person = "#revP_" + (i + 1);
            $(text).text(reviews[i].review);
            $(person).text(reviews[i].person);
        }

        $("[id*='dot_'").click(function() {
            var id = $(this).attr("id");
            var split = id.split("_");
            var num = parseInt(split[1]);
            currentSlide(num);
        });

        $("#prevBtn").click(function() { plusSlides(-1); });
        $("#nextBtn").click(function() { plusSlides(1); });

        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("Rev");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("setText", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " setText";
        }
    }); 
}