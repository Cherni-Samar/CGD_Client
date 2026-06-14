export interface Quote {
  _id?: string;

  firstName: string;
  phone: string;
  email: string;

  city: string;
  vehicleType: string;
  service: string;

  status?: string;
}