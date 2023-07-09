import { faker } from '@faker-js/faker';

//Line
export const DataLine = {
    labels: ['Jan', 'Avr', 'Aou', 'Dec'],
    datasets: [
        {
            label: 'SEO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            borderColor: 'rgb(255, 123, 152)',
            backgroundColor: 'rgb(255, 123, 152)',
        },
        {
            label: 'SWO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            borderColor: 'rgb(93, 217, 255)',
            backgroundColor: 'rgb(93, 217, 255)',
        },
        {
            label: 'KCO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            backgroundColor: 'rgb(93, 255, 155)',
            borderColor: 'rgb(93, 255, 155)',
          },
    ],
}

export const OptionsLine = {
    responsive: true,
    plugins: {
       title: {
            display: true,
            text: 'Données prévisionnelles',
            color: 'black',
            position: 'top'
        },
        legend: {
            position: 'bottom'
        },
    }
}

//VerticalBar
export const DataVerticalBar = {
    labels: ['300K', '600K', '900K', '1.2M'],
    datasets: [
        {
            label: 'SEO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            borderColor: 'rgb(255, 123, 152)',
            backgroundColor: 'rgb(255, 123, 152)',
        },
        {
            label: 'SWO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            borderColor: 'rgb(93, 217, 255)',
            backgroundColor: 'rgb(93, 217, 255)',
        },
        {
            label: 'KCO',
            data: faker.number.octal({ min: 0, max: 1000 }),
            borderColor: 'rgb(93, 255, 155)',
            backgroundColor: 'rgb(93, 255, 155)',
        },
    ],
}

export const OptionsVerticalBar = {
    responsive: true,
    plugins: {
       title: {
            display: true,
            text: 'Données prévisionnelles',
            color: 'black',
            position: 'top'
        },
        legend: {
            position: 'bottom'
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    }
}

//Radar
export const DataRadar = {
    labels: ['SDK', 'SEO', 'SWO', 'MCO', 'KCO', 'WWO'],
    datasets: [
        {
            label: 'M$',
            data: [1, 9, 6, 8, 9, 9],
            backgroundColor: 'rgba(255, 169, 99, 0.4)',
            borderColor: 'transparent',
            borderWidth: 1,
        },
        {
            label: 'MAC',
            data: [8, 4, 8, 10, 6, 4],
            backgroundColor: 'rgba(99, 115, 255, 0.4)',
            borderColor: 'transparent',
            borderWidth: 1,
        },
    ],
}

export const OptionsRadar = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
    }
}

//Doughnut
export const DataDoughnut = {
    labels: ['France', 'USA', 'Italie', 'Russie', 'Espagne', 'Suisse'],
    datasets: [
        {
            label: 'Parts',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

export const OptionsDoughnut = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
}