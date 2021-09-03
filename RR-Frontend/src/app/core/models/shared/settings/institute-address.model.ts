export class InstituteAddressModel {
  city: string;
  country: string;
  countrycode: string;
  district: string;
  housenumber: string;
  postcode: string;
  state: string;
  street: string;

  constructor(
    city: string,
    country: string,
    countrycode: string,
    district: string,
    housenumber: string,
    postcode: string,
    state: string,
    street: string
  ) {
    this.city = city;
    this.country = country;
    this.countrycode = countrycode;
    this.district = district;
    this.housenumber = housenumber;
    this.postcode = postcode;
    this.state = state;
    this.street = street;
  }
}
