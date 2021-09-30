import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// import data from './data';
import orderTableData from '../../../api/convertcsv';
import dayjs from 'dayjs';

const BarChart = () => {
    orderTableData.forEach((order) => {
        var amountArr = order.part_details.map((part) => part.amount);
        order['total_amount'] = amountArr?.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        order['month_year'] = dayjs(order.purchase_order_date).format('MMM-YYYY');
    });
    let uniqueMonth = [...new Set(orderTableData.map((order) => order.month_year))];
    let graphData = [];
    for (let month of uniqueMonth) {
        let amount = 0;
        orderTableData.forEach((order) => {
            if (order.month_year === month) {
                amount += order.total_amount;
            }
        });
        graphData.push({ date: month, amount: amount });
    }

    return (
        <>
            <ResponsiveBar
                data={graphData}
                // keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                keys={['amount']}
                indexBy={'date'}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                valueFormat={{ format: '', enabled: false }}
                colors={{ scheme: 'dark2' }}
                // defs={[
                //     {
                //         id: 'lines',
                //         type: 'patternLines',
                //         background: 'inherit',
                //         color: '#eed312',
                //         rotation: -45,
                //         lineWidth: 6,
                //         spacing: 10,
                //     },
                // ]}
                // fill={[
                //     {
                //         match: {
                //             id: 'fries',
                //         },
                //         id: 'dots',
                //     },
                //     {
                //         match: {
                //             id: 'sandwich',
                //         },
                //         id: 'lines',
                //     },
                // ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendPosition: 'middle',
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 1,
                    tickRotation: 0,
                    legend: 'Total Order Amount',
                    legendPosition: 'middle',
                    legendOffset: -55,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </>
    );
};
export default BarChart;
