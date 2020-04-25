export type DialogsDataType = {
  id: number;
  name: string;
};

export type MessagesDataype = {
  id: number;
  message: string;
};

export type photosType = {
  small: string;
  large: string;
};

export type UsersDataType = {
  id: number;
  name: string;
  status: string;
  photos: photosType;
  totalCount: number;
  followed: boolean;
  error: string;
};

export type ProfileDataType = {
  post: string;
  id: number;
};

export type contactsType = {
  github: string;
  VK: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contactsType;
  photos: photosType;
};
