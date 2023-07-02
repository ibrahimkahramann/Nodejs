const arguments = process.argv.slice(2);

function daireAlani(yaricap)
{
    const pi = 3.14159265359;
    let alan = pi*Math.pow(yaricap,2);
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${parseFloat(alan.toFixed(2))}`);
}

daireAlani(arguments[0] *1);

