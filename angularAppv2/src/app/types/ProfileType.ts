import { Address } from "./AddressType";
import { Company } from "./CompanyType";

export class Profile {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": Address;
    "phone": string;
    "website": string;
    "company": Company;

}