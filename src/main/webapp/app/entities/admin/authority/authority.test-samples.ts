import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ce689d4c-3a23-42d5-9254-1f0921acfd5d',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a8208d4d-ae15-4bca-a811-506349391edf',
};

export const sampleWithFullData: IAuthority = {
  name: '1532a938-404b-4428-b791-10585d1e8225',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
