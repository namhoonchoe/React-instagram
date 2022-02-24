interface IRandom {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: IExif;
  location: ILocation;
  categories: any;
  current_user_collections?: Array<ICollectionItem>;
  urls: IUrls;
  links: ILinks;
  user: IUser;
}

interface IExif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}
interface ILinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface ILocation {
  title: null;
  name: null;
  city: null;
  country: null;
  position: IPosition;
}

interface IPosition {
  latitude: number;
  longitude: number;
}

interface IUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: null;
  bio: string;
  location: string;
  links: IUserLinks;
  profile_image: IUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ISocial;
}

interface IUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

interface ICollectionItem {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null;
  user: null;
}

interface ISocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: null;
}

interface IUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface ITopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: Date;
  updated_at: Date;
  starts_at: Date;
  ends_at: null;
  only_submissions_after: null;
  featured: boolean;
  total_photos: number;
  links: ITopicLinks;
  status: string;
  owners: Array<IOwner>;
  current_user_contributions: Array<any>;
  total_current_user_submissions: any;
  cover_photo: ICoverPhoto;
  preview_photos: Array<IPreviewPhoto>;
}

interface ITopicLinks {
  self: string;
  html: string;
  photos: string;
}

interface IOwnerLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface IOwner {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: IOwnerLinks;
  profile_image: IUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

interface ICoverPhotoUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ICoverPhotoUserLinks;
  profile_image: IUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

interface ICoverPhotoUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ICoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: IUrls;
  links: ILinks;
  user: ICoverPhotoUser;
}

interface IPreviewPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  urls: IUrls;
}

interface ITopicUser {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: IUserProfileImage;
  links: IUserLinks;
}

interface ITopicPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: ITopicUser;
  current_user_collections: Array<ICollectionItem>;
  urls: IUrls;
  links: ILinks;
}
