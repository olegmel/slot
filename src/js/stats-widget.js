$(document).ready(function() {
    var ref = new Firebase("https://havana.firebaseio.com/Gamecodes");

    ref.on("child_changed", function(snapshot) {
        var changedPost = snapshot.val();
        console.log("The updated post title is ", changedPost);

        $('.gc-createdOn').text(new Date(changedPost.createdOn));
        $('.gc-currentValue').text(changedPost.currentValue);
        $('.gc-originalValue').text(changedPost.originalValue);
        $('.gc-balance').text(changedPost.currentValue - changedPost.originalValue);

    });
});
