export interface Tenant {
    _id: { $oid: string };
    name: string;
    rent: number;
}