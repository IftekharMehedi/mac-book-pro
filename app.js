//memory
const extraMemoryCost = document.getElementById('extra-memory-cost');
const unifiedMemory8GB = document.getElementById('unified-memory-8gb').addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    //callig update total price
    updateTotal();
})
const unifiedMemory16GB = document.getElementById('unified-memory-16gb').addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    //callig update total price
    updateTotal();
})
//storage
const extraStorageCost = document.getElementById('extra-storage-cost');
const storage256GB = document.getElementById('storage-256').addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    //callig update total price
    updateTotal();
})
const storage512GB = document.getElementById('storage-512').addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    //callig update total price
    updateTotal();
})
const storage1TB = document.getElementById('storage-1tb').addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    //callig update total price
    updateTotal();
})
//delivery charge
const deliveryCharge = document.getElementById('delivery-charge');
const deliveryChargeFree = document.getElementById('delivery-charge-free').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    //callig update total price
    updateTotal();
})
const deliveryChargeCost = document.getElementById('delivery-charge-cost').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    //callig update total price
    updateTotal();
})
//best price
const bestPrice = document.getElementById('best-price');
//total price
const totalPrice = document.getElementById('total-price');
//Total
const total = document.getElementById('total');
//update total
function updateTotal() {
    const extraMemoryCharge = Number(extraMemoryCost.innerText);
    const extraStorageCharge = Number(extraStorageCost.innerText);
    const deliveryChargeTotal = Number(deliveryCharge.innerText);

    const bestPriceCost = Number(bestPrice.innerText);
    const totalPricecal = extraMemoryCharge + extraStorageCharge + deliveryChargeTotal + bestPriceCost;
    totalPrice.innerText = totalPricecal;
    total.innerText = totalPricecal;
};
document.getElementById('btn-apply').addEventListener('click', function () {
    const userPomoInput = document.getElementById('user-pomo-input');
    const userPomoInputCode = userPomoInput.value;
    if (userPomoInputCode == 'stevekaku') {
        const disbled = document.getElementById('user-pomo-input').disabled = true;
        const discuntText = total.innerText;
        const discuntNumber = parseInt(discuntText);
        const discunt = discuntNumber * .20;
        const discuntTotal = total.innerText - discunt;
        total.innerText = discuntTotal;
    }
    userPomoInput.value = '';
});