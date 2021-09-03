import { InstituteAddressModel } from '@models/shared/settings/institute-address.model';

export class InstituteModel {
  id: string;
  name: string;
  token: string;
  connectionType: string;
  address: InstituteAddressModel;
  addressCombine: string;

  constructor(id: string, name: string, token: string, connectionType: string, address: InstituteAddressModel) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.connectionType = connectionType;

    this.address = address;
    this.addressCombine = `${address?.street} ${address?.housenumber}, ${address?.postcode} ${address?.city}`;
  }
}
