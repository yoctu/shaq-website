var configPricing = {
	PriceBase :	1,
	PriceSHAQS :	0.02,
	PriceUSERS :	1.00,
	PricePLANTS: 5,
	PriceRATING: 0.02,
	PriceNOTIF: 0.02,
	PriceARCHIVE1W: 0,
	PriceARCHIVE1M: 0.01,
	PriceARCHIVE1Y: 0.05,
	PriceARCHIVE5Y: 0.10,
	PriceBRAND: 10.00,
	MaxSHAQS	: 5000,
	MaxUSERS	: 500,
	MaxPLANTS	: 50,
	MaxARCHIVE	: 4,
	discount	: 0.15,
}
var presetspec = {
		shaqs: 200,
		users: 1,
		plants: 1,
		archive: 0
};

$(document).ready(function () {
	$('#qsSlider').qsSlider(configPricing);
});
