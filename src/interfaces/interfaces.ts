export interface INavbar {
  home?: string;
  about?: string;
  contact?: string;
  logo?: string;
  button?: boolean;
  setButton: (value: boolean) => void;
}

export interface IformData {
  username: string;
  email: string;
  password: string;
}

export interface IData {
  setButton: (value: boolean) => void;
  data: { username: string; email: string; password: string };
  setdata: (value: IformData) => void;
}

export interface IDataInput {
  label: string;
  type: string;
  name: keyof IformData;
  id: string;
}
