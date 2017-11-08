/**
 * Created by rahil on 6/8/17.
 */

(function(){
    var price = document.getElementsByName('price')[0];
    var quantity = document.getElementsByName('quantity')[0];
    var totalDiv = document.getElementById('total');
    var label = document.querySelector('.quantity-label');
    var itemval;

    price.addEventListener('input', calculatePieCost);
    quantity.addEventListener('input', calculatePieCost);
    quantity.addEventListener('input', showlabel);

    function calculatePieCost(){
        var cost = price.value;
        itemval = quantity.value;
        var totalprice = itemval * cost;
        totalDiv.innerText = '$' + totalprice.toFixed('2');
        return;
    }

    function showlabel(){
        label.innerText = itemval;
    }

})();
