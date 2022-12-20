$('#btn-yes').click(function () {
    $('.testing').append('<img style="height: 350px; width: 350px;" src="https://media.giphy.com/media/ndIfYAtziHOIGzu64E/giphy.gif" class="img-thumbnail rounded mx-2 my-2 d-block">' +
    '<img style="height: 350px; width: 350px;" src="https://media.giphy.com/media/zhNNxi6S9fnDnm8PP2/giphy.gif" class="img-thumbnail rounded mx-2 my-2 d-block">')
})

$('.buttons').mouseenter(function () {
    $('.buttons #btn-no').remove()
})

$('.buttons').mouseleave(function () {
    $('.buttons').append('<button class="btn btn-outline-warning px-5" type="button" id="btn-no">No </button>')
})
