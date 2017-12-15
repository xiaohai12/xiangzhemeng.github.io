function word_cloud_change(category) {
    console.log(category);
    document.getElementById('word-cloud-category').src = "../../img/word_cloud_category/"+ category + ".png";
}
