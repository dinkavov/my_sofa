$('#line').click(function () {
    $('#iline').show();
    $('#icorner').hide();
    $('#isofa').hide();
});

$('#corner').click(function () {
    $('#iline').hide();
    $('#icorner').show();
    $('#isofa').hide();
});

$('#sofa').click(function () {
    $('#iline').hide();
    $('#icorner').hide();
    $('#isofa').show();
});