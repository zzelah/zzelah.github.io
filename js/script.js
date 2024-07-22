$(document).ready(function(){
    $('#hike-length').on('input', function() {
        var level = $(this).val();
        $('.buttons button').removeClass('active');
        $('.hike-img').hide();
        if (level == 1) {
            $('#challenging').addClass('active');
            $('#challenging-img').show();
        } else if (level == 2) {
            $('#easy').addClass('active');
            $('#easy-img').show();
        } else if (level == 3) {
            $('#moderate').addClass('active');
            $('#moderate-img').show();
        }
    });

    $('.buttons button').click(function() {
        $('.buttons button').removeClass('active');
        $(this).addClass('active');
        var hikingdifficulty;
        $('.hike-img').hide();
        if (this.id == 'challenging') {
            hikingdifficulty = 1;
            $('#challenging-img').show();
        } else if (this.id == 'easy') {
            hikingdifficulty = 2;
            $('#easy-img').show();
        } else if (this.id == 'moderate') {
            hikingdifficulty = 3;
            $('#moderate-img').show();
        }
        $('#hike-length').val(hikingdifficulty);
    });
});
