interface IRandom {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at:string
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string| null
alt_description:string| null
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string
  exif: IExif;
  location: ILocation;
  categories:any
  current_user_collections?: Array<ICollectionItem>
  urls: IUrls;
  links: ILinks;
  user: IUser
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
  small: string;
  thumb: string;
  small_s3: string;
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
  total_collections: 23;
  total_likes: 1245;
  total_photos: 4228;
  accepted_tos: true;
  for_hire: true;
  social: ISocial;
}

interface IUserLinks {
  self: string;
  html: string;
  photos: string
  likes: string
  portfolio: string
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

