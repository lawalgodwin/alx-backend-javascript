import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filename);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((data) => [...data]);
}
