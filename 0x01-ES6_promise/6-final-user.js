import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filename);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((values) => {
      const response = [];
      values.forEach((v) => {
        if (v.status === 'fulfilled') {
          response.push({ status: v.status, value: v.value });
        } else {
          response.push({
            status: v.status,
            value: `${v.reason}`,
          });
        }
      });
      return response;
    });
}
