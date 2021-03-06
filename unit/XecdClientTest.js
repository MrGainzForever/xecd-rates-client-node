//These tests mock the api response

var chai = require('chai').assert;
var client = require('../XecdClient');
var async = require('async');
var logger = require('winston');
var sinon = require('sinon').sandbox.create();
var request = require('request');

var XecdClient = new client.XecdClient('accountId', 'apiKey');

describe('XECD Node Client Unit Tests', () => {
    beforeEach(function() {
        sinon.restore();
    });

    it("accountInfo", function() {
        const tempBody = {
            id: '12345678-abcd-1234-abcd-123456789abc',
            organization: 'XE com',
            package: 'ENTERPRISE',
            service_start_timestamp: '2017-01-01T00:00:00Z',
            service_end_timestamp: '2017-12-31T00:00:00Z'
        };
        const expectedResponse = JSON.stringify(tempBody);

        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);

        async.auto({
            getInfo: function(callback) {
                XecdClient.accountInfo(callback);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("currencies", function() {
        const tempBody = {"terms":"http://www.xe.com/legal/dfs.php","privacy":"http://www.xe.com/privacy.php","currencies":[{"iso":"AED","currency_name":"Emirati Dirham","is_obsolete":false},{"iso":"AFN","currency_name":"Afghan Afghani","is_obsolete":false},{"iso":"ALL","currency_name":"Albanian Lek","is_obsolete":false},{"iso":"AMD","currency_name":"Armenian Dram","is_obsolete":false},{"iso":"ANG","currency_name":"Dutch Guilder","is_obsolete":false},{"iso":"AOA","currency_name":"Angolan Kwanza","is_obsolete":false},{"iso":"ARS","currency_name":"Argentine Peso","is_obsolete":false},{"iso":"AUD","currency_name":"Australian Dollar","is_obsolete":false},{"iso":"AWG","currency_name":"Aruban or Dutch Guilder","is_obsolete":false},{"iso":"AZN","currency_name":"Azerbaijan Manat","is_obsolete":false},{"iso":"BAM","currency_name":"Bosnian Convertible Marka","is_obsolete":false},{"iso":"BBD","currency_name":"Barbadian or Bajan Dollar","is_obsolete":false},{"iso":"BDT","currency_name":"Bangladeshi Taka","is_obsolete":false},{"iso":"BGN","currency_name":"Bulgarian Lev","is_obsolete":false},{"iso":"BHD","currency_name":"Bahraini Dinar","is_obsolete":false},{"iso":"BIF","currency_name":"Burundian Franc","is_obsolete":false},{"iso":"BMD","currency_name":"Bermudian Dollar","is_obsolete":false},{"iso":"BND","currency_name":"Bruneian Dollar","is_obsolete":false},{"iso":"BOB","currency_name":"Bolivian Bolíviano","is_obsolete":false},{"iso":"BRL","currency_name":"Brazilian Real","is_obsolete":false},{"iso":"BSD","currency_name":"Bahamian Dollar","is_obsolete":false},{"iso":"BTN","currency_name":"Bhutanese Ngultrum","is_obsolete":false},{"iso":"BWP","currency_name":"Botswana Pula","is_obsolete":false},{"iso":"BYN","currency_name":"Belarusian Ruble","is_obsolete":false},{"iso":"BZD","currency_name":"Belizean Dollar","is_obsolete":false},{"iso":"CAD","currency_name":"Canadian Dollar","is_obsolete":false},{"iso":"CDF","currency_name":"Congolese Franc","is_obsolete":false},{"iso":"CHF","currency_name":"Swiss Franc","is_obsolete":false},{"iso":"CLP","currency_name":"Chilean Peso","is_obsolete":false},{"iso":"CNH","currency_name":"Chinese Yuan Renminbi Offshore","is_obsolete":false},{"iso":"CNY","currency_name":"Chinese Yuan Renminbi","is_obsolete":false},{"iso":"COP","currency_name":"Colombian Peso","is_obsolete":false},{"iso":"CRC","currency_name":"Costa Rican Colon","is_obsolete":false},{"iso":"CUC","currency_name":"Cuban Convertible Peso","is_obsolete":false},{"iso":"CUP","currency_name":"Cuban Peso","is_obsolete":false},{"iso":"CVE","currency_name":"Cape Verdean Escudo","is_obsolete":false},{"iso":"CZK","currency_name":"Czech Koruna","is_obsolete":false},{"iso":"DJF","currency_name":"Djiboutian Franc","is_obsolete":false},{"iso":"DKK","currency_name":"Danish Krone","is_obsolete":false},{"iso":"DOP","currency_name":"Dominican Peso","is_obsolete":false},{"iso":"DZD","currency_name":"Algerian Dinar","is_obsolete":false},{"iso":"EGP","currency_name":"Egyptian Pound","is_obsolete":false},{"iso":"ERN","currency_name":"Eritrean Nakfa","is_obsolete":false},{"iso":"ETB","currency_name":"Ethiopian Birr","is_obsolete":false},{"iso":"EUR","currency_name":"euro","is_obsolete":false},{"iso":"FJD","currency_name":"Fijian Dollar","is_obsolete":false},{"iso":"FKP","currency_name":"Falkland Island Pound","is_obsolete":false},{"iso":"GBP","currency_name":"British Pound","is_obsolete":false},{"iso":"GEL","currency_name":"Georgian Lari","is_obsolete":false},{"iso":"GGP","currency_name":"Guernsey Pound","is_obsolete":false},{"iso":"GHS","currency_name":"Ghanaian Cedi","is_obsolete":false},{"iso":"GIP","currency_name":"Gibraltar Pound","is_obsolete":false},{"iso":"GMD","currency_name":"Gambian Dalasi","is_obsolete":false},{"iso":"GNF","currency_name":"Guinean Franc","is_obsolete":false},{"iso":"GTQ","currency_name":"Guatemalan Quetzal","is_obsolete":false},{"iso":"GYD","currency_name":"Guyanese Dollar","is_obsolete":false},{"iso":"HKD","currency_name":"Hong Kong Dollar","is_obsolete":false},{"iso":"HNL","currency_name":"Honduran Lempira","is_obsolete":false},{"iso":"HRK","currency_name":"Croatian Kuna","is_obsolete":false},{"iso":"HTG","currency_name":"Haitian Gourde","is_obsolete":false},{"iso":"HUF","currency_name":"Hungarian Forint","is_obsolete":false},{"iso":"IDR","currency_name":"Indonesian Rupiah","is_obsolete":false},{"iso":"ILS","currency_name":"Israeli Shekel","is_obsolete":false},{"iso":"IMP","currency_name":"Isle of Man Pound","is_obsolete":false},{"iso":"INR","currency_name":"Indian Rupee","is_obsolete":false},{"iso":"IQD","currency_name":"Iraqi Dinar","is_obsolete":false},{"iso":"IRR","currency_name":"Iranian Rial","is_obsolete":false},{"iso":"ISK","currency_name":"Icelandic Krona","is_obsolete":false},{"iso":"JEP","currency_name":"Jersey Pound","is_obsolete":false},{"iso":"JMD","currency_name":"Jamaican Dollar","is_obsolete":false},{"iso":"JOD","currency_name":"Jordanian Dinar","is_obsolete":false},{"iso":"JPY","currency_name":"Japanese Yen","is_obsolete":false},{"iso":"KES","currency_name":"Kenyan Shilling","is_obsolete":false},{"iso":"KGS","currency_name":"Kyrgyzstani Som","is_obsolete":false},{"iso":"KHR","currency_name":"Cambodian Riel","is_obsolete":false},{"iso":"KMF","currency_name":"Comorian Franc","is_obsolete":false},{"iso":"KPW","currency_name":"North Korean Won","is_obsolete":false},{"iso":"KRW","currency_name":"South Korean Won","is_obsolete":false},{"iso":"KWD","currency_name":"Kuwaiti Dinar","is_obsolete":false},{"iso":"KYD","currency_name":"Caymanian Dollar","is_obsolete":false},{"iso":"KZT","currency_name":"Kazakhstani Tenge","is_obsolete":false},{"iso":"LAK","currency_name":"Lao Kip","is_obsolete":false},{"iso":"LBP","currency_name":"Lebanese Pound","is_obsolete":false},{"iso":"LKR","currency_name":"Sri Lankan Rupee","is_obsolete":false},{"iso":"LRD","currency_name":"Liberian Dollar","is_obsolete":false},{"iso":"LSL","currency_name":"Basotho Loti","is_obsolete":false},{"iso":"LYD","currency_name":"Libyan Dinar","is_obsolete":false},{"iso":"MAD","currency_name":"Moroccan Dirham","is_obsolete":false},{"iso":"MDL","currency_name":"Moldovan Leu","is_obsolete":false},{"iso":"MGA","currency_name":"Malagasy Ariary","is_obsolete":false},{"iso":"MKD","currency_name":"Macedonian Denar","is_obsolete":false},{"iso":"MMK","currency_name":"Burmese Kyat","is_obsolete":false},{"iso":"MNT","currency_name":"Mongolian Tughrik","is_obsolete":false},{"iso":"MOP","currency_name":"Macau Pataca","is_obsolete":false},{"iso":"MRO","currency_name":"Mauritanian Ouguiya","is_obsolete":false},{"iso":"MUR","currency_name":"Mauritian Rupee","is_obsolete":false},{"iso":"MVR","currency_name":"Maldivian Rufiyaa","is_obsolete":false},{"iso":"MWK","currency_name":"Malawian Kwacha","is_obsolete":false},{"iso":"MXN","currency_name":"Mexican Peso","is_obsolete":false},{"iso":"MYR","currency_name":"Malaysian Ringgit","is_obsolete":false},{"iso":"MZN","currency_name":"Mozambican Metical","is_obsolete":false},{"iso":"NAD","currency_name":"Namibian Dollar","is_obsolete":false},{"iso":"NGN","currency_name":"Nigerian Naira","is_obsolete":false},{"iso":"NIO","currency_name":"Nicaraguan Cordoba","is_obsolete":false},{"iso":"NOK","currency_name":"Norwegian Krone","is_obsolete":false},{"iso":"NPR","currency_name":"Nepalese Rupee","is_obsolete":false},{"iso":"NZD","currency_name":"New Zealand Dollar","is_obsolete":false},{"iso":"OMR","currency_name":"Omani Rial","is_obsolete":false},{"iso":"PAB","currency_name":"Panamanian Balboa","is_obsolete":false},{"iso":"PEN","currency_name":"Peruvian Sol","is_obsolete":false},{"iso":"PGK","currency_name":"Papua New Guinean Kina","is_obsolete":false},{"iso":"PHP","currency_name":"Philippine Peso","is_obsolete":false},{"iso":"PKR","currency_name":"Pakistani Rupee","is_obsolete":false},{"iso":"PLN","currency_name":"Polish Zloty","is_obsolete":false},{"iso":"PYG","currency_name":"Paraguayan Guarani","is_obsolete":false},{"iso":"QAR","currency_name":"Qatari Riyal","is_obsolete":false},{"iso":"RON","currency_name":"Romanian Leu","is_obsolete":false},{"iso":"RSD","currency_name":"Serbian Dinar","is_obsolete":false},{"iso":"RUB","currency_name":"Russian Ruble","is_obsolete":false},{"iso":"RWF","currency_name":"Rwandan Franc","is_obsolete":false},{"iso":"SAR","currency_name":"Saudi Arabian Riyal","is_obsolete":false},{"iso":"SBD","currency_name":"Solomon Islander Dollar","is_obsolete":false},{"iso":"SCR","currency_name":"Seychellois Rupee","is_obsolete":false},{"iso":"SDG","currency_name":"Sudanese Pound","is_obsolete":false},{"iso":"SEK","currency_name":"Swedish Krona","is_obsolete":false},{"iso":"SGD","currency_name":"Singapore Dollar","is_obsolete":false},{"iso":"SHP","currency_name":"Saint Helenian Pound","is_obsolete":false},{"iso":"SLL","currency_name":"Sierra Leonean Leone","is_obsolete":false},{"iso":"SOS","currency_name":"Somali Shilling","is_obsolete":false},{"iso":"SPL","currency_name":"Seborgan Luigino","is_obsolete":false},{"iso":"SRD","currency_name":"Surinamese Dollar","is_obsolete":false},{"iso":"STD","currency_name":"Sao Tomean Dobra","is_obsolete":false},{"iso":"SVC","currency_name":"Salvadoran Colon","is_obsolete":false},{"iso":"SYP","currency_name":"Syrian Pound","is_obsolete":false},{"iso":"SZL","currency_name":"Swazi Lilangeni","is_obsolete":false},{"iso":"THB","currency_name":"Thai Baht","is_obsolete":false},{"iso":"TJS","currency_name":"Tajikistani Somoni","is_obsolete":false},{"iso":"TMT","currency_name":"Turkmenistani Manat","is_obsolete":false},{"iso":"TND","currency_name":"Tunisian Dinar","is_obsolete":false},{"iso":"TOP","currency_name":"Tongan Pa\u0027anga","is_obsolete":false},{"iso":"TRY","currency_name":"Turkish Lira","is_obsolete":false},{"iso":"TTD","currency_name":"Trinidadian Dollar","is_obsolete":false},{"iso":"TVD","currency_name":"Tuvaluan Dollar","is_obsolete":false},{"iso":"TWD","currency_name":"Taiwan New Dollar","is_obsolete":false},{"iso":"TZS","currency_name":"Tanzanian Shilling","is_obsolete":false},{"iso":"UAH","currency_name":"Ukrainian Hryvnia","is_obsolete":false},{"iso":"UGX","currency_name":"Ugandan Shilling","is_obsolete":false},{"iso":"USD","currency_name":"US Dollar","is_obsolete":false},{"iso":"UYU","currency_name":"Uruguayan Peso","is_obsolete":false},{"iso":"UZS","currency_name":"Uzbekistani Som","is_obsolete":false},{"iso":"VEF","currency_name":"Venezuelan Bolívar","is_obsolete":false},{"iso":"VND","currency_name":"Vietnamese Dong","is_obsolete":false},{"iso":"VUV","currency_name":"Ni-Vanuatu Vatu","is_obsolete":false},{"iso":"WST","currency_name":"Samoan Tala","is_obsolete":false},{"iso":"XAF","currency_name":"Central African CFA Franc BEAC","is_obsolete":false},{"iso":"XAG","currency_name":"Silver Ounce","is_obsolete":false},{"iso":"XAU","currency_name":"Gold Ounce","is_obsolete":false},{"iso":"XBT","currency_name":"Bitcoin","is_obsolete":false},{"iso":"XCD","currency_name":"East Caribbean Dollar","is_obsolete":false},{"iso":"XDR","currency_name":"IMF Special Drawing Rights","is_obsolete":false},{"iso":"XOF","currency_name":"CFA Franc","is_obsolete":false},{"iso":"XPD","currency_name":"Palladium Ounce","is_obsolete":false},{"iso":"XPF","currency_name":"CFP Franc","is_obsolete":false},{"iso":"XPT","currency_name":"Platinum Ounce","is_obsolete":false},{"iso":"YER","currency_name":"Yemeni Rial","is_obsolete":false},{"iso":"ZAR","currency_name":"South African Rand","is_obsolete":false},{"iso":"ZMW","currency_name":"Zambian Kwacha","is_obsolete":false},{"iso":"ZWD","currency_name":"Zimbabwean Dollar","is_obsolete":false}]};
        const expectedResponse = JSON.stringify(tempBody);

        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.currencies(callback);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("convertFrom", function() {
        var from = "EUR";
        var to = "CAD";
        var amount = 55;

        const tempBody = {"terms":"http://www.xe.com/legal/dfs.php","privacy":"http://www.xe.com/privacy.php","from":"EUR","amount":55.0,"timestamp":"2017-09-25T20:41:00Z","to":[{"quotecurrency":"CAD","mid":80.6300904429}]};
        const expectedResponse = JSON.stringify(tempBody);
        
        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.convertFrom(callback, from, to, amount);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("convertTo", function() {
        var to = "RUB";
        var from = "USD"
        var amount = 55;

        const tempBody = {"terms":"http://www.xe.com/legal/dfs.php","privacy":"http://www.xe.com/privacy.php","to":"RUB","amount":55.0,"timestamp":"2017-09-25T20:41:00Z","from":[{"quotecurrency":"USD","mid":0.9554756204}]};
        const expectedResponse = JSON.stringify(tempBody);
        
        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.convertTo(callback, to, from, amount);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("historicRate", function() {
        var amount = "55"
        var from = "EUR";
        var to = "CAD";
        var date = "2016-11-11";
        var time = "04:04";

        const tempBody = { terms: 'http://www.xe.com/legal/dfs.php', privacy: 'http://www.xe.com/privacy.php', from: 'EUR', amount: 55, timestamp: '2016-11-11T04:00:00Z', to: [ { quotecurrency: 'CAD', mid: 80.8635246563, inverse: 0.0123665151 } ] };
        const expectedResponse = JSON.stringify(tempBody);
        
        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.historicRate(callback, amount, from, to, date, time);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("historicRatePeriod", function() {
        var amount = "55"
        var from = "EUR";
        var to = "CAD";
        var start_timestamp = "2017-02-11T12:00";
        var end_timestamp = "2017-06-12T12:00";

        const tempBody = {"terms":"http://www.xe.com/legal/dfs.php","privacy":"http://www.xe.com/privacy.php","from":"EUR","amount":55.0,"to":{"CAD":[{"mid":76.5456972519,"timestamp":"2017-02-11T12:00:00Z"},{"mid":76.5727295448,"timestamp":"2017-02-12T12:00:00Z"},{"mid":76.603013635,"timestamp":"2017-02-13T12:00:00Z"},{"mid":76.1650766751,"timestamp":"2017-02-14T12:00:00Z"},{"mid":75.9488874455,"timestamp":"2017-02-15T12:00:00Z"},{"mid":76.2342150631,"timestamp":"2017-02-16T12:00:00Z"},{"mid":76.652829584,"timestamp":"2017-02-17T12:00:00Z"},{"mid":76.4514045455,"timestamp":"2017-02-18T12:00:00Z"},{"mid":76.4461528129,"timestamp":"2017-02-19T12:00:00Z"},{"mid":76.5682669631,"timestamp":"2017-02-20T12:00:00Z"},{"mid":76.1683270611,"timestamp":"2017-02-21T12:00:00Z"},{"mid":76.0542271258,"timestamp":"2017-02-22T12:00:00Z"},{"mid":76.2777311549,"timestamp":"2017-02-23T12:00:00Z"},{"mid":76.4336502941,"timestamp":"2017-02-24T12:00:00Z"},{"mid":75.9980209334,"timestamp":"2017-02-25T12:00:00Z"},{"mid":76.0534668414,"timestamp":"2017-02-26T12:00:00Z"},{"mid":76.3306562047,"timestamp":"2017-02-27T12:00:00Z"},{"mid":76.7941345934,"timestamp":"2017-02-28T12:00:00Z"},{"mid":77.1795117692,"timestamp":"2017-03-01T12:00:00Z"},{"mid":77.3894521096,"timestamp":"2017-03-02T12:00:00Z"},{"mid":77.7710802634,"timestamp":"2017-03-03T12:00:00Z"},{"mid":78.1346177267,"timestamp":"2017-03-04T12:00:00Z"},{"mid":78.144167509,"timestamp":"2017-03-05T12:00:00Z"},{"mid":78.0038691634,"timestamp":"2017-03-06T12:00:00Z"},{"mid":77.9713602271,"timestamp":"2017-03-07T12:00:00Z"},{"mid":78.060481072,"timestamp":"2017-03-08T12:00:00Z"},{"mid":78.5226011996,"timestamp":"2017-03-09T12:00:00Z"},{"mid":78.5828081571,"timestamp":"2017-03-10T00:00:00Z"},{"mid":79.060459878,"timestamp":"2017-03-11T00:00:00Z"},{"mid":79.0555905422,"timestamp":"2017-03-12T12:00:00Z"}]}};
        const expectedResponse = JSON.stringify(tempBody);
        
        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.historicRatePeriod(callback, amount, from, to, start_timestamp, end_timestamp);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });

    it("monthlyAverage", function() {
        var amount = "55"
        var from = "EUR";
        var to = "CAD";
        var year = "2017";
        var month = "4";

        const tempBody = {"terms":"http://www.xe.com/legal/dfs.php","privacy":"http://www.xe.com/privacy.php","from":"EUR","amount":55.0,"year":2017,"to":{"CAD":[{"monthlyAverage":79.09474602,"month":4,"daysInMonth":29}]}};
        const expectedResponse = JSON.stringify(tempBody);
        
        sinon.stub(request, 'get').yields(null, {statusCode: 200}, expectedResponse);
        
        async.auto({
            getInfo: function(callback) {
                XecdClient.monthlyAverage(callback, amount, from, to, year, month);
            },
            test: ['getInfo', function(callback, result) {
                chai.equal(JSON.stringify(result.getInfo), JSON.stringify(tempBody));   //chai.equal is deep equality
            }]
        }, function (err, result){
            if(err) {
                console.log("Error Local Test");
            }
            return
        });
    });
});

