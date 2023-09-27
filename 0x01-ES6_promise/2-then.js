export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'Success' }))
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
