export interface CarDetails {
    make: string;
    model: string;
    year: string;
    color: string;
    img_url: string;
}

export interface SelectedPrice {
    interval: 'monthly' | 'weekly' | 'daily';
    price: number;
    overage_price: number;
}

export interface CarData {
    carDetails: CarDetails;
    selectedPrice: SelectedPrice;
}

export interface TimeAndPlaceCardProps {
    onDateChange: (date: string | null) => void;
    onTimeChange: (time: string | null) => void;
}

export interface SummaryProps {
    selectedPrice: SelectedPrice;
    date: string | null;
    time: string | null;
}