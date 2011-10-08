       $(document).ready(function() {
            $("#control").hover(function() {

                $("#box-1").animate({
                    width: 300,
                    height: 300,
                    left: 50,
                    top: 20
                }, 150);
                score = 1 + parseFloat($("#score").text());
                $("#score").text(score);
            },
            function() {

                $("#box-1").animate({
                    width: 10,
                    height: 10,
                    left: 195,
                    top: 165
                }, 150);
            });
        });
