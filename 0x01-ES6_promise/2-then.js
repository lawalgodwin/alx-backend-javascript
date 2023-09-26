export default function handleResponseFromAPI(promise) {
    promise.then(() =>  ({status: 200, body: "Success",}))
    .then(() => console.log("Got a response from the API"))
    .then(undefined, error => error); // another way of writing .catch(err => err)
}
