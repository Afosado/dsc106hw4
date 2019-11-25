function switchToPercent() {
    var options = this.options;
    Highcharts.each(this.series, function(series) {
        var data = [];
        Highcharts.each(series.data, function(point, index) {
            data.push(point.y / options.yAxis[index + 1].max);
        });
        series.update({
            data: data
        });
    });
}

function percentFormatter() {
    var series = this.series,
        options = series.chart.options;
    return '<span style="color:' + this.color + '">' + series.name + ': <b>' + Math.round(this.y * options.yAxis[this.index + 1].max) + '</b><br/>';
}
//#248823 green, #F05E23 orange, #6A359C purple, #991B16
Highcharts.chart('container', {

    chart: {
        polar: true,
        type: 'line',
        events: {
            load: switchToPercent
        }

    },

    title: {
        text: 'Movie Sucess by Rating'
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Av World Gross', 'Av Budget', 'Av Rating', 'Av IMDB Votes',
        'Number Starred In'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: [{
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 1,
        visible: false,
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 5e8,
        angle: 0,
        tickAmount: 3
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 200e6,
        angle: 72,
        tickAmount: 3
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 10,
        angle: 144,
        tickAmount: 3
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 150000,
        angle: 216,
        tickAmount: 3
    }, {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 25,
        angle: 288,
        tickAmount: 3
    }],

    tooltip: {
        shared: true,
        pointFormat: percentFormatter
    },

    legend: {
        align: 'right',
        verticalAlign: 'top'
    },

    series: [{
        name: 'G',
        data: [3.515e8, 165e6, 5.95, 137286, 4],
        pointPlacement: 'on',
        color: '#248823'
    }, {
        name: 'PG',
        data: [2.4e8, 72.6e6, 6.42, 118854, 9],
        pointPlacement: 'on',
        color: '#F05E23'
    }, {
        name: 'PG-13',
        data: [1.45e8, 60.1e6, 5.92, 129156, 23],
        pointPlacement: 'on',
        color: '#6A359C'
    }, {
        name: 'R',
        data: [5.24e7, 24.4e6, 6.49, 131370, 15],
        pointPlacement: 'on',
        color: '#991B16'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

Highcharts.chart('containerx', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'Ac',
            name: 'Action',
            color: "#ED2939"
        }, {
            id: 'An',
            name: 'Animation',
            color: "#4AA02C"
        }, {
            id: 'C',
            name: 'Comedy',
            color: '#FBC02D'
        }, {
            id: 'H',
            name: 'Horror',
            color: '#353535'
        }, {
            name: 'PG-13',
            parent: 'Ac',
            value: 9
        }, {
            name: 'R',
            parent: 'Ac',
            value: 2
        }, {
            name: 'G',
            parent: 'An',
            value: 17
        }, {
            name: 'PG',
            parent: 'An',
            value: 3
        }, {
            name: 'PG',
            parent: 'C',
            value: 14
        }, {
            name: 'PG-13',
            parent: 'C',
            value: 31
        }, {
            name: 'R',
            parent: 'C',
            value: 19
        }, {
            name: 'PG-13',
            parent: 'H',
            value: 5
        }]
    }],
    title: {
        text: 'Wows by Genre'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Wows'
    },
});

Highcharts.chart('container3', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'World Gross by Genre'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> ${point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000000000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{'name': 'Comedy',
    color:'#FBC02D',
    'data': [{'name': 'Bottle Rocket', 'value': 560069},
     {'name': 'The Cable Guy', 'value': 102825796},
     {'name': 'Breakfast of Champions', 'value': 178278},
     {'name': 'Meet the Parents', 'value': 330444045},
     {'name': 'Zoolander', 'value': 60780981},
     {'name': 'The Royal Tenenbaums', 'value': 71441250},
     {'name': 'Starsky and Hutch', 'value': 170268750},
     {'name': 'The Big Bounce', 'value': 6801716},
     {'name': 'Meet the Fockers', 'value': 514837517},
     {'name': 'Weddin Crashers', 'value': 285176741},
     {'name': 'The Wendell Baker Story', 'value': 153169},
     {'name': 'You, Me and Dupree', 'value': 130431368},
     {'name': 'Night at the Museum', 'value': 574480841},
     {'name': 'The Darjeeling Limited', 'value': 35078918},
     {'name': 'Drillbit Taylor', 'value': 49690625},
     {'name': 'Marley and Me', 'value': 255743093},
     {'name': 'Night at the Museum: Battle of the Smithsonian',
      'value': 413106170},
     {'name': 'Marmaduke', 'value': 83761844},
     {'name': 'Little Fockers', 'value': 310650585},
     {'name': 'Hall Pass', 'value': 83160734},
     {'name': 'Midnight in Paris ', 'value': 151119219},
     {'name': 'The Big Year', 'value': 7448385},
     {'name': 'The Intership', 'value': 93492844},
     {'name': 'The Grand Budapest Hotel', 'value': 172936941},
     {'name': 'Night at the Museum: Secret of The Tomb', 'value': 363204635},
     {'name': 'Zoolander 2', 'value': 56722693},
     {'name': 'Masterminds', 'value': 29674699},
     {'name': 'Father Figures', 'value': 25601244}]},
   {'name': 'Action',
    color:'#ED2939',
    'data': [{'name': 'Anaconda', 'value': 136885767},
     {'name': 'Armageddon', 'value': 553709788},
     {'name': 'Shanghai Noon', 'value': 99274467},
     {'name': 'Behind Enemy Lines', 'value': 91753202},
     {'name': 'I Spy', 'value': 50732945},
     {'name': 'Shanghai Knights', 'value': 88323487},
     {'name': 'Around the World in 80 Days', 'value': 72178895},
     {'name': 'The Life Aquatic with Steve Zissou', 'value': 34808403},
     {'name': 'No Escape', 'value': 54418872}]},
   {'name': 'Drama',
    color:'#22208B',
    'data': [{'name': 'How Do You Know', 'value': 48668907},
     {'name': 'Inherent Vice', 'value': 14710975},
     {'name': 'Wonder', 'value': 305937718}]},
   {'name': 'Horror',
    color:'#353535', 'data': [{'name': 'The Haunting', 'value': 177311151}]},
   {'name': 'Animation',
    color:'#4AA02C',
    'data': [{'name': 'Cars', 'value': 461983149},
     {'name': 'Fantastic Mr. Fox', 'value': 46471023},
     {'name': 'Cars 2', 'value': 559852396},
     {'name': 'Free Birds', 'value': 110387072},
     {'name': 'Cars 3', 'value': 383930656}]}]
});