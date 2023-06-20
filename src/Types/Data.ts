// specify type of data to be returned
export interface DataObject {
  Country: string;
  Category: string;
  DateTime: string;
  Value: number;
  Frequency: string;
  HistoricalDataSymbol: string;
  LastUpdate: string;
}

export interface Data {
  data: DataObject[];
}

export interface MonthlyInflationData {
  month: string;
  country1: number;
  country2: number;
  country3: number;
}