import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const createUserPromise = createUser();
  const uploadPhotoPromise = uploadPhoto();
  return Promise.all([createUserPromise, uploadPhotoPromise])
    .then((data) => console.log(`${data[1].body} ${data[0].firstName} ${data[0].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
