import { Carousel } from 'antd';

const recentLostItemData = [
    {
        shortDescription: "Blue backpack with school supplies",
        date: "2024-05-15",
        location: "Central Park",
        linkToFullReport: "https://www.example.com/reports/blue-backpack"
    },
    {
        shortDescription: "Silver wedding ring",
        date: "2024-05-14",
        location: "Downtown Library",
        linkToFullReport: "https://www.example.com/reports/silver-wedding-ring"
    },
    {
        shortDescription: "Black wallet with ID and cards",
        date: "2024-05-13",
        location: "City Mall",
        linkToFullReport: "https://www.example.com/reports/black-wallet"
    },
    {
        shortDescription: "Set of car keys with a red keychain",
        date: "2024-05-12",
        location: "5th Avenue",
        linkToFullReport: "https://www.example.com/reports/car-keys-red-keychain"
    },
    {
        shortDescription: "Yellow umbrella with floral pattern",
        date: "2024-05-11",
        location: "Riverside Park",
        linkToFullReport: "https://www.example.com/reports/yellow-umbrella"
    }
]

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function RecentLostItemReports() {
    return (
        <div className='mt-5'>
            <Carousel autoplay>
                {
                    recentLostItemData.map(item => <div key={item.shortDescription}>
                        <h3>{item.shortDescription}</h3>
                        <h3 style={contentStyle}>1</h3>
                    </div>)
                }

            </Carousel>
        </div>
    )
}





