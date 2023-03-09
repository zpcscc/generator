import area from '@province-city-china/area/area.min.json';
import city from '@province-city-china/city/city.min.json';
import province from '@province-city-china/province/province.min.json';
import { specialProvinceJson } from './specialProvince';
import type { ProvinceCityChinaType } from './type';

// 省市区数据
export const provinceCityChina: ProvinceCityChinaType = {
  Province: province,
  City: [...city, ...specialProvinceJson.City],
  Area: [...area, ...specialProvinceJson.Area],
};

interface ProvinceType {
  c: string;
  n: string;
  p?: string;
}

interface ProvinceJsonType {
  Province: ProvinceType[];
  City: ProvinceType[];
  Area: ProvinceType[];
}

// 将省市区数据转为通用级联数据
export const provinceCityAreaCascadeData = () => {
  const items: string[][] = [];
  const cityCodes: string[] = [];

  const newProvinceJson: ProvinceJsonType = provinceCityChina;

  newProvinceJson.Area.forEach((currArea) => {
    const cityCode = currArea.c.substring(0, 4);
    const currCity = newProvinceJson.City.find(
      (cityItem) => cityItem.c.substring(0, 4) === cityCode.substring(0, 4),
    );

    const currProvince = newProvinceJson.Province.find((provinceItem) => {
      return provinceItem.c.substring(0, 2) === cityCode.substring(0, 2);
    });

    if (currProvince) {
      if (currCity) {
        items.push([currProvince?.n, currCity?.n, currArea.n]);
        if (!cityCodes.includes(currCity.c)) cityCodes.push(currCity?.c);
      } else {
        items.push([currProvince?.n, currArea.n, currArea.n]);
      }
    }
  });

  newProvinceJson.City.forEach((cityItem) => {
    if (!cityCodes.includes(cityItem.c)) {
      const prov = newProvinceJson.Province.find(
        (provinceItem) => provinceItem.c === cityItem.c.substring(0, 2),
      );
      if (prov) items.push([prov.n, cityItem.n, cityItem.n]);
    }
  });

  return items;
};
