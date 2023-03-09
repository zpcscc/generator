export interface ProvinceCityChinaType {
  Province: ProvinceDataType[];
  City: ProvinceDataType[];
  Area: ProvinceDataType[];
}

export interface ProvinceDataType {
  // code代码
  c: string;
  // name名称
  n: string;
}
