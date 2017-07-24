$("input").on("input propertychange change",function(event){
    console.log(this)
    var price = $(this).parent().parent().find('.price').val();
    var count = $(this).parent().parent().find('.count').val();
    var total = 0;
    $(this).parent().parent().find('.total').val(price*count);
});