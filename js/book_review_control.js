sliderYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];

// Year slider
var yearSlider = new Slider("#year-slider", {
    ticks: sliderYears,
    ticks_labels: sliderYears
});

yearSlider.on('change', function(){
    word_cloud_change(yearSlider.getValue());
});

function word_cloud_change(year) {
    document.getElementById('word-cloud-year').src = "../../img/word_cloud_year/"+ year + ".png";
}